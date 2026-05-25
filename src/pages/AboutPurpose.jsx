import LineImage from "../assets/line-img-02.svg";

import styles from "./AboutPurpose.module.css";

import MissionImage from "../assets/mission-img.png";
import BackgroundMissionImage from "../assets/background-mission-img.svg";
import VisionImage from "../assets/vision-img.png";
import BackgroundVisionImage from "../assets/background-vision-img.svg";
import ValuesImage from "../assets/values-img.png";
import BackgroundValuesImage from "../assets/background-values-img.svg";

import { CardPurpose } from "../components/CardPurpose";

export function AboutPurpose() {
    return(
        <section className={styles.sectionAboutPurpose}>
            <div className={styles.containerHeader}>
                <img src={LineImage} alt="Linha amarela" />
                <h1>NOSSO PROPÓSITO</h1>
                <img src={LineImage} alt="Linha amarela" />
            </div>
            <div className={styles.containerContent}>
                <CardPurpose 
                    imageSrc={MissionImage} 
                    title="Missão" 
                    description="Democratizar o acesso à educação tecnológica, desenvolvendo 
                    a inclusão, protagonismo, autoria, autonomia e a 
                    criatividade desde a infância." 
                    backgroundImageSrc={BackgroundMissionImage} 
                />
                <CardPurpose 
                    imageSrc={VisionImage} 
                    title="Visão" 
                    description="Ser referência regional, nacional e 
                    internacional em experiências educacionais e 
                    tecnológicas, autorais, inclusivas, acessíveis 
                    financeiramente e transformadoras."
                    backgroundImageSrc={BackgroundVisionImage} 
                />
                <CardPurpose 
                    imageSrc={ValuesImage} 
                    title="Valores" 
                    description="
                    Inclusão; 
                    Criatividade; 
                    Protagonismo; 
                    Aprendizagem Ativa;
                    Honestidade;
                    Coragem;
                    Perseverança;
                    Autonomia." 
                    backgroundImageSrc={BackgroundValuesImage} 
                />
            </div>
        </section>
    )
}
