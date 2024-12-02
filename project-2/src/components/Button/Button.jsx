import styles from "./Button.module.css";

const Button = ({Isoutline, icon, text, ...rest}) => {   //Restructuring and Props
  return (
    <button 
    {...rest}
     className={Isoutline ? styles.outline_btn : styles.primary_btn}> 
        {icon} 
        {text}
    </button>
  );
};

export default Button;