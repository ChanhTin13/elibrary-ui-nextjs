'use client';
import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames/bind';
import styles from '@/styles/components/header.module.scss'; 
import { CloseSidebarIcon, OpenSidebarIcon } from '../Icons';
import UserAction from './userAction';
import { MENU_ITEMS } from '@/lib/data';
import Image from '../images';
import images from '@/public/images'; 

const cx = classNames.bind(styles);
function Header({isOpen,handleSideBar}:{
	isOpen: boolean;
	handleSideBar: Function;}) { 

    return (
        <header className={cx('header')}>
            <div className={cx('header-inner', isOpen ? '' : 'inner-max-width')}>
                <div className={cx('icon-close-open-sidebar')}>
                    {/* handle click */}
                    <div className={cx('icon-action')} onClick={()=>handleSideBar()}>
                        <span>{isOpen ? <CloseSidebarIcon /> : <OpenSidebarIcon />}</span>
                    </div>
                </div>

                <div className={cx('header-inner-item')}>
                    <button className={cx('bell-btn')} aria-label="notification">
                        <FontAwesomeIcon className={cx('shaking')} icon={faBell} />
                    </button>

                    <UserAction items={MENU_ITEMS}>
                        <div className={cx('user-wrap')} role="button" aria-expanded="true">
                            <div className={cx('user-img')}>
                                <Image draggable="false" alt="avatar" src={images.userAvata} className={cx('img')} />
                            </div>
                            <div className={cx('user-info')}>
                                <p className={cx('user-name')} role="paragraph">
                                    Tên{' '}
                                </p>
                                <p className={cx('user-position')} role="paragraph">
                                    Chức vụ
                                </p>
                            </div>
                        </div>
                    </UserAction>
                </div>
            </div>
        </header>
    );
}

export default Header;
