'use client';

import { useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';

const useNavigationSidebar = () => {
    const pathname = usePathname();
    const [isClientesActive, setIsClientesActive] = useState(false);
    const [isPedidosActive, setIsPedidosActive] = useState(false);
    const [isDashActive, setIsDashActive] = useState(false);

    useEffect(() => {
        setIsClientesActive(false);
        setIsPedidosActive(false);
        setIsDashActive(false);

        switch (pathname) {
            case '/clientes':
                setIsClientesActive(true);
                break;
            case '/pedidosdash':
                setIsPedidosActive(true);
                break;
            case '/dashboard':
                setIsDashActive(true);
                break;
            default:
                // Handle any other cases here
                break;
        }
    }, [pathname]);

    return {
        isClientesActive,
        isPedidosActive,
        isDashActive
    };
};

export default useNavigationSidebar;