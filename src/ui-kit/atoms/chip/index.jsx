import Icon from "../icon";
import "./style.css";

const Chip = ({
  children,
  size = "md",
  fill = "solid",
  closable = false,
  disabled = false,
  color = "primary",
}) => {
  return (
    <span
      className={`cb-chip cb-chip--${size} cb-chip--${fill} cb-chip--${color} 
        ${disabled ? "cb-chip--disabled" : ""}`}
    >
      {children}
      {closable ? <Icon name="close" /> : ""}
    </span>
  );
};

Chip.propTypes = {
  children: () => {},
  size: () => {},
  color: () => {},
  fill: () => {},
  disabled: () => {},
  closable: () => {},
};

export default Chip;
