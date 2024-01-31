import React from 'react'
import { data } from '@/data/data'
import { Icon } from '@iconify/react';

const Pedidos = () => {
  return (
    <div className='w-full mt-5 col-span-1 relative lg:h-[70vh] h-[50vh] sm:h-[40vh] sm:w-[30vh] m-auto p-4 border rounded-lg bg-white overflow-scroll'>
      <h1>Pedidos Recentes</h1>
      <ul>
        {data.map((order, id) => (
          <li
            key={id}
            className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'
          >
            <div className='bg-purple-100 rounded-lg p-3'>
              <Icon icon="mdi:shopping-outline" className='text-purple-800' />
            </div>
            <div className='pl-4'>
              <p className='text-gray-800 font-bold'>${order.total}</p>
              <p className='text-gray-400 text-sm'>{order.name.first}</p>
            </div>
            <p className='lg:flex md:hidden absolute right-6 text-sm'>{order.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pedidos