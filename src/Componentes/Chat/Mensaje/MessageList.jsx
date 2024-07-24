import React, { useEffect, useState } from 'react'
import "./mensaje.css"
import Message from './Message'
import { obtenerFetch } from '../ListaMensaje/obtenerFetch';
import { createContext } from 'react';




export const MessageList = ({ limit }) => {
  const MensajesTheme = createContext('mensajes');
  const [ listaProductos, setListaProductos] = useState([])
  const [inputValue, setInputValue] = useState('')
  // console.log(mensajesJSON)

  useEffect(
    () => {
      obtenerFetch()
        .then(
          (mensajesJSON) => {
            if (inputValue) {
              const nuevoChat = mensajesJSON.filter((mensajesJSON) => {
                const matchAutor = mensajesJSON.autor.toLowerCase().includes(inputValue.toLowerCase());
                const matchMensajes = mensajesJSON.mensajes.some((mensaje) =>
                  mensaje.mensaje.toLowerCase().includes(inputValue.toLowerCase()) ||
                  mensaje.autor.toLowerCase().includes(inputValue.toLowerCase())
                );
                return matchAutor || matchMensajes;
              });
              setListaProductos(nuevoChat)
              console.log("Este es el Array mensajesJSON", mensajesJSON)
              console.log("Nuevo input", inputValue)
              console.log("Esta es la variable de NewChAT", nuevoChat)
            }
            else {
              setListaProductos(mensajesJSON)
            }
          }
        )
    },
    [inputValue]
  )

  const handleSumbitChange = (e) => {
    console.log(e.target.value)
    setInputValue(e.target.value)
  }

  console.log("Este es limit", limit)

  return (
    <>
      <input placeholder='Busca tu contacto' onChange={handleSumbitChange} value={inputValue} />

      {
        listaProductos.slice(0, limit).map((chat) => <Message chat={chat} key={listaProductos.id} />)
      }
    </>
  )
}
export default MessageList