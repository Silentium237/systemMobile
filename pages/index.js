import Link from "next/link";
import A from "../components/A";
import Head from "next/head";
import MainContainer from "../components/MainContainer";
import Image from 'next/image';

import style from "../styles/Index.module.css"
import style2 from "../styles/user.module.scss"
import AboutUs from "../components/AboutUs";
import OurValue from "../components/OurValue";
import styleValue from '../styles/AboutUs.module.css'
import Mission from "../components/Mission";
import Technologies from "../components/Technologies";
import Cooperation from "../components/Cooperation";
import Project from "../components/Project";
import Partners from "../components/Partners";
import WriteMe from "../components/WriteMe";
import {useState} from "react";
import MainImg from "../components/MainImg";
import SendForm from "../components/SendForm";
import styleOfferText from "../styles/Offer.module.css"
import styleButton from "../styles/Index.module.css";
import Project2 from "../components/Project2";
import Cooperation2 from "../components/Cooperation2";
import LineInfoSecond from "../components/LineInfoSecond";
import LineInfoFirst from "../components/LineInfoFirst";
import WhoWeAre from "../components/WhoWeAre";
import BannerFirst from "../components/BannerFirst";
import MobileMenu from "../components/MobileMenu";




const Index = ({cardText, tekhnologii, modeliSotrudnichestva,services}) => {


    return (
        <>


        <MainContainer keywords={"main page"} services={services} tekhnologii={tekhnologii}>
            <div className="main-div">
                <MainImg/>
                <SendForm/>

                <WhoWeAre/>

                <LineInfoFirst/>

                <BannerFirst/>

                {/*<AboutUs/>*/}

                <OurValue cardText={cardText}/>

                <Mission/>

                <LineInfoSecond/>

                {/*<BannerFirst/>*/}

                {/*<BannerFirst/>*/}
                <BannerFirst/>
                <Technologies tekhnologii={tekhnologii}/>
                {/*<Project/>*/}
                <Project2/>

                {/*/!*<Cooperation modeliSotrudnichestva={modeliSotrudnichestva}/>*!/*/}
                <Cooperation2 modeliSotrudnichestva={modeliSotrudnichestva}/>

                <Partners/>

                <WriteMe/>

            </div>
        </MainContainer>
    </>
    );


};

export default Index;

export const getServerSideProps = async () =>{
    console.log("11111111111")


    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://portal.sellwingroup.com/api/sellwin-system/?SECTION=uslugi')
    const cardText = await res.json()
    const res2 = await fetch('https://portal.sellwingroup.com/api/sellwin-system/?SECTION=tekhnologii')
    const tekhnologii = await res2.json()
    const res3 = await fetch('https://portal.sellwingroup.com/api/sellwin-system/?SECTION=modeli-sotrudnichestva')
    const modeliSotrudnichestva = await res3.json()
    const response = await fetch(`https://portal.sellwingroup.com/api/sellwin-system/?SECTION=uslugi`)
    const services = await response.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            cardText,
            tekhnologii,
            modeliSotrudnichestva,
            services
        },
    }
}
