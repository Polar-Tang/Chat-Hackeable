import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NewMessageForm from '../MensajeForm/NewMessageForm'
import { Messages } from './CHAAT'  // Importa Messages desde CHAAT

const Chats = ({ chat }) => {
    const [newMessage, setNewMessage] = useState([])
    const [inputValue, setInputValue] = useState('')

    const mensajes = chat.mensajes
    console.log("ESTOS SON LOS MENSAJES", mensajes )

    const now = new Date()
    const hours = String(now.getHours()) + ":" + String(now.getMinutes())

    const handleSubmitNewMessage = (e) => {
        e.preventDefault()
        const newMessageConst = {
            autor: "Yo",
            mensaje: e.target.newMessage.value,
            fecha: hours,
            id: 7,
            visto: "Enviado"
        }
        
        setNewMessage([...newMessage, newMessageConst])
    }

    const { autor, foto } = chat

    return (
        <div className='padree'>
            <div className='superior-nav'>
                <span><img className='foto-portada' src={foto} alt='foto portada' /></span>
                <Link to={`/chat/${chat.autor}`}>
                    <p className='autor'>{autor}</p>
                </Link>
            </div>
            <Messages  lottaChats={[...mensajes, ...newMessage]} />
        </div>
    )
}

export default Chats
