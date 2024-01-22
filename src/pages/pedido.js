import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import PedidoInput from '@/components/PedidoInput'

const pedido = () => {
    return (
        <>
            <Head>
                <title>Pedido</title>
                <meta name='description' content='any description' />
            </Head>
            <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className="flex items-center justify-center w-full lg:flex-col">
            <PedidoInput></PedidoInput>
          </div>
        </Layout>
      </main>

        </>
    )
}

export default pedido