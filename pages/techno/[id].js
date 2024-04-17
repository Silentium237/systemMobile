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
                        <span>Главная &nbsp;   <img src="../breadPosition.svg"/> &nbsp; </span>
                        <span>Технологии &nbsp;   <img src="../breadPosition.svg"/> &nbsp; </span>
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
                {/*<div className={styleTechnoOne.smallCardBlock}>*/}
                {/*    {array.map((item , index)=> (*/}
                {/*        <span key={index} className={styleTechnoOne.smallCard}>*/}
                {/*       <img style={{paddingTop: 34, paddingLeft: 34}} src={item.icon}/>*/}
                {/*       <div className={styleTechnoOne.bigNumber}>*/}
                {/*           {item.number}*/}
                {/*       </div>*/}
                {/*        <div className={styleTechnoOne.smallCardText}>*/}
                {/*            {item.text}*/}
                {/*        </div>*/}
                {/*   </span>*/}
                {/*    ))}*/}
                {/*</div> */}
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
                                          backgroundSize: "cover"
                                      }}
                                >
                                <div className={styleTechnoOne.smallCardText}
                                     style={{
                                         backgroundColor: "#b4ddfa",
                                         maxWidth: 340,
                                         height: 387,
                                         paddingTop: 25,
                                         opacity: 0.75
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
                                          backgroundSize: "cover"
                                      }}
                                >
                        <div className={styleTechnoOne.smallCardTitleText}
                             style={{marginTop: index * 70, maxWidth: 340,  paddingTop: 25, opacity: 0.75}}>
                            {item.name}
                        </div>
               </span>
                            }
                        </>


                    ))}

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
                                          backgroundSize: "cover"
                                      }}
                                >
                            <div className={styleTechnoOne.smallCardText} style={{backgroundColor: "#b4ddfa", width: 348, height: 387, paddingTop: 25, opacity: 0.75}}>
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
                                          backgroundSize: "cover"
                                      }}
                                >
                        <div className={styleTechnoOne.smallCardTitleText}
                             style={{marginTop: index * 70, width: 340,  paddingTop: 25, opacity: 0.75}}>
                            {item.name}
                        </div>
               </span>
                            }
                        </>


                    ))}


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
                                          backgroundSize: "cover"
                                      }}
                                >
                            <div className={styleTechnoOne.smallCardText} style={{backgroundColor: "#b4ddfa", width: 348, height: 387, paddingTop: 25, opacity: 0.75}}>
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
                                          backgroundSize: "cover"
                                      }}
                                >
                        <div className={styleTechnoOne.smallCardTitleText}
                             style={{marginTop: index * 70, width: 340,  paddingTop: 25, opacity: 0.75}}>
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
                    {/*{ value.data.name.includes("1С:") ?*/}
                        {/*    <>*/}
                        {/*        <div style={{width: 546, height: 570, backgroundColor: "#fdba06"}}>*/}
                        {/*            <div style={{fontSize: 52, fontWeight: "bold", color: "#7c3300", padding: 20}}>{value.data.name}</div>*/}
                        {/*            <div style={{position: "absolute", width: 200, height: 410, background: "linear-gradient(#fdba06, #d25e01)"}}>*/}

                        {/*            </div>*/}
                        {/*            <img src="../ico_1c_logo_opt.svg" style={{width: 200, height: 100, float: "right", marginTop: 270, marginRight: 50}}/>*/}
                        {/*            /!*<img src={value.data.detail_img}/>*!/*/}
                        {/*        </div>*/}
                        {/*    </> :  */}
                        {/*    */}
                        {/*    <img src={value.data.detail_img} style={{width: 532, height: 572}}/>*/}
                        {/*}*/}

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
                    {/*{value.data.link.map((item, index) => (*/}
                    {/*    <>*/}

                    {/*                <img src={item.img} style={{height:200}} />*/}
                    {/*        <div>{item.name}</div>*/}
                    {/*                <div style={{position: "absolute", marginTop: -400}}>{item.text}</div>*/}



                    {/*    </>*/}
                    {/*))}*/}

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
                                        style={{marginTop: 110, width: "100%",  paddingTop: 15, opacity: 0.75}}>
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
                                     opacity: 0.75,
                                     marginRight: "5%"
                                 }}>
                                <div style={{marginLeft: "5%", marginRight: "5%", marginBottom: "5%"}}>
                                    {item.text}
                                </div>

                            </div>
                        </>
                    ))}
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
                                        style={{marginTop: 110, width: "100%",  paddingTop: 15, opacity: 0.75}}>
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
                                     opacity: 0.75,
                                     marginRight: "5%"
                                 }}>
                                <div style={{marginLeft: "5%", marginRight: "5%", marginBottom: "5%"}}>
                                    {item.text}
                                </div>

                            </div>
                        </>
                    ))}
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
                                        style={{marginTop: 110, width: "100%",  paddingTop: 15, opacity: 0.75}}>
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
                                     opacity: 0.75,
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