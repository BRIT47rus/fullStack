import { Segment } from '../../components/Segment/Segment'
import { Input } from '../../components/Input/Input'
import { Textarea } from '../../components/TextArea/TextArea'
import { ErrorMessageProps, useFormik } from 'formik'

import { withZodSchema } from 'formik-validator-zod'
import { trpc } from '../../lib/trpc'
import { zCreateIdeaTrpsInput } from '@fullStack/backend/src/router/createIdea/input'
import { ErrorInfo, useState } from 'react'
import { Alert } from '../../components/Alert/Alert'
import { Button } from '../../components/Button/Button'
import { FormItems } from '../../components/FormItems/FormItems'
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
        <FormItems>
        <Input name="name" label="Name" formik={formik} />
        <Input name="nick" label="Nick" formik={formik} />
        <Input name="description" label="Description" formik={formik} maxWidth={500} />
        <Textarea name="text" label="Text" formik={formik} />
        {!formik.isValid && <div style={{ color: 'red' }}>Some fields are invalid</div>}

        {!!submittingError && <Alert color="red">{submittingError}</Alert>}
        {succesVisibleMessage && <Alert color="green">Idea created!</Alert>}
        <Button loading={formik.isSubmitting}>Create Idea</Button>
        </FormItems>
      </form>
    </Segment>
  )
}
