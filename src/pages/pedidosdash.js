import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import Sidebar from '@/components/mobile/Sidebar'
import TopCards from '@/components/TopCards'

const clientes = () => {
  return (
    <>
    <Head>
      <title>Dashboard</title>
      <meta name='description' content='any description' />
    </Head>
    <Sidebar>
    <main className='min-h-screen'>
      <Layout className='flez col-span-1'>
        <TopCards/>
      </Layout>
    </main>
    </Sidebar>
  </>
  )
}

export default clientes