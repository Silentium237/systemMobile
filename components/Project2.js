import styles from '../styles/Cooperation.module.css'
import {useState} from "react";
import {ImageListItem, ImageListItemBar} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
// import style from "../styles/Index.module.css";


export default function Project2() {

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
            <div className={styles.mainDiv}>
                <div className={styles.cooperation}>
                    Проекты и решения
                </div>
                {cardText.map((item, index) => (
                    <>
                        {index === showCardItem ?
                            <div style={{display: "flex",
                                alignItems: "center",
                                margin: "auto",
                                width: "calc( (100vw - 768px)/(1900 - 768) * (1078 - 768) + 768px)",
                                paddingTop: 50,
                            }}>
                                <ImageListItem >
                                    <img
                                        style={{
                                            width: "calc( (100vw - 768px)/(1900 - 768) * (720 - 490) + 490px)",
                                            height: "calc( (100vw - 768px)/(1900 - 768) * (510 - 360) + 360px)",
                                        }}
                                        src="../bh2.jpg"
                                        alt="../bh2.jpg"
                                        loading="lazy"
                                    />

                                    <ImageListItemBar
                                        className={styles.textButtonStyle}
                                        onClick={()=> alert("3333")}
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
                                    />
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
                                             src="../bh1.jpg"/>
                                    </div>
                                    <div>
                                        <img style={{
                                            paddingRight: 0,
                                            padding: "calc( (100vw - 768px)/(1900 - 768) * (20 - 10) + 10px)",
                                            width: "calc( (100vw - 768px)/(1900 - 768) * (380 - 240) + 240px)",
                                            height: "calc( (100vw - 768px)/(1900 - 768) * (270 - 180) + 180px)",
                                        }}
                                             src="../bh3.jpg"/>
                                    </div>
                                </div>
                            </div>
                            : null
                        }
                    </>
                ))}

                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", maxWidth: 1150, paddingTop: 35, marginLeft: -70}}>
                    <button style={{width: 75, height: 75, marginRight: 15, backgroundColor: "white", border: "1px solid black"}}
                            onClick={() => changeCardNumber("left")}>  <img
                        src="../right.svg"/> </button>
                    <button style={{width: 75, height: 75, backgroundColor: "white", border: "1px solid black"}} onClick={() => changeCardNumber("right")}>  <img
                        src="../left.svg"/></button>
                </div>
            </div>
            <div className={styles.mainDivMobile}>
                <div className={styles.cooperationMobile}>
                    Проекты и решения
                </div>
                {cardText.map((item, index) => (
                    <>
                        {index === showCardItem ?
                            <div style={{display: "flex",
                                alignItems: "center",
                                margin: "auto",
                                width: "92%",
                                paddingTop: 50,
                                marginLeft: "5%",
                                marginRight: 10
                            }}>
                                <ImageListItem >
                                    <img
                                        style={{
                                            width: "100%",
                                            height: "calc( (100vw - 768px)/(1900 - 768) * (510 - 340) + 340px)",
                                        }}
                                        src="../bh2.jpg"
                                        alt="../bh2.jpg"
                                        loading="lazy"
                                    />

                                    <ImageListItemBar
                                        className={styles.textButtonStyle}
                                        onClick={()=> alert("3333")}
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
                                    />
                                </ImageListItem>
                            </div>
                            : null
                        }
                    </>
                ))}

                <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", margin: "auto", paddingLeft: "3%"}}>
                    <div>
                        <img style={{
                            padding: 10,
                            width: "100%",
                        }}
                             src="../bh1.jpg"/>
                    </div>
                    <div>
                        <img style={{
                            padding: 10,
                            width: "100%",
                        }}
                             src="../bh3.jpg"/>
                    </div>
                </div>
                <div style={{paddingLeft: "5%", paddingBottom: 40 }}>
                    <button style={{width: 45, height: 45, marginRight: 15, backgroundColor: "white", border: "1px solid black"}}
                            onClick={() => changeCardNumber("left")}>
                        <img src="../right.svg" style={{width: 8 , height: 15}} />
                    </button>
                    <button style={{width: 45, height: 45, backgroundColor: "white", border: "1px solid black"}} onClick={() => changeCardNumber("right")}>
                        <img src="../left.svg" style={{width: 8 , height: 15}} />
                    </button>
                </div>
            </div>

        </>

    )
}
