'use client';
import React, { Fragment } from 'react';
import classNames from 'classnames/bind';
import Link from 'next/link';
import styles from './menuChild.module.scss';
import { MENU_CHILD } from '@/lib/data';

const cx = classNames.bind(styles);

interface MenuChildProps {
    code: string;
}

const MenuChild: React.FC<MenuChildProps> = ({ code }) => {
    const items = MENU_CHILD.filter((item) => item.code === code);

    return (
        <div className={cx('menu-child-body')}>
            <div className={cx('menu-child-body-element')}>
                {items.map((item, index) => (
                    <Fragment key={index}>
                        <div className={cx('element-title')}>{item.name}</div>
                        <ul className={cx('group-list')}>
                            {item.child.map((child, index) => (
                                <li key={index} className={cx('group-child')}>
                                    <Link href={child.action} className={cx('pdtb13')}>
                                        <span class="button_title__6gITv">{child.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Fragment>
                ))}
            </div>
        </div>
    );
};

export default MenuChild;
