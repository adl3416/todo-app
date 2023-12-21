import React, { useState } from 'react'
import NoteForm from './note-form'
import Notes from './notes'
import { Col, Container, Row } from 'react-bootstrap'
import "./todoapp.scss";

const ToDoApp = () => {

     const [notes, setNotes] = useState([])                // {/*  1 prob olarak notes e gönderiyoruz  cunku o ihtiyac duyuyor*/}

     const createNote=()=>{ // 2noteformdan gelen not buraya eklencek

     }


  return (

     <Container>

          <Row className='g-5'> 
               <Col md={3}>
              < NoteForm createNote={createNote}/>   {/*   2prob olarak noteform e gönderiyoruz  cunku o ihtiyac duyuyor ordan yeni not olusturcak*/}
               </Col>

               <Col md={9}>
               <Notes notes={notes}/>  {/*   1prob olarak notes e gönderiyoruz  cunku o ihtiyac duyuyor*/}
               </Col>
          </Row>
     </Container>

   
  )
}

export default ToDoApp