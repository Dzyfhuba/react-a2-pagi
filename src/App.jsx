import styles from './App.module.css'
function App() {
  return (
    <>
      <nav style={{
        display: 'flex',
        backgroundColor: 'pink',
        justifyContent: 'space-between'
      }}>
        <a href="#" className={styles.link}>Kenangan Senja</a>

        <div>
          <a href="#" className={styles.link}>Menu</a>
          <a href="#" className={styles.link}>Order</a>
          <a href="#" className={styles.link}>About Us</a>
        </div>
      </nav>
      <h1>Praktikum A2 Pagi</h1>
    </>
  )
}

export default App
