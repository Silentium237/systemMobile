import MainContainer from "../components/MainContainer";
import Partners from "../components/Partners";
import WriteMe from "../components/WriteMe";
import style from "../styles/Service.module.css"
import {useState} from "react";
import styleTechno from "../styles/MainTechnoPage.module.css";
import Link from "next/link";
import Cooperation2 from "../components/Cooperation2";


const items = [
    {title: "FRONTEND", show: false, data: []},
    {title: "BACKEND", show: false, data: []},
    {title: "МОБИЛЬНАЯ РАЗРАБОТКА", show: false, data: []},
]

export default function techno({tekhnologii, services, modeliSotrudnichestva}) {



    for (let i=0; i< tekhnologii.data.length; i++){
        if (tekhnologii.data[i].group === "FRONTEND"){
            items[0].data.push(tekhnologii.data[i])
        }else if (tekhnologii.data[i].group === "BACKEND"){
            items[1].data.push(tekhnologii.data[i])
        }else if (tekhnologii.data[i].group === "МОБИЛЬНАЯ РАЗРАБОТКА"){
            items[2].data.push(tekhnologii.data[i])
        }
    }

    const [number, setNumber] = useState(0)
    const [delNumber, setDelNumber] = useState(2)

    const [empty, setEmpty] = useState(false)
    const [leftHover, setLeftHover] = useState(false)
    const [rightHover, setRightHover] = useState(false)
    const [cardNumber, setCardNumber] = useState(1)


    const changeCardNumber = (value) => {
        if (value === "right" ) {
            setNumber(number + 1)
            setDelNumber(delNumber + 1)
        } else if (value === "left" && number > 0) {
            setNumber(number - 1)
            setDelNumber(delNumber - 1)
        }
    }

    const changeArray = (value) => {
        items[value].show = !items[value].show ;
        setEmpty(!empty)
    }

    return (
            <MainContainer tekhnologii={tekhnologii} services={services}>
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
                                                <div key={index}>
                                                    {itemTitle.title === item.group ?
                                                        <Link style={{textDecoration: "none"}} href={`/techno/${item.id}`}>
                                                            <li key={index} className={styleTechno.li}><img src="../Ellipse.svg"/> {item.name}</li>
                                                        </Link>
                                                        : null}
                                                </div>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {items.map((item, index)=>(
                        <div key={index}>
                            <div style={{maxWidth: 1084, alignItems: "center", justifyContent: "center", margin: "auto"}}>
                                <div className={style.title}>{item.title}</div>
                            </div>
                            <hr style={{width: 650, backgroundColor: "#006DBF", height: 3, opacity: 0.5}}/>

                            <div style={{
                                    maxWidth: 1084,
                                    margin: "auto",
                                    display: "flex",
                                    justifyContent: "center",
                                    paddingTop: 70,
                                    flexWrap: "wrap",
                                    alignItems: "center"
                                }}>
                                {item.data.slice(number, delNumber).map((item, index) => (
                                    <div key={index} className={styleTechno.cardTechnologies}>
                                        <img src={item.preview_img} style={{width: 522, height: 340}}/>
                                        <div className={styleTechno.titleCardTechnologies}>
                                            {item.name}
                                        </div>
                                        <div className={styleTechno.subTitleCardTechnologies}>
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

                            <div style={{ marginTop: 65 , marginLeft: "19.5vw" }}>
                                <img  onClick={() => changeCardNumber("left")}
                                     src={leftHover ? "../buttonRightHover.png" : (cardNumber === 0 ? "../buttonLeftNonActive.png" : "../buttonRightActive.png")  }
                                     onMouseEnter={()=>setLeftHover(true)}
                                     onMouseLeave={()=>setLeftHover(false)}
                                     style={leftHover ? {cursor: "pointer", marginRight: 13,transform: "scale(-1, 1)"} : (cardNumber === 0 ? {cursor: "pointer", marginRight: 13} : {cursor: "pointer", transform: "scale(-1, 1)", marginRight: 13})}
                                />

                                <img
                                    onClick={() => changeCardNumber("right")}
                                    onMouseEnter={()=>setRightHover(true)}
                                    onMouseLeave={()=>setRightHover(false)}
                                    src={rightHover ? "../buttonRightHover.png" : (cardNumber === 2 ? "../buttonLeftNonActive.png" : "../buttonRightActive.png")  }
                                    style={rightHover ? {cursor: "pointer", marginRight: 13} : (cardNumber === 2 ? {cursor: "pointer", transform: "scale(-1, 1)"} : {cursor: "pointer"})}
                                />
                            </div>

                        </div>
                    ))
                    }
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
                        <div >
                            {items.map((itemTitle, index) => (
                                <div key={index} className={styleTechno.cardTechnoMobile}>
                                    <>
                                        <div className={styleTechno.titleCardTechnoMobile} onClick={()=> changeArray(index)}>
                                            {itemTitle.title}
                                            <span style={{float: "right", marginRight: "5%"}}>
                                                <img src="../upImgWhite.png" style={itemTitle.show ? {transform: "scale(1, -1)"} : {}} />
                                            </span>
                                        </div>
                                        {itemTitle.show ?
                                            <div >
                                                <ul style={{listStyleType: "none"}}>
                                                    {tekhnologii.data.map((item, index) => (
                                                        <>
                                                            {itemTitle.title === item.group ?
                                                                <Link style={{textDecoration: "none"}} href={`/techno/${item.id}`}>
                                                                    <li key={index} className={styleTechno.liMobile}>
                                                                        <img src="../Ellipse.svg" style={{paddingRight: 5}}/>
                                                                        {item.name}
                                                                    </li>
                                                                </Link>
                                                               : null}
                                                        </>
                                                    ))}
                                                </ul>
                                            </div> : null
                                        }
                                    </>
                                </div>
                            ))}
                        </div>
                    </div>

                    {items.map((item, index)=>(
                        <div key={index}>
                            <div style={{maxWidth: 1084, alignItems: "center", justifyContent: "center", margin: "auto", paddingTop: 30}}>
                                <div className={style.titleMobile}>{item.title}</div>
                            </div>
                            <hr style={{width: "100%", backgroundColor: "#006DBF", height: 3, opacity: 0.5, marginBottom: 20}}/>

                            <div>
                                {item.data.slice(number , delNumber -1).map((item, index) => (
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
                            <div style={{ paddingLeft: "5%", paddingBottom: 20, paddingTop: 40}}>
                                <img onClick={() => changeCardNumber("left")}
                                     src={number === 0 ? "../buttonLeftNonActive.png" : "../buttonRightActive.png"  }
                                     width={45}
                                     style={number === 0 ? {cursor: "pointer", marginRight: 13} : {cursor: "pointer", transform: "scale(-1, 1)", marginRight: 13}}
                                />

                                <img
                                    onClick={() => changeCardNumber("right")}
                                    width={45}
                                    src={number === 2 ? "../buttonLeftNonActive.png" : "../buttonRightActive.png"  }
                                    style={number === 2 ? {cursor: "pointer", transform: "scale(-1, 1)"} : {cursor: "pointer"}}
                                />
                            </div>
                            <div className={styleTechno.seeAll}>
                                СМОТРЕТЬ ВСЕ
                            </div>
                        </div>
                    ))}
                </div>

                <Cooperation2 modeliSotrudnichestva={modeliSotrudnichestva}/>
                <Partners/>
                <WriteMe/>
            </MainContainer>
    )
}

export const getServerSideProps = async () => {
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