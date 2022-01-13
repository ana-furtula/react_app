import { useParams } from "react-router-dom";
import { useState } from "react";
import {Link} from 'react-router-dom';

function Details({ products, onProductAdded }) {
  const { id } = useParams();
  let product = products[0];
  const [quantity, setQuantity] = useState(1);

  products.forEach((element) => {
    element.id == id ? (product = element) : (product = product);
  });

  function handleSubmit(event, product, quantity) {
    event.preventDefault();
    alert("Product successfully added to cart!");
    onProductAdded(product, quantity);
    // console.log(productId + " " + quantity);
  }

  function handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    setQuantity(value);
  }

  return (
    <div className="container">
      <div className="row">
        <Link to={"/"}>Go back</Link>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <img className="detail-image" src={product.gallery} />
        </div>

        <div>
          <h3>
            <b>{product.title}</b>
          </h3>
          <h4>
            <b>Price:</b> {product.price}
          </h4>
          <h4>
            <b>Details:</b> {product.description}
          </h4>
          <h4>
            <b>Category:</b> {product.category}
          </h4>
          <br />
          <br />
          <form onSubmit={(e) => handleSubmit(e, product, quantity)}>
            <h4>
              <label>Quantity: </label>
              <input type="number" min="1" onChange={handleInputChange} />
            </h4>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ marginLeft: 585 }}
            >
              Add to Cart
            </button>
          </form>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default Details;
