import MenuLink from '../MenuLink'
import styles from './Menu.module.css'

export default function Menu() {

  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/about">About</MenuLink>
      </nav>
    </header>
  )
}