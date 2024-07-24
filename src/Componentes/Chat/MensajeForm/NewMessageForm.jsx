import React from 'react'

const NewMessageForm = ({handleSubmitNewMessage}) => {
  return (
    <div>
        <form onSubmit={handleSubmitNewMessage} >
        <label htmlFor='newMessage' className="form-label"></label>
        <input type="text" name='newMessage' className="form-control" id="newMessage" />
        <input type='submit' value='Submit'></input>
        </form>
    </div>
  )
}

export default NewMessageForm