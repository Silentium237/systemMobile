import styles from '../styles/MobileMenu.module.css'
import Link from "next/link";
import Image from "next/image";
import {useState} from "react";
import styleForButton from "../styles/Index.module.css"




export default function MobileMenu({services, tekhnologii}) {

    const [openMenu, setOpenMenu] = useState(false)
    const [openTechnologies, setOpenTechnologies] = useState(false)
    const [openTechnologiesValue, setOpenTechnologiesValue] = useState("")
    const [openService, setOpenService] = useState("")

    const handleAction = (value) => {
        // setOpenMenu(!openMenu)
        setOpenService(value)
    }

    const clearAction = () => {
        setOpenTechnologies(false)
        // setOpenMenu(!openMenu)
        setOpenService("")
        // setOpenTechnologies(!openTechnologies)
    }


    const items = [
        {title: "FRONTEND"},
        {title: "BACKEND"},
        {title: "МОБИЛЬНАЯ РАЗРАБОТКА"},
        // {title: "1С РАЗРАБОТКА"},
    ]

    const mainList = [
        {
            title: "ТЕХНОЛОГИИ",
            showRightButton: true,
            link: "/techno"
        },
        {
            title: "УСЛУГИ",
            showRightButton: true,
            link: "/service"
        },
        // {
        //     title: "ЦЕНЫ",
        //     showRightButton: false
        // },
        {
            title: "ПРОЕКТЫ И РЕШЕНИЯ",
            showRightButton: true,
            link: "/"
        },
        {
            title: "КОНТАКТЫ",
            showRightButton: false,
            link: "/contact"
        },

    ]

    return (
        <>
            <div className={styles.mainDiv}>
                        <span style={{float: "left", paddingRight: "1%"}}>
                           <Link href={'/'}>
                                <Image
                                    src="/logo_white.svg"
                                    height={24}
                                    width={70}
                                    alt="Go Home"
                                />
                           </Link>
                        </span>
                        <span style={openMenu ? {float: "right", paddingTop: 4 , cursor: "pointer"}: {float: "right", paddingTop: 2 , cursor: "pointer"}} onClick={()=>setOpenMenu(!openMenu)}>
                            {openMenu ?   <Image src="/closeMenuButton.png"  height={15}
                                                 width={15} alt="Close menu button"/> :
                                <Image src="/menu.png"  height={20}
                                       width={20} alt="Close menu button"/>
                            }
                        </span>
            </div>
            {openMenu  ? <>
                <div style={{width: "100%", background: "#0d4267", opacity: 0.95, zIndex: 1, position: "absolute", marginTop: 50, height: "100vh"}}>

                    {mainList.map((item, index)=> (
                        <div style={{padding:20, borderBottom: "1px solid #336eab", paddingBottom: 35,}}>
                            <Link style={{textDecoration: "none"}} href={item.link}>
                            <span style={{fontSize: 16, fontWeight: 500, fontFamily: "Montserrat",  float: "left", color:"white"}}>
                                {item.title}
                            </span>
                            </Link>
                                 <span style={item.showRightButton ? {float: "right", cursor: "pointer"}: {display: "none"}} onClick={()=> handleAction(item.title)}>
                                <Image src="/rightButton.png" alt="right button png" width={6} height={12}/>
                            </span>
                        </div>
                    ))}
                </div>


            </> : null}

            {openMenu && openService.length  ? <>
                <div style={{width: "100%", background: "#0d4267", opacity: 0.95, zIndex: 1, position: "absolute", marginTop: 50, height: "100vh"}}>
                    <div style={{padding:20,  paddingBottom: 35,}}>
                    <span style={{fontSize: 16, fontWeight: 500, fontFamily: "Montserrat",  float: "left", color:"white"}} onClick={()=>clearAction()}>
                          <Image src="/leftButton.png" alt="right button png" style={{marginRight: 10}} width={6} height={12}/>{openService}
                    </span>
                    </div>
                    {openService === "ТЕХНОЛОГИИ" ? <>
                        {items.map((item, index)=> (
                            <div style={{padding:20, borderBottom: "1px solid#336eab", paddingBottom: 35, opacity: 0.7}} onClick={()=> {setOpenTechnologies(!openTechnologies) ;  setOpenTechnologiesValue(item.title)}}>
                    <span style={{fontSize: 16, fontWeight: 500, fontFamily: "Montserrat",  float: "left", color:"white"}}>
                       {item.title}
                    </span>
                                <span style={{float: "right"}}>
                       <Image src="/rightButton.png" alt="right button png" width={6} height={12}/>
                    </span>
                            </div>
                        ) )}
                    </> : null}
                    {/*{openService === "УСЛУГИ" ? <>*/}
                    {/*    {services && services.data && services.data.length ? services.data.map((item, index)=> (*/}
                    {/*        <>*/}
                    {/*            {item.group !== "1С РАЗРАБОТКА" ?*/}

                    {/*                <div style={{padding:20, paddingBottom: 35, opacity: 0.7}}>*/}
                    {/*                <span style={{fontSize: 16, fontWeight: 500, fontFamily: "Montserrat",  float: "left", color:"white"}}>*/}
                    {/*                    <Image src="/ellipse.png" alt="ellipse png" style={{marginRight: 10}} width={11} height={11}/>  {item.name}*/}
                    {/*                </span>*/}
                    {/*                </div>: null*/}

                    {/*            }*/}
                    {/*        </>*/}
                    {/*    ) ) : null}*/}
                    {/*</> : null}*/}

                </div>


            </> :  null}

            {openTechnologies ? <>
                <div style={{width: "100%", background: "#0d4267", opacity: 0.95, zIndex: 1, position: "absolute", marginTop: 50, height: "100vh"}}>


                    <div style={{padding:20,  paddingBottom: 35,}} >
                    <span style={{fontSize: 16, fontWeight: 500, fontFamily: "Montserrat",  float: "left", color:"white"}} onClick={()=> clearAction()}>
                          <Image src="/leftButton.png" alt="right button png" style={{marginRight: 10}} width={6} height={12}/> ТЕХНОЛОГИИ
                    </span>
                    </div>



                    <div style={{padding:20, borderBottom: "1px solid#336eab", paddingBottom: 35}}>
                    <span style={{fontSize: 16, fontWeight: 500, fontFamily: "Montserrat",  float: "left", color:"white"}}>
                       {openTechnologiesValue}
                    </span>
                    </div>

                    {tekhnologii && tekhnologii.data && tekhnologii.data.length ? tekhnologii.data.map((item, index) => (
                        <>
                            {item.group ===  openTechnologiesValue ?
                                <div style={{padding:20, paddingBottom: 35, opacity: 0.7}}>
                                    <Link style={{textDecoration: "none"}} href={`/techno/${item.id}`}>
                                          <span style={{fontSize: 16, fontWeight: 500, fontFamily: "Montserrat",  float: "left", color:"white"}}>
                                        <Image src="/ellipse.png" alt="ellipse png" style={{marginRight: 10}} width={11} height={11}/>  {item.name}
                                    </span>
                                    </Link>

                                </div> : null

                            }
                        </>
                    )) : null}
                </div>


            </> : null
             }
                <div>
                    {openMenu ?   <Link href={"/contact"}>
                        <div className={styles.connectButton} >
                            СВЯЗАТЬСЯ С НАМИ
                        </div>
                    </Link>:  null
                    }
                </div>

        </>


    )
}
