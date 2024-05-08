import styles from './NotFound.module.css';
import img404 from '../../assets/erro_404.png';
import BotaoPrincipal from '../../components/BotaoPrincipal';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {

    const navegate = useNavigate();

    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>

                <h1 className={styles.titulo}>Ops! Página não encontrada</h1>

                <p className={styles.paragrafo}>
                    Tem certeza de que era isso que você estava procurando?
                </p>

                <p className={styles.paragrafo}>
                    Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
                </p>

                <div
                onClick={()=>navegate(-1)}
                className={styles.botaoContainer}>
                    <BotaoPrincipal tamanho="lg">Voltar</BotaoPrincipal>
                </div>

                <img src={img404} alt="Erro 404" className={styles.imagemCachorro} />
            </div>
            <div className={styles.espacoEmBranco}></div>
        </>
    )
}