import { ProductCard } from "../ProductCard/ProductCard"
import "./ProductsList.css"

const products = [
  {
    id: 1,
    name: "ordenador",
    description: "Lorem ipsum",
    price: 500
  },
  {
    id: 2,
    name: "coche",
    description: "Lorem ipsum",
    price: 20000
  },
  {
    id: 3,
    name: "bici",
    description: "Lorem ipsum",
    price: 3000
  },
  {
    id: 4,
    name: "mesa",
    description: "Lorem ipsum",
    price: 40
  },
  {
    id: 5,
    name: "movil",
    description: "Lorem ipsum",
    price: 800
  }
]

export const ProductsList = () => {
  return (
    <div>
      <p>Estos son los productos que puedes encontrar en nuestra tienda</p>
      <div id="products-list">
        {products.map(product => {
          return <ProductCard key={product.id} product={product} />
        })}
      </div>
    </div>
  )
}