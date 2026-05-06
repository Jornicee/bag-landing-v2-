import { Navbar } from "../components/Navbar";

import { WhatsappLogoIcon } from "@phosphor-icons/react";


import Img01 from "../assets/img-01.png";
import Img02 from "../assets/img-02.png";
import styles from "./Home.module.css";

export function Home() {
  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    const message = encodeURIComponent(
      "Olá! Vim através da Landing Page da YellowBagEdu e gostaria de conhecer mais sobre as jornadas e projetos desenvolvidos. Podem me ajudar?"
    );
    window.open(` https://wa.me/559193412953/?text=${message}`, "_blank");
  };

  return (
    <>
      <Navbar />
      <main>
          <section className={styles.mainContainer}>
            <h1>Transformamos o FUTURO!</h1>
            <p className={styles.descriptionDesktop}>
              A YellowBagEdu é uma startup paraense que transforma a educação via 
              criatividade e tecnologia. Criamos experiências de ensino acessíveis e divertidas para diferentes idades, 
              unindo o pensamento computacional à realidade amazônica para formar pessoas mais autônomas e preparadas.
            </p>
            <p className={styles.descriptionMobile}>
              A YellowBagEdu é uma startup paraense focada em transformar 
              a educação através da tecnologia e criatividade. 
              Desenvolvemos metodologias acessíveis que unem o 
              pensamento computacional às raízes da Amazônia, 
              promovendo um ensino lúdico para diversas idades. 
              Nosso compromisso é capacitar mentes autônomas e prontas 
              para o futuro digital global.
            </p>
            <a href="#contato" onClick={handleWhatsAppClick}>
              <WhatsappLogoIcon size={32} />
              FALE CONOSCO
            </a>
          </section>
          <section className={styles.imageSection}>
            <img src={Img01} alt="Imagem 1" />
            <img src={Img02} alt="Imagem 2" />
          </section>
      </main>
    </>
  );
}
