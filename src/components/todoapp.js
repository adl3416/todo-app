import React, { useState } from 'react'
import NoteForm from './note-form'
import Notes from './notes'
import { Col, Container, Row } from 'react-bootstrap'
import "./todoapp.scss";

const ToDoApp = () => {

     const [notes, setNotes] = useState([])                // {/*  1 prob olarak notes e gönderiyoruz  cunku o ihtiyac duyuyor*/}


       //CREATE
     const createNote=(message)=>{                       // 2noteformdan gelen not buraya eklendi

          const note ={
               id :  Date.now(),
               message,
               completed:false
          }

          setNotes([note, ...notes])   // note:eski notlar,  notes:yeni notlar
     }


          //DELETE
     const deleteNote = (id) => {
        /*   const result = confirm("Are you sure to delete? ");
          if(!result) return; */
 

          const arr = notes.filter(note=> note.id !== id);
          setNotes(arr);
     }



       //UPDATE
       const updateNote = (id) => { 
          const arr = notes.map(note=> {
               if(note.id ===id){
                    return {... note, completed: !note.completed}
               }
               else{
                    return note;
               }
          });
          setNotes(arr);
       }




  return (

     <Container className='todoapp'>

          <Row className='g-5'> 
               <Col md={3}>
              < NoteForm createNote={createNote}/>   {/*   2prob olarak noteform e gönderiyoruz  cunku o ihtiyac duyuyor ordan yeni not olusturcak*/}
               </Col>

               <Col md={9}>
               <Notes notes={notes} deleteNote={deleteNote}  updateNote={updateNote}/>  {/*   1prob olarak notes e gönderiyoruz  cunku o ihtiyac duyuyor*/}
               </Col>
          </Row>
     </Container>
     
   
  )

}

export default ToDoApp