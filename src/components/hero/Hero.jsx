import styles from "./hero.module.css";



function Hero() {
  return (
    <section className={styles.hero}>
      
        <h1 className={styles.title}>
          Transformamos <br /> o FUTURO!
        </h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur. Nibh tincidunt sit sem in et
          malesuada donec lorem. Non eu consectetur gravida facilisis nec
          pellentesque dolor egestas vel. Platea bibendum vestibulum quis sit
          tincidunt viverra mauris morbi morbi pellentesque.
        </p>
        <button className={styles.button}>TEXT</button>
      
    </section>
  );
}

export default Hero;
