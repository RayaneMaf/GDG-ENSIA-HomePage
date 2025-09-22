import styles from "./PEventsSection.module.css";
import { useEffect, useState } from "react";

function PEventsSection() {
  let events = [
    {
      id: "event_1",
      name: "GDG EVENT 1",
      url: "src/assets/BackgroundPhotoONE.png",
      date: "Background Photo ONE",
    },
    {
      id: "event_2",
      name: "GDG EVENT 2",
      url: "src/assets/BackgroundPhotoTWO.png",
      date: "Background Photo TWO",
    },
    {
      id: "event_3",
      name: "GDG EVENT 3",
      url: "src/assets/BackgroundPhotoTHREE.png",
      date: "Background Photo THREE",
    },
    {
      id: "event_4",
      name: "GDG EVENT 4",
      url: "src/assets/BackgroundPhotoFOUR.png",
      date: "Background Photo FOUR",
    },
  ];

  const [currentEvent, setCurrentEvent] = useState(0);

  useEffect(() => {
    if (!events.length) return;

    const id = setInterval(() => {
      setCurrentEvent((prev) => (prev + 1) % events.length);
    }, 5000);

    return () => clearInterval(id);
  }, [events.length, currentEvent]);

  return (
    <section className={styles.pEvents}>
      <div className={styles.titleContainer}>
        <h1>Previous Events</h1>
        <span>{events.length}</span>
        <p className={styles.overlayTitle}>SEE OUR EVENTS</p>
      </div>
      <div className={styles.details}>
        <div className={styles.eventsContainer}>
          <div className={styles.mainEvent}>
            <img src="src\assets\BackgroundPhotoONE.png" alt="" />
            <div className={styles.textGroup}>
              <h2>GDG Quest 2.0</h2>
              <p>22 Oct</p>
            </div>
          </div>
          <div className={styles.eventContainer}>
            <img src="src\assets\BackgroundPhotoTWO.png" alt="" />
          </div>
          <div className={styles.eventContainer}>
            <img src="src\assets\BackgroundPhotoTHREE.png" alt="" />
          </div>
        </div>
        <div className={styles.controls}>
          <svg
            viewBox="35 19 300 329"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
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
          <div className={styles.indicatorsWrapper}></div>
          <svg
            viewBox="300 19 300 329"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
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
            />{" "}
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
            />{" "}
          </svg>
        </div>
      </div>
    </section>
  );
}

export default PEventsSection;
