import React from 'react'
import { Button, Card, CardFooter, Form } from 'react-bootstrap'
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const Note = () => {
  return (
   
     <Card className='todo-card'>
          <Card.Body>
               <Card.Title>Test</Card.Title>
          </Card.Body>

          <Card.Footer className='buttons'>
               <span> <FaEdit/> </span>
               <span> <FaTrash /></span>
               

          </Card.Footer>
     </Card>


  )
}

export default Note