import React from 'react'
import Head from 'next/head'
import Heading from '../components/Heading'
import styles from '../styles/Home.module.scss'
import Socials from '../components/Socials'

export const getStaticProps = async () => {
  const response = await fetch('http://localhost:3000/api/socials')
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { socials: data }
  }
}

const Home = ({socials}) => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading text={'Hello World!'}/>
      <Socials socials={socials} />
    </div>
  )
}

export default Home