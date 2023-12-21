import React from 'react'
import Note from './note'
import { Col, Container, Row } from 'react-bootstrap'



const Notes = ({notes,deleteNote, updateNote}) => {


  return (

    <Container >

      <Row className='g-4'>

        {notes.map( note=> <Col sm={6} md={4} lg={3} key={note.id}  ><Note {... note}  deleteNote={deleteNote} updateNote={updateNote}/>  </Col>)}

        

      </Row>
    </Container>




  )
}

export default Notes