import { InputProps } from "../types/types"



export const Textarea = ({
    name,
    label,
   formik
  }: InputProps) => {
    const value = formik.values[name]
    return (
      <div style={{ marginBottom: 10 }}>
        <label htmlFor={name}>{label}</label>
        <br />
        <textarea
          onChange={(e) => {
        void formik.setFieldValue(name,e.target.value)
          }}
          value={value}
          name={name}
          id={name}
        />
      </div>
    )
  }