import styles from './CardTeamMember.module.css';

export function CardTeamMember({ name, description, imageSrc}) {
    return(
        <section>
            <div className={styles.cardTeamMember}>
                <div className={styles.content}>
                    <img src={imageSrc} alt="Foto de um membro da equipe" />
                    <div>
                        <h2>{name}</h2>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}