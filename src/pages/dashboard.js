import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import Sidebar from '@/components/mobile/Sidebar'
import BarChart from '@/components/BarChart'
import Transition from '@/components/Transition'
const dashboard = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name='description' content='any description' />
      </Head>
      <Transition/>
      <Sidebar>
      <main className='min-h-screen'>
        <Layout className='col-span-1'>
          <header className='flex lg:py-8 lg:justify-between px-4 pt-4'>
            <AnimatedText text={"Bem vindo de volta!"} className='!mb-16 !text-3xl lg:!text-sm lg:!text-left' />
            <AnimatedText text={"Marcelo Car"} className='!mb-16 !text-3xl lg:!text-sm lg:!text-right' />
          </header>
          <BarChart/>
        </Layout>
      </main>
      </Sidebar>
    </>
  )
}

export default dashboard