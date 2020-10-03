import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.scss"

export default (props) => (
  <header className={styles.header}>
    <h1>Chengu Kargbo</h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </ul>
  </header>
)
