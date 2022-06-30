import { useContext } from "react"
import { themeContext } from "../../contexts/themeContext"
import "./ProductCard.css"

export const ProductCard = (props) => {
  const theme = useContext(themeContext)
  console.log('theme', theme)
  const product = props.product
  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>{product.price} €</p>
    </div>
  )
}