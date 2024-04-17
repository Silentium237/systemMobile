import style from "../styles/Index.module.css"

export default function LineInfoFirst() {
    return (
        <>
            <div className={style.divLineInfoFirst}>
                <div style={{display: "flex"}}>

                        <span >
                             <img src="../1787.svg" style={{width: "100%", height: "calc( (100vw - 768px)/(2400 - 768) * (370 - 194) + 194px)" }} />
                        </span>
                    <span style={{position: "absolute", }}>
                             <img src="../1781.png" style={{width: "calc( (100vw - 768px)/(2400 - 768) * (2400 - 768) + 768px)",
                                 height: "calc( (100vw - 768px)/(2400 - 768) * (370 - 194) + 194px)"  }} />
                        </span>
                    <span className={style.textSellwin}>
                            Sellwin System
                        </span>
                    <span className={style.textSellwinDescription}>
                              Анализ, проектирование, разработка программного
                            обеспечения информационных систем.
                            Разработка мобильных приложений, отчетность,
                            аналитика, а также аутсорсинговые услуги.
                        </span>
                         <span>
                               <img  src="../1786.svg"  style={{width: "100%", height: "calc( (100vw - 768px)/(2400 - 768) * (370 - 194) + 194px)" }} />
                        </span>
                </div>
            </div>
            <div className={style.divLineInfoFirstMobile} style={{backgroundImage: "Url(/bgMobile.png)"}}>
                <div className={style.textSellwinMobile}>
                    Sellwin System
                </div>
                <div className={style.textSellwinDescriptionMobile}>
                    Анализ, проектирование, разработка программного
                    обеспечения информационных систем.
                    Разработка мобильных приложений, отчетность,
                    аналитика, а также аутсорсинговые услуги.
                </div>
            </div>

        </>

    )
}
