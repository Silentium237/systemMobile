import {useRouter} from "next/router";

import MainContainer from "../../components/MainContainer";
import style from "../../styles/Service.module.css"

import styleTechnoOne from "../../styles/TechnologiesOne.module.css"

import Partners from "../../components/Partners";
import WriteMe from "../../components/WriteMe";

import {useState} from "react";
import Cooperation2 from "../../components/Cooperation2";
import Link from "next/link";

export default function technologiesOne({value, modeliSotrudnichestva, tekhnologii, services}) {
    const [showCardInfo, setShowCardInfo] = useState(false)
    const [indexToShowCardInfo, setIndexToShowCardInfo] = useState(777)

    const showAdvantage = (index) => {
        setShowCardInfo(!showCardInfo)
        setIndexToShowCardInfo(index)
    }
    const showAdvantageOnMouseLeave = () => {
        setShowCardInfo(false)
        setIndexToShowCardInfo(777)
    }


    return (
        <MainContainer services={services} tekhnologii={tekhnologii}>
            <div className={styleTechnoOne.mainDiv}>
                <div style={{maxWidth: 1084, alignItems: "center", justifyContent: "center", margin: "auto"}}>
                    <div className={style.breadCrams}>
                        <Link href={"/"} style={{textDecoration: "none", color: "gray"}}> <span>Главная &nbsp;   <img src="../breadPosition.svg"/> &nbsp; </span></Link>
                        <Link href={"/techno"} style={{textDecoration: "none", color: "gray"}}> <span>Технологии &nbsp;   <img src="../breadPosition.svg"/> &nbsp; </span></Link>
                        <span style={{color: "black"}}>{value.data.name}</span>
                    </div>
                </div>
                <div style={{backgroundImage: "Url(/technoOne.png)"}} className={styleTechnoOne.firstImgLogo}>
                    <div className={styleTechnoOne.firstImgLogoText}>
                        С нами выигрывают, <br/>
                        используя {value.data.name}
                    </div>
                </div>

                <div className={styleTechnoOne.title}>
                    Преимущества
                </div>
                <div className={styleTechnoOne.smallCardBlock}>
                    {value.data.link.map((item, index) => (
                        <>
                            {showCardInfo && index === indexToShowCardInfo ?
                                <span key={index}
                                      onClick={() => showAdvantage(index)}
                                      onMouseLeave={() => showAdvantage()}
                                      className={styleTechnoOne.smallCard}
                                      style={{
                                          backgroundImage: `url(${item.img})`,
                                          backgroundRepeat: "no-repeat",
                                          backgroundSize: "cover",
                                          cursor: "pointer"
                                      }}
                                >
                                <div className={styleTechnoOne.smallCardText}
                                     style={{
                                         backgroundColor: "#b4ddfa",
                                         maxWidth: 340,
                                         height: 387,
                                         paddingTop: 25,
                                         opacity: 0.95,
                                         cursor: "pointer"
                                     }}>
                                    {item.text}
                                </div>
                             </span>
                                :
                                <span key={index}
                                      onClick={() => showAdvantage(index)}
                                      className={styleTechnoOne.smallCard}
                                      style={{
                                          backgroundImage: `url(${item.img})`,
                                          backgroundRepeat: "no-repeat",
                                          backgroundSize: "cover",
                                          cursor: "pointer"
                                      }}
                                >
                        <div className={styleTechnoOne.smallCardTitleText}
                             style={{marginTop: index * 70, maxWidth: 340,  paddingTop: 40, opacity: 0.95}}>
                            {item.name}
                        </div>
               </span>
                            }
                        </>


                    ))}

                </div>


                <div style={{paddingTop: 251}} className={styleTechnoOne.title}>
                    в наших проектах мы <br/> используем {value.data.name}
                </div>
                <div className={styleTechnoOne.mainInfoBlock}>

                    <span className={styleTechnoOne.textMainInfoBlock}>
                        {value.data.detail_text}
                    </span>
                    <span>
                        <img src={value.data.detail_img} style={{maxWidth: 532, height: 572}}/>
                </span>
                </div>
            </div>

            <div className={styleTechnoOne.mainDivMobile}>
                <div style={{maxWidth: 1084, alignItems: "center", justifyContent: "center", margin: "auto"}}>
                    <div className={style.breadCramsMobile}>
                        <Link  style={{textDecoration: "none", color: "black", opacity: 0.7}} href={`/`}>
                            <span>Главная &nbsp;   <img src="../breadPosition.svg"/> &nbsp; </span>
                        </Link>
                        <Link  style={{textDecoration: "none", color: "black", opacity: 0.7}} href={`/techno`}>
                            <span>Технологии &nbsp;   <img src="../breadPosition.svg"/> &nbsp; </span>
                        </Link>
                        <span style={{color: "black"}}>{value.data.name}</span>
                    </div>

                </div>
                <div style={{backgroundImage: "Url(/technoOne.png)"}} className={styleTechnoOne.firstImgLogoMobile}>
                    <div className={styleTechnoOne.firstImgLogoTextMobile}>
                        <div style={{marginLeft: "5%"}}>
                            С нами выигрывают,
                            используя {value.data.name}
                        </div>

                    </div>
                </div>

                <div className={styleTechnoOne.titleMobile}>
                    Преимущества
                </div>
                <div className={styleTechnoOne.smallCardBlockMobile}>
                    {value.data.link.map((item, index) => (
                        <>
                                <span key={index}
                                      className={styleTechnoOne.smallCardMobile}
                                      style={{
                                          backgroundImage: `url(${item.img})`,
                                          backgroundRepeat: "no-repeat",
                                          backgroundSize: "cover",
                                          height: 161
                                      }}
                                >
                                   <div className={styleTechnoOne.smallCardTitleTextMobile}
                                        style={{marginTop: 110, width: "100%",  paddingTop: 15, opacity: 0.95}}>
                                       <div style={{marginLeft: "5%"}}>
                                           {item.name}
                                       </div>
                                   </div>

                                </span>
                            <div className={styleTechnoOne.smallCardTextMobile}
                                 style={{
                                     backgroundColor: "#FFFFFF",
                                     width: "100%",
                                     height: "auto",
                                     paddingTop: 25,
                                     opacity: 0.95,
                                     marginRight: "5%"
                                 }}>
                                <div style={{marginLeft: "5%", marginRight: "5%", marginBottom: "5%"}}>
                                    {item.text}
                                </div>

                            </div>
                        </>
                    ))}
                </div>
                <div style={{paddingTop: 40}} className={styleTechnoOne.titleMobile}>
                    в наших проектах мы <br/> используем {value.data.name}
                </div>

                <div className={styleTechnoOne.textMainInfoBlockMobile}>
                    {value.data.detail_text}
                </div>
                <img src={value.data.detail_img} style={{width: "100%", paddingBottom: 30}}/>

            </div>

            <Cooperation2 modeliSotrudnichestva={modeliSotrudnichestva}/>
            <Partners/>
            <WriteMe/>

        </MainContainer>

    )
}

export async function getServerSideProps({params}) {
    const response = await fetch(`https://portal.sellwingroup.com/api/sellwin-system/detail.php?ID=${params.id}`)
    const value = await response.json()
    const res3_modeliSotrudnichestva = await fetch('https://portal.sellwingroup.com/api/sellwin-system/?SECTION=modeli-sotrudnichestva')
    const modeliSotrudnichestva = await res3_modeliSotrudnichestva.json()
    const res_tekhnologii = await fetch('https://portal.sellwingroup.com/api/sellwin-system/?SECTION=tekhnologii')
    const tekhnologii = await res_tekhnologii.json()
    const response_services = await fetch(`https://portal.sellwingroup.com/api/sellwin-system/?SECTION=uslugi`)
    const services = await response_services.json()
    return {
        props: {
            value,
            modeliSotrudnichestva,
            tekhnologii,
            services
        }, // will be passed to the page component as props
    }
}