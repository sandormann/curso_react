import { NavLink } from 'react-router'
import styles from './Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget'
import Logo from '../Logo/Logo'
export default function Navbar(){
    return(
        <navbar className={styles.nav}>
            <Logo />
            <nav className={styles.NavContainer}>
                <NavLink to="/categories/electronics" className={styles.link}>Electronics</NavLink>
                <NavLink to="/categories/jewelery" className={styles.link}>Jewelery</NavLink>
                <NavLink to="/categories/men's clothing" className={styles.link}>Men's clothing</NavLink>
                <NavLink to="/categories/women's clothing" className={styles.link}>Women's clothing</NavLink>
            </nav>
            <CartWidget />
        </navbar >
    )
}