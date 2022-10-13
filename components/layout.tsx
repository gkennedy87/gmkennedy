import Head from 'next/head'
import Navbar from "./navbar";
import Footer from "./footer";
import styles from "../styles/Layout.module.css"
import Stack from '@mui/material/Stack'
import Script from 'next/script';
const Layout = ({children}:any) => {
    return (
        <>
            <Head>
                <title>Grant Kennedy | Javascript Developer & UI/UX Designer</title>
                <meta name="description" content="Grant Kennedy | Full Stack Javascript Developer" />
                <meta property="og:title" content="Grant Kennedy | Javascript Developer, UI/UX Designer, Consultant" />
                <meta property="og:site_name" content="Grant Kennedy | Javascript Developer, UI/UX Designer, Consultant" />
                <meta property="og:url" content="https://www.gmkennedy.com" />
                <meta property="og:description" content="Portfolio site of Grant Kennedy. Professional Javascript developer, UI/UX designer, and consultant. You can learn about him and his work on this site. His views are his own."/>
                <meta property="og:type" content="website"/>
                <meta property="og:image" content=""></meta>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Stack px={2}>
                <Navbar />
                <main className={styles.main}>
                        {children}
                </main>
                <Footer /> 
                <Script async src="https://www.googletagmanager.com/gtag/js?id=UA-57560321-6"></Script>
                <Script id="google-analytics" strategy='afterInteractive' >
                    {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'UA-57560321-6');
                    `}
                </Script>
            </Stack>
        </>
    )
}

export default Layout;