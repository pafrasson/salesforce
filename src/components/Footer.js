import React from "react";
import Layout from '@/components/Layout'
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full border-t-2 border-solid border-dark 
        font-medium text-lg sm:text-base
        ">
            <Layout className="py-2 flex items-center justify-center bg-sky-600 text-light font-roboto 
            lg:flex-col lg:py-2">
                <span>{new Date().getFullYear()} &copy; Astersoft</span>
            </Layout>
        </footer>
    )
}
export default Footer