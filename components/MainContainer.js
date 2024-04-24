import A from "./A";
import Head from "next/head";
// import Logo from "/logoPng.png";
import Image from 'next/image';
import style from "../styles/Index.module.css"
import styleFooter from "../styles/Footer.module.css"
import Link from "next/link";
import TechnoDropDownList from "./TechnoDropDownList";
import {useState} from "react";
import ServiceDropDownList from "./ServiceDropDownList";
import ProjectDropDownList from "./ProjectDropDownList";
import {Inter, Lora, Source_Sans_3, Montserrat} from 'next/font/google'
import MobileMenu from "./MobileMenu";
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import CopyrightIcon from '@mui/icons-material/Copyright';

const MainContainer = ({children, keywords, services, tekhnologii}) => {
    const [showMenu, setShowMenu] = useState(false)
    const [showMenuService, setShowMenuService] = useState(false)
    const [showMenuProject, setShowMenuProject] = useState(false)


    const LinkInfo = [
        {name: "О КОМПАНИИ", link: "/"},
        {name: "ТЕХНОЛОГИИ", link: "/techno"},
        {name: "УСЛУГИ", link: "/service"},
        {name: "ПРОЕКТЫ И РЕШЕНИЯ", link: "/project"}
    ]

    return (
        <>
            <MobileMenu services={services} tekhnologii={tekhnologii} />
            <Head>
                <meta keywords={"nextjs" + keywords}></meta>
                <title>Главная страница</title>
            </Head>
            <div className="navbar">

                <div style={{
                    width: "calc( (100vw - 768px)/(1900 - 768) * (1084 - 768) + 768px)",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "space-around"
                }}>
                       <span style={{float: "left", paddingRight: "1%"}}>
                           <Link href={'/'}>
                                <Image
                                    src="/logo_white.svg"
                                    height={54}
                                    width={138}
                                    alt="Go Home"
                                />
                           </Link>
                        </span>
                    <div>
                <span>
                   <div className="dropdown">
                       <div style={{height: 70, marginTop: 50, zIndex: 2}} onMouseEnter={() => setShowMenu(true)}
                            onMouseLeave={() => setShowMenu(false)}>
                         <A href={'/techno'} text="Технологии"/>
                           <img src="../down.svg"/> <span style={{color: "white", opacity: 0.35}}>/</span>
                       </div>
                    </div>

                </span>


                        <span>
                   {/*<div className="dropdown">*/}
                   {/*    <div style={{height: 70, marginTop: 50, zIndex: 2}} onMouseEnter={() => setShowMenuService(true)}*/}
                   {/*         onMouseLeave={() => setShowMenuService(false)}>*/}
                          <A href={'/service'} text="Услуги"/>
                            {/*<img src="../down.svg"/> <span style={{color: "white", opacity: 0.35}}>/</span>*/}
                            <span style={{color: "white", opacity: 0.35}}>/</span>
                    {/*   </div>*/}
                    {/*</div>*/}
                </span>

                {/*        <span>*/}
                {/*          <A href={'/price'} text="Цены"/>*/}
                {/*    <span style={{color: "white", opacity: 0.35}}>*/}
                {/*    /*/}
                {/*    </span>*/}
                {/*</span>*/}


                        <span>
                    <div className="dropdown">
                       <div style={{height: 70, marginTop: 50, zIndex: 2}} onMouseEnter={() => setShowMenuProject(true)}
                            onMouseLeave={() => setShowMenuProject(false)}>
                          <A href={'/project'} text="Проекты и решения"/>
                           <img src="../down.svg"/> <span style={{color: "white", opacity: 0.35}}>/</span>
                       </div>
                    </div>
                </span>

                        <A href={'/contact'} text="Контакты"/>
                    </div>

                    <span style={{
                        float: "right",
                        fontSize: "calc( (100vw - 480px)/(1900 - 480) * (14 - 10) + 10px)",
                        width: 170
                    }}>
                        <span>
                            <img src="../phone.svg" width={12}/>
                             <A href={'/contact'} text="+375(29) 340 62 59"/>
                        </span>
                    </span>


                </div>

            </div>
            <TechnoDropDownList setShowMenu={setShowMenu} showMenu={showMenu} tekhnologii={tekhnologii}/>
            <ServiceDropDownList setShowMenuService={setShowMenuService} showMenuService={showMenuService}
                                 services={services}/>
            <ProjectDropDownList setShowMenuProject={setShowMenuProject} showMenuProject={showMenuProject}/>


            <div>
                {children}
            </div>

            <footer className={styleFooter.mainFooterStyle}>
                <span className={styleFooter.spanBlock}>
                    <img className={styleFooter.imgStyle} src="../logoFooter.png"/>
                    {LinkInfo.map((item, index)=>(
                        <Link style={{textDecoration: "none"}} key={index} href={item.link}>
                            <div className={styleFooter.linkText}>
                                {item.name}
                            </div>
                        </Link>
                    ))}
                </span>
                <span className={styleFooter.spanBlock}>
                    <div className={styleFooter.phoneInfo}>
                      <PhoneIcon style={{marginBottom: -4}} fontSize="small"/>  ТЕЛЕФОН
                    </div>
                    <div className={styleFooter.phoneInfoNumber}>
                      +375 (29) 340 62 59
                    </div>
                </span>
                <span className={styleFooter.spanBlock}>
                            <img style={{paddingTop: 65, paddingRight: 10}} src="../Instagram.png"/>
                            <img style={{paddingRight: 10}} src="../vk.png"/>
                            <img style={{paddingRight: 10}} src="../twitter.png"/>
                            <img style={{paddingRight: 10}} src="../telegram.png"/>
                            <img style={{paddingRight: 10}} src="../facebook.png"/>
                    <div className={styleFooter.direction}>
                    <RoomIcon style={{marginBottom: -5}} fontSize="small"/> DIRECTION
                    </div>
                    <div className={styleFooter.phoneInfoNumber} style={{paddingTop: 18}}>
                        Беларусь, г. Минск, пер. С.Ковалевской, 60, офис 820
                    </div>
                    <div style={{paddingTop: 20, opacity: 0.5}}>
                         <hr/>
                    </div>
                    <div className={styleFooter.direction} style={{paddingTop: 40}}>
                       <MarkunreadIcon style={{marginBottom: -4}} fontSize="small"/>   E-MAIl: <a className={styleFooter.linkEmail} href="mailto:dev@sellwin.by"> dev@sellwin.by</a>
                    </div>
                </span>
            </footer>
            <footer className={styleFooter.mainFooterStyleMobile}>
                    <div>
                        <img  style={{width: 100}}  src="../logoFooter.png"/>
                    </div>

                {LinkInfo.map((item, index)=>(
                    <Link style={{textDecoration: "none"}} key={index} href={item.link}>
                        <div className={styleFooter.linkTextMobile}>
                            {item.name}
                        </div>
                    </Link>
                ))}

                <hr style={{border: "0.5px solid white", marginRight: "5%", opacity: 0.1, marginTop: 20}}/>

                    <div className={styleFooter.phoneInfoMobile}>
                      <PhoneIcon style={{marginBottom: -4}} fontSize="small"/> ТЕЛЕФОН
                    </div>
                    <div className={styleFooter.phoneInfoNumber}>
                       +375 (29) 340 62 59
                    </div>
                    <div className={styleFooter.directionMobile}>
                    <RoomIcon style={{marginBottom: -5}} fontSize="small"/> DIRECTION
                    </div>
                    <div className={styleFooter.phoneInfoNumber} style={{paddingTop: 18}}>
                        Беларусь, г. Минск, пер. С.Ковалевской, 60, офис 820
                    </div>
                    <div className={styleFooter.phoneInfoNumber} style={{paddingTop: 40, color: "rgba(255, 255, 255, 0.6)"}}>
                        <MarkunreadIcon style={{marginBottom: -4}} fontSize="small"/> E-MAIl: <a className={styleFooter.linkEmail}  href="mailto:dev@sellwin.by"> dev@sellwin.by</a>
                    </div>
                     <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", margin: "auto", paddingTop: 20, marginRight: "5%"}}>
                         <img src="../Instagram.png"/>
                         <img  src="../vk.png"/>
                         <img  src="../twitter.png"/>
                         <img  src="../telegram.png"/>
                         <img src="../facebook.png"/>
                     </div>
                <hr style={{border: "0.5px solid white", marginRight: "5%", opacity: 0.1, marginTop: 20}}/>
                <div className={styleFooter.copyrightMobile}>
                   <CopyrightIcon style={{marginBottom: -4}} fontSize="small"/> Copyright
                </div>
            </footer>
            <style jsx>
                {`
                  .navbar {
                    background: linear-gradient(to right top, #006DBF, #0092FF);
                    padding: 15px;
                    justify-content: space-around;
                    align-items: center;
                    display: flex;
                    height: 94px;
                    position: absolute;
                    z-index: 1;
                    width: 100%;
                    opacity: 0.85;
                  }

                  /* The container <div> - needed to position the dropdown content */
                  .dropdown {
                    position: relative;
                    display: inline-block;
                  }


                  /* Dropdown Content (Hidden by Default) */
                  .dropdown-content {
                    display: none;
                    position: absolute;
                    //background-color: #f9f9f9;
                    min-width: 160px;
                    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
                    z-index: 1;
                    align-items: center;
                    opacity: 1;
                    background: #FFFFFF;
                  }


                  /* Links inside the dropdown */
                  .dropdown-content a {
                    color: black;
                    padding: 12px 16px;
                    text-decoration: none;
                    display: block;
                  }

                  .link {
                    color: black;
                    padding: 12px 16px;
                    text-decoration: none;
                    display: block;
                  }

                  /* Change color of dropdown links on hover */
                  .dropdown-content a:hover {
                    background-color: #f1f1f1
                  }

                  /* Show the dropdown menu on hover */
                  .dropdown:hover .dropdown-content {
                    display: block;

                  }

                  /* Change the background color of the dropdown button when the dropdown content is shown */
                  .dropdown:hover .dropbtn {
                    background-color: #3e8e41;
                  }
                  @media screen and (max-width: 815px) {
                    .navbar {
                     display: none;
                    }
                    .dropdown {
                    display: none;
                    }
                    .dropdown-content {
                    display: none;
                    }
                    }
                `}
            </style>
        </>
    );
};

export default MainContainer;
