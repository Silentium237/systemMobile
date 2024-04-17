import styles from '../styles/Cooperation.module.css'
import {useState} from "react";
// import style from "../styles/Index.module.css";


export default function Cooperation2({modeliSotrudnichestva}) {

    let cardText = [
        {
            title: "Выделенная команда",
            url: "../cooperationFirstImg.png",
            text: "За каждым действующим проектом закреплена своя собственная команда, " +
                "что позволяет максимально покрузится в детали проекта и бизнес логику," +
                " проработать все скрытые моменты и избежать каких-либо нюансов при запуске.  ",
        },
        {
            title: "Проектная разработка",
            url: "../cooperationSecondImg.png",
            text: "Широй кругозор и огромная база знаний позволят создать для Вас" +
                " уникальный продукт, благодаря которому вы сможете воплотить все свои мечты в реальность",
        },
        {
            title: "Расширение команды",
            url: "../cooperationThirdImg.png",
            text: "Благодаря грамотному тайм менеджменту и наличию резервов, " +
                "скорость реализации проекта будет оставаться стабильной на протяжении всего времени реализации.",
        }
    ]


    const [showCardItem, setShowCardItem] = useState(0)
    const [pxLength, setPxLength] = useState(1)
    const [showDetail, setShowDetail] = useState(false)

    const changeCardNumber = (item) => {
        if (item === "right") {
            if (showCardItem < 2) {
                setShowCardItem(showCardItem + 1)
                setPxLength(pxLength + 80)
            }
        } else if (item === "left") {
            if (showCardItem > 0) {
                setShowCardItem(showCardItem - 1)
                setPxLength(pxLength - 80)
            }
        }
    }


    return (
        <>
            <div className={styles.mainDivCooperation}>
                <div className={styles.cooperation}>
                    Модель Сотрудничества
                </div>
                <div className={styles.titleCoopNext}>Фиксированный проект (Fixed Project)</div>
                <hr style={{width: "50%", backgroundColor: "#1d88d9", color: "#197fc9", border: "none", height: 1, marginTop: 22 }}/>
                <div style={{width: 1074, display: "flex", alignItems: "center", justifyContent: "space-between", margin: "auto"}}>
                <span style={{width: 522}} >
                    <div className={styles.subTitleCoopNext}>Заказчик определяет свои потребности и ожидания,
                        а IT-компания разрабатывает и доставляет продук или услугу в соответствии с заданными параметрами. </div>
                    <br/>
                    <div className={styles.subTitleCoopNext}>Заказчик определяет свои потребности и ожидания,
                        а IT-компания разрабатывает и доставляет продук или услугу в соответствии с заданными параметрами. </div>
                    <br/>
                    <div className={styles.subTitleCoopNext} >Заказчик определяет свои потребности и ожидания,
                        а IT-компания разрабатывает и доставляет продук или услугу в соответствии с заданными параметрами. </div>
                    <br/>

                    <div style={{backgroundColor: "#125E97",
                        width: 355,
                        height: 70 ,
                        textAlign: "center",
                        paddingTop: 26,
                        color: "white",
                        fontWeight:600,
                        fontSize: 16,
                        position: "absolute"
                    }}>НАЧАТЬ СОТРУДНИЧЕСТВО</div>
                </span>
                    <span>
                    <img src="../serviceImg1.png" width="502px" height="423px"/>
                </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", maxWidth: 1150, paddingTop: 65, marginLeft: -75}}>
                    <button style={{width: 75, height: 75, marginRight: 15, backgroundColor: "white", border: "1px solid black"}}
                            onClick={() => changeCardNumber("left")}>  <img
                        src="../right.svg"/> </button>
                    <button style={{width: 75, height: 75, backgroundColor: "white", border: "1px solid black"}} onClick={() => changeCardNumber("right")}>  <img
                        src="../left.svg"/></button>
                </div>
            </div>



            <div className={styles.mainDivCooperationMobile}>

                <div className={styles.cooperationMobile}>
                    Модель Сотрудничества
                </div>
                <div style={{padding: "5%"}}>
                    <img src="../serviceImg1.png" width="100%" />
                </div>

                <div className={styles.titleCoopNextMobile}>Фиксированный проект (Fixed Project)</div>
                <hr style={{
                    width: "100%",
                    backgroundColor: "#1d88d9",
                    color: "#197fc9",
                    border: "none",
                    height: 1,
                    marginTop: 10,
                    marginLeft: "5%",
                    marginRight: "5%",
                    marginBottom: 10
                }}/>
                    <div className={styles.subTitleCoopNextMobile}>
                       В этой модели заказчик и IT-компания заключают контракт на выполнение конкретного проекта с фиксированными тре..
                    </div>
                    <div style={{backgroundColor: "#125E97",
                        width: "100%",
                        height: 70 ,
                        textAlign: "center",
                        paddingTop: 26,
                        color: "white",
                        fontWeight:600,
                        fontSize: 16,
                        position: "absolute",
                        marginLeft: "5%",
                        marginRight: "5%"
                    }}>ЧИТАТЬ ПОЛНОСТЬЮ</div>

                {/*<div style={{paddingLeft: "5%", paddingBottom: 20 }}>*/}
                {/*    <button style={{width: 45, height: 45, marginRight: 15, backgroundColor: "white", border: "1px solid black"}}*/}
                {/*            onClick={() => changeCardNumber("left")}>*/}
                {/*        <img src="../right.svg" style={{width: 8 , height: 15}} />*/}
                {/*    </button>*/}
                {/*    <button style={{width: 45, height: 45, backgroundColor: "white", border: "1px solid black"}} onClick={() => changeCardNumber("right")}>*/}
                {/*        <img src="../left.svg" style={{width: 8 , height: 15}} />*/}
                {/*    </button>*/}
                {/*</div>*/}

                <div style={{ paddingLeft: "5%", paddingBottom: 20, paddingTop: 100}}>
                    <button style={{width: 45, height: 45, marginRight: 15, backgroundColor: "white", border: "1px solid black"}}
                            onClick={() => changeCardNumber("left")}>
                        <img src="../right.svg" style={{width: 8 , height: 15}}/> </button>
                    <button style={{width: 45, height: 45, backgroundColor: "white", border: "1px solid black"}} onClick={() => changeCardNumber("right")}>
                        <img src="../left.svg" style={{width: 8 , height: 15}}/></button>
                </div>
            </div>

        </>

    )
}
