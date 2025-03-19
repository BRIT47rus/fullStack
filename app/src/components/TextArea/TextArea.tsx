
import classNames from "classnames";
import { InputProps } from "../types/types"

import cls from './TextArea.module.scss';

export const Textarea = ({
    name,
    label,
   formik
  }: InputProps) => {
    const value = formik.values[name];
    const error = formik.errors[name] as string | undefined;
    const touched = formik.touched[name];

    const invalid = !!touched && !!error
    const disabled = formik.isSubmitting

    return (
      <div 
      className={classNames({ [cls.field]: true, [cls.disabled]: disabled })}>
        <label htmlFor={name} className={cls.label}>{label}</label>
        <br />
        <textarea
          onChange={(e) => {
        void formik.setFieldValue(name,e.target.value)
          }}
          onBlur={()=>{
            formik.setFieldTouched(name)
          }}
          value={value}
          name={name}
          id={name}
          disabled={formik.isSubmitting}
        />
         {invalid && <div style={{ color: 'red' }}>{error}</div>}
      </div>
    )
  }