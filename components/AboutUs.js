import styles from '../styles/AboutUs.module.css'
import {useState} from "react";
// import style from "../styles/Index.module.css";


export default function AboutUs() {

    let cardText = [
        {
            title: "Профессиональная команда",
            text1: "20 высококлассных специалистов",
            text2: "достижение общей цели",
            text3: "вовлечение в бизнес интегрирование каждого проекта",

        },
        {
            title: "Комплексный подход",
            text1: "Точное понимание потребностей клиента",
            text2: "Механизм быстрого апробирования решений в бизнес-процессах",
            text3: "Наличие собственного центра сопровождения клиентов",
        },
        {
            title: "Программа лояльности",
            text1: "Гибкая система лояльности для наших постоянных клиентов",
            text2: "VIP - обслуживание",
            text3: "Многоуровневое поощрение клиентов",
        }
    ]


    const [showCardItem, setShowCardItem] = useState(0)
    const [pxLength, setPxLength] = useState(1)

    const changeCardNumber = (item)=> {
        if (item === "right"){
            if (showCardItem < 2){
                setShowCardItem(showCardItem + 1)
                setPxLength(pxLength + 80)
            }

        }else if (item === "left"){
            if (showCardItem > 0){
                setShowCardItem(showCardItem - 1)
                setPxLength(pxLength - 80)
            }

        }

    }


    return (
        <>
            <div className={styles.about}>
                 О НАС
            </div>
            <div style={{height: 900, margin: "auto", display: "flex", alignItems: "center", justifyContent: "center",}}>
                <img style={{position: "absolute", }} src="../Group59.svg"/>
           <span>
                <p style={{
                    borderLeft: "8px solid #0092FF",
                    height: 80,
                    position: "absolute",
                    marginTop: pxLength
                }}></p>

           <p style={{
               borderLeft: "8px solid rgba(178, 179, 179, 0.5)",
               height: 240
           }}></p>
           <p style={{paddingTop: 150}}>
                            <button style={{width: 50, height: 50, marginRight: 15}} onClick={()=>changeCardNumber("left")}>  <img
                                src="../right.svg"/> </button>
                            <button style={{width: 50, height: 50}} onClick={()=>changeCardNumber("right")}>  <img src="../left.svg"/></button>
                        </p>
           </span>

                {cardText.map((item, index) => (
                    <>
                        {index === showCardItem ?
                            <span className={styles.cardStyle} key={index}>
               <div className={styles.cardTextFontStyle}>
               <div className={styles.cardTextTitle}>
           {item.title}
               </div>
               </div>
               <div className={styles.cardSubTextTitle}>
               <img src="../Check.svg"/> {item.text1}
                   <hr style={{width: 315, opacity: 0.5, marginTop: 20}}/>
               </div>
               <div className={styles.cardSubTextTitle}>
               <img src="../Check.svg"/> {item.text2}
                   <hr style={{width: 315, opacity: 0.5, marginTop: 20}}/>
               </div>
               <div className={styles.cardSubTextTitle}>
               <img src="../Check.svg"/> {item.text3}
                   <hr style={{width: 315, opacity: 0.5, marginTop: 20}}/>
               </div>
               </span>
                            : null
                        }
                    </>


                ))}


                {/*<img src="../line63.png"/>*/}


            </div>
        </>

    )
}
