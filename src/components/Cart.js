function Cart({ products, removeFromCart, orderProducts }) {
  function removeProductFromCart(event, product) {
    event.preventDefault();
    removeFromCart(product);
  }

  function handleOrderProducts(event) {
    event.preventDefault();
    if (products[0]) {
      orderProducts();
      alert("You have successfully ordered products.");
    } else{
      alert("No products in your cart.");
    }
  }

  return (
    <div className="custom-product">
      <h3 style={{ marginLeft: 40 }}>Your cart</h3>
      <div className="col-sm-10">
        <div className="trending-wrapper"></div>
        <br></br>
        {products.map((product) => (
          <div
            key={product.id}
            className=" row searched-item cart-list-devider"
          >
            <div className="col-sm-3">
              <a href={"detail/" + product.id}>
                <img className="trending-image" src={product.gallery} />
              </a>
            </div>
            <div className="col-sm-4">
              <div className="">
                <h2>{product.title}</h2>
                <h4>Amount: {product.amount}</h4>
              </div>
            </div>
            <div className="col-sm-3">
              <h3>Price: {product.price}</h3>
              <button onClick={(e) => removeProductFromCart(e, product)}>
                Remove from Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <button onClick={handleOrderProducts}>Order now</button>
      </div>
    </div>
  );
}

export default Cart;
