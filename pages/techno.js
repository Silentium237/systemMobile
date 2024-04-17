import MainContainer from "../components/MainContainer";
import Partners from "../components/Partners";
import WriteMe from "../components/WriteMe";
import style from "../styles/Service.module.css"
import MainImg from "../components/MainImg";
import {useState} from "react";
import MainImgForAnotherPage from "../components/MainImgForAnotherPage";
import Cooperation from "../components/Cooperation";
import styleTechno from "../styles/MainTechnoPage.module.css";
import Slider from "react-slick";
import Link from "next/link";
import Cooperation2 from "../components/Cooperation2";

export default function techno({tekhnologii, services, modeliSotrudnichestva}) {
    let listItemFrontEnd = []
    let listItemBackEnd = []
    let listItemMobile = []
    // let listItem1C = []

    const items = [
        {title: "FRONTEND"},
        {title: "BACKEND"},
        {title: "МОБИЛЬНАЯ РАЗРАБОТКА"},
        // {title: "1С РАЗРАБОТКА"},
    ]
    for (let i=0; i< tekhnologii.data.length; i++){
        if (tekhnologii.data[i].group === "FRONTEND"){
            listItemFrontEnd.push(tekhnologii.data[i])
        }else if (tekhnologii.data[i].group === "BACKEND"){
            listItemBackEnd.push(tekhnologii.data[i])
        }else if (tekhnologii.data[i].group === "МОБИЛЬНАЯ РАЗРАБОТКА"){
            listItemMobile.push(tekhnologii.data[i])
        }
        // else if (tekhnologii.data[i].group === "1С РАЗРАБОТКА"){
        //     listItem1C.push(tekhnologii.data[i])
        // }
    }

    const [showCard, setShowCard] = useState(false)
    const ClickButtonShowCard = () => {
        setShowCard(!showCard)
    }
    const [number, setNumber] = useState(0)
    const [delNumber, setDelNumber] = useState(2)

    const [showFrontList, setShowFrontList] = useState(false)
    const [showBackList, setShowBackList] = useState(false)
    const [showMobileList, setShowMobileList] = useState(false)



    const changeCardNumber = (value) => {
        if (value === "right" && number !== listItemFrontEnd.length - 1) {
            setNumber(number + 1)
            setDelNumber(delNumber + 1)
        } else if (value === "left" && number > 0) {
            setNumber(number - 1)
            setDelNumber(delNumber - 1)
        }
    }

    // let arrTechnlogii = []
    // if (tekhnologii){
    //
    // }
    console.log("555555555555555")
    console.log(tekhnologii)


    return (
            <MainContainer tekhnologii={tekhnologii} services={services}>
                {/*<MainImgForAnotherPage/>*/}
                <div className={styleTechno.mainDiv}>
                    <div style={{maxWidth: 1084, alignItems: "center", justifyContent: "center", margin: "auto",}}>

                        <div className={style.breadCrams}>
                            <span>Главная &nbsp;   <img src="../breadPosition.svg"/> &nbsp; </span>
                            <span style={{color: "black"}}>Технологии</span>
                        </div>
                        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", margin: "auto"}}>
                            <span className={style.title} style={{paddingRight: "20%"}}>
                                Технологии
                            </span>
                            <span style={{paddingTop: 120, fontSize: 20, fontWeight: 400}}>
                                В разработках программных продуктов наша компания использует самые последние достижения в области IТ-технологий:
                            </span>
                        </div>
                        {/*<div className={style.title}>Технологии</div>*/}

                        <div style={{
                            maxWidth: 1084,
                            margin: "auto",
                            display: "flex",
                            justifyContent: "center",
                            paddingTop: 70,
                            flexWrap: "wrap",
                            alignItems: "center"
                        }}>
                            {items.map((itemTitle, index) => (
                                <div key={index} className={styleTechno.cardTechno}>
                                    <div className={styleTechno.titleCardTechno}>
                                        {itemTitle.title}
                                    </div>
                                    <div style={{paddingTop: 22}}>
                                        <ul style={{listStyleType: "none"}}>
                                            {tekhnologii.data.map((item, index) => (
                                                <>
                                                    {itemTitle.title === item.group ? <li key={index} className={styleTechno.li}><img src="../Ellipse.svg"/> {item.name}</li>: null}
                                                </>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div>
                        <div style={{maxWidth: 1084, alignItems: "center", justifyContent: "center", margin: "auto"}}>
                            <div className={style.title}>Frontend</div>
                        </div>
                        <hr style={{width: 650, backgroundColor: "#006DBF", height: 3, opacity: 0.5}}/>

                        <div
                            // className={styleTechno.aaa}
                            style={{
                                maxWidth: 1084,
                                margin: "auto",
                                display: "flex",
                                justifyContent: "center",
                                paddingTop: 70,
                                flexWrap: "wrap",
                                alignItems: "center"

                            }}>
                            {listItemFrontEnd.slice(number, delNumber).map((item, index) => (
                                <div key={index} className={styleTechno.cardTechnologies}>
                                    <img src={item.preview_img} style={{width: 522, height: 340}}/>
                                    <div className={styleTechno.titleCardTechnologies}>
                                        {item.name}
                                    </div>
                                    <div className={styleTechno.subTitleCardTechnologies}>
                                        {item.preview_text}
                                    </div>
                                    <Link href={`/techno/${item.id}`}>
                                        <div className={styleTechno.buttonNext}>
                                            Подробнее <img style={{position: "absolute", paddingTop: 4, paddingLeft: 15}}
                                                           src="../Arrow2.svg"/>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                        <div style={{margin: "auto", display: "flex", paddingTop: 70, paddingLeft: "21%"}}>
                            <button style={{width: 50, height: 50, marginRight: 15}}
                                    onClick={() => changeCardNumber("left")}
                            ><img
                                src="../right.svg"/></button>
                            <button style={{width: 50, height: 50}}
                                    onClick={() => changeCardNumber("right")}
                            ><img
                                src="../left.svg"/></button>
                        </div>
                    </div>
                    <div>
                        <div style={{maxWidth: 1084, alignItems: "center", justifyContent: "center", margin: "auto"}}>
                            <div className={style.title}>BACKEND</div>
                        </div>
                        <hr style={{width: 650, backgroundColor: "#006DBF", height: 3, opacity: 0.5}}/>

                        <div
                            // className={styleTechno.aaa}
                            style={{
                                maxWidth: 1084,
                                margin: "auto",
                                display: "flex",
                                justifyContent: "center",
                                paddingTop: 70,
                                flexWrap: "wrap",
                                alignItems: "center"
                            }}>
                            {listItemBackEnd.slice(number, delNumber).map((item, index) => (
                                <>
                                    <div key={index} className={styleTechno.cardTechnologies}>
                                        <img src={item.preview_img} style={{width: 522, height: 340}}/>
                                        <div className={styleTechno.titleCardTechnologies}>
                                            {item.name}
                                        </div>
                                        <div className={styleTechno.subTitleCardTechnologies}>
                                            {item.preview_text}
                                        </div>
                                        <div className={styleTechno.buttonNext}>
                                            Подробнее <img style={{position: "absolute", paddingTop: 4, paddingLeft: 15}}
                                                           src="../Arrow2.svg"/>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                        <div style={{margin: "auto", display: "flex", paddingTop: 70, paddingLeft: "21%"}}>
                            <button style={{width: 50, height: 50, marginRight: 15}}
                                    onClick={() => changeCardNumber("left")}
                            ><img
                                src="../right.svg"/></button>
                            <button style={{width: 50, height: 50}}
                                    onClick={() => changeCardNumber("right")}
                            ><img
                                src="../left.svg"/></button>
                        </div>
                    </div>
                    <div>
                        <div style={{maxWidth: 1084, alignItems: "center", justifyContent: "center", margin: "auto"}}>
                            <div className={style.title}>МОБИЛЬНАЯ РАЗРАБОТКА</div>
                        </div>
                        <hr style={{width: 900, backgroundColor: "#006DBF", height: 3, opacity: 0.5}}/>

                        <div
                            // className={styleTechno.aaa}
                            style={{
                                maxWidth: 1084,
                                margin: "auto",
                                display: "flex",
                                justifyContent: "center",
                                paddingTop: 70,
                                flexWrap: "wrap",
                                alignItems: "center"
                            }}>
                            {listItemMobile.slice(number, delNumber).map((item, index) => (
                                <>
                                    <div key={index} className={styleTechno.cardTechnologies}>
                                        <img src={item.preview_img} style={{width: 522, height: 340}}/>
                                        <div className={styleTechno.titleCardTechnologies}>
                                            {item.name}
                                        </div>
                                        <div className={styleTechno.subTitleCardTechnologies}>
                                            {item.preview_text}
                                        </div>
                                        <div className={styleTechno.buttonNext}>
                                            Подробнее <img style={{position: "absolute", paddingTop: 4, paddingLeft: 15}}
                                                           src="../Arrow2.svg"/>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                        <div style={{margin: "auto", display: "flex", paddingTop: 70, paddingLeft: "21%"}}>
                            <button style={{width: 50, height: 50, marginRight: 15}}
                                    onClick={() => changeCardNumber("left")}
                            ><img
                                src="../right.svg"/></button>
                            <button style={{width: 50, height: 50}}
                                    onClick={() => changeCardNumber("right")}
                            ><img
                                src="../left.svg"/></button>
                        </div>
                    </div>
                    {/*<div>*/}
                    {/*    <div style={{maxWidth: 1084, alignItems: "center", justifyContent: "center", margin: "auto"}}>*/}
                    {/*        <div className={style.title}>1C РАЗРАБОТКА</div>*/}
                    {/*    </div>*/}
                    {/*    <hr style={{width: 700, backgroundColor: "#006DBF", height: 3, opacity: 0.5}}/>*/}

                    {/*    <div*/}
                    {/*        // className={styleTechno.aaa}*/}
                    {/*        style={{*/}
                    {/*            width: 1084,*/}
                    {/*            margin: "auto",*/}
                    {/*            display: "flex",*/}
                    {/*            justifyContent: "space-between",*/}
                    {/*            paddingTop: 70,*/}
                    {/*            flexWrap: "wrap"*/}
                    {/*        }}>*/}
                    {/*{listItem1C.slice(number, delNumber).map((item, index) => (*/}
                    {/*    <>*/}
                    {/*        <div key={index} className={styleTechno.cardTechnologies}>*/}
                    {/*            <div style={{width: 522, height: 340, backgroundColor: "#fdba06"}}>*/}
                    {/*                <div style={{fontSize: 32, fontWeight: "bold", color: "#7c3300", padding: 20}}>{item.name}</div>*/}
                    {/*                <div style={{position: "absolute", width: 200, height: 263, background: "linear-gradient(#fdba06, #d25e01)"}}>*/}

                    {/*                </div>*/}
                    {/*                <img src="../ico_1c_logo_opt.svg" style={{width: 200, height: 100, float: "right", marginTop: 120, marginRight: 50*/}
                    {/*                }}/>*/}
                    {/*            </div>*/}
                    {/*            /!*<img src={item.preview_img} style={{width: 522, height: 340}}/>*!/*/}
                    {/*            <div className={styleTechno.titleCardTechnologies}>*/}
                    {/*                {item.name}*/}
                    {/*            </div>*/}
                    {/*            <div className={styleTechno.subTitleCardTechnologies}>*/}
                    {/*                {item.preview_text}*/}
                    {/*            </div>*/}
                    {/*            <Link href={`/techno/${item.id}`}>*/}
                    {/*                <div className={styleTechno.buttonNext}>*/}
                    {/*                    Подробнее <img style={{position: "absolute", paddingTop: 4, paddingLeft: 15}}*/}
                    {/*                                   src="../Arrow2.svg"/>*/}
                    {/*                </div>*/}
                    {/*            </Link>*/}

                    {/*        </div>*/}
                    {/*    </>*/}
                    {/*))}*/}
                    {/*    </div>*/}
                    {/*    <div style={{margin: "auto", display: "flex", paddingTop: 70, paddingLeft: "21%"}}>*/}
                    {/*        <button style={{width: 50, height: 50, marginRight: 15}}*/}
                    {/*                onClick={() => changeCardNumber("left")}*/}
                    {/*        ><img*/}
                    {/*            src="../right.svg"/></button>*/}
                    {/*        <button style={{width: 50, height: 50}}*/}
                    {/*                onClick={() => changeCardNumber("right")}*/}
                    {/*        ><img*/}
                    {/*            src="../left.svg"/></button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                </div>
                <div className={styleTechno.mainDivMobile}>
                    <div style={{maxWidth: 1084, alignItems: "center", justifyContent: "center", margin: "auto",}}>

                        <div className={style.breadCramsMobile}>
                            <Link  style={{textDecoration: "none", color: "black", opacity: 0.7}} href={`/`}>
                                <span>Главная &nbsp;   <img src="../breadPosition.svg"/> &nbsp; </span>
                            </Link>
                            <span style={{color: "black"}}>Технологии</span>
                        </div>

                            <div className={style.titleMobile}>
                                Технологии
                            </div>
                            <div className={style.subTitleMobile} >
                                В разработках программных продуктов наша компания использует самые последние достижения в области IТ-технологий:
                            </div>

                        {/*<div className={style.title}>Технологии</div>*/}

                        <div >
                            {items.map((itemTitle, index) => (
                                <div key={index} className={styleTechno.cardTechnoMobile}>
                                    <div className={styleTechno.titleCardTechnoMobile} onClick={()=> {
                                        if (index === 0){
                                            setShowFrontList(!showFrontList)
                                        }else if (index === 1 ){
                                            setShowBackList(!showBackList)
                                        }else if (index === 2){
                                            setShowMobileList(!showMobileList)
                                        }

                                    }}>
                                        {itemTitle.title} <span style={{float: "right", marginRight: "5%"}}><img src="../upImgWhite.png" /></span>
                                        {/*{itemTitle.title} <span style={{float: "right", marginRight: "5%"}}><img src="../downImgWhite.png.png" /></span>*/}

                                    </div>

                                        <div style={{}}>
                                            <ul style={{listStyleType: "none"}}>
                                                {showBackList && itemTitle.title === "BACKEND" ?
                                                    <>
                                                        {tekhnologii.data.map((item, index) => (
                                                            <>
                                                                {itemTitle.title === item.group ? <li key={index} className={styleTechno.liMobile}><img src="../Ellipse.svg"/> {item.name}</li>: null}
                                                            </>

                                                        ))}
                                                    </>

                                                    : null}
                                                {showFrontList && itemTitle.title === "FRONTEND" ?
                                                    <>
                                                        {tekhnologii.data.map((item, index) => (
                                                            <>
                                                                {itemTitle.title === item.group ? <li key={index} className={styleTechno.liMobile}><img src="../Ellipse.svg"/> {item.name}</li>: null}
                                                            </>

                                                        ))}
                                                    </>

                                                    : null}
                                                {showMobileList && itemTitle.title === "МОБИЛЬНАЯ РАЗРАБОТКА" ?
                                                    <>
                                                        {tekhnologii.data.map((item, index) => (
                                                            <>
                                                                {itemTitle.title === item.group ? <li key={index} className={styleTechno.liMobile}><img src="../Ellipse.svg"/> {item.name}</li>: null}
                                                            </>

                                                        ))}
                                                    </>

                                                    : null}
                                            </ul>
                                        </div>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div>
                        <div style={{maxWidth: 1084, alignItems: "center", justifyContent: "center", margin: "auto", paddingTop: 30}}>
                            <div className={style.titleMobile}>Frontend</div>
                        </div>
                        <hr style={{width: "100%", backgroundColor: "#006DBF", height: 3, opacity: 0.5, marginBottom: 20}}/>

                        <div>
                            {listItemFrontEnd.slice(number , delNumber -1).map((item, index) => (
                                <div key={index} className={styleTechno.cardTechnologiesMobile}>
                                    <img src={item.preview_img} style={{width: "95%", height: "auto", marginLeft: "5%"}}/>
                                    <div className={styleTechno.titleCardTechnologiesMobile}>
                                        {item.name}
                                    </div>
                                    <div className={styleTechno.subTitleCardTechnologiesMobile}>
                                        {item.preview_text}
                                    </div>
                                    <Link style={{textDecoration: "none"}} href={`/techno/${item.id}`}>
                                        <div className={styleTechno.buttonNext}>
                                            Подробнее <img style={{position: "absolute", paddingTop: 4, paddingLeft: 15}}
                                                           src="../Arrow2.svg"/>
                                        </div>
                                    </Link>

                                </div>
                            ))}
                        </div>
                        <div style={{ paddingLeft: "5%", paddingBottom: 20, paddingTop: 20}}>
                            <button style={{width: 45, height: 45, marginRight: 15, backgroundColor: "white", border: "1px solid black"}}
                                    onClick={() => changeCardNumber("left")}>
                                <img src="../right.svg" style={{width: 8 , height: 15}}/> </button>
                            <button style={{width: 45, height: 45, backgroundColor: "white", border: "1px solid black"}} onClick={() => changeCardNumber("right")}>
                                <img src="../left.svg" style={{width: 8 , height: 15}}/></button>
                        </div>
                        <div style={{fontSize: 16,
                            fontWeight: 600,
                            fontFamily: "Open Sans",
                            color: "white",
                            backgroundColor: "#125E97",
                            textAlign: "center",
                            height: 56,
                            width: 296,
                            paddingTop: 20,
                            margin: "auto",
                        }}>
                            СМОТРЕТЬ ВСЕ
                        </div>


                    </div>
                    <div>
                        <div style={{maxWidth: 1084, alignItems: "center", justifyContent: "center", margin: "auto", paddingTop: 30}}>
                            <div className={style.titleMobile}>BACKEND</div>
                        </div>
                        <hr style={{width: "100%", backgroundColor: "#006DBF", height: 3, opacity: 0.5, marginBottom: 20}}/>

                        <div>
                            {listItemBackEnd.slice(number, delNumber -1).map((item, index) => (
                                <>
                                    <div key={index} className={styleTechno.cardTechnologiesMobile}>
                                        <img src={item.preview_img} style={{width: "95%", height: "auto", marginLeft: "5%"}}/>
                                        <div className={styleTechno.titleCardTechnologiesMobile}>
                                            {item.name}
                                        </div>
                                        <div className={styleTechno.subTitleCardTechnologiesMobile}>
                                            {item.preview_text}
                                        </div>
                                        <Link style={{textDecoration: "none"}} href={`/techno/${item.id}`}>
                                            <div className={styleTechno.buttonNext}>
                                                Подробнее <img style={{position: "absolute", paddingTop: 4, paddingLeft: 15}}
                                                               src="../Arrow2.svg"/>
                                            </div>
                                        </Link>
                                    </div>
                                </>
                            ))}
                        </div>
                        <div style={{ paddingLeft: "5%", paddingBottom: 20, paddingTop: 20}}>
                            <button style={{width: 45, height: 45, marginRight: 15, backgroundColor: "white", border: "1px solid black"}}
                                    onClick={() => changeCardNumber("left")}>
                                <img src="../right.svg" style={{width: 8 , height: 15}}/> </button>
                            <button style={{width: 45, height: 45, backgroundColor: "white", border: "1px solid black"}} onClick={() => changeCardNumber("right")}>
                                <img src="../left.svg" style={{width: 8 , height: 15}}/></button>
                        </div>
                        <div style={{fontSize: 16,
                            fontWeight: 600,
                            fontFamily: "Open Sans",
                            color: "white",
                            backgroundColor: "#125E97",
                            textAlign: "center",
                            height: 56,
                            width: 296,
                            paddingTop: 20,
                            margin: "auto",
                        }}>
                            СМОТРЕТЬ ВСЕ
                        </div>
                    </div>
                    <div>
                        <div style={{maxWidth: 1084, alignItems: "center", justifyContent: "center", margin: "auto", paddingTop: 30}}>
                            <div className={style.titleMobile}>МОБИЛЬНАЯ РАЗРАБОТКА</div>
                        </div>
                        <hr style={{width: "100%", backgroundColor: "#006DBF", height: 3, opacity: 0.5, marginBottom: 20}}/>

                        <div>
                            {listItemMobile.slice(number, delNumber -1).map((item, index) => (
                                <>
                                    <div key={index} className={styleTechno.cardTechnologiesMobile}>
                                        <img src={item.preview_img} style={{width: "95%", height: "auto", marginLeft: "5%"}}/>
                                        <div className={styleTechno.titleCardTechnologiesMobile}>
                                            {item.name}
                                        </div>
                                        <div className={styleTechno.subTitleCardTechnologiesMobile}>
                                            {item.preview_text}
                                        </div>
                                        <Link style={{textDecoration: "none"}} href={`/techno/${item.id}`}>
                                            <div className={styleTechno.buttonNext}>
                                                Подробнее <img style={{position: "absolute", paddingTop: 4, paddingLeft: 15}}
                                                               src="../Arrow2.svg"/>
                                            </div>
                                        </Link>
                                    </div>
                                </>
                            ))}
                        </div>
                        <div style={{ paddingLeft: "5%", paddingBottom: 20, paddingTop: 20}}>
                            <button style={{width: 45, height: 45, marginRight: 15, backgroundColor: "white", border: "1px solid black"}}
                                    onClick={() => changeCardNumber("left")}>
                                <img src="../right.svg" style={{width: 8 , height: 15}}/> </button>
                            <button style={{width: 45, height: 45, backgroundColor: "white", border: "1px solid black"}} onClick={() => changeCardNumber("right")}>
                                <img src="../left.svg" style={{width: 8 , height: 15}}/></button>
                        </div>
                        <div style={{fontSize: 16,
                            fontWeight: 600,
                            fontFamily: "Open Sans",
                            color: "white",
                            backgroundColor: "#125E97",
                            textAlign: "center",
                            height: 56,
                            width: 296,
                            paddingTop: 20,
                            margin: "auto",
                        }}>
                            СМОТРЕТЬ ВСЕ
                        </div>
                    </div>
                </div>


                <Cooperation2 modeliSotrudnichestva={modeliSotrudnichestva}/>
                <Partners/>
                <WriteMe/>

            </MainContainer>
    )
}

export const getServerSideProps = async () => {
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