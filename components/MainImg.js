import style from "../styles/Index.module.css"
import {useState} from "react";
import {Inter, Lora, Source_Sans_3, Montserrat} from 'next/font/google'

export default function MainImg() {
    let backGroundImage1 = "Url(/newMainImg.png)"
    let backGroundImage2 = "Url(/mainImg2.png)"
    let backGroundImage3 = "Url(/mainImg3.png)"
    const [rotate, setRotate] = useState('rotate(0deg)')
    const [mainImg, setMainImg] = useState(backGroundImage1)
    const [value, setValue] = useState(1)
    const [colorText, setColorText] = useState("#FFFFFF")

    const changeRight = (value) => {
        if (value === 1) {
            setMainImg(backGroundImage2)
            setRotate('rotate3d(0, 20, 0, 180deg)')
            setValue(value + 1)
            setColorText("#0b334c")

        } else if (value === 2) {
            setRotate('rotate(360deg)')
            setMainImg(backGroundImage3)
            setValue(value + 1)
        }

    }
    const changeLeft = (value) => {
        if (value === 2) {
            setValue(value - 1)
            setRotate('rotate3d(0, 20, 0, 0deg)')
            setMainImg(backGroundImage1)
            setColorText("#125E97")
        } else if (value === 3) {
            setValue(value - 1)
            setRotate('rotate3d(0, 20, 0, 180deg)')
            setMainImg(backGroundImage2)
        }

    }


    return (
        <>
            <video width="100%" height="calc( (100vw - 300px)/(1900 - 300) * (1084 - 400) + 400px)" className={style.videoStyle}  autoPlay muted loop>
                <source src={`./videoFile.mp4`} type="video/mp4"/>
            </video>
            {/*<div style={{*/}
            {/*    backgroundImage: mainImg,*/}
            {/*    height: "calc( (100vw - 300px)/(1900 - 300) * (1084 - 400) + 400px)", backgroundRepeat: "no-repeat center center fixed",*/}
            {/*    width: "100%", margin: "auto", backgroundSize: "cover", transition: "1s ease-out 0.5s", display: "flex"*/}
            {/*}}>*/}
            {/*    /!*<div className={style.connectButton}>*!/*/}
            {/*    /!*    СВЯЗАТЬСЯ С НАМИ*!/*/}
            {/*    /!*</div>*!/*/}
            {/*</div>*/}
            {/*<div className={style.divMain}>*/}
            {/*    <p className={style.mainText1}>С НАМИ </p>*/}
            {/*    <p className={style.mainText1}*/}
            {/*       style={{color: colorText, transition: "1s ease-out 0.5s"}}>ВЫИГРЫВАЮТ!</p>*/}
            {/*</div>*/}
            {/*<div style={{width: "calc( (100vw - 768px)/(1900 - 768) * (1084 - 768) + 768px)" }}>*/}
            {/*    <span >*/}
            {/*            <span className={style.numberActive}>*/}
            {/*                {value} / 3*/}
            {/*            </span>*/}
            {/*            /!*<span className={style.numberNotActive}>*!/*/}
            {/*            /!*     / 3*!/*/}
            {/*            /!*</span>*!/*/}
            {/*    </span>*/}

            {/*    <span >*/}
            {/*                <button className={style.buttonLeft} onClick={() => changeLeft(value)}>  <img*/}
            {/*                    src="../right.svg"/> </button>*/}
            {/*                <button className={style.buttonRight} onClick={() => changeRight(value)}>  <img*/}
            {/*                    src="../left.svg"/></button>*/}
            {/*    </span>*/}
            {/*</div>*/}

        </>

    )
}
