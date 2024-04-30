import styles from '../styles/Cooperation.module.css'
import {useState} from "react";
import {ImageListItem, ImageListItemBar} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Link from "next/link";
// import style from "../styles/Index.module.css";


export default function Project2() {

    let cardText = [
        {
            title: "B2B",
            url: "../B2B.png",
            url1: "../1.png",
            url2: "../6.png",
            link: "/projectB2B",
            text: "..."
        },{
            title: "MMM",
            url: "../1.png",
            url1: "../B2B.png",
            url2: "../6.png",
            link: "/projectMMM",
            text: "..."
        },{
            title: "Evesell",
            url: "../6.png",
            url1: "../B2B.png",
            url2: "../1.png",
            link: "/projectEvesell",
            text: "..."
        },
        // {
        //     title: "BeautyHouse",
        //     url: "../shopSellwin.png",
        //     link: "/beautyhouse",
        //     text: "..."
        // },
    ]


    const [showCardItem, setShowCardItem] = useState(0)
    const [pxLength, setPxLength] = useState(1)
    const [cardNumber, setCardNumber] = useState(1)
    const [leftHover, setLeftHover] = useState(false)
    const [rightHover, setRightHover] = useState(false)
    // const changeCardNumber = (item) => {
    //     if (item === "right") {
    //         if (showCardItem < 2) {
    //             setShowCardItem(showCardItem + 1)
    //             setPxLength(pxLength + 80)
    //         }
    //
    //     } else if (item === "left") {
    //         if (showCardItem > 0) {
    //             setShowCardItem(showCardItem - 1)
    //             setPxLength(pxLength - 80)
    //         }
    //
    //     }
    //
    // }


    return (
        <>
            <div className={styles.mainDiv}>
                <div className={styles.cooperation}>
                    Проекты и решения
                </div>
                {cardText.map((item, index) => (
                    <div key={index}>
                        {index === cardNumber ?
                            <div  style={{display: "flex",
                                alignItems: "center",
                                margin: "auto",
                                width: "calc( (100vw - 768px)/(1900 - 768) * (1078 - 768) + 768px)",
                                paddingTop: 50,
                            }}>
                                <ImageListItem >
                                    <div style={{width: "calc( (100vw - 768px)/(1900 - 768) * (720 - 490) + 490px)", display: "flex", alignItems: "center", margin: "auto", justifyContent: "center"}}>
                                        <img
                                            style={{
                                                maxWidth: "calc( (100vw - 768px)/(1900 - 768) * (720 - 490) + 490px)",
                                                maxHeight: "calc( (100vw - 768px)/(1900 - 768) * (510 - 360) + 360px)",
                                            }}
                                            src={item.url}
                                            alt="../bh2.jpg"
                                            loading="lazy"
                                        />
                                    </div>

                                    <Link href={item.link}>
                                        <ImageListItemBar
                                            className={styles.textButtonStyle}
                                            title="ПОДРОБНЕЕ"
                                            actionIcon={
                                                <>
                                                    <IconButton
                                                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                                        aria-label={`info about ${item.title}`}
                                                    >
                                                        <img style={{
                                                            float: "left",
                                                            marginRight: "calc( (100vw - 768px)/(1900 - 768) * (450 - 270) + 270px)",
                                                        }} src="../ArrowNext.svg"/>
                                                        <img style={{
                                                        }} src="../ArrowSquareOut.svg"/>
                                                    </IconButton>
                                                </>

                                            }
                                        /> </Link>
                                </ImageListItem>


                                <div>
                                    <div>
                                        <img style={{
                                            padding: "calc( (100vw - 768px)/(1900 - 768) * (20 - 10) + 10px)",
                                            paddingBottom: 0,
                                            paddingRight: 0,
                                            width: "calc( (100vw - 768px)/(1900 - 768) * (380 - 240) + 240px)",
                                            height: "calc( (100vw - 768px)/(1900 - 768) * (270 - 180) + 180px)",
                                        }}
                                             src={item.url1}/>
                                    </div>
                                    <div>
                                        <img style={{
                                            paddingRight: 0,
                                            padding: "calc( (100vw - 768px)/(1900 - 768) * (20 - 10) + 10px)",
                                            width: "calc( (100vw - 768px)/(1900 - 768) * (380 - 240) + 240px)",
                                            height: "calc( (100vw - 768px)/(1900 - 768) * (270 - 180) + 180px)",
                                        }}
                                             src={item.url2}/>
                                    </div>
                                </div>
                            </div>
                            : null
                        }
                    </div>
                ))}

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
            <div className={styles.mainDivMobile}>
                <div className={styles.cooperationMobile}>
                    Проекты и решения
                </div>
                {cardText.map((item, index) => (
                    <div key={index}>
                        {index === cardNumber ?
                            <div  style={{display: "flex",
                                alignItems: "center",
                                margin: "auto",
                                width: "92%",
                                paddingTop: 50,
                                marginRight: 10,
                                justifyContent: "center"
                            }}>
                                <ImageListItem >
                                    <div style={{width: "100%", display: "flex", alignItems: "center", margin: "auto", justifyContent: "center"}}>
                                        <img
                                            style={{
                                                width: "90vw",
                                                maxHeight: "calc( (100vw - 768px)/(1900 - 768) * (510 - 340) + 340px)",
                                            }}
                                            src={item.url}
                                            alt="../bh2.jpg"
                                            loading="lazy"
                                        />
                                    </div>

                                    <Link href={item.link}>
                                        <ImageListItemBar
                                            className={styles.textButtonStyle}
                                            title="ПОДРОБНЕЕ"
                                            actionIcon={
                                                <>
                                                    <IconButton
                                                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                                        aria-label={`info about ${item.title}`}
                                                    >
                                                        <img style={{
                                                            float: "left",
                                                            marginRight: "calc( (100vw - 768px)/(1900 - 768) * (450 - 270) + 270px)",
                                                        }} src="../ArrowNext.svg"/>
                                                        <img style={{
                                                        }} src="../ArrowSquareOut.svg"/>
                                                    </IconButton>
                                                </>

                                            }
                                        /></Link>
                                </ImageListItem>




                            </div>
                            : null
                        }
                    </div>
                ))}

                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    margin: "auto",
                    paddingLeft: "3%"
                }}>
                    <div style={{display: "flex", margin: "auto", alignItems: "center", justifyContent: cardText}}>
                        <img style={{
                            padding: 10,
                            width: "100%",
                            maxHeight: 150
                        }}
                             src={cardText[cardNumber].url1}/>
                    </div>
                    <div style={{display: "flex", margin: "auto", alignItems: "center", justifyContent: cardText}}>
                        <img style={{
                            padding: 10,
                            width: "100%",
                            maxHeight: 150
                        }}
                             src={cardText[cardNumber].url2}/>
                    </div>
                </div>
                <div style={{paddingLeft: "5%", paddingBottom: 40 }}>
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
