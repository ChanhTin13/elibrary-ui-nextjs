'use client';
import React, { createContext, useState } from 'react';

interface SideBarContextProps {
    isOpen: boolean;
    handleSideBar: () => void;
}

const SideBarContext = createContext<SideBarContextProps>({
    isOpen: false,
    handleSideBar: () => {},
});

function SideBarProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleSideBar = () => {
        setIsOpen(!isOpen);
    };

    const value: SideBarContextProps = {
        isOpen: isOpen,
        handleSideBar,
    };

    return <SideBarContext.Provider value={value}>{children}</SideBarContext.Provider>;
}

export { SideBarContext, SideBarProvider };
