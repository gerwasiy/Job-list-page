import Head from 'next/head';
import React from 'react';

interface MainLayoutModel {
    title: string
  }

const MainLayout = ({title}:MainLayoutModel) => {
    return (
        <>
            <Head>
                <title>{title} | Aleann Task </title>
            </Head>
        </>
    );
}

export default MainLayout;
