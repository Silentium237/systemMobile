import style from "../styles/Index.module.css"

export default function LineInfoSecond() {
    return (
        <>
            <div className={style.mainDivLineInfoSecond} >
                <div style={{display: "flex"}}>
                        <span >
                             <img src="../1787.svg" style={{width: "100%", height: "calc( (100vw - 768px)/(2400 - 768) * (370 - 194) + 194px)",  }} />
                        </span>
                        <span style={{position: "absolute", }}>
                             <img src="../bgsS.png" style={{width: "calc( (100vw - 768px)/(2400 - 768) * (2400 - 768) + 768px)",
                                 height: "calc( (100vw - 768px)/(2400 - 768) * (370 - 194) + 194px)", opacity: 0.3  }} />
                        </span>
                    <span className={style.textSellwin}>
                            Sellwin System
                        </span>
                    <span className={style.textSellwinDescription}>
                             Важнейшими преимуществами программных продуктов,
                            произведенных компанией, является их глубочайшая
                            отраслевая экспертиза, конкурентная цена, высокий
                            уровень обслуживания.
                        </span>
                    <span>
                               <img  src="../1786.svg"  style={{width: "100%", height: "calc( (100vw - 768px)/(2400 - 768) * (370 - 194) + 194px)" }} />
                        </span>
                </div>
            </div>
            <div className={style.divLineInfoFirstMobile} style={{backgroundImage: "Url(/bgMobile.png)", marginBottom: 40}}>
                <div className={style.textSellwinMobile}>
                    Sellwin System
                </div>
                <div className={style.textSellwinDescriptionMobile}>
                    Важнейшими преимуществами программных продуктов,
                    произведенных компанией, является их глубочайшая
                    отраслевая экспертиза, конкурентная цена, высокий
                    уровень сервисного обслуживания.
                </div>
            </div>
        </>

    )
}
