import MainContainer from "../components/MainContainer";
import Partners from "../components/Partners";
import WriteMe from "../components/WriteMe";
import style from "../styles/Service.module.css"
import {useState} from "react";
import Cooperation2 from "../components/Cooperation2";
import Link from "next/link";
import styleTechno from "../styles/MainTechnoPage.module.css";

export default function service ({services, tekhnologii, modeliSotrudnichestva}){

    const [showCard , setShowCard] = useState(false)
    const ClickButtonShowCard = () =>{
        setShowCard(!showCard)
    }

    return(
        <MainContainer services={services} tekhnologii={tekhnologii} >
            <>
                <div className={style.mainDiv}>
                    <div style={{maxWidth: 1084,  alignItems: "center", justifyContent: "center", margin: "auto"}}>
                        <div className={style.breadCrams}>
                            <Link style={{textDecoration: "none", color: "gray"}} href="/">
                                <span>Главная &nbsp;   <img src="../breadPosition.svg"/> &nbsp; </span>
                            </Link>
                            <span style={{color: "black"}}>Услуги</span>
                        </div>
                        <div className={style.title}>Услуги</div>
                        <div className={style.cardList}  >
                    <span style={{paddingTop:22}} >
                        <ul style={{listStyleType: "none", columnCount: 2}}>
                            {services.data.map((item, index )=>(
                                <div key={index}>
                                    {item.group !== "1С РАЗРАБОТКА" ? <li key={index} className={style.li}><img src="../Ellipse.svg"/> {item.name}</li> : null}
                                </div>
                            ))}
                        </ul>
                    </span>
                        </div>
                    </div>

                    <div style={{maxWidth: 1084,   margin: "auto", display: "flex", justifyContent: "center", paddingTop: 150, flexWrap: "wrap", alignItems: "center"}}>
                        {services && services.data && services.data.length ? services.data.map((item, index) =>(
                            <div key={index}>
                                {!item.name.includes("1C") ?
                                <>
                                        {index < 6 || showCard ?
                                            <div key={index} className={style.cardStyle} style={{margin:10}}>
                                                <img src={item.preview_img}/>
                                                <div className={style.titleCardText}>
                                                    {item.name}
                                                </div>
                                                <div className={style.subTitleCardText}>
                                                    {item.preview_text}
                                                </div>
                                                <div className={style.nextButtonStyle} >
                                                    Подробнее <img style={{position: "absolute", paddingTop: 4, paddingLeft: 15, cursor: "pointer"}} src="../Arrow2.svg"/>
                                                </div>
                                            </div> : null
                                        }
                                    </> : null
                                }
                            </div>
                        )): null}
                    </div>
                    <div style={{margin: "auto", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 70, paddingBottom:250}}>
                        <div onClick={()=> ClickButtonShowCard()} className={style.seeAll}>
                            СМОТРЕТЬ ВСЕ
                        </div>
                    </div>
                </div>

                <div className={style.mainDivMobile}>
                    <div style={{maxWidth: 1084,  alignItems: "center", justifyContent: "center", margin: "auto"}}>

                        <div className={style.breadCramsMobile}>
                            <Link  style={{textDecoration: "none", color: "black", opacity: 0.7}} href={`/`}>
                                <span>Главная &nbsp;   <img src="../breadPosition.svg"/> &nbsp; </span>
                            </Link>
                            <span style={{color: "black"}}>Услуги</span>
                        </div>

                        <div className={style.titleMobile}>Услуги</div>

                    <span style={{paddingTop:22}} >
                        <ul style={{listStyleType: "none", marginLeft: "3%" }}>
                            {services.data.map((item, index )=>(
                                <li key={index} className={style.liMobile}><img src="../Ellipse.svg"/> {item.name}</li>
                            ))}
                        </ul>
                    </span>
                    </div>
                    <div style={{maxWidth: 1084,   margin: "auto", display: "flex", justifyContent: "center", paddingTop: 50, flexWrap: "wrap", alignItems: "center"}}>
                        {services && services.data && services.data.length ? services.data.map((item, index) =>(
                            <div key={index} className={style.cardStyleMobile} >
                                <img src={item.preview_img}  style={{width: "95%", height: "auto", marginLeft: "5%"}}/>
                                <div className={style.titleCardTextMobile}>
                                    {item.name}
                                </div>
                                <div className={style.subTitleCardTextMobile}>
                                    {item.preview_text}
                                </div>
                                <Link style={{textDecoration: "none"}} href={`/techno/${item.id}`}>
                                    <div className={styleTechno.buttonNext}>
                                        Подробнее <img style={{position: "absolute", paddingTop: 4, paddingLeft: 15}}
                                                       src="../Arrow2.svg"/>
                                    </div>
                                </Link>
                            </div>
                        )) : null}
                    </div>
                    <div style={{margin: "auto", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 70, paddingBottom:250}}>
                        <div onClick={()=> ClickButtonShowCard()} className={style.seeAllMobile}>
                            СМОТРЕТЬ ВСЕ
                        </div>
                    </div>
                </div>
            </>

            <Cooperation2 modeliSotrudnichestva={modeliSotrudnichestva}/>
            <Partners/>
            <WriteMe/>
        </MainContainer>
    )
}

export const getServerSideProps = async () =>{
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