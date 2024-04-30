import style from "../styles/Index.module.css"
import styleOfferText from "../styles/Offer.module.css";
import Link from "next/link";

export default function BannerFirst() {
    return (
        <>
            <div className={styleOfferText.mainDiv}>
                <img src="../ill.png"  className={styleOfferText.imgLine} />
                <div className={styleOfferText.divMainInfo} >
                    <div className={styleOfferText.mainTextOffer}>
                        Свяжитесь с нами сейчас и получите <span style={{color: "white"}}>бесплатную</span>  консультацию!
                    </div>
                    <div className={styleOfferText.blockDiv} >
                            <span className={styleOfferText.blockSpan} >
                                 <Link href={"/contact"} style={{textDecoration: "none", color: "white"}}>
                                <button className={styleOfferText.buttonSendMessage}>
                                    Написать нам
                                </button>
                                 </Link>
                            </span>
                            <span style={{zIndex: 777, paddingRight: 35, paddingTop: 5}}>
                                 <img src="../ill_2.svg" className={styleOfferText.imgForFree}  />
                            </span>
                    </div>
                </div>
            </div>
            <div className={styleOfferText.mainDivMobile} >
                <img src="../ill.png" className={styleOfferText.imgLineMobile} />
                <div className={styleOfferText.divMainInfoMobile} >
                    <div className={styleOfferText.mainTextOfferMobile} >
                        <div style={{zIndex: 777, float: "right", marginTop: -60}}>
                            <img src="../ill_2.svg" className={styleOfferText.imgForFreeMobile} />
                        </div>
                        <div style={{paddingBottom: 20}}>
                            Свяжитесь с нами сейчас и получите <span style={{color: "white"}}>бесплатную</span>  консультацию!
                        </div>
                        <Link href={"/contact"} style={{textDecoration: "none", color: "white"}}>
                        <button  className={style.inputButtonMobile} >
                            Написать нам
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>

    )
}
