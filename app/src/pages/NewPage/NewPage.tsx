import  { useState } from 'react'
import { Segment } from '../../components/Segment/Segment'
import { Input } from '../../components/Input/Input';
import { Textarea } from '../../components/TextArea/TextArea';

export type StateInput ={
  name: string;
  nick: string;
  description: string;
  text: string;
}

export const NewPage = () => {
  const [state, setState] = useState({
    name: '',
    nick: '',
    description: '',
    text: '',
  })
  return(
    <Segment title="New Idea">
      <form
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <Input name="name" label="Name" state={state} setState={setState} />
        <Input name="nick" label="Nick" state={state} setState={setState} />
        <Input name="description" label="Description" state={state} setState={setState} />
        <Textarea name="text" label="Text" state={state} setState={setState} />
        <button type='submit'>Create idea</button>
      </form>
    </Segment>
  )
}