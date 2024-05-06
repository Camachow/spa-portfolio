import styles from './Footer.module.css';
import MarcaRegistrada from '../../assets/marca_registrada.svg?react';

export default function Footer() {
    return (
        <footer className={styles.rodape}>
            <MarcaRegistrada />
            <p>Desenvolvido com ❤ por <a href="https://github.com/Camachow">Camachow</a></p>
        </footer>
    )
}