'use client';
import React, { useState } from 'react';
import classNames from 'classnames/bind'; 
import Sidebar from '@/components/sidebar';
import Header from '@/components/header';
import styles from '@/styles/components/defaultLayout.module.scss';

const cx = classNames.bind(styles);

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
	const [isOpen, setIsOpen] = useState(true);
	const handleSideBar = () => {
		if (isOpen) {
			setIsOpen(false);
		} else {
			setIsOpen(true);
		}
	};
    return (
        <div className={cx('wrapper')}>
            <Header isOpen={isOpen} handleSideBar={handleSideBar}/>
            <Sidebar isOpen={isOpen} />
            <div className={cx('right-content', !isOpen ? '' : 'content-max-width')}>
                <div className={cx('main-content')}>{children}</div>
            </div>
        </div>
    );
}
