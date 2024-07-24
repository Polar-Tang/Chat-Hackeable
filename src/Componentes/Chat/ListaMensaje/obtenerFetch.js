export const obtenerFetch = async () => {
    const response = await fetch(
      '/MessageList.json',
      {
        method: "GET"
      }
    )
    return response.json()
  }