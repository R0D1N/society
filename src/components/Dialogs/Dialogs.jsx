import React from "react";
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const chatData = [
    { name: 'Vitor', id: 1 },
    { name: 'Sasha', id: 2 },
    { name: 'Petya', id: 3 },
    { name: 'Tanya', id: 4 },
    { name: 'Liza', id: 5 },
]
const msgData = [
    {msg: 'WHat'},
    {msg: 'the'},
    {msg: 'fuck'},
]

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

const renderChatData = chatData.map(d => <Dialog name={d.name} id={d.id}/>)
const renderMsgData = msgData.map(d => <Msg msg={d.msg}/>)


 const Dialogs = () => {
    return (
        <div className={style.dialogWindow}>
            <div className={style.dialogs}>
                {renderChatData}
            </div>
            <div className={style.messages}>
                {renderMsgData}
            </div>
        </div>
    )
}

export default Dialogs;