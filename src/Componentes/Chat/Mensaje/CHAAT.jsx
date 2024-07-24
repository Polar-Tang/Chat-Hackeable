// import React from 'react'
// import { useParams } from 'react-router-dom'
// import ChatArray from '../ChatArray'

// const CHAAT = ({lottaChats}) => {
//     const {chatId} = useParams()
//     console.log(chatId)

//     const chatLink = ChatArray.find(chatLink => chatLink.id === Number(chatId))

//     const chatMensaje = chatLink.mensajes


//    // const someMesage = chat.slice(0,1)
//    // const author = chat[0]
//    // const auttor = author.autor
//    const { autor, mensaje, visto, fecha, id } =  lottaChats


// // const mensaje = chatLink.mensajes
//    const isImage =  /\.(jpeg|jpg|gif|png)$/.test(mensaje);
//    const isThatMe = autor === "Yo"
   
//    if( isImage && isThatMe ){
//        return (
//            <div className='bodyMessage yo'>
//             <p className='autor'> {autor} </p>
//             <img src={mensaje} className='imagen'/>
//             <p className='fecha'> {fecha} </p>
//             <p className='recibe' > {visto} </p>
//           </div>
//        )
//    } 

//    if( isImage ){
//        return (
//            <div className='bodyMessage projima'>
//             <p className='autor'> {autor} </p>
//             <img src={mensaje} className='imagen'/>
//             <p className='fecha'> {fecha} </p>
//             <p className='recibe' > {visto} </p>
//           </div>
//        )
//    } 
   
//    if( isThatMe ){
//        return (
//            <div className='bodyMessage yo'>
//             <p className='autor'> {autor} </p>
//             <p  className='message' > {mensaje} </p>
//             <p className='fecha'> {fecha} </p>
//             <p className='recibe' > {visto} </p>
//           </div>
//        )
//    }
//    return (
//        <div className='bodyMessage projimo'>
//            <p className='autor'> {autor} </p>
//            <p className='message'> {mensaje} </p>
//            <p>{id}</p>
//            <p className='fecha'> {fecha} </p>
//            <p className='recibe'> {visto} </p>
//        </div>
//    );

// }

// export default CHAAT
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import ChatArray from '../ChatArray'
import NewMessageForm from '../MensajeForm/NewMessageForm'

const CHAAT = ({ chat }) => {
    const { chatName } = useParams()
    const now = new Date()
    const hours = String(now.getHours()) + ":" + String(now.getMinutes())
    const [newMessage, setNewMessage] = useState([])


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

    console.log(ChatArray)

    const chatLink = ChatArray.find(chatLink => chatLink.autor === chatName)

    if (!chatLink) {
        return <p>Chat no encontrado</p>
    }

    const chatMensaje = chatLink.mensajes

    return (
        <div>
             <div className='superior-nav'>
                <span><img className='foto-portada' src={chatLink.foto} alt='foto portada' /></span>
                    <p className='autor'>{chatLink.autor}</p>
            </div>
            {[...chatMensaje, ...newMessage].map((mensajeObj, index) => {
                const { autor, mensaje, visto, fecha } = mensajeObj
                const isImage = /\.(jpeg|jpg|gif|png)$/.test(mensaje)
                const isThatMe = autor === "Yo"

                if (isImage && isThatMe) {
                    return (
                        <div key={index} className='bodyMessage yo'>
                             <p className='autor'> {autor}  </p> 
                            <img src={mensaje} className='imagen' alt='message' />
                            <p className='fecha'> {fecha} </p>
                            <p className='recibe'> {visto} </p>
                        </div>
                    )
                }

                if (isImage) {
                    return (
                        <div key={index} className='bodyMessage projima'>
                            <p className='autor'> {autor} </p>
                            <img src={mensaje} className='imagen' alt='message' />
                            <p className='fecha'> {fecha} </p>
                            <p className='recibe'> {visto} </p>
                        </div>
                    )
                }

                if (isThatMe) {
                    return (
                        <div key={index} className='bodyMessage yo'>
                            <p className='autor'> {autor} </p>
                            <p className='message'> {mensaje} </p>
                            <p className='fecha'> {fecha} </p>
                            <p className='recibe'> {visto} </p>
                        </div>
                    )
                }

                return (
                    <div key={index} className='bodyMessage projimo'>
                        <p className='autor'> {autor} </p>
                        <p className='message'> {mensaje} </p>
                        <p className='fecha'> {fecha} </p>
                        <p className='recibe'> {visto} </p>
                    </div>
                )
            })}
            <NewMessageForm handleSubmitNewMessage={handleSubmitNewMessage} />
        </div>
    )
}

export default CHAAT

export const Messages = ({ lottaChats }) => { 
    console.log(lottaChats)
    return (
        <div className="hidden">
            {lottaChats.map((chats, index) => <CHAAT chat={chats} key={index} />)}

        </div>
    )
}
