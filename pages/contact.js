import MainContainer from "../components/MainContainer";

import {useState} from "react";
import MainImgForAnotherPage from "../components/MainImgForAnotherPage";

import styles from "../styles/WriteMe.module.css";
import style2 from "../styles/user.module.scss";
import style from "../styles/Index.module.css";
import styleTitle from "../styles/Service.module.css";
import styleContact from "../styles/Contacts.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Link from "next/link";


export default function contact ({cardText, tekhnologii, modeliSotrudnichestva,services}){



    return(
        <MainContainer services={services} tekhnologii={tekhnologii} >
            {/*<MainImgForAnotherPage/>*/}
            <div className={styleContact.mainDiv}>

                <div style={{maxWidth: 1084,  alignItems: "center", justifyContent: "center", margin: "auto"}}>

                    <div className={styleTitle.breadCrams}>
                        <span>Главная &nbsp;   <img src="../breadPosition.svg"/> &nbsp; </span>
                        <span style={{color: "black"}}>Контакты</span>
                    </div>
                    <div style={{paddingBottom:90}} className={styleTitle.title}>Контакты</div>
                </div>
                <div className={styleContact.cardInfo} >
                    <div style={{display: "flex", alignItems: "center", justifyContent: "space-around"}}>
                    <span style={{paddingTop: 100}} >
                        <div className={styleContact.cardPhoneEmailText}>
                             ТЕЛЕФОНЫ:
                        </div>
                        <div className={styleContact.cardPhoneEmailSubText}>
                            +375 (17) 269 33 33
                        </div>
                        <div className={styleContact.cardPhoneEmailSubText}>
                           +375 (29) 397 57 37
                        </div>

                    </span>
                        <span style={{paddingTop: 70}}  >
                       <div className={styleContact.cardPhoneEmailText}>
                          адрес:
                       </div>
                        <div className={styleContact.cardPhoneEmailSubText}>
                         Беларусь, г. Минск, пер. С.Ковалевской, 60, офис 820
                       </div>
                    </span>
                        <span style={{paddingTop: 70}}  >
                        <div className={styleContact.cardPhoneEmailText}>
                               E-MAIL:
                        </div>
                      <div className={styleContact.emailLink}>
                              info@sellwin-system.by
                        </div>
                    </span>
                    </div>
                </div>

                <div className={styleContact.backgroundSendForm} style={{paddingTop: 150, marginTop: 150}}>
                    <img style={{position: "absolute", paddingTop: 100, width: "100%"}} src="../Group59.svg"/>
                    <div className={styleContact.sendFormCard} >

                        <Box
                            style={{margin:"auto"}}
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '40ch', marginLeft: 10, marginTop: 5 },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <div>
                                <TextField
                                    id="standard-textarea"
                                    label="Имя*"
                                    placeholder="Ваше имя"
                                    multiline
                                    variant="standard"
                                />
                                <TextField
                                    id="standard-textarea"
                                    label="Email*"
                                    placeholder="Ваш email"
                                    multiline
                                    variant="standard"
                                />
                            </div>
                            <div>
                                <TextField
                                    id="standard-textarea"
                                    label="Имя*"
                                    placeholder="Ваше имя"
                                    multiline
                                    variant="standard"
                                />
                                <TextField
                                    id="standard-textarea"
                                    label="Email*"
                                    placeholder="Ваш email"
                                    multiline
                                    variant="standard"
                                />
                            </div>
                            <div>
                                <TextField
                                    style={{width: "90%", marginTop: 100}}
                                    id="outlined-multiline-static"
                                    label="Текст сообщения"
                                    multiline
                                    rows={4}

                                />

                            </div>


                            <button style={{width: 295, float: "right", marginTop: 18}} className={style.inputButton}>
                                отправить
                            </button>
                        </Box>
                    </div>
                </div>

                <div style={{backgroundImage: "Url(/map.png)", height: 475, width: "100%"}}>
                    <img src="../mapPoint.svg" style={{position: "absolute", paddingTop: 120, left: "70%"}}/>
                    <div className={styleContact.mapTextBackground}>
                        <div className={styleContact.mapText}>
                            Мы на карте
                        </div>
                    </div>
                </div>
            </div>


           <div className={styleContact.mainDivMobile}>
                <div style={{maxWidth: 1084,  alignItems: "center", justifyContent: "center", margin: "auto"}}>



                    <div className={styleContact.breadCramsMobile}>
                        <Link  style={{textDecoration: "none", color: "black", opacity: 0.7}} href={`/`}>
                            <span>Главная &nbsp;   <img src="../breadPosition.svg"/> &nbsp; </span>
                        </Link>
                        <span style={{color: "black"}}>Контакты</span>
                    </div>

                    <div className={styleContact.titleMobile}>Контакты</div>


                </div>
                <div className={styleContact.cardInfoMobile} >
                        <div className={styleContact.cardPhoneEmailTextMobile}>
                            TELEPHONE
                        </div>
                        <div className={styleContact.cardPhoneEmailSubTextMobile}>
                            +375 (17) 269 33 33
                        </div>
                        <div className={styleContact.cardPhoneEmailSubTextMobile}>
                           +375 (29) 397 57 37
                        </div>


                       <div className={styleContact.cardPhoneEmailTextMobile}>
                           DIRECTION
                       </div>
                        <div className={styleContact.cardPhoneEmailSubTextMobile}>
                         Беларусь, г. Минск, пер. С.Ковалевской, 60, офис 820
                       </div>
                        <div className={styleContact.cardPhoneEmailTextMobile}>
                               E-MAIL: <span style={{fontSize: 16, }} className={styleContact.emailLink}>
                            info@sellwin-system.by
                        </span>
                        </div>
                </div>

               <div className={styleContact.weAreInSocial}>
                   Мы в социальных сетях!
               </div>
               <div style={{display: "flex", alignItems: "center", justifyContent: "space-around", margin: "auto", marginRight: "5%", }}>
                   <img src="../Instagram.png"/>
                   <img  src="../vk.png"/>
                   <img  src="../twitter.png"/>
                   <img  src="../telegram.png"/>
                   <img src="../facebook.png"/>
               </div>

                <div className={styleContact.backgroundSendForm} style={{paddingTop: 150, marginTop: 150, paddingBottom: 50}}>

                    <img style={{position: "absolute",  width: "100%", marginTop: -250}} src="../Group59.svg"/>
                    <div className={styleContact.anyQuestionMobile}>Есть вопросы? <br/>Напишите нам!</div>
                    <div className={styleContact.sendFormCardMobile} >

                        <Box
                            style={{margin:"auto", width: "90%"}}
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '95%', marginTop: 1 },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <div>
                                <div className={styleContact.subTitleSendFormMobile}>Наши менеджеры свяжутся с вами в ближайшее время </div>
                                <TextField
                                    id="standard-textarea"
                                    label="Контактное ФИО*"
                                    placeholder="Контактное ФИО*"
                                    multiline
                                    variant="standard"
                                />
                                <TextField
                                    id="standard-textarea"
                                    label="Электронная почта*"
                                    placeholder="Электронная почта*"
                                    multiline
                                    variant="standard"
                                />
                            </div>
                            <div>
                                <TextField
                                    id="standard-textarea"
                                    label="Компания"
                                    placeholder="Компания"
                                    multiline
                                    variant="standard"
                                />
                                <TextField
                                    id="standard-textarea"
                                    label="Телефон"
                                    placeholder="Телефон"
                                    multiline
                                    variant="standard"
                                />
                            </div>
                            <div className={styleContact.subTitleSendFormMobile}>Заполняя данную форму вы соглашаетесь на обработку и хранение
                                <Link style={{color: "#125E97"}} href={'/'}>персональных данных</Link>
                            </div>
                            <div>
                                <TextField
                                    style={{width: "95%", marginTop: 30}}
                                    id="outlined-multiline-static"
                                    label="Напишите ваше сообщение"
                                    multiline
                                    rows={4}

                                />

                            </div>


                            <button  className={style.inputButtonMobile} style={{marginBottom: 30, marginTop: 30, width: "90%", marginRight: "6%"}}>
                                отправить
                            </button>
                        </Box>
                    </div>
                </div>


                    <img src="../weOnMap.png" style={{width: "100%"}} />


            </div>







        </MainContainer>

    )
}
export const getServerSideProps = async () =>{
    console.log("11111111111")


    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://portal.sellwingroup.com/api/sellwin-system/?SECTION=uslugi')
    const cardText = await res.json()
    const res2 = await fetch('https://portal.sellwingroup.com/api/sellwin-system/?SECTION=tekhnologii')
    const tekhnologii = await res2.json()
    const res3 = await fetch('https://portal.sellwingroup.com/api/sellwin-system/?SECTION=modeli-sotrudnichestva')
    const modeliSotrudnichestva = await res3.json()
    const response = await fetch(`https://portal.sellwingroup.com/api/sellwin-system/?SECTION=uslugi`)
    const services = await response.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            cardText,
            tekhnologii,
            modeliSotrudnichestva,
            services
        },
    }
}