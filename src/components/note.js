import React from 'react'
import { Button, Card, CardFooter, Form } from 'react-bootstrap'
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const Note = ({id, message, completed, deleteNote, updateNote}) => {
  return (
   
     <Card className='todo-card'  style={{backgroundColor: completed ? "#dddddd": "#00ee33" }}>
          <Card.Body>
               <Card.Title>{message}</Card.Title>
          </Card.Body>

          <Card.Footer className='buttons'>
               <span onClick={()=> updateNote(id)}> <FaEdit/> </span>
               <span onClick={()=>deleteNote(id)}> <FaTrash /></span>
               

          </Card.Footer>
     </Card>


  )
}

export default Note