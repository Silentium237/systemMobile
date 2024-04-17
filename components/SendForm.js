import style from "../styles/Index.module.css";
import style2 from "../styles/user.module.scss";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useState} from "react";

export default function SendForm() {

    const [inputWidth , setInputWidth] = useState("28%")


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
                                '& .MuiTextField-root': { m: 1, width: inputWidth },
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
                            />
                            <TextField
                                id="standard-textarea"
                                label="Email*"
                                placeholder="Email"
                                multiline
                                variant="standard"
                                size="small"
                             />
                            <TextField
                                id="standard-textarea"
                                label="Телефон*"
                                placeholder="Телефон"
                                multiline
                                variant="standard"
                                size="small"
                        />
                            </Box>
                        <button className={style.inputButton}>
                            отправить
                        </button>
                    </div>



            </div>

        </>

    )
}
