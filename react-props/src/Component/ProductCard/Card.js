import React from 'react'
import ProductCard from './ProductCard'
import burgir from '../../assets/burgir.jpg';
import meatball from '../../assets/meatball.jpg';
import salad from '../../assets/salad.jpg';


const Card = () => {
  return (
    <div className='product'>
     <ProductCard image={burgir}
                  name= "Burgir"
                  price = "$2.50" 
                  oldprice = "$4.50"
                  description = "fghjkl;lkgfdsedrtyuio cvghjikjh cfghjkkjhg gvhjklijhugyfhb fghjk "/>
     <ProductCard image={meatball}
                   name= "Meatball"
                    price = "$5.50" 
                  oldprice = "$14.50"
                  description = "fghjkl;lkgfdsedrtyuio cvghjikjh cfghjkkjhg gvhjklijhugyfhb fghjk " />
     <ProductCard image={salad} 
                     name= "salad"
                   price = "$1.50" 
                  oldprice = "$4.50"
                  description = "fghjkl;lkgfdsedrtyuio cvghjikjh cfghjkkjhg gvhjklijhugyfhb fghjk "/>
    </div>
  )
}

export default Card