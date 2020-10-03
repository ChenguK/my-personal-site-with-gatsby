import React from "react"
import styles from "./footer.module.scss"

export default (props) => (
  <footer className={styles.footer}>
    <p>
      Copyright &copy; All Rights Reserved {new Date().getFullYear()} Chengu
      Kargbo
    </p>
  </footer>
)
