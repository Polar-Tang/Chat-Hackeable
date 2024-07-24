import React from 'react'
import { ChatScreen } from './Componentes/Screen/ChatScreen'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './Componentes/Screen/HomeScreen'
import { CHAAT } from './Componentes/Chat'


function App() {
  return (
    <>
    <Routes>
      <Route path='/home' element={<HomeScreen/>} />
      <Route path='/' element={<ChatScreen/>}/>
      <Route path='/chat/:chatName' element={<CHAAT/>}/>
      {/* <Route path='/detalle/:productId' element={<Detail/>}/>
      <Route path='/carrito' element={<Cart/>} /> */}
    </Routes>      
    </>
  )
}

export default App

// const {chatId} = useParams()
//      console.log(chatId)

//      const chatLink = mensajes.find(chatLink => chatLink.id === Number(chatId))

//     // const someMesage = chat.slice(0,1)
//     // const author = chat[0]
//     // const auttor = author.autor
//     const { autor, mensaje, visto, fecha } = chat    
//     const isImage =  /\.(jpeg|jpg|gif|png)$/.test(mensaje);
//     const isThatMe = autor === "Yo"
    
//     if( isImage && isThatMe ){
//         return (
//             <div className='bodyMessage yo'>
//              <p className='autor'> {autor} </p>
//              <img src={mensaje} className='imagen'/>
//              <p className='fecha'> {fecha} </p>
//              <p className='recibe' > {visto} </p>
//            </div>
//         )
//     } 

//     if( isImage ){
//         return (
//             <div className='bodyMessage projima'>
//              <p className='autor'> {autor} </p>
//              <img src={mensaje} className='imagen'/>
//              <p className='fecha'> {fecha} </p>
//              <p className='recibe' > {visto} </p>
//            </div>
//         )
//     } 
    
//     if( isThatMe ){
//         return (
//             <div className='bodyMessage yo'>
//              <p className='autor'> {autor} </p>
//              <p  className='message' > {mensaje} </p>
//              <p className='fecha'> {fecha} </p>
//              <p className='recibe' > {visto} </p>
//            </div>
//         )
//     }
//     return (
//         <div className='bodyMessage projimo'>
//             <p className='autor'> {autor} </p>
//             <p className='message'> {mensaje} </p>
//             <p className='fecha'> {fecha} </p>
//             <p className='recibe'> {visto} </p>
//         </div>
//     );