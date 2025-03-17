import { Segment } from '../../components/Segment/Segment'
import { Input } from '../../components/Input/Input';
import { Textarea } from '../../components/TextArea/TextArea';
import {  useFormik } from 'formik';
export type StateInput ={
  name: string;
  nick: string;
  description: string;
  text: string;
}

export const NewPage = () => {

  const formik = useFormik({
    initialValues: {
      name: '',
      nick: '',
      description: '',
      text: '',
    },
    onSubmit:(values)=>{
      console.info('Submitted', values)
    }
  })


  return(
    <Segment title="New Idea">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          formik.handleSubmit()
        }}
      >
        <Input name="name" label="Name" formik={formik} />
        <Input name="nick" label="Nick"  formik={formik}  />
        <Input name="description" label="Description"  formik={formik}  />
        <Textarea name="text" label="Text"  formik={formik}  />
        <button type='submit'>Create idea</button>
      </form>
    </Segment>
  )
}