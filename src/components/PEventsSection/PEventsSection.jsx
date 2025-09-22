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

  const [mainEvent, setMainEvent] = useState(0);
  const [secondEvent, setSecondEvent] = useState(1);
  const [thirdEvent, setThirdEvent] = useState(2);

  const handlePrev = () => {
    setMainEvent(mainEvent === 0 ? events.length - 1 : mainEvent - 1);
    setSecondEvent(secondEvent === 0 ? events.length - 1 : secondEvent - 1);
    setThirdEvent(thirdEvent === 0 ? events.length - 1 : thirdEvent - 1);
  };
  const handleNext = () => {
    setMainEvent(mainEvent === events.length - 1 ? 0 : mainEvent + 1);
    setSecondEvent(secondEvent === events.length - 1 ? 0 : secondEvent + 1);
    setThirdEvent(thirdEvent === events.length - 1 ? 0 : thirdEvent + 1);
  };
  function handleIndicatorClick(index) {
    setMainEvent(index);
    setSecondEvent(() => (index + 1) % events.length);
    setThirdEvent(() => (index + 2) % events.length);
  }

  useEffect(() => {
    if (!events.length) return;

    const id = setInterval(() => {
      setMainEvent((prev) => (prev + 1) % events.length);
      setSecondEvent((prev) => (prev + 1) % events.length);
      setThirdEvent((prev) => (prev + 1) % events.length);
    }, 5000);

    return () => clearInterval(id);
  }, [events.length, mainEvent, secondEvent, thirdEvent]);
  return (
    <section className={styles.pEvents}>
      <div className={styles.titleContainer}>
        <h1>Previous Events</h1>
        <span>{events.length}</span>
        <p className={styles.overlayTitle}>SEE OUR EVENTS</p>
      </div>
      <div className={styles.details}>
        <div className={styles.eventsContainer}>
          {events && events.length
            ? events.map((item, index) => {
                return (
                  <div
                    className={
                      mainEvent === index
                        ? `${styles.mainEvent}`
                        : `${styles.mainEvent} ${styles.eventInactive}`
                    }
                    key={item.id}
                  >
                    <img src={item.url} alt="" />
                    <div className={styles.textGroup}>
                      <h2>{item.name}</h2>
                      <p>{item.date}</p>
                    </div>
                  </div>
                );
              })
            : null}
          {events && events.length
            ? events.map((item, index) => {
                return (
                  <div
                    className={
                      secondEvent === index
                        ? `${styles.eventContainer}`
                        : `${styles.eventContainer} ${styles.eventInactive}`
                    }
                    key={item.id}
                  >
                    <img src={item.url} alt="" />
                  </div>
                );
              })
            : null}
          {events && events.length
            ? events.map((item, index) => {
                return (
                  <div
                    className={
                      thirdEvent === index
                        ? `${styles.eventContainer}`
                        : `${styles.eventContainer} ${styles.eventInactive}`
                    }
                    key={item.id}
                  >
                    <img src={item.url} alt="" />
                  </div>
                );
              })
            : null}
        </div>
        <div className={styles.controlsContainer}>
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.controlsCorner}
          >
            <path d="M200 200 L200 0 L0 0 Q200 0 200 200 Z" fill="#EDEDED" />
            <rect x="0" y="0" width="200" height="200" fill="none" />
          </svg>
          <div className={styles.controls}>
            <svg
              viewBox="35 19 300 329"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={handlePrev}
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
            <div className={styles.indicatorsWrapper}>
              {events.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleIndicatorClick(index)}
                  className={
                    mainEvent === index
                      ? `${styles.eventIndicator}`
                      : `${styles.eventIndicator} ${styles.eventIndicatorInactive}`
                  }
                ></button>
              ))}
            </div>
            <svg
              viewBox="300 19 300 329"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={handleNext}
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
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.controlsCorner}
          >
            <path d="M200 0 L0 0 L0 200 Q 0 0 200 0 Z" fill="#EDEDED" />
            <rect x="0" y="0" width="200" height="200" fill="none" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default PEventsSection;
