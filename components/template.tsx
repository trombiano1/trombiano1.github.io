import Link from 'next/link'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import bg from '../img/bg-masthead.jpg'
import Sidebar from '../components/sidebar'
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'
import sidebarStyle from '../styles/TitleSidebar.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component, useState } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"


const inter = Inter({ subsets: ['latin'] })


export default function Template(props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) {
    const [state, setState] = useState({
        isPaneOpen: false
    });
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main} style={{
                backgroundImage: `url(${bg.src})`,
                width: '100%',
                height: '100%',
                backgroundSize: 'cover'
            }}>
                <div className={styles.maincontainer}>
                    <div>
                        <div className={styles.name}>
                            <div className={styles.navbarButtonWrap}>
                                <a onClick={() => setState({ isPaneOpen: true })} className={styles.navbarButton}>
                                    <FontAwesomeIcon icon={faBars} />
                                </a>
                                <SlidingPane
                                    // className="some-custom-class"
                                    className={styles.overlay}
                                    isOpen={state.isPaneOpen}
                                    // title="Hey, it is optional pane title.  I can be React component too."
                                    // subtitle="Optional subtitle."
                                    from="left"
                                    hideHeader
                                    width="300px"
                                    onRequestClose={() => {
                                        // triggered on "<" on left top click or on outside click
                                        setState({ isPaneOpen: false });
                                    }}
                                >
                                    <div className={styles.contentArea}>
                                        <div className={sidebarStyle.sidebar}>
                                            <Link href="/">- Home</Link>
                                            <Link href="/education">- Education</Link>
                                            <Link href="/">- Experience</Link>
                                            <Link href="/works">- Works</Link>
                                            <Link href="/">- Qualifications</Link>
                                            <Link href="/">- Fun</Link>
                                        </div>
                                    </div>
                                </SlidingPane>
                            </div>
                            <div>
                                <span>Welcome to the page of:</span>
                                <h1 className={inter.className}>Masayuki Fujita</h1>
                            </div>
                        </div>
                    </div>
                    <div className={styles.contentArea}>
                        <Sidebar />
                        {props.children}
                    </div>
                </div>
            </main >
        </>
    )
}

