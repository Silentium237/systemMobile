import style from "../styles/Index.module.css"
import {useState} from "react";

export default function MainImgForAnotherPage() {
    let backGroundImage1 = "Url(/1742.png)"
    let backGroundImage2 = "Url(/mainImg2.png)"
    let backGroundImage3 = "Url(/mainImg3.png)"
    const [rotate, setRotate] = useState('rotate(0deg)')
    const [mainImg, setMainImg] = useState(backGroundImage1)
    const [value, setValue] = useState(1)

    const changeRight = (value) => {
        if (value === 1){
            setMainImg(backGroundImage2)
            setRotate('rotate(180deg)')
            setValue(value +1 )

        }else if ( value ===2){
            setRotate('rotate(360deg)')
            setMainImg(backGroundImage3)
            setValue(value +1 )
        }

    }
    const changeLeft = (value) => {
        if (value === 2){
            setValue(value - 1  )
            setRotate('rotate(0deg)')
            setMainImg(backGroundImage1)
        } else if (value === 3){
            setValue(value - 1  )
            setRotate('rotate(180deg)')
            setMainImg(backGroundImage2)
        }

    }



    return (
        <>
            <div style={{backgroundImage: mainImg,
                height: 902, backgroundRepeat: "no-repeat center center fixed",
                width: "100%" ,margin: "auto",  backgroundSize: "cover", transition: "1s ease-out 0.5s", display: "flex"  }}>
                <div  style={{backgroundImage: "Url(/1773.svg)", paddingTop: 122}}>
                    <img src="../1741.svg" style={{transform: rotate, transition: "1s ease-out 0.5s"}}/>
                </div>


                <div className={style.divMain}>
                    <p className={style.mainText1}>С НАМИ </p>
                    <p className={style.mainText2}>ВЫИГРЫВАЮТ!</p>

                </div>


                <div>
                        <span className={style.numberActive}>
                            {value}
                        </span>
                    <span className={style.numberNotActive}>
                             / 3
                        </span>
                    <span >
                            <button  className={style.buttonLeft} onClick={()=> changeLeft(value)} >  <img src="../right.svg"/> </button>
                            <button className={style.buttonRight} onClick={()=> changeRight(value)}>  <img src="../left.svg"/></button>
                        </span>
                </div>
            </div>

        </>

    )
}
