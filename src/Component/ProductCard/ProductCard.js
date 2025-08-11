
import './ProductCard.css';

//import'../Component/Card';

const ProductCard = (props) => {
  return (
    <div className='product-card-container'>
      <div className='product-card'>

      <div className='product-image'>
        <img src={props.image}
          alt="burgir"
        />
      </div>

      <div className='product-content'>
        <h2>{props.name}</h2>
        <h3> {props.price} <span>{props.oldprice}</span></h3>
        <p> {props.description}
        </p>
        <button>buyNow</button>
      </div>


    </div>
    </div>
  )
}

export default ProductCard