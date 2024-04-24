import styles from '../styles/Cooperation.module.css'
import {useState} from "react";
import Link from "next/link";
// import style from "../styles/Index.module.css";


export default function Cooperation2({modeliSotrudnichestva}) {




    const [showCardItem, setShowCardItem] = useState(0)
    const [pxLength, setPxLength] = useState(1)
    const [showDetail, setShowDetail] = useState(false)
    const [cardNumber, setCardNumber] = useState(1)
    const [leftHover, setLeftHover] = useState(false)
    const [rightHover, setRightHover] = useState(false)
    const [shotText, setShotText] = useState(true)


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
                {modeliSotrudnichestva && modeliSotrudnichestva.data && modeliSotrudnichestva.data.length ? modeliSotrudnichestva.data.map((item, index)=>(
                    <div  key={index}>
                        {index === cardNumber ? <div  key={index}>
                            <div className={styles.titleCoopNext}>{item.name}</div>
                            <hr style={{width: "50%", backgroundColor: "#1d88d9", color: "#197fc9", border: "none", height: 1, marginTop: 22 }}/>
                            <div style={{maxWidth: 1074, display: "flex", alignItems: "center", justifyContent: "space-between", margin: "auto", }}>
                                <div style={{maxWidth: 522, display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    height: 410}} >
                                    <div className={styles.subTitleCoopNext} style={{lineHeight: "33px", }}>
                                        {item.preview_text}
                                    </div>
                                    <Link href="/contact" style={{textDecoration: "none"}}>
                                        <div className={styles.cooperationButton} >
                                            НАЧАТЬ СОТРУДНИЧЕСТВО
                                        </div>
                                    </Link>
                                </div>
                                <div>
                                    <img src={item.preview_img}  width="100%"/>
                                </div>
                            </div>
                        </div> : null
                    }
                    </div>
                )):null}

                <div style={{ marginTop: 65 , marginLeft: "21.5vw" }}>
                        <img onClick={() => {if (cardNumber > 0){setCardNumber(cardNumber - 1)}}}
                             src={leftHover ? "../buttonRightHover.png" : (cardNumber === 0 ? "../buttonLeftNonActive.png" : "../buttonRightActive.png")  }
                             onMouseEnter={()=>setLeftHover(true)}
                             onMouseLeave={()=>setLeftHover(false)}
                             style={leftHover ? {cursor: "pointer", marginRight: 13,transform: "scale(-1, 1)"} : (cardNumber === 0 ? {cursor: "pointer", marginRight: 13} : {cursor: "pointer", transform: "scale(-1, 1)", marginRight: 13})}
                        />

                            <img
                                onClick={() =>{if (cardNumber < 2) {setCardNumber(cardNumber + 1)}}}
                                 onMouseEnter={()=>setRightHover(true)}
                                 onMouseLeave={()=>setRightHover(false)}
                                 src={rightHover ? "../buttonRightHover.png" : (cardNumber === 2 ? "../buttonLeftNonActive.png" : "../buttonRightActive.png")  }
                                 style={rightHover ? {cursor: "pointer", marginRight: 13} : (cardNumber === 2 ? {cursor: "pointer", transform: "scale(-1, 1)"} : {cursor: "pointer"})}
                            />
                </div>
            </div>

            <div className={styles.mainDivCooperationMobile}>
                <div className={styles.cooperationMobile}>
                    Модель Сотрудничества
                </div>
                {modeliSotrudnichestva && modeliSotrudnichestva.data && modeliSotrudnichestva.data.length ? modeliSotrudnichestva.data.map((item, index)=>(
                    <div key={index}>
                    {index === cardNumber ?
                        <>
                            <div  style={{padding: "5%", backgroundImage: `URL(${item.preview_img})`, height: 246, margin: "5%"}}>

                            </div>
                            <div className={styles.titleCoopNextMobile}>Фиксированный проект (Fixed Project)</div>
                            <hr className={styles.hrStyle} />
                            <div className={shotText ? styles.subTitleCoopNextMobileShot : styles.subTitleCoopNextMobileAll }>
                                {item.preview_text}
                            </div>
                            <div className={styles.readAllText }
                            onClick={()=>setShotText(!shotText)}>{shotText ? "ЧИТАТЬ ПОЛНОСТЬЮ" : "СВЕРНУТЬ" }</div>
                        </>
                        : null}
                    </div>
                )): null}

                <div style={{ paddingLeft: "5%", paddingBottom: 20, paddingTop: 100}}>
                    <img onClick={() => {if (cardNumber > 0){setCardNumber(cardNumber - 1)}}}
                         src={cardNumber === 0 ? "../buttonLeftNonActive.png" : "../buttonRightActive.png"  }
                         width={45}
                         style={cardNumber === 0 ? {cursor: "pointer", marginRight: 13} : {cursor: "pointer", transform: "scale(-1, 1)", marginRight: 13}}
                    />
                    <img
                        onClick={() =>{if (cardNumber < 2) {setCardNumber(cardNumber + 1)}}}
                        width={45}
                        src={rightHover ? "../buttonRightHover.png" : (cardNumber === 2 ? "../buttonLeftNonActive.png" : "../buttonRightActive.png")  }
                        style={rightHover ? {cursor: "pointer", marginRight: 13} : (cardNumber === 2 ? {cursor: "pointer", transform: "scale(-1, 1)"} : {cursor: "pointer"})}
                    />
                </div>
            </div>
        </>

    )
}
