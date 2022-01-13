import "./App.css";
import NavBar from "./components/NavBar";
import { useState } from "react";
import Products from "./components/Products";
import Details from "./components/Details";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import $ from "jquery";

function App() {
  const [productNum, setProductNum] = useState(0);
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "LG fridge",
      gallery:
        "https://thegoodguys.sirv.com/products/50070239/50070239_712265.PNG?scale.height=505&scale.width=773&canvas.height=505&canvas.width=773&canvas.opacity=0&q=90",
      description:
        "Chocolate is a food made from cacao beans. It is used in many desserts like pudding, cakes and candy",
      price: 600,
      category: "fridge",
    },
    {
      id: 2,
      title: "Samsung TV",
      gallery:
        "https://images.samsung.com/is/image/samsung/rs-uhdtv-nu7100-ue43nu7192uxxh-frontblack-101551769?$684_547_PNG$",
      description:
        "Lollipops are available in a number of colors and flavors, particularly fruit flavors.",
      price: 400,
      category: "tv",
    },
    {
      id: 3,
      title: "Samsung Mobile",
      gallery:
        "https://5.imimg.com/data5/NT/UC/WR/SELLER-82975943/samsung-galaxy-a7-a750-mobile-phone-500x500.jpg",
      description:
        "Ice cream is a sweetened frozen food typically eaten as a snack or dessert.",
      price: 200,
      category: "phone",
    },
    {
      id: 4,
      title: "iPhone",
      gallery:
        "https://macola.rs/wp-content/uploads/2021/09/iphone-12-pro-blue-hero-423x500.png",
      description:
        "Chocolate is a food made from cacao beans. It is used in many desserts like pudding, cakes and candy",
      price: 550,
      category: "phone",
    },
    {
      id: 5,
      title: "Smart watch",
      gallery:
        "https://www.mytrendyphone.rs/images/Waterproof-Smartwatch-with-Heart-Rate-K12-IP68-Bluetooth-4-Black-10092020-01A-p.jpg",
      description:
        "Lollipops are available in a number of colors and flavors, particularly fruit flavors.",
      price: 300,
      category: "tv",
    },
    {
      id: 6,
      title: "Lenovo laptop",
      gallery:
        "https://www.tehnomanija.rs/UserFiles/products/2019/008/large/138734.webp",
      description:
        "Ice cream is a sweetened frozen food typically eaten as a snack or dessert.",
      price: 700,
      category: "laptop",
    },
  ]);

  const [productsForCart, setProductsForCart] = useState([]);

  function onProductAdded(product, quantity) {
    console.log("quantity " + quantity);
    setProductNum(productNum + 1);
    const cartItem = {
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price * quantity,
      gallery: product.gallery,
      amount: quantity,
    };
    productsForCart.forEach((el)=>{
      el.id==product.id? el.amount =  parseInt(el.amount) + parseInt(quantity): el.amount = el.amount;
    });

    productsForCart.some(item => product.id == item.id)?console.log("a"):setProductsForCart((arr) => [...arr, cartItem]);

  }

  function removeFromCart(product) {
    setProductsForCart(
      productsForCart.filter((item) => item.id !== product.id)
    );
    setProductNum(productNum - 1);
  }

  function orderProducts() {
    setProductsForCart([]);
    setProductNum(0);
  }

  return (
    <BrowserRouter className="App">
      <NavBar productNum={productNum}></NavBar>
      <Routes>
        <Route path="/" element={<Products products={products}></Products>} />
        <Route
          path="/details/:id"
          element={
            <Details
              products={products}
              onProductAdded={onProductAdded}
            ></Details>
          }
        />
        <Route
          path="/cartlist"
          element={
            <Cart
              products={productsForCart}
              removeFromCart={removeFromCart}
              orderProducts={orderProducts}
            ></Cart>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
