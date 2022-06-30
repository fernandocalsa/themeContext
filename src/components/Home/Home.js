import { ProductsList } from "../ProductsList/ProductsList"
import "./Home.css"

export const Home = () => {
  return (
    <div id="home">
      <h1>Welcome to my website</h1>
      <p>This is a list of products</p>
      <ProductsList />
    </div>
  )
}