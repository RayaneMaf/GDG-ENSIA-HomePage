import { useState, useEffect } from "react";
import styles from "./HeroSection.module.css";

function HeroSection() {
  let images = [
    {
      id: "slide_1",
      url: "src/assets/BackgroundPhotoONE.png",
      alt: "Background Photo ONE",
    },
    {
      id: "slide_2",
      url: "src/assets/BackgroundPhotoTWO.png",
      alt: "Background Photo TWO",
    },
    {
      id: "slide_3",
      url: "src/assets/BackgroundPhotoTHREE.png",
      alt: "Background Photo THREE",
    },
    {
      id: "slide_4",
      url: "src/assets/BackgroundPhotoFOUR.png",
      alt: "Background Photo FOUR",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occured ! {errorMsg}</div>;
  }

  useEffect(() => {
    if (!images.length) return;

    const id = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(id);
  }, [images.length, currentImage]);

  return (
    <section className={styles.hero}>
      <div className={styles.imageContainer}>
        {images && images.length
          ? images.map((item, index) => (
              <img
                src={item.url}
                alt={item.alt}
                key={item.id}
                className={
                  currentImage === index
                    ? `${styles.heroImage}`
                    : `${styles.heroImage} ${styles.heroImageInactive}`
                }
              ></img>
            ))
          : null}
      </div>
      <div className={styles.details}>
        <div className={styles.text}>
          <h3 className={styles.subText}>
            There’s Always Something Happening at GDG ENSIA
          </h3>
          <h1 className={styles.title}>GDG Open Day</h1>
          <h2 className={styles.date}>16 Oct</h2>
        </div>
        <div className={styles.controls}>
          {images.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setCurrentImage(index)}
              className={
                currentImage === index
                  ? `${styles.heroIndicator}`
                  : `${styles.heroIndicator} ${styles.heroIndicatorInactive}`
              }
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
