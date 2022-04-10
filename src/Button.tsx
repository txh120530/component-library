import React, { FC, HTMLAttributes, ReactChild } from 'react';
import classNames from 'classnames';
import styles from  './Button.module.css';



export interface ButtonProps extends HTMLAttributes<HTMLButtonElement>  {
  children: ReactChild;
  variant: 'default' | 'outline' | 'disabled';
  backgroundColor?: string;
  size: 'small' | 'medium' | 'large';
  color: 'blue' | 'red' | 'gray'

}

export const Button: FC<ButtonProps> = ({children, color = 'blue', size = 'medium', variant = 'default',  ...props}) => {
    return (
      <button className={`${styles.button} ${styles[size]} ${styles[variant]} ${styles[color]}`} {...props}>
        {children}
      </button>  
    );
};

