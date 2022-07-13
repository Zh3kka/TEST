import type { GetStaticProps, NextPage } from 'next'
import Footer from '../app/components/elements/Footer/Footer'
import Header from '../app/components/elements/Header/Header'
import Main from '../app/components/elements/Main/Main'
import Layout from '../app/components/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <Header/>
      <Main/>
      <Footer/>
    </Layout>
  )
}

export default Home
