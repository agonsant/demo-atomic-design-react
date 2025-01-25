import "./font-icons.css";

const Icon = ({ name }) => {
  return <span className={`cb-icon-${name}`}></span>;
};

Icon.propTypes = {
  name: () => {},
};

export default Icon;
