import { PrimaryButton } from '@blockfint/website/components/Buttons'
import React from 'react'
import styled from 'styled-components'
import { ReactComponent as ThinkerSmall } from '@blockfint/website/assets/logos/thinker-wise-small.svg'
import { Container } from '@material-ui/core'
import { BREAKPOINT } from '@blockfint/website/styles/globalStyle'
import { ThinkerImage } from './components/ThinkerImage'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
const Content = styled.div`
  margin: 6.25rem 0;
  @media ${BREAKPOINT.tablet} {
    margin: 10.25rem 0 8.25rem;
  }
  text-align: center;
`
const Title = styled.h5`
  line-height: 1.46;
`
const Desc = styled.p`
  max-width: 35rem;
  margin: 0.5rem auto 2.5rem;
  line-height: 1.88;
`

export const ThinkerWiseSection = () => {
  const { t } = useTranslation()
  return (
    <Container maxWidth="lg">
      <Content>
        <ThinkerImage />
        <Title style={{ color: 'var(--primary)' }}>{t('common.thinker-VerID')}</Title>
        <Title>{t('common.thinker-wise-quote')}</Title>
        <Desc>{t('home.thinker-wise-desc')}</Desc>
        <Link href={'/products/thinker-wise'} passHref>
          <a>
            <PrimaryButton logo={<ThinkerSmall />} background={'var(--gradient-thinker-wise)'}>
              {t('common.read-more')}
            </PrimaryButton>
          </a>
        </Link>
      </Content>
    </Container>
  )
}
