import classNames from 'classnames';
import cls from './Alert.module.scss';
import { ReactNode } from 'react';
type Color = 'red'|'green'
interface AlertProps {
  color:Color
  children?:ReactNode;

}

export const Alert  = ({color,children}:AlertProps) => {

  return (
    <div
      className={classNames( {[cls.alert]:true,[cls[color]]:true})}
    >
        {children}
    </div>
  );
};