import styles from './Banner.module.css';
import circuloColorido from '../../assets/circulo_colorido.png';
import minhaFoto from '../../assets/minha_foto.png';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Welcome to the Home page
                </h1>

                <p className={styles.paragrafo}>
                    This is a simple example of a React application with Vite and React Router.
                </p>
            </div>

            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden="true"
                    />

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Minha foto de perfil"
                />
            </div>
        </div>
    )
}