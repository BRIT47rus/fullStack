import { Segment } from '../../components/Segment/Segment'
import { Input } from '../../components/Input/Input'
import { Textarea } from '../../components/TextArea/TextArea'
import { ErrorMessageProps, useFormik } from 'formik'

import { withZodSchema } from 'formik-validator-zod'
import { trpc } from '../../lib/trpc'
import { zCreateIdeaTrpsInput } from '@fullStack/backend/src/router/createIdea/input'
import { ErrorInfo, useState } from 'react'
export type StateInput = {
  name: string
  nick: string
  description: string
  text: string
}

export const NewPage = () => {
  const createIdea = trpc.createIdea.useMutation()
  const [succesVisibleMessage, setSuccesVisibleMessage] = useState(false)
  const [submittingError, setSubmittingError] = useState<string | null>(null)

  const formik = useFormik<StateInput>({
    initialValues: {
      name: '',
      nick: '',
      description: '',
      text: '',
    },
    validate: withZodSchema(zCreateIdeaTrpsInput),

    onSubmit: async (values) => {
      try {
        await createIdea.mutateAsync(values)
        setSuccesVisibleMessage(true)
        formik.resetForm()
        setTimeout(() => {
          setSuccesVisibleMessage(false)
        }, 3000)
      } catch (error: any) {
        setSubmittingError(error.message)
        setTimeout(() => {
          setSubmittingError(null)
        }, 3000)
      }
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
        {!formik.isValid && <div style={{ color: 'red' }}>Some fields are invalid</div>}

     {!!submittingError && <div style={{ color: 'red' }}>{submittingError}</div>}
        {succesVisibleMessage && <div style={{ color: 'green' }}>idea created</div>}
        <button type="submit" disabled={formik.isSubmitting}>
          {formik.isSubmitting ? 'Submitting...' : 'Create idea'}
        </button>
      </form>
    </Segment>
  )
}
