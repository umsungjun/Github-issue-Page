import styles from "./App.module.css"

import { SlEye } from "react-icons/sl"
import { TbGitFork } from "react-icons/tb"
import { AiOutlineStar } from "react-icons/ai"

function App() {
  return (
    <>
      <div className={styles.nav}>Nav</div>
      <div className={styles.header}>
        <Button
          style={{
            fontSize: "14px",
            backgroundColor: "transparent",
          }}
        >
          <SlEye />
          Watch
        </Button>
        <Space />
        <Button
          style={{
            fontSize: "14px",
            backgroundColor: "transparent",
          }}
        >
          <TbGitFork /> Fork <div className={styles.circle}>5</div>
        </Button>
        <Space />
        <Button
          style={{
            fontSize: "14px",
            backgroundColor: "transparent",
          }}
        >
          <AiOutlineStar /> Star
        </Button>
      </div>
      <div className={styles.listContainer}>
        <Button
          style={{ fontSize: "14px", backgroundColor: "green", color: "#fff" }}
        >
          New Issue
        </Button>
      </div>
      <div className={styles.footer}></div>
    </>
  )
}

function Button({ style, children }) {
  return (
    <button className={styles.button} style={style}>
      {children}
    </button>
  )
}

function Space() {
  return <div className={styles.space}></div>
}

export default App
