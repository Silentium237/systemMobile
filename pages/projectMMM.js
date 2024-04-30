import MainContainer from "../components/MainContainer";
import Partners from "../components/Partners";
import WriteMe from "../components/WriteMe";
import style from "../styles/Service.module.css"
import styleProject from "../styles/ProjectOne.module.css"

import MainImgForAnotherPage from "../components/MainImgForAnotherPage";
import Cooperation from "../components/Cooperation";
import {useState} from "react";
import Cooperation2 from "../components/Cooperation2";
import Link from "next/link";
import {Button} from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import styleOurValue from "../styles/OurValue.module.css";
import styles from "../styles/Cooperation.module.css";



const objForMainCoal = [
    {
        name: "ЦЕЛИ",
        text: "Сокращение времени на выполнение операций благодаря упрощенной и стандартизированной передаче информации и документов между сотрудниками и звеньями логистической цепочки",
        open: false
    },
    {
        name: "ЗАДАЧИ",
        text: "Отслеживание местоположения сотрудников: приложение позволяет контролировать местоположение выездных сотрудников в реальном времени, что помогает оптимизировать работу и предотвращать задержки.",
        open: false
    }]


export default function projectMMM ({cardText, tekhnologii, modeliSotrudnichestva,services}){
    const [show , setShow] =useState(false)
    const ChangeShowText = () => {
        setShow(!show)
    }
    const [indexImg , setIndexImg] = useState(0)
    const [showBigSizeImg , setShowBigSizeImg] = useState(false)
    const [showVideo , setShowVideo] = useState(false)
    const [showText , setShowText] = useState(false)
    const [count, setCount] = useState(0)


    const [showObj, setShowObj] = useState(objForMainCoal)

    function changeShowIndex (index) {
        let a = showObj
        for (let i = 0; i< a.length; i++){
            if (index === i){
                a[i].open = !a[i].open
            }
        }
        setShowObj(a)
    }
    const clickSmallImg = (indexValue) =>{
        setIndexImg(indexValue)
        setShowVideo(false)
    }

    let itemGoalFirst = [
        {goal: "Сокращение времени на выполнение операций благодаря упрощенной и стандартизированной передаче информации и документов между сотрудниками и звеньями логистической цепочки"

        },  {goal: "Снижение риска ошибок и потерь за счет четкого контроля и мониторинга процесса передачи грузов и документов"

        },
    ]
    let itemGoalSecond = [
        {goal: "Увеличение производительности и эффективности работы сотрудников за счет автоматизации и оптимизации задач и маршрутов"

        },  {goal: "Улучшение качества обслуживания клиентов за счет быстрой реакции на их запросы и информирование о статусе выполнения заказа"

        },
    ]
    let itemTaskFirst = [
        {task: "Отслеживание местоположения сотрудников: приложение позволяет контролировать местоположение выездных сотрудников в реальном времени, что помогает оптимизировать работу и предотвращать задержки."

        },     {task: "Оптимизация маршрутов и расписания работы сотрудников: приложение позволяет создавать оптимальные маршруты для экспедиторов/водителей, учитывая трафик, время доставки и другие факторы"
        },

    ]
    let itemTaskSecond = [
        {task: "Ведение электронных отчетов: с помощью приложения сотрудники могут заполнять электронные отчеты о выполненной работе, переданных грузах и других данных, что упрощает процесс учета и контроля"

        },     {task: "Подтверждение доставки: приложение позволяет экспедиторам/водителям подтверждать доставку грузов и документов с помощью цифровой подписи или фотоотчетов, что обеспечивает верификацию процесса передачи"
        },

    ]
    let imgProjectArray = [
        {
            projectImgBig: "../1.png",
            projectImgSmall: "../1.png",
        },
        {
            projectImgBig: "../2.png",
            projectImgSmall: "../2.png",
        },
        {
            projectImgBig: "../3.png",
            projectImgSmall: "../3.png",
        },
        {
            projectImgBig: "../4.png",
            projectImgSmall: "../4.png",
        },
    ]

    let mainTextDescription = ["Наше приложение предназначено для организации эффективной работы с выездными сотрудниками-экспедиторами и водителями, а также для верификации процесса передачи грузов и документов в каждом из звеньев логистической цепочки. \n" +
    "\n" +
    "С помощью нашего приложения менеджеры могут назначать задачи сотрудникам, отслеживать их выполнение, контролировать маршруты и время прибытия, а также сохранять всю необходимую информацию о заказах, грузах и клиентах.",
        "Выездные сотрудники могут в реальном времени отмечать выполнение задач, загружать необходимые документы и отчёты, обмениваться информацией с офисом и клиентами. Для водителей предусмотрены инструменты для мониторинга груза, оптимизации маршрутов и обмена информацией с диспетчерами. " +
        "Также в приложении реализована система верификации процесса передачи грузов и документов в каждом звене логистической цепочки. Это позволяет отслеживать всю цепочку передачи груза, уменьшать риски потери, повреждения или задержки груза, а также повысить прозрачность и эффективность работы всей логистической цепочки.Наше приложение поможет вашей компании улучшить организацию работы с выездными сотрудниками, упростить процесс обмена информацией и документами, а также повысить качество обслуживания клиентов."]



        const technologies = [
            "TypeScript",
            "React",
            "Kotlin",
            "S3 Minio",
            "Python",
            "API(Telegram)",
        ]


    return(
        <MainContainer services={services} tekhnologii={tekhnologii}>
            {/*<MainImgForAnotherPage/>*/}
            <div className={styleProject.mainDiv}>
                <div style={{width: 1084,  alignItems: "center", justifyContent: "center", margin: "auto", }}>

                    <div className={style.breadCrams}>
                        <span>Главная &nbsp;   <img src="../breadPosition.svg"/> &nbsp; </span>
                        <span>Проекты и решения &nbsp;   <img src="../breadPosition.svg"/> &nbsp; </span>
                        <span style={{color: "black"}}>MMM</span>
                    </div>
                    <div className={style.title}>MMM</div>

                </div>

                <div style={{paddingTop: 90, paddingRight: 45,}} className={styleProject.mainBlock}>
                <span>
                    {showVideo ?   <div style={{position: "center", alignItems: "center", margin: "auto", display: "flex", justifyContent: "center"}}>
                        <video width="624" height="433" controls="controls" poster="video/duel.jpg">
                            {/*<source src="video/duel.ogv" type='video/ogg; codecs="theora, vorbis"'/>*/}
                            <source src="../b2bVideo.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
                            {/*<source src="video/duel.webm" type='video/webm; codecs="vp8, vorbis"'/>*/}
                            Тег video не поддерживается вашим браузером.
                            <a href="../b2bVideo.mp4">Скачайте видео</a>
                        </video>
                    </div>:  <>
                        <img onClick={()=> setShowBigSizeImg(true)} style={{position: "absolute", paddingTop: 10, paddingLeft: 10, cursor: "pointer"}} src="../glassPlus.svg"/>
                        <div style={{border: "1px solid rgba(0, 146, 255, 0.3)", alignItems: "center", justifyContent: "center", margin: "auto", display: "flex"}}><img style={{maxWidth: 624, height:433 }} src={imgProjectArray[indexImg].projectImgBig}/></div>

                    </>}

                    <div onClick={()=> setShowBigSizeImg(false)} style={showBigSizeImg ? {border: "1px solid rgba(0, 146, 255, 0.3)", position: "absolute", marginTop: "-460px", cursor: "pointer"}: {display: "none"}}><img width="1078" height="720" src={imgProjectArray[indexImg].projectImgBig}/></div>
                    <div>
                        {imgProjectArray.map((item, index)=>(
                            <img key={index}
                                 width="150px"
                                 height="150px"
                                 style={index !== imgProjectArray.length -1 ? {marginRight: 8, marginTop:20, border: "1px solid rgba(0, 146, 255, 0.3)"} : {marginTop: 20,border: "1px solid rgba(0, 146, 255, 0.3)"}}
                                 src={item.projectImgBig}
                                 onClick={()=>  clickSmallImg(index)}
                            />
                        ))}

                    </div>
                </span>
                    <span>
                    <div style={{height: 50 ,paddingLeft: 50, marginTop: -10}} className={styleProject.cardTitle}>
                        Краткая информация:
                    </div>
                    <div style={{height: 150 ,paddingLeft: 50, width: 410}} className={styleProject.cardSubTitle}>
                       Комплексное решение для организация эффективной работы с выездными сотрудниками-экспедиторами/водителями, верификация процесса передачи грузов и документов в каждом из звеньев логистической цепочки
                    </div>
                    <div style={{height: 50 ,paddingLeft: 50}} className={styleProject.cardTitle}>
                        Технологии:
                    </div>
                    <div style={{height: 100 ,paddingLeft: 50}}>
                        <ul style={{listStyleType: "none"}}>
                            {technologies.map((item, index)=>(
                                <li className={styleProject.li} key={index}> <img style={{paddingRight: 20}} src="../Ellipse.svg"/>{item}</li>
                            ))}

                            {/*<li className={styleProject.li}> <img style={{paddingRight: 20}} src="../Ellipse.svg"/> NestJS</li>*/}
                            {/*<li className={styleProject.li}> <img  style={{paddingRight: 20}} src="../Ellipse.svg"/> React JS</li>*/}
                        </ul>
                    </div>
                    <div style={{height: 20 ,paddingLeft: 50, paddingTop: 40}} className={styleProject.cardTitle}>
                        Презентации и мультимедийный материал:
                    </div>
                    <div style={{height: 50 ,paddingLeft: 50,paddingRight:50,paddingTop: 40, marginBottom: 70}}>
                        <span><img style={{paddingRight: 15}} src="../wordIcon.svg"/></span>
                        <span><img style={{paddingRight: 15}} src="../powerPointIcon.svg"/></span>
                        <span><img src="../pdfIcon.svg"/></span>

                    </div>
                    {/*<div style={{height: 70, marginLeft: 50, }} className={styleProject.buttonVideo}>*/}
                    {/*        <div className={styleProject.buttonVideoText} onClick={()=> setShowVideo(!showVideo)}> смотреть видео</div>*/}
                    {/*</div>*/}
                </span>
                </div>


                <div style={{marginTop: 150}} className={styleProject.subCard}>
                <span style={{marginTop: -220, marginLeft: 20}} className={styleProject.taskTitle}>
                    Цели:
                </span>
                    <span >
                    <div style={{}}>
                        {itemGoalFirst.map(item => (
                            <>
                                <img style={{position: "absolute",  paddingTop: 15}} src="../Ellipse.svg"/>
                                <div style={{width: 400, display: "flex", padding: 10, marginLeft: 10}}>
                                    {item.goal}
                                </div>
                            </>

                        ))}
                    </div>
                </span>  <span >
                    <div style={{}}>
                        {itemGoalSecond.map(item => (
                            <>
                                <img style={{position: "absolute",  paddingTop: 15}} src="../Ellipse.svg"/>
                                <div style={{width: 400, display: "flex", padding: 10, marginLeft: 10}}>
                                    {item.goal}
                                </div>
                            </>

                        ))}
                    </div>
                </span>


                </div>  <div style={{marginTop: 40}} className={styleProject.subCard}>
                <span style={{marginTop: -220, marginLeft: 20}} className={styleProject.taskTitle}>
                    Задачи:
                </span>
                <span >
                    <div style={{}}>
                        {itemTaskFirst.map(item => (
                            <>
                                <img style={{position: "absolute",  paddingTop: 15}} src="../Ellipse.svg"/>
                                <div style={{width: 400, display: "flex", padding: 10, marginLeft: 10}}>
                                    {item.task}
                                </div>
                            </>

                        ))}
                    </div>
                </span>  <span >
                    <div style={{}}>
                        {itemTaskSecond.map(item => (
                            <>
                                <img style={{position: "absolute",  paddingTop: 15}} src="../Ellipse.svg"/>
                                <div style={{width: 400, display: "flex", padding: 10, marginLeft: 10}}>
                                    {item.task}
                                </div>
                            </>

                        ))}
                    </div>
                </span>
            </div>
                <div  className={styleProject.divDescription}>

                       <span style={{ width: 500}}>
                      <p className={styleProject.descriptionTitle}>Подробное описание</p>
                <p className={styleProject.descriptionText}>
                    {mainTextDescription[0]}
                    {show ? <>
                        {mainTextDescription[1]}
                    </>: null}
                  </p>


                           <div className={styleProject.buttonDescription} onClick={()=> ChangeShowText()}>
                               <div className={styleProject.buttonDescriptionText}>
                                   читать полностью
                               </div>
                           </div>
                </span>

                    <span>
                     <img src="../description.png"  />
                </span>



                </div>
            </div>
            <div className={styleProject.mainDivMobile}>
                <div className={style.breadCramsMobile}>
                    <Link  style={{textDecoration: "none", color: "gray", opacity: 0.7}} href={`/`}>
                        <span>Главная &nbsp;   <img src="../breadPosition.svg"/> &nbsp; </span>
                    </Link>
                    <Link  style={{textDecoration: "none", color: "gray", opacity: 0.7}} href={`/project`}>
                        <span>Проекты и решения &nbsp;   <img src="../breadPosition.svg"/> &nbsp; </span>
                    </Link>
                    <span style={{color: "black"}}>MMM</span>
                </div>
                <div className={style.titleMobile}>MMM</div>

                <span>
                    {showVideo ?   <div style={{position: "center", alignItems: "center", margin: "auto", display: "flex", justifyContent: "center"}}>
                        <video width="90%"  controls="controls" poster="video/duel.jpg">
                            {/*<source src="video/duel.ogv" type='video/ogg; codecs="theora, vorbis"'/>*/}
                            <source src="../b2bVideo.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
                            {/*<source src="video/duel.webm" type='video/webm; codecs="vp8, vorbis"'/>*/}
                            Тег video не поддерживается вашим браузером.
                            <a href="../b2bVideo.mp4">Скачайте видео</a>
                        </video>
                    </div>:  <>
                        <div style={{border: "1px solid rgba(0, 146, 255, 0.3)", marginLeft: "5%", marginRight: "5%"}}>
                            <img style={{width: "90%", marginLeft: "5%", marginRight: "5%"}} src={imgProjectArray[indexImg].projectImgBig}/>
                        </div>
                    </>}

                    <div onClick={()=> setShowBigSizeImg(false)} style={showBigSizeImg ? {border: "1px solid rgba(0, 146, 255, 0.3)", position: "absolute", marginTop: "-460px", cursor: "pointer"}: {display: "none"}}>
                        <img style={{width: "90%"}} src={imgProjectArray[indexImg].projectImgBig}/>
                    </div>
                    <div style={{marginLeft: "5%"}}>
                        {imgProjectArray.map((item, index)=>(
                            <img key={index}
                                 width="60px"
                                 height="60px"
                                 style={index !== imgProjectArray.length -1 ? {marginRight: 8, marginTop:20, border: "1px solid rgba(0, 146, 255, 0.3)"} : {marginTop: 20,border: "1px solid rgba(0, 146, 255, 0.3)"}}
                                 src={item.projectImgBig}
                                 onClick={()=>  clickSmallImg(index)}
                            />
                        ))}
                    </div>
                </span>

                <span>
                    <div className={styleProject.cardTitleMobile}>
                        Краткая информация:
                    </div>
                    <div className={styleProject.cardSubTitleMobile}>
                        Комплексное решение для организация эффективной работы с выездными сотрудниками-экспедиторами/водителями, верификация процесса передачи грузов и документов в каждом из звеньев логистической цепочки
                    </div>
                    <div className={styleProject.cardTitleMobile}>
                        Технологии:
                    </div>
                    <div style={{height: 100, marginLeft: "5%"}}>
                        <ul style={{listStyleType: "none"}}>
                            {technologies.map((item, index)=> (
                                <li className={styleProject.li} key={index}> <img style={{paddingRight: 20}} src="../Ellipse.svg"/>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={styleProject.cardTitleMobile} style={{paddingTop: 50}}>
                        Презентации и мультимедийный материал:
                    </div>
                    <div style={{height: 50 ,padding: 50, marginBottom: 70}}>
                        <span><img style={{paddingRight: 15}} src="../wordIcon.svg"/></span>
                        <span><img style={{paddingRight: 15}} src="../powerPointIcon.svg"/></span>
                        <span><img src="../pdfIcon.svg"/></span>

                    </div>
                    {/*<Button className={styleProject.buttonVideoMobile} onClick={()=> setShowVideo(!showVideo)}>*/}
                    {/*        <PlayArrowIcon style={{marginBottom: 5, marginRight: 5}}/>смотреть видео*/}
                    {/*</Button>*/}
                </span>
                <div style={{paddingTop: 30}} >
                    {showObj.map((item,index) => (
                        <div key={index} className={styleOurValue.cardStyleMobile} style={{cursor: "pointer"}} onClick={()=> (changeShowIndex(index), setCount(index))}>
                            <div style={{width: "90%", marginLeft:12, }} onClick={()=> (changeShowIndex(index), setCount(index))  }>
                                <div className={styleOurValue.titleMobile} style={{color: "#125E97", paddingTop: 30}} onClick={()=> (changeShowIndex(index), setCount(index))  }>
                                    {item.name} <span style={{float: "right"}}><img src="../downImg.png" style={item.open ? {transform: "scale(1, -1)"}:{}} /></span>
                                </div>
                                <div className={styleOurValue.subTitleMobile}  onClick={()=> (changeShowIndex(index), setCount(index))  }>
                                    {item.open ? item.text : ""}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                <div className={styleProject.mainDescriptionMobile}>
                    ПОДРОБНОЕ ОПИСАНИЕ
                </div>
                <div style={{marginLeft: "5%", paddingTop: 30, paddingBottom: 20}}>
                    <img src={imgProjectArray[0].projectImgBig} style={{width: "90%"}}/>
                </div>
                <div className={styleProject.mainTextDescriptionMobile} >
                    {mainTextDescription[0]}
                </div>
                {showText ? <div className={styleProject.mainTextDescriptionMobile} >
                    {mainTextDescription[1]}
                </div>: null}
                {/*<Button className={styleProject.buttonVideoMobile} style={{marginTop: 20, marginBottom: 60}}  onClick={()=> setShowText(!showText)}>*/}
                {/*    читать полностью*/}
                {/*</Button>*/}
                <div className={styles.readAllText} style={{marginTop: 30 }}
                     onClick={()=> setShowText(!showText)}>{!showText ? "ЧИТАТЬ ПОЛНОСТЬЮ" : "СВЕРНУТЬ" }
                </div>
                <br/>
                <br/>
                <br/>
            </div>



            <div style={{paddingTop: 130}}>
                <Cooperation2 modeliSotrudnichestva={modeliSotrudnichestva}/>
            </div>



            <Partners/>
            <WriteMe/>

        </MainContainer>

    )
}

export const getServerSideProps = async () =>{



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