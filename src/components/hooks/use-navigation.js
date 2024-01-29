'use client';

import { useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';

const useNavigation = () => {
  const pathname = usePathname();
  const [isVendasActive, setIsVendasActive] = useState(false);
  const [isDashActive, setIsDashActive] = useState(false);
  const [isConfigActive, setIsConfigActive] = useState(false);

  useEffect(() => {
    setIsVendasActive(false);
    setIsDashActive(false);
    setIsConfigActive(false);

    switch (pathname) {
      case '/':
        setIsVendasActive(true);
        break;
      case '/dashboard':
        setIsDashActive(true);
        break;
      case '/':
        setIsConfigActive(true);
        break;
      default:
        // Handle any other cases here
        break;
    }
  }, [pathname]);

  return {
    isVendasActive,
    isDashActive,
    isConfigActive,
  };
};

export default useNavigation;