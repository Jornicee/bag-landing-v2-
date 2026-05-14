import styles from "./AboutUsFirst.module.css";

import LineImage from "../assets/line-img.svg";
import YBEduLogo02 from "../assets/ybedu-logo-v2.svg";

export function AboutUsFirst() {
    return (
        <section className={styles.sectionAboutUsFirst}>
            <div className={styles.containerHeader}>
                <img src={LineImage} alt="Linha azul" />
                <h1>SOBRE NÓS</h1>
                <img src={LineImage} alt="Linha azul" />
            </div>
            <div className={styles.containerContent}>
                <img src={YBEduLogo02} alt="Logo da YellowBagEdu" />
                <p className={styles.contentTextMobile}>
                    A YellowBagEdu é uma StartUp Paraense 
                    que une <span> Criatividade, Tecnologia e a habilidade do 
                    Pensamento Computacional para transformar a educação.</span>  
                    {" "} 
                    Criamos experiências de aprendizagem lúdicas e alinhadas à realidade 
                    amazônica, aproximando jovens do mundo digital 
                    de forma prática e significativa. Acreditamos em um conhecimento que 
                    faça sentido, conectando cultura local e 
                    ferramentas modernas para formar estudantes autônomos, 
                    curiosos e preparados para o futuro.
                </p>
                <p className={styles.contentTextDesktop}>
                    A YellowBagEdu é uma startup paraense dedicada a transformar 
                    a educação por meio da <span> Criatividade, Tecnologia e a habilidade do 
                    Pensamento Computacional para transformar a educação.</span>  
                    {" "}
                    Nosso propósito é oferecer experiências 
                    de aprendizagem acessíveis, divertidas e alinhadas à realidade 
                    amazônica, aproximando crianças e jovens do mundo digital de um jeito 
                    leve, prático e significativo.
                    Acreditamos que o conhecimento precisa fazer sentido para quem 
                    aprende. Por isso, desenvolvemos soluções que conectam 
                    cultura local, desafios do cotidiano e ferramentas modernas de 
                    ensino. Atuamos formando estudantes mais autônomos, curiosos e 
                    preparados para um futuro onde a tecnologia é parte 
                    essencial da vida.
                </p>
            </div>
        </section>
    )
}

