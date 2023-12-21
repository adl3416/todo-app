import React, { useState } from 'react'
import { Button, Form, FormLabel } from 'react-bootstrap'


const NoteForm = ({createNote}) => {     /* todoapp den gönderilen propsu burdan karsiliyoruz.(ayni isimle) */

     const [message, setMessage] = useState("");


  return (
    
     <Form>
          <Form.Group className='mb-3' >

               <FormLabel > Message </FormLabel>
               <Form.Control type='text' value={message} onChange={(e)=>setMessage(e.target.value)} />    {/* burda degisiklik olursa usestate ile hemen guncelleniyor */}
          </Form.Group>
          <Button variant='warning' onClick={()=> createNote(message)}> Create Note</Button>              {/* burdanda {createNote} cagirip ona message gönderiyoruz */}
     </Form>
  )
  
}

export default NoteForm