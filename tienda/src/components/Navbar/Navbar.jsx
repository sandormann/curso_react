import { NavLink, Link } from 'react-router'
import styles from './Navbar.module.css'
export default function Navbar(){
    return(
        <nav className={styles.nav }>
            <NavLink to="products" className={styles.link}>Products</NavLink>
            <NavLink to="about" className={styles.link}>About</NavLink>
            <NavLink to="contact" className={styles.link}>Contacto</NavLink>
        </nav>
    )
}