import { Link } from "react-router-dom"
import styles from "./App.module.css"
import Button from "./components/Button"
function App() {
  return (
    <>
      <nav
        style={{
          display: "flex",
          backgroundColor: "pink",
          justifyContent: "space-between",
        }}
      >
        <Link to="/" className={styles.link}>
          Kenangan Senja
        </Link>

        <div>
          <Link to="/menu" className={styles.link}>
            Menu
          </Link>
          <Link to="/order" className={styles.link}>
            Order
          </Link>
          <Link to="/aboutus" className={styles.link}>
            About Us
          </Link>
        </div>
      </nav>
      <h1
        className="text-2xl hover:font-bold 
        hover:cursor-pointer active:underline"
      >
        Praktikum A2 Pagi
      </h1>
      <Button className="bg-blue-400 text-white hover:bg-blue-500">
        Button 1
      </Button>
      <Button className="bg-red-400 text-white hover:bg-red-500">
        Button 2
      </Button>
    </>
  )
}

export default App
