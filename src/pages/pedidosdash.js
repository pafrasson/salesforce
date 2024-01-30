import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import Sidebar from '@/components/mobile/Sidebar'
import TopCards from '@/components/TopCards'
import Transition from '@/components/Transition'

const clientes = () => {
  return (
    <>
    <Head>
      <title>Dashboard</title>
      <meta name='description' content='any description' />
    </Head>
    <Transition/>
    <Sidebar>
    <main className='min-h-screen'>
      <Layout className=''>
        <TopCards/>
      </Layout>
    </main>
    </Sidebar>
  </>
  )
}

export default clientes