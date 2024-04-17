import style from "../styles/Index.module.css"

export default function WhoWeAre() {
    return (
        <>
            <div>
                <div className={style.whoWeAreMainDiv}>
                         <span className={style.imgStyle}>
                         </span>
                    <span >

                         <img src="../whyWeAre.png" style={{zIndex: 2,width: "calc( (100vw - 768px)/(1900 - 768) * (440 - 300) + 300px)" }}  />
                        <img src="../Group59.svg" style={{position: "absolute", zIndex: 1, left: 0, width: "100%"}} />
                         </span>
                    <span style={{paddingLeft: "15%", paddingTop: "5%"}}>
                            <div className={style.textWhoWeAreMain} style={{paddingBottom: 20}}>
                                Кто мы?
                            </div>

                            <br/>
                            <div className={style.subTextWhoWeAreMain}>
                                Мы - молодая, динамично развивающаяся <br/>
                                и финансово независимая IТ-компания, часть <br/>
                                международного холдинга Sellwin Group, <br/>
                                резидент Парка Высоких Технологий.
                            </div>
                            <br/>
                            <div className={style.subTextWhoWeAreMain}>
                             Специализируемся на разработке программного <br/>
                                обеспечения для дистрибьюции, розничной <br/>
                                торговли и производства.
                            </div>
                            <br/>
                            <div className={style.subTextWhoWeAreMain}>
                             У нас 20 высококвалифицированных специалистов,<br/>
                                которые детально погружены в бизнес клиентов.
                            </div>

                        </span>
                </div>
                <div className={style.whoWeAreMainDivMobile}>
                        <span style={{marginLeft: 10}}>
                            <div className={style.textWhoWeAreMain} style={{paddingBottom: 20}}>
                                Кто мы?
                            </div>

                            <br/>
                            <div className={style.subTextWhoWeAreMainMobile}>
                                Мы - молодая, динамично развивающаяся
                                и финансово независимая IТ-компания, часть
                                международного холдинга Sellwin Group,
                                резидент Парка Высоких Технологий.
                            </div>
                            <br/>
                            <div className={style.subTextWhoWeAreMainMobile}>
                             Специализируемся на разработке программного
                                обеспечения для дистрибьюции, розничной
                                торговли и производства.
                            </div>
                            <br/>
                            <div className={style.subTextWhoWeAreMainMobile}>
                             У нас 20 высококвалифицированных специалистов,
                                которые детально погружены в бизнес клиентов.
                            </div>

                        </span>

                        <span className={style.imgStyle}>
                        </span>

                        <span>
                            <img src="../whyWeAre.png" style={{zIndex: 2,width: "calc( (100vw - 768px)/(1900 - 768) * (440 - 300) + 300px)" , marginLeft: "5%", paddingTop: 20}}  />
                            <img src="../Group59.svg" style={{position: "absolute", zIndex: 1, left: 0, width: "100%"}} />
                        </span>

                </div>
            </div>
        </>

    )
}
