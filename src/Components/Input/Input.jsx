/* eslint-disable react/prop-types */
import  {useId} from 'react'
import styles from "./input.module.css" 
function Input({label, type="text", placeholder, ...props}) {
  const id = useId()
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={id} className={styles.label}>{label}</label>
      <input 
      type={type}
      placeholder={placeholder}
      className={styles.input}
      id={id}
      {...props}
      />
    </div>
  )
}

export default Input