import "./style.css";

const Button = ({ children, color = "primary", cbClick }) => {
  return (
    <button
      className={`cb-button cb-button--${color}`}
      /* Esta sería la forma más básica de escuchar el click de un botón, delegando en el componente que lo consume, su parent component  */
      onClick={cbClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: () => {},
  color: () => {},
  cbClick: () => {},
};

export default Button;
