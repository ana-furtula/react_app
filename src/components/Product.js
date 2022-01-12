function Product({ product, carousel }) {
  const isActive = product.id == 1 ? "active" : "";
  const name = "item " + isActive;
  return (
    <>
      {carousel === 1 ? (
        <div className={name}>
          <a href="/">
            <img className="slider-img" src={product.gallery} />
            <div className="carousel-caption">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          </a>
        </div>
      ) : (
        <div className="trending-item">
          <a href="/">
            <img className="trending-image" src={product.gallery}/>
            <div className="">
              <h4>{product.title}</h4>
            </div>
          </a>
        </div>
      )}
    </>
  );
}
export default Product;
