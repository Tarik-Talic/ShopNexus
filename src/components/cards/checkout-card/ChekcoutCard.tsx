import './ChekcoutCard.css';

type ChekcoutCardProps = {
  productName: string;
  price: number;
  img: string;
  item: any;
};
const ChekcoutCard = ({ productName, price, img, item }: ChekcoutCardProps) => {
  return (
    <div className="check-container">
      <div className="check-imgContainer">
        <img className="check-img" src={img} alt={productName} />
      </div>
      <div className="check-info">
        <p className="name">{productName}</p>
        <p className="quantity ">
          <b>{item.quantity}x</b>
        </p>
        <p className="price ">
          <b>{price}$</b>
        </p>
      </div>
    </div>
  );
};

export default ChekcoutCard;
