import React from "react";

const Layout = ({ children, className = "" }) => {
    return (
        <div className={`w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark xl:p-12 lg:p-0 md:p-0 sm:p-0 ${className}`}>
            {children}
        </div>
    )
}
export default Layout