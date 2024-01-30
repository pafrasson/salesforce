import React from 'react'
import Link from "next/link";
import { Icon } from '@iconify/react';
import useNavigationSidebar from '../hooks/use-nav-sidebar';

const Sidebar = ({ children }) => {
  const {
    isClientesActive,
    isPedidosActive,
    isDashActive
  } = useNavigationSidebar();
  return (
    <div className='flex'>
      <div className='fixed w-20 h-screen p-4 dark:bg-zinc-900 dark:border-black bg-white border-r-[1px] flex flex-col justify-between'>
        <div className='flex flex-col items-center'>
          <Link href='/dashboard'>
            {isDashActive ? (
              <div className='bg-black text-white p-3 rounded-lg inline-block'>
                <Icon icon="material-symbols:finance-mode-rounded" width="32" height="32" />
              </div>
            ) : (
              <div className='bg-purple-800 text-white p-3 rounded-lg inline-block'>
                <Icon icon="material-symbols:finance-mode-rounded" width="32" height="32" />
              </div>
            )}
          </Link>
          <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
          <Link href='/clientes'>
            {isClientesActive ? (
              <div className='bg-black text-white p-3 rounded-lg inline-block'>
                <Icon icon="material-symbols:finance-mode-rounded" width="32" height="32" />
              </div>
            ) : (
              <div className='bg-purple-800 text-white p-3 rounded-lg inline-block'>
                <Icon icon="material-symbols:finance-mode-rounded" width="32" height="32" />
              </div>
            )}
          </Link>
          <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
          <Link href='/pedidosdash'>
            {isPedidosActive ? (
              <div className='bg-black text-white p-3 rounded-lg inline-block'>
                <Icon icon="material-symbols:finance-mode-rounded" width="32" height="32" />
              </div>
            ) : (
              <div className='bg-purple-800 text-white p-3 rounded-lg inline-block'>
                <Icon icon="material-symbols:finance-mode-rounded" width="32" height="32" />
              </div>
            )}
          </Link>
        </div>
      </div>
      <main className='ml-20 w-full'>{children}</main>
    </div>
  )
}

export default Sidebar