import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import Sidebar from '@/components/mobile/Sidebar'
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
        <header className='flex lg:py-8 lg:justify-between px-4 pt-4'>
          <AnimatedText text={"Dashboard"} className='!mb-16 !text-3xl lg:!text-sm lg:!text-left' />
          <AnimatedText text={"Bem vindo de volta!"} className='!mb-16 !text-3xl lg:!text-sm lg:!text-right' />
        </header>
      </Layout>
    </main>
    </Sidebar>
  </>
  )
}

export default clientes