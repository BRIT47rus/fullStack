import { InputProps } from "../types/types"

export const Input  = ({ name, label, formik }:InputProps) => {
  const value = formik.values[name]
    return (
      <div style={{ marginBottom: 10 }}>
        <label htmlFor={name}>{label}</label>
        <br />
        <input
          type="text"
          onChange={(e) => {
            void formik.setFieldValue(name, e.target.value)
          }}
          value={value}
          name={name}
          id={name}
        />
      </div>
    )
  }