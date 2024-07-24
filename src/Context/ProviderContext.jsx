import CreateContext from './CreateContext'

const ChatsBuscados = () => { 
    const [listaProductos, setListaProductos] = useState([])
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
 }


return (
    <CreateContext.Provider value={{ ChatsBuscados }}>
        {children}
    </CreateContext.Provider>
);