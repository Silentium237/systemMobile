import MainContainer from "../components/MainContainer";

import style from "../styles/Index.module.css";
import styleTitle from "../styles/Service.module.css";
import styleContact from "../styles/Contacts.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import PhoneIcon from "@mui/icons-material/Phone";
import RoomIcon from "@mui/icons-material/Room";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import {forwardRef, useState} from "react";
import CRUDService from "../API/CRUD";
import Slide from "@mui/material/Slide";
import Dialog from "@mui/material/Dialog";
import Alert from "@mui/material/Alert";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function contact ({cardText, tekhnologii, modeliSotrudnichestva,services}){


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [text, setText] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [open, setOpen] = useState(false);

    let CrudService = new CRUDService();
    const SendMessage = ()=>{
        let value = "*Имя:* " + name + ". " + '\n' + "*Email:* " + email + ". " + '\n' + "*Телефон:* " + phone + ". " + '\n' + "*Текст сообщения:* " + text + ". " + '\n' + "*Организация:* " + companyName + ". " + '\n' + "*Отправка сообщения с SellwinSystem* "
        CrudService.get(value)
        removeValue()
        setOpen(true)
    }
    const removeValue = () => {
        setPhone("")
        setName("")
        setEmail("")
        setText("")
        setCompanyName("")
    }
    const handleClose = () => {
        setOpen(false);
    };

    return(
        <MainContainer services={services} tekhnologii={tekhnologii} >
            {/*<MainImgForAnotherPage/>*/}
            <div className={styleContact.mainDiv}>

                <div style={{maxWidth: 1084,  alignItems: "center", justifyContent: "center", margin: "auto"}}>

                    <div className={styleTitle.breadCrams}>
                        <Link href="/" style={{textDecoration: "none", cursor: "pointer", color: "gray"}}>
                            <span>Главная &nbsp;   <img src="../breadPosition.svg"/> &nbsp; </span>
                        </Link>
                        <span style={{color: "black"}}>Контакты</span>
                    </div>
                    <div style={{paddingBottom:90}} className={styleTitle.title}>Контакты</div>
                </div>
                <div className={styleContact.cardInfo} >
                    <div style={{display: "flex", alignItems: "center", justifyContent: "space-around"}}>
                    <span style={{paddingTop: 100}} >
                        <div className={styleContact.cardPhoneEmailText}>
                             <PhoneIcon style={{marginBottom: -4}} fontSize="small"/> ТЕЛЕФОН:
                        </div>
                        <div className={styleContact.cardPhoneEmailSubText}>
                            +375 (29) 340 62 59
                        </div>
                    </span>
                        <span style={{paddingTop: 100}}  >
                       <div className={styleContact.cardPhoneEmailText}>
                         <RoomIcon style={{marginBottom: -5}} fontSize="small"/> адрес:
                       </div>
                        <div className={styleContact.cardPhoneEmailSubText}>
                         Беларусь, г. Минск, пер. С.Ковалевской, 60, офис 820
                       </div>
                    </span>
                        <span style={{paddingTop: 100}}  >
                        <div className={styleContact.cardPhoneEmailText}>
                              <MarkunreadIcon style={{marginBottom: -4}} fontSize="small"/> E-MAIL:
                        </div>
                      <div className={styleContact.emailLink}>
                              info@sellwin-system.by
                      </div>
                    </span>
                    </div>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", maxWidth: 1082, margin: "auto", paddingTop: 50}}>
                    <div  className={styleContact.weAreInSocial}>Мы в социальных сетях!</div>
                    <div style={{display: "flex", alignItems: "center", justifyContent: "space-between",width: "30%" }}>
                        <img src="../Instagram.png"/>
                        <img  src="../vk.png"/>
                        <img  src="../twitter.png"/>
                        <img  src="../telegram.png"/>
                        <img src="../facebook.png"/>
                    </div>
                </div>



                <div className={styleContact.backgroundSendForm} style={{paddingTop: 150, marginTop: 150, paddingBottom: 60}}>
                    <img style={{position: "absolute", paddingTop: 100, width: "100%"}} src="../Group59.svg"/>
                    <div className={styleContact.sendFormCard} >

                        <Box
                            style={{margin:"auto"}}
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '40ch', marginLeft: 5, marginTop: 5 },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <div>
                                <TextField
                                    id="standard-textarea"
                                    label="Контактное ФИО*"
                                    placeholder="Контактное ФИО*"
                                    multiline
                                    value={name}
                                    onChange={(event)=> setName(event.target.value)}
                                    variant="standard"
                                />
                                <TextField
                                    id="standard-textarea"
                                    label="Электронная почта*"
                                    placeholder="Электронная почта*"
                                    multiline
                                    value={email}
                                    onChange={(event)=> setEmail(event.target.value)}
                                    variant="standard"
                                />
                            </div>
                            <div>
                                <TextField
                                    id="standard-textarea"
                                    label="Компания"
                                    placeholder="Компания"
                                    multiline
                                    value={companyName}
                                    onChange={(event)=> setCompanyName(event.target.value)}
                                    variant="standard"
                                />
                                <TextField
                                    id="standard-textarea"
                                    label="Телефон"
                                    placeholder="Телефон"
                                    multiline
                                    value={phone}
                                    onChange={(event)=> setPhone(event.target.value)}
                                    variant="standard"
                                />
                            </div>
                            <div>
                                <TextField
                                    style={{width: "95%", marginTop: 100}}
                                    id="outlined-multiline-static"
                                    label="Напишите ваше сообщение"
                                    multiline
                                    value={text}
                                    onChange={(event)=> setText(event.target.value)}
                                    rows={4}
                                />

                            </div>

                            <div style={{maxWidth: 730, alignItems: "center", display: "flex", margin: "auto", justifyContent: "space-between"}}>
                                <div className={styleContact.subTitleSendForm}>Заполняя данную форму вы соглашаетесь на обработку и хранение
                                    <Link style={{color: "#125E97"}} href={'/'}> персональных данных</Link>
                                </div>
                                <button onClick={()=> SendMessage()} style={{width: 295, float: "right", marginRight: -38}} className={style.inputButton}>
                                    отправить
                                </button>
                            </div>
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
                            <PhoneIcon style={{marginBottom: -4}} fontSize="small"/> TELEPHONE
                        </div>
                        <div className={styleContact.cardPhoneEmailSubTextMobile}>
                           +375 (29) 340 62 59
                        </div>
                       <div className={styleContact.cardPhoneEmailTextMobile}>
                           <RoomIcon style={{marginBottom: -5}} fontSize="small"/> DIRECTION
                       </div>
                        <div className={styleContact.cardPhoneEmailSubTextMobile}>
                         Беларусь, г. Минск, пер. С.Ковалевской, 60, офис 820
                       </div>
                        <div className={styleContact.cardPhoneEmailTextMobile}>
                            <MarkunreadIcon style={{marginBottom: -4}} fontSize="small"/> E-MAIL: <span style={{fontSize: 16, }} className={styleContact.emailLink}>
                            info@sellwin-system.by
                        </span>
                        </div>
                </div>

               <div className={styleContact.weAreInSocialMobile}>
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
                                    value={name}
                                    onChange={(event)=> setName(event.target.value)}
                                    variant="standard"
                                />
                                <TextField
                                    id="standard-textarea"
                                    label="Электронная почта*"
                                    placeholder="Электронная почта*"
                                    multiline
                                    value={email}
                                    onChange={(event)=> setEmail(event.target.value)}
                                    variant="standard"
                                />
                            </div>
                            <div>
                                <TextField
                                    id="standard-textarea"
                                    label="Компания"
                                    placeholder="Компания"
                                    multiline
                                    value={companyName}
                                    onChange={(event)=> setCompanyName(event.target.value)}
                                    variant="standard"
                                />
                                <TextField
                                    id="standard-textarea"
                                    label="Телефон"
                                    placeholder="Телефон"
                                    multiline
                                    value={phone}
                                    onChange={(event)=> setPhone(event.target.value)}
                                    variant="standard"
                                />
                            </div>
                            <div className={styleContact.subTitleSendFormMobile}>Заполняя данную форму вы соглашаетесь на обработку и хранение
                                <Link style={{color: "#125E97"}} href={'/'}> персональных данных</Link>
                            </div>
                            <div>
                                <TextField
                                    style={{width: "95%", marginTop: 30}}
                                    id="outlined-multiline-static"
                                    label="Напишите ваше сообщение"
                                    multiline
                                    value={text}
                                    onChange={(event)=> setText(event.target.value)}
                                    rows={4}

                                />

                            </div>

                            <button  className={style.inputButtonMobile}  onClick={()=> SendMessage()} style={{marginBottom: 30, marginTop: 30, width: "90%", marginRight: "6%"}}>
                                отправить
                            </button>

                        </Box>
                    </div>
                </div>
                    <img src="../weOnMap.png" style={{width: "100%"}} />
            </div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <Alert severity="info" >Отлично! Мы свяжемся с Вами в ближайшее время </Alert>
            </Dialog>
        </MainContainer>

    )
}
export const getServerSideProps = async () =>{

    const res = await fetch('https://portal.sellwingroup.com/api/sellwin-system/?SECTION=uslugi')
    const cardText = await res.json()
    const res2 = await fetch('https://portal.sellwingroup.com/api/sellwin-system/?SECTION=tekhnologii')
    const tekhnologii = await res2.json()
    const res3 = await fetch('https://portal.sellwingroup.com/api/sellwin-system/?SECTION=modeli-sotrudnichestva')
    const modeliSotrudnichestva = await res3.json()
    const response = await fetch(`https://portal.sellwingroup.com/api/sellwin-system/?SECTION=uslugi`)
    const services = await response.json()

    return {
        props: {
            cardText,
            tekhnologii,
            modeliSotrudnichestva,
            services
        },
    }
}