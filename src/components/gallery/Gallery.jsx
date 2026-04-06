import styles from "./gallery.module.css";
import foto1 from "../../assets/img-01.png";
import foto2 from "../../assets/img-02.png";

function Gallery() {
  return (
    <section className={styles.gallery}>
      
        <div className={styles.photos}>
          <img src={foto1} alt="memória 1" className={styles.left} />
          <img src={foto2} alt="memória 2" className={styles.right} />
        </div>
      
    </section>
  );
}

export default Gallery;
