import { InputProps } from "../types/types"



export const Textarea = ({
    name,
    label,
    state,
    setState,
  }: InputProps) => {
    return (
      <div style={{ marginBottom: 10 }}>
        <label htmlFor={name}>{label}</label>
        <br />
        <textarea
          onChange={(e) => {
            setState({ ...state, [name]: e.target.value })
          }}
          value={state[name]}
          name={name}
          id={name}
        />
      </div>
    )
  }