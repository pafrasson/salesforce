import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'

const dashboard = () => {
  return (
    <>
        <Head>
            <title>Dashboard</title>
            <meta name='description' content='any description' />
        </Head>
        <main className=''>
            <Layout className='pt-0 md:pt-0 sm:pt-0'>

                <AnimatedText text={"Bem vindo de volta!"} className='!mb-16 !text-4xl sm:!text-sm sm:mb-8'/>

            </Layout>
        </main>
    </>
  )
}

export default dashboard