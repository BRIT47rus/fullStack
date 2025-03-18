import { Segment } from '../../components/Segment/Segment'
import { Input } from '../../components/Input/Input'
import { Textarea } from '../../components/TextArea/TextArea'
import { useFormik } from 'formik'

import { z } from 'zod'
import { withZodSchema } from 'formik-validator-zod'
import { trpc } from '../../lib/trpc'
export type StateInput = {
  name: string
  nick: string
  description: string
  text: string
}

export const NewPage = () => {
  const createIdea = trpc.createIdea.useMutation()

  const formik = useFormik<StateInput>({
    initialValues: {
      name: '',
      nick: '',
      description: '',
      text: '',
    },
    validate: withZodSchema(
      z.object({
        name: z.string().min(2, 'Нужно больше 1го символа'),
        nick: z
          .string()
          .min(1)
          .regex(/^[a-z0-9-]+$/, 'Nick may contain only lowercase letters, numbers and dashes'),
        description: z.string().min(1),
        text: z.string().min(10, 'минимум 10 символов'),
      })
    ),

    onSubmit: async (values) => {
      await createIdea.mutateAsync(values)
    },
  })

  return (
    <Segment title="New Idea">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          formik.handleSubmit()
        }}
      >
        <Input name="name" label="Name" formik={formik} />
        <Input name="nick" label="Nick" formik={formik} />
        <Input name="description" label="Description" formik={formik} />
        <Textarea name="text" label="Text" formik={formik} />
        <button type="submit">Create idea</button>
        {!formik.isValid && <div style={{ color: 'red' }}>Some fields are invalid</div>}
      </form>
    </Segment>
  )
}
