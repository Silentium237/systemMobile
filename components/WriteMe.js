import stylesWriteMe from '../styles/WriteMe.module.css'
import style from "../styles/Index.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";


export default function WriteMe() {


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
                            Заполните форму для получения обратной связи
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
                            variant="standard"
                        />
                        <TextField
                            id="standard-textarea"
                            label="Email*"
                            placeholder="Ваш email"
                            multiline
                            variant="standard"
                        />
                        <TextField
                            id="standard-textarea"
                            label="Телефон*"
                            placeholder="Ваш телефон"
                            multiline
                            variant="standard"
                        />
                        <TextField
                            id="standard-textarea"
                            label="Ваш вопрос"
                            placeholder="Ваш вопрос"
                            multiline
                            variant="standard"
                        />
                            </Box>
                        <button style={{width: 400, marginTop: 50, marginLeft: 5}} className={style.inputButton}>
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
                        />
                        <TextField
                            id="standard-textarea"
                            label="Email*"
                            placeholder="Ваш email"
                            multiline
                            variant="standard"
                        />
                        <TextField
                            id="standard-textarea"
                            label="Телефон*"
                            placeholder="Ваш телефон"
                            multiline
                            variant="standard"
                        />
                        <TextField
                            id="standard-textarea"
                            label="Ваш вопрос"
                            placeholder="Ваш вопрос"
                            multiline
                            variant="standard"
                        />
                        <button style={{}} className={style.inputButtonMobileWriteMe }>
                            отправить
                        </button>
                            </Box>

           </span>
                <img src="./writeMe.png" style={{width: "100%", paddingBottom: 320}} />
                <img style={{width: "100%", paddingBottom: 100}} src="../Group59.svg"/>
            </div>

        </>



    )
}
