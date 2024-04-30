import styleDropDown from "../styles/MainContainer.module.css"
import Link from "next/link";



export default function TechnoDropDownList({showMenu, setShowMenu, tekhnologii}) {


    return (
        <>
            {showMenu ?  <div onMouseEnter={()=> setShowMenu(true)} onMouseLeave={()=> setShowMenu(false)}   style={{fontFamily: "Montserrat" ,
                fontStyle: "normal",
                fontWeight: 400}} className={styleDropDown.dropdownContent}>
                <div className={styleDropDown.divStyle}>

                    <span style={{ height: 400}} >
                            <div className={styleDropDown.title}>
                               Frontend
                            </div>
                                <hr style={{marginTop: 25, marginBottom: 30}}/>
                         <div >
                             <ul style={{listStyleType: "none"}}>
                                 {tekhnologii.data.map((item, index) =>(

                                         <div key={index}>
                                             {item.group === "FRONTEND"  ?
                                                 <Link  style={{textDecoration: "none"}} href={`/techno/${item.id}`}>
                                                 <li className={styleDropDown.subTitle} key={index}>
                                                 <img style={{paddingRight: 20}} src="../Ellipse.svg"/> {item.name}
                                             </li> </Link> : null}
                                         </div>


                                 ))}
                             </ul>
                         </div>
                    </span>
                    <span style={{ height: 400}} >
                            <div className={styleDropDown.title}>
                               BACKEND
                            </div>
                                <hr style={{marginTop: 25, marginBottom: 30}}/>
                         <div >
                             <ul style={{listStyleType: "none"}}>
                                  {tekhnologii.data.map((item, index) =>(
                                      <div key={index}>
                                          {item.group === "BACKEND" ?
                                              <Link style={{textDecoration: "none"}} href={`/techno/${item.id}`}>
                                                  <li className={styleDropDown.subTitle} key={index}>
                                                      <img style={{paddingRight: 20}} src="../Ellipse.svg"/> {item.name}
                                                  </li>
                                              </Link>
                                               : null}
                                      </div>
                                  ))}
                             </ul>
                         </div>
                    </span>
                    <span style={{ height: 400}}>
                            <div className={styleDropDown.title}>
                              МОБИЛЬНАЯ РАЗРАБОТКА
                            </div>
                                <hr style={{marginTop: 25, marginBottom: 30}}/>
                         <div >
                             <ul style={{listStyleType: "none"}}>

                                  {tekhnologii.data.map((item, index) =>(
                                      <div key={index}>
                                          {item.group === "МОБИЛЬНАЯ РАЗРАБОТКА" ? <Link style={{textDecoration: "none"}} href={`/techno/${item.id}`}>
                                              <li className={styleDropDown.subTitle} key={index}>
                                              <img style={{paddingRight: 20}} src="../Ellipse.svg"/> {item.name}
                                          </li></Link> : null}
                                      </div>
                                  ))}
                             </ul>
                         </div>
                    </span>
                    {/*<span style={{ height: 400}}>*/}
                    {/*        <div className={styleDropDown.title}>*/}
                    {/*           1С РАЗРАБОТКА*/}
                    {/*        </div>*/}
                    {/*            <hr style={{marginTop: 25, marginBottom: 30}}/>*/}
                    {/*     <div >*/}
                    {/*         <ul style={{listStyleType: "none"}}>*/}

                    {/*              {tekhnologii.data.map((item, index) =>(*/}
                    {/*                  <>*/}
                    {/*                      {item.group === "1С РАЗРАБОТКА" ? <li className={styleDropDown.subTitle} key={index}>*/}
                    {/*                          <img style={{paddingRight: 20}} src="../Ellipse.svg"/> {item.name}*/}
                    {/*                      </li> : null}*/}
                    {/*                  </>*/}
                    {/*              ))}*/}
                    {/*         </ul>*/}
                    {/*     </div>*/}
                    {/*</span>*/}
                </div>
                <hr className={styleDropDown.hr}/>
                <div className={styleDropDown.footerText}>
                    С НАми выигрывают !
                </div>
            </div> : null
            }
        </>

    )
}
