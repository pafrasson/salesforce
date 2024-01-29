import React, { use, useState } from "react";
import { Roboto, Roboto_Flex } from "next/font/google"
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import AsterIcon from "../../public/images/profile/astersofticon.png"
import LightIcon from "../../public/images/profile/sunny.png"
import DarkIcon from "../../public/images/profile/moon.png"
import Image from 'next/image'

const roboto = Roboto_Flex({
    subsets: ['latin'],
    variable: "--font-roboto",
    weight: ['400', '700'],
})

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`h-[1px] inline-block bg-dark
             absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
             ${router.asPath === href ? 'w-full' : 'w-0'}
             dark:bg-light`}

            >&nbsp;</span>
        </Link>
    )
}

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const router = useRouter();

    const handleClick = () => {
        toggle();
        router.push(href)
    }

    return (
        <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
            {title}

            <span className={`h-[1px] inline-block bg-light dark:bg-dark
             absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
             ${router.asPath === href ? 'w-full' : 'w-0'}
             dark:bg-light`}

            >&nbsp;</span>
        </button>
    )
}

const NavBar = () => {

    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className={`${roboto.className} w-full px-36 py-8 font-medium flex items-center justify-between
        dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8
        `}>
            <div className="w-full flex justify-between items-center lg:hidden">
                <nav>
                    <CustomLink href="/" title="Força de vendas" className="mr-4 text-sky-600" />
                    <CustomLink href="/dashboard" title="Dashboard" className="mx-4 text-sky-600" />
                </nav>
                <nav className="flex items-center justify-center flex-wrap">
                    <motion.a href="https://astersoft.com.br" target={"_blank"}
                        whileHover={{ y: -3 }}
                        className="w-6 mx-3"
                    >
                        <Image src={AsterIcon} width={500}
                            height={500}
                            alt="Astersoft" />
                    </motion.a>

                    <button onClick={() => setMode(mode === "light" ? "dark" : "light")}
                        className={`ml-3 flex items-center justify-center rounded-full p-1
                ${mode === "light" ? " text-dark" : " text-light"}
                `}
                    >
                        {
                            mode === "dark" ? <Image src={LightIcon} width={20} height={20} alt=""/> : <Image src={DarkIcon} width={20} height={20} alt=""/>
                        }
                    </button>
                </nav>
            </div>

            {
                isOpen ?
                    <motion.div
                        initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2
             -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/95 rounded-lg py-32">
                        <nav className="flex items-center flex-col justify-center">
                            <CustomMobileLink href="/" title="Força de vendas" className="text-sky-600" toggle={handleClick} />
                            <CustomMobileLink href="/dashboard" title="Dashboard" className="text-sky-600" toggle={handleClick} />
                        </nav>
                        <nav className="flex items-center justify-center flex-wrap mt-2">
                            <motion.a href="https://astersoft.com.br" target={"_blank"}
                                whileHover={{ y: -3 }}
                                className="w-6 mx-2"
                            >
                                <Image src={AsterIcon} alt="Astersoft" />
                            </motion.a>
                            <button onClick={() => setMode(mode === "light" ? "dark" : "light")}
                                className={`ml-3 flex items-center justify-center rounded-full p-1 sm:mx-1 sm:dark:bg-dark sm:bg-light
                ${mode === "light" ? " text-dark" : " text-light"}
                `}
                            >
                                {
                                    mode === "dark" ? <Image src={LightIcon} width={20} height={20} alt=""/> : <Image src={DarkIcon} width={20} height={20} alt=""/>
                                }
                            </button>
                        </nav>
                    </motion.div>
                    : null
            }
        </header >
    )
}

export default NavBar