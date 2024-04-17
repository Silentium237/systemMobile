import style from "../styles/Index.module.css"
import styleOfferText from "../styles/Offer.module.css";

export default function BannerFirst() {
    return (
        <>
            <div className={styleOfferText.mainDiv}>
                <img src="../ill.png" style={{position: "absolute", left: "21%", width: "calc( (100vw - 768px)/(1900 - 768) * (1000 - 600) + 600px)" }} />
                <div style={{backgroundImage: "linear-gradient(to bottom right, #c2e8ff, #a8d0ff)",
                    width: "calc( (100vw - 768px)/(2400 - 768) * (1078 - 600) + 600px)",
                    margin: "auto", height: "calc( (100vw - 768px)/(2400 - 768) * (450 - 200) + 200px)", borderRadius: 20}}>
                    <div className={styleOfferText.mainTextOffer}>
                        Свяжитесь с нами сейчас и получите <span style={{color: "white"}}>бесплатную</span>  консультацию!
                    </div>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                            <span style={{zIndex: 777, paddingLeft:  "calc( (100vw - 768px)/(1900 - 768) * (80 - 20) + 20px)", paddingTop: "calc( (100vw - 768px)/(1900 - 768) * (165 - 20) + 20px)"}}>
                                 <button className={style.inputButton} style={{width: "calc( (100vw - 768px)/(1900 - 768) * (270 - 200) + 200px)"}}>
                                    Написать нам
                                </button>
                            </span>
                        <span style={{zIndex: 777, paddingRight: 35, paddingTop: 5}}>
                                 <img src="../ill_2.svg" style={{width: "calc( (100vw - 768px)/(1900 - 768) * (200 - 100) + 100px)"}} />
                            </span>
                    </div>
                </div>
            </div>
            <div className={styleOfferText.mainDivMobile} >
                <img src="../ill.png" style={{position: "absolute", left: "21%", width: "calc( (100vw - 768px)/(1900 - 768) * (1000 - 600) + 600px)" }} />
                <div style={{backgroundImage: "linear-gradient(to bottom right, #c2e8ff, #a8d0ff)",
                    width: "100%",
                    margin: "auto",  }}>

                    <div className={styleOfferText.mainTextOfferMobile} >
                        <div style={{zIndex: 777, float: "right", marginTop: -60}}>
                            <img src="../ill_2.svg" style={{width: "calc( (100vw - 300px)/(1900 - 300) * (200 - 80) + 80px)"}} />
                        </div>
                        <div style={{paddingBottom: 20}}>
                            Свяжитесь с нами сейчас и получите <span style={{color: "white"}}>бесплатную</span>  консультацию!
                        </div>

                        <button  className={style.inputButtonMobile} >
                            Написать нам
                        </button>

                    </div>




                </div>

            </div>
        </>

    )
}
