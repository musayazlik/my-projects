import Head from 'next/head'

/** Components */

import Navbar from '@components/Navbar/Index'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Musa Yazlik - Live Projects </title>
        <meta
          name='description'
          content='This project includes component designs I made with react and some css libraries.'
        />
        <meta name='author' content='Musa Yazlik' />
        <link rel='icon' href='/Favicon.png' />
      </Head>

      <Navbar />
    </div>
  )
}
