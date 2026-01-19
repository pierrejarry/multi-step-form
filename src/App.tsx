import styles from './App.module.css'
import Sidebar from './sidebar/Sidebar'
import Step1 from './Step1'

function App() {

  return (
    <main className={styles.main}>
      <Sidebar />
      <section className={styles.form}>
       <Step1 />
      </section>
      <div className={styles.btnContainer}>
        <button className={styles.primaryBtn}>Next step</button>
      </div>
    </main>
  )
}

export default App
