import style from "../styles/Index.module.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CRUDService from "../API/CRUD";
import {forwardRef, useState} from "react";
import Alert from '@mui/material/Alert';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';


const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function SendForm() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [open, setOpen] = useState(false);



    let CrudService = new CRUDService();
    const SendMessage = ()=>{
        let value = "*Имя:* " + name + ". " + '\n' + "*Email:* " + email + ". " + '\n' + "*Телефон:* " + phone + ". " + '\n' + "*Отправка сообщения с SellwinSystem* "
        CrudService.get(value)
        removeValue()
        setOpen(true)
    }
    const removeValue = () => {
        setPhone("")
        setName("")
        setEmail("")
    }
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className={style.divForForm}>
                    <div className={style.inputHeaderText}>
                        Заполните форму для получения обратной связи
                    </div>
                    <div style={{display: "inline-flex", paddingLeft: 60, paddingRight: 50}}>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: "28%" },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                style={{fontSize: "calc( (100vw - 480px)/(1900 - 480) * (16 - 12) + 12px)"}}
                                id="standard-textarea"
                                label="Имя*"
                                placeholder="Имя"
                                multiline
                                variant="standard"
                                size="small"
                                value={name}
                                onChange={(event)=> setName(event.target.value) }
                            />
                            <TextField
                                id="standard-textarea"
                                label="Email*"
                                placeholder="Email"
                                multiline
                                variant="standard"
                                size="small"
                                value={email}
                                onChange={(event)=> setEmail(event.target.value) }
                             />
                            <TextField
                                id="standard-textarea"
                                label="Телефон*"
                                placeholder="Телефон"
                                multiline
                                variant="standard"
                                size="small"
                                value={phone}
                                onChange={(event)=> setPhone(event.target.value) }
                        />
                            </Box>
                        <button onClick={()=> SendMessage()} className={style.inputButton}>
                            отправить
                        </button>
                        <Dialog
                            open={open}
                            TransitionComponent={Transition}
                            keepMounted
                            onClose={handleClose}
                            aria-describedby="alert-dialog-slide-description"
                        >
                            <Alert severity="info" >Отлично! Мы свяжемся с Вами в ближайшее время </Alert>
                        </Dialog>
                    </div>
            </div>
        </>
    )
}
