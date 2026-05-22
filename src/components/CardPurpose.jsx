import styles from "./CardPurpose.module.css";

export function CardPurpose({ imageSrc, title, description, backgroundImageSrc }) {
    return(
        <div className={styles.cardPurpose}>
            <div className={styles.content}>
                <img src={imageSrc} alt={`Imagem relacionada a {title}`} />
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <img className={styles.backgroundImage} src={backgroundImageSrc} alt={`Imagem de fundo relacionada a {title}`} />
        </div>
    )
}