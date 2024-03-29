import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import Sidebar from '@/components/mobile/Sidebar'
import Transition from '@/components/Transition'
import { data } from '../data/data.js';
import { Icon } from '@iconify/react'

const clientes = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name='description' content='any description' />
      </Head>
      <Transition />
      <Sidebar>
        <main className='min-h-screen'>
          <Layout className=''>
            <header className='flex sm:pb-0 lg:py-8 lg:justify-between px-4 pt-4'>
              <AnimatedText text={"Clientes"} className='!mb-16 sm:!mb-8 !text-3xl lg:!text-sm lg:!text-left' />
            </header>
            <div className='bg-gray-100 dark:bg-dark min-h-screen sm:pb-12'>
              <div className='p-4'>
                <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
                  <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 sm:text-sm grid-cols-2 items-center justify-between cursor-pointer'>
                    <span>Nome</span>
                    <span className='text-right'>E-mail</span>
                  </div>
                  <ul>
                    {data.map((order, id) => (
                      <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                        <div className='flex items-center sm:text-sm p-1'>
                          <p className=''>{order.name.first + ' ' + order.name.last}</p>
                        </div>
                        <p className='text-gray-600 sm:text-sm sm:text-left text-right'>{order.name.first}@gmail.com</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Layout>
        </main>
      </Sidebar>
    </>
  )
}

export default clientes