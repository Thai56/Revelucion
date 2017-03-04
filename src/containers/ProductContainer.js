import React , {Component} from 'react';
import productData from '../data/productData';
import '../styles/productStyles.scss';

function Product(props){
  const imageStyle = {
    height:200,
    width:200,
    backgroundImage: `url(${props.product.banner_url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius:20,
    border:'10px solid black',
    margin: 'auto'
  }
  return (
    <div className="product-info-wrapper">
    <div style={imageStyle}></div>
      <section className='product-details'>
        <span><u>name:</u> {props.product.name}</span>
        <span><u>desc:</u> {props.product.desc}</span>
        <span><u>price:</u>$ {props.product.price / 100}</span>
      </section>
    </div>
  )
}

export default class ProductContainer extends Component {
  render(){
    return (
      <div className="product-container">

        <header id='product-header'>
          <div className='product-header-title'>Shop Products</div>
        </header>

          <div id='barber-products-header'>Barber Products</div>

            <section className='product-wrapper'>
              {productData.esauProducts.map((prod,i) => {
                return (
                  <Product
                    key = {prod.id}
                    product = {prod}
                  />
                )
              })}
            </section>
      </div>
    )
  }
}
