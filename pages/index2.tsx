import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'
import imgprofile from '../public/images/profileimage.png'
import Header from '../components/Header'
import KenapaBergabung from '../components/Content/KenapaBergabung'
import TelahTeroptimasi from '../components/Content/TelahTeroptimasi'
import TemukanDomain from '../components/Content/TemukanDomain'
import Faq from '../components/Content/Faq'
import PilihTemplate from '../components/Content/PilihTemplate'
import SayaButuhWebsite from '../components/Content/SayaButuhWebsite'
import PriceTable from '../components/Content/PriceTable'
import Step1 from '../components/Content/Step1'
import PilihPunyaContent from '../components/Content/PilihPunyaContent'
// import  {getData} from '../data/bankFetch.js'



export default function Home() {
  return (
    <>
    {/* Header start */}
    <Header />
    <SayaButuhWebsite />
    <Step1 />
    <PilihTemplate />
    <PilihPunyaContent />

    <TelahTeroptimasi />
    <KenapaBergabung />
    <TemukanDomain />
    
    <PriceTable />

    {/* <Faq /> */}
    

    {/* Header end */}

      
    </>
    
    
  )
}
