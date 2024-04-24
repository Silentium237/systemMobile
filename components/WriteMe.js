import stylesWriteMe from '../styles/WriteMe.module.css'
import style from "../styles/Index.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {forwardRef, useState} from "react";
import CRUDService from "../API/CRUD";
import Slide from "@mui/material/Slide";
import Dialog from "@mui/material/Dialog";
import Alert from "@mui/material/Alert";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function WriteMe() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [text, setText] = useState("")
    const [open, setOpen] = useState(false);



    let CrudService = new CRUDService();
    const SendMessage = ()=>{
        let value = "*Имя:* " + name + ". " + '\n' + "*Email:* " + email + ". " + '\n' + "*Телефон:* " + phone + ". " + '\n' + "*Текст сообщения:* " + text + ". " + '\n' + "*Отправка сообщения с SellwinSystem* "
        CrudService.get(value)
        removeValue()
        setOpen(true)
    }
    const removeValue = () => {
        setPhone("")
        setName("")
        setEmail("")
        setText("")
    }
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <div className={stylesWriteMe.mainDiv}>
                <img style={{position: "absolute",width: "100%"}} src="../Group59.svg"/>
                <span style={{
                    backgroundImage: "Url(/writeMe.png)",
                    height: 585,
                    width: 580,
                    paddingTop: 120,
                    paddingLeft: 50,
                    marginTop: 300
                }}>
                <div className={stylesWriteMe.mainText}>
                 Есть вопросы?  <br/> напиши нам!
                </div>
           </span>
                <span className={stylesWriteMe.cardStyle}>
                        <div className={stylesWriteMe.formText}>
                            Задайте нам вопрос и наши менеджеры свяжутся с вами в ближайшее время
                        </div>
                    <Box
                        component="form"
                        sx={{'& .MuiTextField-root': {m: 1, width: '45ch'},}}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="standard-textarea"
                            label="Имя*"
                            placeholder="Ваше имя"
                            multiline
                            value={name}
                            onChange={(event)=> setName(event.target.value)}
                            variant="standard"
                        />
                        <TextField
                            id="standard-textarea"
                            label="Email*"
                            placeholder="Ваш email"
                            multiline
                            value={email}
                            onChange={(event)=> setEmail(event.target.value)}
                            variant="standard"
                        />
                        <TextField
                            id="standard-textarea"
                            label="Телефон*"
                            placeholder="Ваш телефон"
                            multiline
                            value={phone}
                            onChange={(event)=> setPhone(event.target.value)}
                            variant="standard"
                        />
                        <TextField
                            id="standard-textarea"
                            label="Ваш вопрос"
                            placeholder="Ваш вопрос"
                            multiline
                            value={text}
                            onChange={(event)=> setText(event.target.value)}
                            variant="standard"
                        />
                            </Box>
                        <button style={{width: 400, marginTop: 50, marginLeft: 5}} onClick={()=> SendMessage()} className={style.inputButton}>
                            отправить
                        </button>
           </span>
            </div>

            <div className={stylesWriteMe.mainDivMobile}>

                <div className={stylesWriteMe.mainTitleMobile} >
                    Есть вопросы? <br/>
                    Напишите нам!
                </div>
                <span className={stylesWriteMe.cardStyleMobile}>
                        <div className={stylesWriteMe.formTextMobile}>
                           Задайте нам вопрос и наши менеджеры свяжутся с вами в ближайшее время
                        </div>
                    <Box
                        component="form"
                        sx={{'& .MuiTextField-root': {m: 1, width: '90%'},}}
                        noValidate
                        autoComplete="off"

                    >
                        <TextField
                            id="standard-textarea"
                            label="Имя*"
                            placeholder="Ваше имя"
                            multiline
                            variant="standard"
                            value={name}
                            onChange={(event)=> setName(event.target.value)}
                        />
                        <TextField
                            id="standard-textarea"
                            label="Email*"
                            placeholder="Ваш email"
                            multiline
                            value={email}
                            onChange={(event)=> setEmail(event.target.value)}
                            variant="standard"
                        />
                        <TextField
                            id="standard-textarea"
                            label="Телефон*"
                            placeholder="Ваш телефон"
                            multiline
                            value={phone}
                            onChange={(event)=> setPhone(event.target.value)}
                            variant="standard"
                        />
                        <TextField
                            id="standard-textarea"
                            label="Ваш вопрос"
                            placeholder="Ваш вопрос"
                            multiline
                            value={text}
                            onChange={(event)=> setText(event.target.value)}
                            variant="standard"
                        />
                        <button onClick={()=> SendMessage()} className={style.inputButtonMobileWriteMe }>
                            отправить
                        </button>
                            </Box>
           </span>
                <img src="./writeMe.png" style={{width: "100%", paddingBottom: 320}} />
                <img style={{width: "100%", paddingBottom: 100}} src="../Group59.svg"/>
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

        </>
    )
}
