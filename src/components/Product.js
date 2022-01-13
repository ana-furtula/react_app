import { Link } from "react-router-dom";

function Product({ product, carousel }) {
  const isActive = product.id == 1 ? "active" : "";
  const name = "item " + isActive;
  return (
    <>
      {carousel === 1 ? (
        <div className={name}>
          <Link to={{ pathname:"/details/" + product.id }}>
            <img className="slider-img" src={product.gallery} />
            <div className="carousel-caption">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
            </Link>
        </div>
      ) : (
        <div className="trending-item">
          <Link to={{ pathname:"/details/" + product.id }}>
            <img className="trending-image" src={product.gallery} />
            <div className="">
              <h4>{product.title}</h4>
            </div>
          </Link>
        </div>
      )}
    </>
  );
}
export default Product;
