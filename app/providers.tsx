'use client';
import React from 'react';
import classNames from 'classnames/bind';
import { SideBarContext } from '@/context/sideBarContext';
import Sidebar from '@/components/sidebar';
import Header from '@/components/header';
import styles from '@/styles/components/defaultLayout.module.scss';

const cx = classNames.bind(styles);

export function Providers({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { isOpen } = React.useContext(SideBarContext);
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Sidebar />
            <div className={cx('right-content', !isOpen ? '' : 'content-max-width')}>
                <div className={cx('main-content')}>{children}</div>
            </div>
        </div>
    );
}
