import React from "react";
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialog = data =>{
    const {name, id} = data;
    return (
        <div className={style.dialog}>
            <NavLink to={`/messages/${id}`}>{name}</NavLink>
        </div>
    )
}

const Msg = data =>{
    const {msg} = data;

    return(
        <div className={style.msg}>{msg}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={style.dialogWindow}>
            <div className={style.dialogs}>
                <Dialog name='Victor' id='1'/>
                <Dialog name='Sasha' id='2' />
                <Dialog name='Petya' id='3' />
                <Dialog name='Tanya' id='4' />
                <Dialog name='Liza' id='5' />
            </div>
            <div className={style.messages}>
                <Msg msg='What'/>
                <Msg msg='the'/>
                <Msg msg='fuck'/>
            </div>
        </div>
    )
}

export default Dialogs;