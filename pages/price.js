import MainContainer from "../components/MainContainer";
import Partners from "../components/Partners";
import WriteMe from "../components/WriteMe";
import style from "../styles/Service.module.css"
import MainImg from "../components/MainImg";
import {useState} from "react";
import MainImgForAnotherPage from "../components/MainImgForAnotherPage";
import Cooperation from "../components/Cooperation";
import Cooperation2 from "../components/Cooperation2";
import CollapsibleTable from "../components/TablePrice";

export default function price ({services, tekhnologii, modeliSotrudnichestva}){


    return(
        <MainContainer services={services} tekhnologii={tekhnologii} >
            {/*<MainImgForAnotherPage/>*/}
            <div style={{width: 1084,  alignItems: "center", justifyContent: "center", margin: "auto"}}>

                <div className={style.breadCrams} style={{paddingTop: 120}}>
                    <span>Главная &nbsp;   <img src="../breadPosition.svg"/> &nbsp; </span>
                    <span style={{color: "black"}}>Цены</span>
                </div>
                <div className={style.title}>Цены</div>

            <div style={{paddingTop: 75}}>
                <CollapsibleTable/>
            </div>


            </div>
            <Cooperation2 modeliSotrudnichestva={modeliSotrudnichestva}/>
            <Partners/>
            <WriteMe/>
        </MainContainer>
    )
}

export const getServerSideProps = async () =>{
    console.log("tekhnologii")
    const res = await fetch('https://portal.sellwingroup.com/api/sellwin-system/?SECTION=tekhnologii')
    const tekhnologii = await res.json()
    const response = await fetch(`https://portal.sellwingroup.com/api/sellwin-system/?SECTION=uslugi`)
    const services = await response.json()
    const res3 = await fetch('https://portal.sellwingroup.com/api/sellwin-system/?SECTION=modeli-sotrudnichestva')
    const modeliSotrudnichestva = await res3.json()
    return {
        props: {
            tekhnologii,
            services,
            modeliSotrudnichestva
        },
    }
}