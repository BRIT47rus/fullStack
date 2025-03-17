


export interface InputProps  {
    name: string
    label: string
    state: Record<string, string|number>
    setState: React.Dispatch<React.SetStateAction<any>>
  }