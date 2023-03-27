import { AboutUs, Admission, Carousel, News, Questions } from '@/components'
import Layout from '@/layout'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nairobi Pentecostal Bible College</title>
        <meta name="description" content="Nurturing potential, building character" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/layout/logo.png" />
      </Head>

      <Layout>

        {/* Carousel */}
        <Carousel />

        {/* About us */}
        <AboutUs />

        {/* Admission */}
        <Admission />

        {/* News and updates */}
        <News />

        {/* Questions */}
        <Questions />
      </Layout>
    </>
  )
}
