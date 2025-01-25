import "./style.css";
const Price = ({ currency, price = NaN, discount = 0 }) => {
  const hasDiscount = discount > 0;
  const shownPrice =
    hasDiscount && !Number.isNaN(price)
      ? price - price * (discount / 100)
      : price;
  return (
    <span
      className={`cb-price ${hasDiscount ? "cb-price--discounted" : ""}`}
      data-original-price={price + currency}
    >
      {Number.isNaN(shownPrice)
        ? "El precio no es válido"
        : `${shownPrice}${currency}`}
    </span>
  );
};

Price.propTypes = {
  currency: () => {},
  price: () => {},
  discount: () => {},
};

export default Price;
