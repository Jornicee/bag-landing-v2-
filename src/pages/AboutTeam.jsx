import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from '@phosphor-icons/react';
import { useState, useCallback } from 'react';
import { CardTeamMember } from '../components/CardTeamMember';

import styles from './AboutTeam.module.css';
import LineImage from "../assets/line-img.svg";
import TeamMember1 from "../assets/teammembers/member-img01.png";
import TeamMember2 from "../assets/teammembers/member-img02.png";
import TeamMember3 from "../assets/teammembers/member-img03.png";
import TeamMember4 from "../assets/teammembers/member-img04.png";
import TeamMember5 from "../assets/teammembers/member-img05.png";
import TeamMember6 from "../assets/teammembers/member-img06.png";
import TeamMember7 from "../assets/teammembers/member-img07.png";

const TEAM_MEMBERS = [
    { id: 1, name: "Marcelo Saldanha", description: "Fundador da YellowBagEdu", imageSrc: TeamMember1 },
    { id: 2, name: "Jennifer Sanches", description: "Liderança Pedagógica da YellowBagEdu", imageSrc: TeamMember2 },
    { id: 3, name: "Lorena Valeska", description: "Product Design", imageSrc: TeamMember3 },
    { id: 4, name: "Silvia Barbosa", description: "Guia Criativa da YellowBagEdu", imageSrc: TeamMember4 },
    { id: 5, name: "Milena Lopes", description: "Guia Criativa da YellowBagEdu", imageSrc: TeamMember5 },
    { id: 6, name: "Igor Gaia", description: "Guia Criativo da YellowBagEdu", imageSrc: TeamMember6 },
    { id: 7, name: "Jornice Martins", description: "Guia Criativa da YellowBagEdu", imageSrc: TeamMember7 },
];

const ITEMS_PER_VIEW = 1;
const TOTAL_SLIDES = TEAM_MEMBERS.length;
const MAX_SLIDES = Math.max(0, TOTAL_SLIDES - ITEMS_PER_VIEW);

export function AboutTeam() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Navegar para o slide anterior (com loop infinito)
    const goToPrevious = useCallback(() => {
        setCurrentSlide((prev) => (prev === 0 ? MAX_SLIDES : prev - 1));
    }, []);

    // Navegar para o próximo slide (com loop infinito)
    const goToNext = useCallback(() => {
        setCurrentSlide((prev) => (prev === MAX_SLIDES ? 0 : prev + 1));
    }, []);

    // Navegar para um slide específico
    const goToSlide = useCallback((index) => {
        setCurrentSlide(Math.min(index, MAX_SLIDES));
    }, []);

    // Calcular a percentagem de deslocamento
    const translatePercentage = (100 / TOTAL_SLIDES) * currentSlide;

    return (
        <section className={styles.sectionAboutTeam}>
            <header className={styles.containerHeader}>
                <img src={LineImage} alt="" aria-hidden="true" />
                <h2>NOSSO TIME</h2>
                <img src={LineImage} alt="" aria-hidden="true" />
            </header>

            <main className={styles.carouselContainer}>
                <div className={styles.carousel}>
                    <div 
                        className={styles.carouselTrack}
                        style={{
                            transform: `translateX(-${translatePercentage}%)`
                        }}
                    >
                        {TEAM_MEMBERS.map((member) => (
                            <div key={member.id} className={styles.carouselSlide}>
                                <CardTeamMember 
                                    name={member.name}
                                    description={member.description}
                                    imageSrc={member.imageSrc}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Botões de navegação */}
                <button 
                    className={styles.carouselButton}
                    onClick={goToPrevious}
                    aria-label="Slide anterior"
                >
                    <ArrowCircleLeftIcon size={32} weight="fill" />
                </button>

                <button 
                    className={`${styles.carouselButton} ${styles.next}`}
                    onClick={goToNext}
                    aria-label="Próximo slide"
                >
                    <ArrowCircleRightIcon size={32} weight="fill" />
                </button>

                {/* Indicadores */}
                <div className={styles.carouselIndicators}>
                    {TEAM_MEMBERS.map((member, index) => (
                        <button
                            key={member.id}
                            className={`${styles.indicator} ${
                                index === currentSlide ? styles.active : ""
                            }`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Ir para slide ${index + 1}`}
                        />
                    ))}
                </div>
            </main>
        </section>
    );
}