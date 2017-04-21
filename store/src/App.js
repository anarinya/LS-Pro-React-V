import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import products from './products.json';
import './index.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="header">
            <div className="container">
              <div className="title">
                weapon shop
              </div>
            <Nav />
            </div>
          </div>
          <div className="main">
            <div className="container">
              <Route exact path="/" component={Home} />
              <Route exact path="/products" component={Products} />
              <Route path="/products/:productId" component={ProductDetail} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

function Nav() {
  return (
    <ul className="Nav">
      <li><Link to="/">home</Link></li>
      <li><Link to="/products">products</Link></li>
    </ul>
  );
};

function Home() {
  return (
    <div className="Home">
      <p className="welcome-text">
        Welcome to the weapon shop! Buy somethin', will ya?!
      </p>
      <div className="welcome-area">
        <img src="img/fire.gif" alt="fire" />
        <img src="img/merchant.gif" alt="merchant" />
        <img src="img/fire.gif" alt="merchant" />
      </div>
    </div>
  );
};

function Products({ match }) {
  return (
    <div className="Products">
      <h2>products</h2>
      <ul className="product-list">
        { Object.keys(products).map(product => ( 
          <li key={products[product].id}>
            <Link to={`${match.url}/${products[product].id}`}>
              <img className="prod-img" src={`img/${products[product].img}`} alt={product.name} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

function ProductDetail({ match }) {
  const { productId } = match.params;
  const product = products[productId];
  const img = "img/" + product.img;
  const rupee = "img/rupee.gif";
  const desc1 = product.desc1;
  const desc2 = product.desc2;

  return (
    <div className="ProductDetail">
      <div className="breadcrumbs">
        <h2><Link to="/products">products</Link> > {product.name.toLowerCase()}</h2>
      </div>
      <div className="product-area">
        <div className="img-area">
          <img className="product-img" src={img} alt={product.name} />
        </div>
        <div className="img-desc">
          <p>{desc1}</p>
          <p>{desc2}</p>
          <p className="price">
            <img className="rupee" alt="rupee" src={rupee} />
            {product.price}
          </p>
        </div>
      </div>
    </div>
  );
};