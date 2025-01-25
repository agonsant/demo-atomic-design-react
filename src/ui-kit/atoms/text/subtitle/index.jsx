import "./style.css";

const Subtitle = ({ children, size }) => {
  if (size === "xs") {
    return <h4 className="cb-subtitle cb-subtitle--xs">{children}</h4>;
  }

  if (size === "md") {
    return <h3 className="cb-subtitle cb-subtitle--md">{children}</h3>;
  }

  // por defecto lo tratamos como lg
  return <h2 className="cb-subtitle cb-subtitle--lg">{children}</h2>;
};

// Definimos la estructura que va a tener las props del componente
Subtitle.propTypes = {
  children: () => {},
  size: () => {},
};

export default Subtitle;
