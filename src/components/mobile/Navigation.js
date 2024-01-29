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
      className={`hidden lg:block fixed bottom-0 w-full py-4 z-10 bg-zinc-100 dark:bg-zinc-950 border-t dark:border-zinc-800 border-zinc-200 shadow-lg ${navClass}`}
    >
      <div className="flex flex-row justify-around items-center bg-transparent w-full">
        <Link href="/" className="flex items-center relative">
          {isVendasActive ? (
            <Icon icon="mingcute:home-5-fill" width="32" height="32" />
          ) : (
            <Icon icon="mingcute:home-5-line" width="32" height="32" />
          )}
          {/* <span className="h-2 w-2 rounded-full bg-sky-500 absolute -top-0.5 right-[3px]"></span> */}
        </Link>
        <Link href="/dashboard" className="flex items-center">
          {isDashActive ? (
            <Icon
              icon="icon-park-outline:sales-report"
              width="32"
              height="32"
              className="stroke-current stroke-5"
            />
          ) : (
            <Icon icon="icon-park-outline:sales-report" width="32" height="32" />
          )}
        </Link>
        <Link href="/" className="flex items-center">
          {isConfigActive ? (
            <Icon icon="icon-park-outline:config" width="32" height="32" />
          ) : (
            <Icon icon="icon-park-outline:config" width="32" height="32" />
          )}
        </Link>
      </div>
    </div>
  );
};

export default Navigation;