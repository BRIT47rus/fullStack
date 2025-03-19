import { FormikProps } from "formik"



export interface InputProps  {
    name: string
    label: string
    formik:FormikProps<any>;
    maxWidth?:number;
  }