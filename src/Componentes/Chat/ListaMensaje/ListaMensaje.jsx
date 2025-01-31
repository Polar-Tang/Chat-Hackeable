import React, { useState } from 'react'
import { MessageList } from '../Mensaje/MessageList'
// import { NewMessage } from '../NewMessage/NewMessage'

const mensajes_info = [
  {
    autor: "Indio Solari",
    foto: "/public/img/foto-indio.jpg",
    mensajes: [
      {
        autor: "Indio Solari",
        mensaje: " Es hora de Levantarse, Querido! (Dormiste bien?)",
        visto: "visto",
        fecha: "7:35"},
        {
    autor: "Yo",
    mensaje: "Yo soy mis sueños, y vos?",
    visto: "visto",
    fecha: "10:56"},
    {
      autor: "Indio Solari",
      mensaje: "/public/img/IndioSolari.jpg",
      visto: "visto",
      fecha: "12:24"},
      {
        autor: "Indio Solari",
        mensaje: "Yo voy en trenes, no tengo donde ir.",
        visto: "visto",
        fecha: "14:42"},
        {
          autor: "Yo",
          mensaje: "Tu negocio es muy díficil de explicar y fácil de enseñar",
          visto: "Enviado",
          fecha: "14:42"}],
    id: 1
},
{
  autor: "Frank Zappa",
  foto: "/public/img/foto-frank.JPG",
  mensajes:[
    {
      autor: "Frank Zappa",
      mensaje: "/public/img/MagicalPig.jpg",
      visto: "visto",
      fecha: "11:15"
    },
    {
      autor: "Yo",
      mensaje: "It looks like a magical pig with marital aids stuck all over it",
      visto: "visto",
      fecha: "11:21"
    },
    {
      autor: "Frank Zappa",
      mensaje: "You love it, it's a way of life",
      visto: "visto",
      fecha: "18:54"
    }
  ],
    id:2
},
{
  autor: "Yayo",
  foto:"/public/img/foto-yayo.jpg",
  mensajes: [ 
    {
    autor: "Yo",
    mensaje: "/public/img/Yayojpg.jpg",
    visto: "Enviado",
    fecha: "12:15"
  }, 
  {
    autor: "Yo",
    mensaje: "¡Esta es para vos!",
    visto: "Enviado",
    fecha: "12:15"
  }],
  id: 3
},

]




const ListaMensaje = () => {
  


  const [inputValue, setInputValue] = useState('')

  const [newMessage, setNewMessage] = useState(mensajes_info)

  
  

  
  
  return (
    <>
    {/* <Link to={'/detalle/' + producto.id}> */}
    <MessageList chatList={newMessage}  />
    {/* </Link> */}
    </>
  )
}
export default ListaMensaje