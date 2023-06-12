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
        <a href="#" className={styles.link}>
          Kenangan Senja
        </a>

        <div>
          <a href="#" className={styles.link}>
            Menu
          </a>
          <a href="#" className={styles.link}>
            Order
          </a>
          <a href="#" className={styles.link}>
            About Us
          </a>
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
