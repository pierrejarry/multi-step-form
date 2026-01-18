import styles from './App.module.css'
import Sidebar from './sidebar/Sidebar'

function App() {

  return (
    <main className={styles.main}>
      <Sidebar />
      <section className={styles.form}>
        Personal info
      </section>
    </main>
  )
}

export default App
