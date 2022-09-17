// import '../styles/globals.css'
// import type { AppProps } from 'next/app'

// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

// export default MyApp
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import imgprofile from '../public/images/profileimage.png'

// import layout  components form components folder
import Layout from "../Components/Layout";
export default function MyApp({ Component, pageProps }) {
return (
   <Layout>
       <Component {...pageProps} />;
   </Layout>
);}