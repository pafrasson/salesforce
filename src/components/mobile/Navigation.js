'use client';

import Link from 'next/link';

import useNavigation from '../hooks/use-navigation';
import useScrollingEffect from '../hooks/use-scroll';
import { Icon } from '@iconify/react';

const Navigation = () => {
  const scrollDirection = useScrollingEffect(); // Use the custom hook
  const navClass = scrollDirection === 'up' ? '' : 'opacity-25 duration-500';

  const {
    isVendasActive,
    isDashActive,
    isConfigActive,
  } = useNavigation();

  return (
    <div
      className={`hidden lg:block fixed bottom-0 w-full py-4 z-10 dark:text-light bg-zinc-100 dark:bg-zinc-950 border-t dark:border-zinc-800 border-zinc-200 shadow-lg ${navClass}`}
    >
      <div className="flex flex-row justify-around items-center bg-transparent w-full">
        <Link href="/" className="flex items-center relative">
          {isVendasActive ? (
            <Icon icon="ph:note-pencil-fill" width="32" height="32" />
          ) : (
            <Icon icon="ph:note-pencil-light" width="32" height="32" />
          )}
          {/* <span className="h-2 w-2 rounded-full bg-sky-500 absolute -top-0.5 right-[3px]"></span> */}
        </Link>
        <Link href="/dashboard" className="flex items-center">
          {isDashActive ? (
            <Icon
              icon="material-symbols:finance-mode-rounded"
              width="32"
              height="32"
              className="stroke-current stroke-5"
            />
          ) : (
            <Icon icon="material-symbols-light:finance-mode-rounded" width="32" height="32" />
          )}
        </Link>
        <Link href="/settings" className="flex items-center">
          {isConfigActive ? (
            <Icon icon="ph:gear-fill" width="32" height="32" />
          ) : (
            <Icon icon="ph:gear-light" width="32" height="32" />
          )}
        </Link>
      </div>
    </div>
  );
};

export default Navigation;