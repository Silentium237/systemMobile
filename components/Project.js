import styles from '../styles/Cooperation.module.css'
import {useState} from "react";
// import style from "../styles/Index.module.css";


export default function Project() {

    let cardText = [
        {
            title: "BeautyHouse",
            url: "../BH2.png",
            link: "/beautyhouse",
            text: "..."
        },{
            title: "BeautyHouse",
            url: "../b2b.png",
            link: "/beautyhouse",
            text: "..."
        },{
            title: "BeautyHouse",
            url: "../pm.png",
            link: "/beautyhouse",
            text: "..."
        },{
            title: "BeautyHouse",
            url: "../shopSellwin.png",
            link: "/beautyhouse",
            text: "..."
        },
        // {
        //     title: "Проектная разработка",
        //     url: "../cooperation2.svg",
        //     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus orci sit" +
        //         " tortor imperdiet est eu tortor,perdiet est eu tortor, sagittis. Lorem ipsum perdiet est eu tortor, sagittis. Lorem ipsum perdiet est eu tortor, sagittis. Lorem ipsum  sagittis. Lorem ipsum dolor" +
        //         " sit amet, consectetur adipiscing elit.",
        // },
        // {
        //     title: "Расширение команды",
        //     url: "../cooperation3.svg",
        //     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus orci sit" +
        //         " tortor imperdiet est eu tortor, sagittis. Lorem ipsum dolor" +
        //         " sit amet, consectetur adipiscing elit.",
        // }
    ]


    const [showCardItem, setShowCardItem] = useState(0)
    const [pxLength, setPxLength] = useState(1)

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
            <div className={styles.cooperation}>
                Проекты <br/> и решения
            </div>
            <div
                style={{height: 500, margin: "auto", display: "flex", alignItems: "center", justifyContent: "center",}}>

                {cardText.map((item, index) => (
                    <>
                        {index === showCardItem ?
                            <div style={{display: "inline-flex",  paddingTop: 250, paddingLeft: 330}} key={index}>
                                <span style={{background: "rgba(0, 128, 223, 0.05)", height: 555, width: 624 }}>
                                  <img style={{padding: 20}} height="450px" width="620px" src={item.url}/>
                                    <p style={{paddingTop:38, paddingLeft: 92}} >
                                            <button style={{width: 532}} className={styles.buttonStyle}>
                                    <span style={{paddingRight:350}} className={styles.textButtonStyle}>
                                    подробнее
                                        <img style={{position: "absolute", top: 25, left: 150}} src="../ArrowNext.svg"/>
                                        <img style={{position: "absolute", top: 15, left: 450}} src="../ArrowSquareOut.svg"/>

                                </span>
                                </button>
                                    </p>

                                </span>

                            </div>
                            : null
                        }
                    </>
                ))}

            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", maxWidth: 1150, paddingTop: 80}}>
                             <button style={{width: 50, height: 50, marginRight: 15}}
                                     onClick={() => changeCardNumber("left")}>  <img
                                 src="../right.svg"/> </button>
                             <button style={{width: 50, height: 50}} onClick={() => changeCardNumber("right")}>  <img
                                 src="../left.svg"/></button>
                    <div style={{transform: "rotate(-90deg)", marginLeft: 200}}>
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
                 </div>
            </div>

        </>

    )
}
