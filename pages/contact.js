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
import { Resend } from 'resend';



const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const EmailTemplate = ({firstName}) => (
    <div>
        <h1>Welcome, {firstName}!</h1>
    </div>
);

// const resend = new Resend(process.env.RESEND_API_KEY);
const resend = new Resend('re_F4L3rQZe_BbjoodK1A2CRg3QSzao3xpQN');




export default function contact ({cardText, tekhnologii, modeliSotrudnichestva,services}){


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [text, setText] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [open, setOpen] = useState(false);
    const [openPolicy, setOpenPolicy] = useState(false);

    let CrudService = new CRUDService();
    const  SendMessage = async ()=>{
        let value = "*Имя:* " + name + ". " + '\n' + "*Email:* " + email + ". " + '\n' + "*Телефон:* " + phone + ". " + '\n' + "*Текст сообщения:* " + text + ". " + '\n' + "*Организация:* " + companyName + ". " + '\n' + "*Отправка сообщения с SellwinSystem* "
        await CrudService.get(value)

        const API_URL = "https://devnest.sellwin.by/sender"

        let body = {
            to: "vel7527727@gmail.com", // list of receivers
            from: "b2b_info@sellwin.by", // sender address
            subject: "Новое сообщение с sellwin-system", // Subject line
            //   text: "welcome", // plaintext body
            html: `<p>test</p>`,
        }

        let options = {
            method: 'POST',
            body: body,
            timeout: 10000,
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            mode: "cors",
            crossdomain: true,

        }
        const request = new Request(API_URL, options);
        const response = await fetch(request);
        console.log(response)
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
    const handleClosePolicy = () => {
        setOpenPolicy(false);
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
                              <a style={{textDecoration: "none", color: "#0089EF"}} href="mailto:dev@sellwin.by">dev@sellwin.by</a>
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
                                    <a style={{color: "#125E97"}} onClick={()=> setOpenPolicy(true)}> персональных данных</a>
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
                            <a style={{textDecoration: "none", color: "#0089EF"}} href="mailto:dev@sellwin.by">dev@sellwin.by</a>

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
                                <a style={{color: "#125E97"}} onClick={()=> setOpenPolicy(true)}> персональных данных</a>
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
            <Dialog
                open={openPolicy}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClosePolicy}
                aria-describedby="alert-dialog-slide-description"
            >
                <Alert severity="info" >
                    <strong>
                        ПОЛИТИКА ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ ПОЛЬЗОВАТЕЛЯ САЙТОВ ООО «СЭЛЬВИН»
                    </strong>
                    <br/>
                    1. Политика обработки персональных данных (далее - Политика) регулирует правоотношения по обработке персональных данных между ООО «Сэльвин», УНП 100819821, адрес: 220084, г. Минск, ул. Академика Купревича, д. 14, каб. 37 (4 этаж) (далее - Оператор) и Пользователем сайта sellwin-system.by (далее - Пользователь). Под «Пользователем» понимается дееспособное физическое лицо, достигшее 18-летнего возраста и желающее заказать услуги Компании, оставить комментарий, зарегистрироваться на веб-сайте либо совершить иные действия, предусмотренные функционалом интернет- ресурса Оператора. Под «Сайтом» или «Интернет-ресурсом Оператора» понимается веб-сайт sellwin-system.by с учетом всех уровней доменных имен, принадлежащий Оператору. Под «персональными данными» понимается любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу (гражданину). Под «обработкой персональных данных» понимается любое действие (операция) или совокупность действий (операций) с персональными данными, совершаемых с использованием средств автоматизации или без использования таких средств. К таким действиям (операциям) можно отнести: сбор, получение, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных.

                    <br/>
                    2. Настоящая Политика определяет порядок обработки персональных данных пользователей сайта sellwin-system.by (далее - Сайт), условия и принципы обработки персональных данных, права Пользователей и обязанности Оператора, сведения о реализуемых мерах по защите обрабатываемых персональных данных. Текст настоящей Политики размещается Оператором в сети Интернет на Сайте.
                    <br/>

                    3. Настоящая Политика действует в отношении всех персональных данных, которые Оператор получает от Пользователей.
                    <br/>

                    4. Пользователь соглашается с настоящей Политикой путем проставления соответствующей отметки на сайте Оператора. В случае несогласия с условиями Политики Пользователь должен немедленно прекратить любое использование Сайта.

                    <br/>
                    5. При использовании функционала Сайта Пользователь может предоставлять Оператору следующие персональные данные (перечень и виды персональных данных зависят от конкретных функциональных возможностей интернет-ресурса, используемых Пользователем): фамилия, имя и отчество, адрес электронной почты, номер контактного телефона, идентификационные данные пользователя (user ID), адрес доставки товара, логин и пароль в личном кабинете на сайте Оператора.

                    <br/>
                    6. Предоставляя свои персональные данные, Пользователь соглашается на их обработку (вплоть до отзыва Пользователя своего согласия на обработку персональных данных), включая сбор, хранение, обезличивание, передачу третьим лицам в предусмотренных Политикой случаях, Оператором в целях предоставления Пользователю рекламной, справочной информации, сервисов в соответствии с функциональными возможностями Сайта и в иных целях согласно п.8 настоящей Политики.
                    <br/>

                    При обработке персональных данных Оператор руководствуется следующими нормативными правовыми актами:

                    <br/>
                    - Конституция Республики Беларусь;
                    <br/>
                    - Закон Республики Беларусь от 07.05.2021 N 99-З «О защите персональных данных»;
                    <br/>
                    - Закон Республики Беларусь от 21.07.2008 N 418-З «О регистре населения»;
                    <br/>
                    - Закон Республики Беларусь от 10.11.2008 N 455-З «Об информации, информатизации и защите информации»;
                    <br/>
                    - Приказ ОАЦ при Президенте Республики Беларусь от 20 февраля 2020г. №66 «О мерах по реализации Указа Президента Республики Беларусь от 9 декабря 2019 г. № 449»;
                    <br/>
                    - Иные нормативные правовые акты Республики Беларусь и нормативные документы уполномоченных органов государственной власти.

                    <br/>
                    Предоставленное Пользователем согласие на обработку персональных данных действует со дня предоставления такого согласия до момента достижения целей обработки или отзыва Пользователем согласия, если иное не предусмотрено действующим законодательством. Пользователь в любое момент может отозвать предоставленное Оператору согласие в порядке, установленном настоящей Политикой.
                    <br/>

                    7. Если Пользователь желает уточнить персональные данные в случае, когда персональные данные являются неполными, неточными или неактуальными, либо желает отозвать свое согласие на обработку персональных данных, Пользователь должен направить официальный запрос Оператору с темой «Уточнить персональные данные» или «Прекратить обработку персональных данных» на адрес электронной почты postmaster@sellwin.by. В письме необходимо указать свой электронный адрес и соответствующее требование.

                    <br/>
                    8. Оператор использует предоставленные Пользователем данные в целях:

                    <br/>
                    8.1. регистрация и идентификация Пользователя на Сайте, предоставление Пользователю возможности полноценного использования Сайта;

                    <br/>
                    8.2. дальнейшей коммуникации по заявке Пользователя для исполнения обязательств по заявке Пользователя, консультирования по вопросам оказания Оператором услуг;

                    <br/>
                    8.3. отправки сообщений информационного характера;
                    <br/>

                    8.3. отправки сообщений информационного характера;

                    <br/>
                    8.4. рекламы, продвижения товаров, работ (услуг), в том числе на основании полученной информации о персональных предпочтениях и настройках Пользователя;

                    <br/>
                    8.5. оценки и анализа работы Сайта Оператора;

                    <br/>
                    8.6. аналитики эффективности размещения рекламы, статистических исследований на основе обезличенной информации, предоставленной Пользователем;

                    <br/>
                    8.7. информирования Пользователя об акциях, скидках и специальных предложениях посредством рассылок по электронной почте, телефонной связи;

                    <br/>
                    8.8. проведения маркетинговых исследований, в том числе с привлечением третьих лиц в качестве подрядчика (исполнителя, консультанта).
                    <br/>

                    9. Оператор не проверяет данные, представленные или указанные Пользователем.

                    <br/>
                    В связи с этим Оператор исходит из того, что при представлении персональных данных Пользователь:

                    <br/>
                    9.1. является дееспособным лицом. В случае недееспособности лица, использующего Сайт, согласие на обработку персональных данных предоставляется законным представителем.

                    <br/>
                    9.2. указывает достоверную информацию о себе (либо о представляемом им недееспособном лице). Пользователь самостоятельно поддерживает представленные персональные данные в актуальном состоянии.
                    <br/>

                    9.3. самостоятельно поддерживает представленные персональные данные в актуальном состоянии.

                    <br/>
                    9.4. осознает, что информация на Сайте, размещаемая Пользователем, может становиться доступной для других лиц, может быть скопирована или распространена такими пользователями в случаях, предусмотренных Политикой.

                    <br/>
                    10. Оператор обрабатывает персональные данные на основе следующих принципов:
                    <br/>

                    10.1. законности;
                    <br/>

                    10.2. ограничения обработки персональных данных достижением конкретных заранее определенных законных целей;

                    <br/>
                    10.3. недопущения обработки персональных данных, несовместимой с целями сбора и/или хранения полученных от Пользователя данных;
                    <br/>

                    10.3. недопущения обработки персональных данных, несовместимой с целями сбора и/или хранения полученных от Пользователя данных;

                    <br/>
                    10.4. соответствия содержания и объема обрабатываемых персональных данных целям их обработки;

                    <br/>
                    10.5. недопущения обработки избыточных по отношению к целям обработки данных;

                    <br/>
                    10.6. обеспечение точности, достаточности и актуальности персональных данных по отношению к целям их обработки;
                    <br/>

                    10.7. уничтожение или обезличивание персональных данных в целях недопущения их раскрытия при достижении целей обработки данных, утраты необходимости такой обработки или при получении от Пользователя требования об уничтожении персональных данных либо поступлении заявления об отзыве согласия на обработку персональных данных.

                    <br/>
                    11. Оператор при обработке персональных данных принимает необходимые и достаточные организационные и технические меры для защиты персональных данных от неправомерного доступа к ним, а также от иных неправомерных действий в отношении персональных данных. Обработка персональных данных Пользователей осуществляется Оператором с учетом следующего:
                    <br/>

                    11.1. Обработка персональных данных Пользователей осуществляется с использованием баз данных на территории Республики Беларусь.
                    <br/>

                    11.2. Обработка персональных данных осуществляется как с использованием автоматизированных средств, так и без их использования.

                    <br/>
                    11.3. Оператор обязуется не передавать полученную от Пользователя информацию третьим лицам, кроме случаев, специально оговоренных в настоящей Политике.
                    <br/>

                    11.4. Оператор обязуется сохранять в тайне, не раскрывать и не распространять персональные данные без согласия Пользователя, если иное не предусмотрено действующим законодательством и/или настоящей Политикой.
                    <br/>

                    11.5. Хранение персональных данных Пользователей осуществляется на электронных носителях, а для целей исполнения обязательств перед Пользователями может осуществляться на материальных носителях после извлечения персональных данных.
                    <br/>

                    11.6. Хранение персональных данных осуществляется в пределах срока, объективно необходимого для исполнения обязательств перед Пользователями, и определяется следующими событиями (в зависимости от того, какое событие наступит ранее):
                    <br/>

                    11.6.1. до момента удаления Пользователем персональных данных посредством личного кабинета;

                    <br/>
                    11.6.2. до момента уничтожения персональных данных Оператором в связи с поступлением от Пользователя требования об уничтожении персональных данных или отзыве согласия на их обработку;

                    <br/>
                    11.6.3. до момента истечения срока действия согласия Пользователя.
                    <br/>

                    11.7. Оператор имеет право хранить персональные данные Пользователя, кроме случаев получения требования об уничтожении данных или отзыва согласия на обработку данных, в обезличенном виде после исполнения обязательств перед Пользователем для целей, указанных в п. 8.6. настоящей политики.

                    <br/>
                    12. Не считается нарушением обязательств, предусмотренных настоящей Политикой, передача информации в соответствии с обоснованными и применимыми требованиями законодательства Республики Беларусь, а равно предоставление Оператором информации партнерам, действующим на основании договора (соглашения) с Оператором, для исполнения обязательств перед Пользователем; передача Оператором третьим лицам данных о Пользователе в обезличенной форме в целях оценки и анализа работы Сайта Оператора, предоставления персональных рекомендаций, показа рекламных объявлений на основании персональных предпочтений и настроек Пользователя, а также проведения маркетинговых, аналитических и/или статистических исследований.
                    <br/>

                    13. Оператор получает информацию об ip-адресе Пользователя и сведения о том, по ссылке с какого интернет-сайта он пришел. Данная информация не используется для установления личности посетителя.

                    <br/>
                    14. Пользователь имеет право на получение от Оператора информации, касающейся обработки его персональных данных. Оператор безвозмездно предоставляет Пользователю или его представителю возможность ознакомления с персональными данными, относящимися к Пользователю. В случае выявления неполноты, неточности или неактуальности сведений Оператор на основании информации Пользователя вносит в персональные данные Пользователя необходимые изменения в срок, не превышающий 7 (семь) рабочих дней, и уведомляет Пользователя о внесенных изменениях. В случае если Пользователь или его представитель предоставит Оператору подтверждение факта незаконного получения или обработки его персональных данных, а равно факта несоответствия действий с его персональными данными целям обработки, Оператор в срок, не превышающий 7 (семь) рабочих дней обязуется уничтожить такие персональные данные Пользователя и уведомить Пользователя о предпринятых мерах.
                    <br/>

                    15. Оператор обязуется прекратить обработку персональных данных Пользователя в случае:
                    <br/>

                    15.1. выявления неправомерной обработки персональных данных Пользователя;
                    <br/>

                    15.2. отзыва Пользователем согласия на обработку его персональных данных;

                    <br/>
                    15.3. получения от Пользователя требования об уничтожении персональных данных;
                    <br/>

                    15.4. достижения цели обработки персональных данных. При наступлении указанных в настоящем пункте случаев Оператор прекращает обработку персональных данных и обеспечивает уничтожение данных в срок, не превышающий 30 (тридцать) дней, если иной срок не установлен законодательством. При невозможности уничтожения персональных данных Пользователя в указанный срок Оператор производит блокировку персональных данных Пользователя и обеспечивает их уничтожение в срок, установленный законодательством, но не более 6 (шести) месяцев.
                    <br/>

                    16. Оператор вправе вносить изменения в настоящую Политику в любое время. Актуальный текст Политики размещается на Сайте.

                    <br/>
                    17. Продолжение пользования Сайтом или его сервисами после публикации новой редакции Политики означает принятие Политики и ее условий Пользователем. В случае несогласия с условиями Политики Пользователь должен немедленно прекратить использование Сайта и его сервисов.
                    <br/>

                    18. Все вопросы по настоящей Политике и/или обработке персональных данных направляются на адрес электронной почты Оператора: dev@sellwin.by. </Alert>
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