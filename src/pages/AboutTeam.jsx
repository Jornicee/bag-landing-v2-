import styles from './AboutTeam.module.css';

import LineImage from "../assets/line-img.svg";

export function AboutTeam() {
    return(
        <section className={styles.sectionAboutTeam} aria-label="Equipe da empresa">
             <header className={styles.containerHeader}>
                <img src={LineImage} alt="" aria-hidden="true" />
                <h2>NOSSO TIME</h2>
                <img src={LineImage} alt="" aria-hidden="true" />
            </header>
        </section>
    )
}