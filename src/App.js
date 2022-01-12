import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import {useState} from 'react';
import Products from './components/Products';

function App() {
  const [productNum, setProductNum] = useState(0);
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "LG fridge",
      gallery: "https://thegoodguys.sirv.com/products/50070239/50070239_712265.PNG?scale.height=505&scale.width=773&canvas.height=505&canvas.width=773&canvas.opacity=0&q=90",
      description:
        "Chocolate is a food made from cacao beans. It is used in many desserts like pudding, cakes and candy",
      amount: 0,
    },
    {
      id: 2,
      title: "Samsung TV",
      gallery: "https://images.samsung.com/is/image/samsung/rs-uhdtv-nu7100-ue43nu7192uxxh-frontblack-101551769?$684_547_PNG$",
      description:
        "Lollipops are available in a number of colors and flavors, particularly fruit flavors.",
      amount: 0,
    },
    {
      id: 3,
      title: "Samsung Mobile",
      gallery: "https://5.imimg.com/data5/NT/UC/WR/SELLER-82975943/samsung-galaxy-a7-a750-mobile-phone-500x500.jpg",
      description:
        "Ice cream is a sweetened frozen food typically eaten as a snack or dessert.",
      amount: 0,
    },


  ]);
  return (
    <div className="App">
      <NavBar productNum={productNum}></NavBar>
      <Products products={products}></Products>
    </div>
  );
}

export default App;
