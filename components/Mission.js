import style from "../styles/Mission.module.css"

export default function Mission() {





    return (
        <>
            <div className={style.mainDiv} >
                <img  width="100%" src="../Group81.svg"/>
                <div className={style.subMainDiv}>
                    <div className={style.title}>
                        Миссия
                    </div>

                    <div className={style.subTitle}>
                        Реализация инновационных идей IT <br/>
                        индустрии, воплощение их в успешные <br/>
                        бизнес-проекты для наших клиентов <br/>
                        в различных сферах бизнеса.
                    </div>
                </div>
            </div>
                <div className={style.mainDivMobile} >
                    <div className={style.mainTextSellwin}>
                        SELLWIN
                    </div>
                    <img  width="40%" src="../picMission.png" style={{position: "absolute", marginTop: -50, marginLeft: "30%"}}/>
                    <div className={style.subMainDivMobile}  style={{backgroundImage: "Url(/bgMission.png)", backgroundRepeat: "no-repeat", backgroundSize: "cover", }}>
                        <div className={style.titleMobile}>
                            Миссия
                        </div>
                        <div className={style.subTitleMobile}>
                            Реализация инновационных идей IT <br/>
                            индустрии, воплощение их в успешные <br/>
                            бизнес-проекты для наших клиентов <br/>
                            в различных сферах бизнеса.
                        </div>
                    </div>
                </div>
        </>
    )
}
