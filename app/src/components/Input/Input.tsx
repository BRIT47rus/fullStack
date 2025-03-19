import classNames from 'classnames'
import { InputProps } from '../types/types'
import cls from './input.module.scss'

export const Input = ({ name, label, formik, maxWidth }: InputProps) => {
  const value = formik.values[name]
  const error = formik.errors[name] as string | undefined
  const touched = formik.touched[name]
  const invalid = !!touched && !!error
  const disabled = formik.isSubmitting
  return (
    <div className={classNames({ [cls.field]: true, [cls.disabled]: disabled })}>
      <label className={cls.label} htmlFor={name}>
        {label}
      </label>
      <br />
      <input
        className={classNames({
          [cls.input]: true,
          [cls.invalid]: invalid,
        })}
        style={{maxWidth}}
        type="text"
        onChange={(e) => {
          void formik.setFieldValue(name, e.target.value)
        }}
        onBlur={() => {
          formik.setFieldTouched(name)
        }}
        value={value}
        name={name}
        id={name}
        disabled={formik.isSubmitting}
      />
      {invalid && <div className={cls.error}>{error}</div>}
    </div>
  )
}
