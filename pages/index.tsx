import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import MessageHelp from '../components/MessageHelp'
import ResumeHelp from '../components/ResumeHelp'

const Home: NextPage = () => {
  return (
    <div className='antialiased'>
      <Head>
        <title>Ripplematch Info</title>
        <meta name="description" content="Ripplematch Info" lang='en' />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/favicon-192x192.png" />
      </Head>

      <header>
        <Navbar />
      </header>

      <main>
        <Intro />
        <MessageHelp />
        <ResumeHelp />
        <Faq />
      </main>
      
      <Footer />
    </div>
  )
}

export default Home
