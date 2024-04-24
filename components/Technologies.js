import style from "../styles/Technologies.module.css"

export default function Technologies({tekhnologii}) {

    let styleSmall ={
        width: "calc( (100vw - 768px)/(1900 - 768) * (164 - 115) + 115px)",
        height: "calc( (100vw - 768px)/(1900 - 768) * (94 - 58) + 58px)"
    }
    let styleBig ={
        width: "calc( (100vw - 768px)/(1900 - 768) * (256 - 170) + 170px)",
        height: "calc( (100vw - 768px)/(1900 - 768) * (94 - 58) + 58px)"
    }

    const arrayTechno = [
        "Sharepoint", "JavaScript", "Java", ".Net","MS SQL", "С#", "Node.JS", "React", "Angular"
    ]



    return (
        <>
            <div className={style.mainDiv}>
                <span>
                      <div className={style.title} >
                        Технологии
                      </div>

                <div style={{
                    backgroundImage: "Url(/technologies.png)",
                    backgroundRepeat: "no-repeat",
                    height: "calc( (100vw - 768px)/(1900 - 768) * (700 - 400) + 400px)",
                    width:"calc( (100vw - 768px)/(1900 - 768) * (600 - 400) + 400px)"
                }}>

                    <div style={{
                        display: "flex",
                        width:"calc( (100vw - 768px)/(1900 - 768) * (400 - 270) + 270px)",
                        padding: "calc( (100vw - 768px)/(1900 - 768) * (60 - 40) + 40px)",
                        marginLeft: 30,
                        paddingTop: "calc( (100vw - 768px)/(1900 - 768) * (150 - 100) + 100px)",
                    }} className={style.cardText}>
                        Sellwin System предоставляет услуги по разработке,
                        внедрению и сопровождению программного обеспечения
                        для дистрибуции, розничной торговли и производства,
                        а также иные услуги в сфере информационных технологий
                        на рынке Республики Беларусь.
                    </div>


                </div>

                </span>

                <span >
                       <div style={{
                           display: "flex",
                           width:"calc( (100vw - 768px)/(1900 - 768) * (500 - 300) + 300px)",
                           paddingBottom: "calc( (100vw - 768px)/(1900 - 768) * (70 - 40) + 40px)"
                       }} className={style.subTitle} >
                        В разработках программных продуктов наша компания использует самые последние достижения в области IТ-технологий:
                    </div>
                <div style={{
                    display: "inline-grid",
                    width:"calc( (100vw - 768px)/(1900 - 768) * (500 - 300) + 300px)",
                    position: "relative",
                    height: "calc( (100vw - 768px)/(1900 - 768) * (700 - 420) + 420px)",}}>

                      <div style={{  justifyContent: "space-between", display: "flex"}}>
                          <span className={style.textForTechnologies} style={{
                              width: "calc( (100vw - 768px)/(1900 - 768) * (256 - 170) + 170px)",
                              height: "calc( (100vw - 768px)/(1900 - 768) * (94 - 58) + 58px)",
                              marginRight:10}}>
                        VUE JS
                    </span>
                        <span className={style.textForTechnologies} style={styleBig}>
                       JavaScript
                    </span>
                          </div>
                        <div style={{  justifyContent: "space-between", display: "flex"}}>
                          <span className={style.textForTechnologies} style={styleBig}>
                        Java
                    </span>
                            <span className={style.textForTechnologies} style={styleBig}>
                        Net Framework
                    </span>
                            </div>
                        <div style={{  position: "relative", justifyContent: "space-between", display: "flex"}}>
                          <span className={style.textForTechnologies} style={styleSmall}>
                      NEXT JS
                    </span>  <span className={style.textForTechnologies} style={styleSmall}>
                        MS SQL
                    </span>  <span className={style.textForTechnologies} style={styleSmall}>
                        Oracle
                    </span>
                    </div>    <div style={{ position: "relative", justifyContent: "space-between", display: "flex"}}>
                          <span className={style.textForTechnologies} style={styleSmall}>
                        BI
                    </span>  <span className={style.textForTechnologies} style={styleSmall}>
                        С#
                    </span>  <span className={style.textForTechnologies} style={styleSmall}>
                        Node.JS
                    </span>
                    </div>
                    <div style={{  justifyContent: "space-between", display: "flex"}}>
                          <span className={style.textForTechnologies} style={styleBig}>
                        Angular
                    </span>  <span className={style.textForTechnologies} style={styleBig}>
                        jQuery
                    </span>
                    </div>
                    <div style={{ justifyContent: "space-between", display: "flex"}}>
                          <span className={style.textForTechnologies} style={styleBig}>
                        ASP.NET
                    </span>  <span className={style.textForTechnologies} style={styleBig}>
                       React
                    </span>
                    </div>
                </div>
                </span>
            </div>
            <div className={style.mainDivMobile}>
                      <div className={style.titleMobile} >
                        Технологии
                      </div>
                      <div className={style.cardTextMobile}>
                          В разработках программных продуктов наша компания использует самые последние достижения в области IТ-технологий:
                      </div>
                      <div style={{  display: "grid",
                          gridGap: 5,
                          gridTemplateColumns: "repeat(auto-fit, 150px)",
                          gridTemplateRows: "repeat(6, 55px)"}}>
                          {arrayTechno.map((item, index) =>(
                              <span key={index} className={style.textForTechnologiesMobiles} >
                                  {item}
                              </span>
                          ))}
                      </div>
                        <div style={{backgroundImage: 'URL(./bgTech.png)'}} className={style.textMobile}>
                            Sellwin System предоставляет услуги по разработке,
                            внедрению и сопровождению программного обеспечения
                            для дистрибуции, розничной торговли и производства,
                            а также иные услуги в сфере информационных технологий
                            на рынке Республики Беларусь.
                        </div>
            </div>
        </>

    )
}
