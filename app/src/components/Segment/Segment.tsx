import { ReactNode } from 'react'
import cls from './Segment.module.scss'
interface SegmentProps {
  title: ReactNode
  size?: 1 | 2
  children?: ReactNode
  description?: string
}

export const Segment = ({ title, size = 1, children, description }: SegmentProps) => {
  return (
    <div className={cls.segment}>
      {size === 1 ? <h1 className={cls.title}>{title}</h1> : <h2 className={cls.title}>{title}</h2>}
      {description && <p className={cls.description}>{description}</p>}
      {children && <div className={cls.content}>{children}</div>}
    </div>
  )
}
