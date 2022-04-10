import React, { FC, HTMLAttributes, ReactChild } from 'react';
import classNames from 'classnames';


const headingClasses = (headingType) =>
  classNames({
      "text-black": true
  });



const headingPick = (headingType, children, props) => {
 	switch (headingType) {
 		case 'h1':
 		  return (
 		  	<h1 className={`${headingClasses(headingType)} font-medium leading-tight text-5xl mt-0 mb-2 dark:text-white`} {...props}>
		        {children}
		    </h1>  
 		  	)
 		  break;
 		case 'h2':
 		  return (
 		  	<h2 className={`${headingClasses(headingType)} font-medium leading-tight text-4xl mt-0 mb-2 dark:text-white `} {...props}>
		        {children}
		    </h2>  
 		  	)
 		  break;
 		case 'h3':
 		  return (
 		  	<h3 className={`${headingClasses(headingType)} font-medium leading-tight text-3xl mt-0 mb-2 dark:text-white `} {...props}>
		        {children}
		    </h3>  
 		  	)
 		  break;
 		  case 'h4':
 		  return (
 		  	<h4 className={`${headingClasses(headingType)} font-medium leading-tight text-2xl mt-0 mb-2 dark:text-white `} {...props}>
		        {children}
		    </h4>  
 		  	)
 		  break;
 		  case 'h5':
 		  return (
 		  	<h5 className={`${headingClasses(headingType)} font-medium leading-tight text-xl mt-0 mb-2 dark:text-white `} {...props}>
		        {children}
		    </h5>  
 		  	)
 		  break;
 		  case 'h6':
 		  return (
 		  	<h6 className={`${headingClasses(headingType)} font-medium leading-tight text-base mt-0 mb-2 dark:text-white`} {...props}>
		        {children}
		    </h6>  
 		  	)
 		  break;

 	}
 } 

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement>  {
  children: ReactChild;
  headingType: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

}

export const Headings: FC<HeadingProps> = ({children, headingType = 'h2',  props}) => {
    return(headingPick(headingType, children, props));
};


