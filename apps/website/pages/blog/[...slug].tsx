import { GetStaticPaths, NextPage } from 'next'
import React from 'react'
import { typography } from '@blockfint/website/styles/typography'
import { createGlobalStyle } from 'styled-components'
import { getSinglePost, getAllPosts } from '@blockfint/website/api/ghostCMS'
import { BlogDetail } from '@blockfint/website/containers/BlogDetail'
import { Layout } from '@blockfint/website/components/layouts'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '@blockfint/website/next-i18next.config'
import { PostOrPage } from '@tryghost/content-api'
const Global = createGlobalStyle`
body{
  ${typography}
}
`
const BlogDetailPage: NextPage<{ post: PostOrPage }> = ({ post }) => {
  return (
    <>
      <Global />
      <Layout>
        <BlogDetail post={post} />
      </Layout>
    </>
  )
}

export default BlogDetailPage

export const getStaticPaths: GetStaticPaths = async () => {
  const results = await getAllPosts()
  const paths = results
    .map(({ tags, slug }) => {
      const mainTag = tags.find(({ visibility }) => visibility === 'public') // find categories
      if (!mainTag) return null
      const { slug: slugTag } = mainTag
      return { params: { slug: [slugTag, slug] } }
    })
    .filter((i) => i !== null)
  return {
    paths,
    fallback: false
  }
}
export async function getStaticProps({ locale, params }) {
  const i18nContext = await serverSideTranslations(locale, ['common', 'about'], nextI18NextConfig)

  const [_, slug] = params.slug
  const post = await getSinglePost({ slug })

  return {
    props: { ...i18nContext, post }
  }
}
