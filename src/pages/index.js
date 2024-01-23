import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import { motion } from "framer-motion";
import OSinput from '@/components/OSinput';
import AsterImg from '../../public/images/profile/astersofticon.png'
import AnimatedTabs from '@/components/AnimatedTabs';

export default function Home() {
  return (
    <>
      <Head>
        <title>Salesforce - Astersoft</title>
        <meta name="description" content="" />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className="flex items-center justify-center w-full flex-col">
            <motion.div drag>
            <Image src={AsterImg} alt='PedroFrasson' className='w-20 h-auto md:inline-block md:w-20'
              priority
            />
            </motion.div>
            <AnimatedTabs/>
          </div>
        </Layout>
      </main>
    </>
  )
}