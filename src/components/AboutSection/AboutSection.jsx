import styles from "./AboutSection.module.css";

function AboutSection() {
  return (
    <section className={styles.about}>
      <div className={styles.titleContainer}>
        <h1>About us</h1>
        <img src="src\assets\Library.png" alt="" />
        <p className={styles.overlayTitle}>ABOUT GDG ENSIA</p>
      </div>
      <div className={styles.details}>
        <div className={styles.detailsLeftSide}>
          <svg
            viewBox="39 19 557 329"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="-0.379698"
              y="3.51509"
              width="269.791"
              height="124.041"
              rx="62.0206"
              transform="matrix(0.778957 -0.627078 -0.627078 -0.778957 400.078 361.874)"
              fill="#F8AA00"
              stroke="black"
              stroke-width="5"
            />
            <rect
              x="-3.49359"
              y="0.54301"
              width="269.791"
              height="124.041"
              rx="62.0206"
              transform="matrix(0.807319 0.590115 0.590115 -0.807319 318.141 110.272)"
              fill="#34A853"
              stroke="black"
              stroke-width="5"
            />
            <rect
              x="319.359"
              y="107.772"
              width="269.791"
              height="124.041"
              rx="62.0206"
              transform="rotate(143.835 319.359 107.772)"
              fill="#E94335"
              stroke="black"
              stroke-width="5"
            />
            <rect
              x="237.422"
              y="359.374"
              width="269.791"
              height="124.041"
              rx="62.0206"
              transform="rotate(-141.165 237.422 359.374)"
              fill="#4285F3"
              stroke="black"
              stroke-width="5"
            />
          </svg>
          <div className={styles.textGroup}>
            <h2>Google Developer Group</h2>
            <p>National Higher Of Artificial Intelligence</p>
          </div>
        </div>
        <div className={styles.detailsRightSide}>
          <div className={styles.rightSideTitleContainer}>
            <h2>Who Are we?</h2>
            <img src="src\assets\ConferenceRoom.png" alt="" />
          </div>
          <div className={styles.rightSideParagraphContainer}>
            <p>
              At GDG ENSIA, we are a community of students and tech enthusiasts
              passionate about learning, building, and sharing knowledge. As
              part of the global Google Developer Groups network, we create a
              space to explore new technologies, work on real projects, and grow
              together through workshops, events, and collaboration. More than
              just coding, we’re about empowering each other to innovate, lead,
              and make an impact.
            </p>
          </div>
          <div className={styles.rightSideImagesContainer}>
            <div className={styles.rightSideImage}>
              <img src="" alt="" />
            </div>
            <div className={styles.rightSideImage}>
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
