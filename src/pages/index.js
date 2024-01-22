import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import { motion } from "framer-motion";
import Link from "next/link";
import { LinkArrow, WhatsappIcon } from '@/components/Icons'

export default function Home() {
  return (
    <>
      <Head>
        <title>Salesforce - Astersoft</title>
        <meta name="description" content="" />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className="flex items-center justify-between w-full lg:flex-col">
            <motion.div className='w-1/2 md:w-full'
              style={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileTap={{
                opacity: 1,
                scale: 1.03,
              }}
              transition={{ duration: 0.6 }}>
            </motion.div>
          </div>
        </Layout>
      </main>
    </>
  )
}