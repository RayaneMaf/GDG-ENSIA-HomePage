import styles from "./UEventsSection.module.css";
import { useState, useEffect } from "react";

function UEventsSection() {
  let uEvents = [
    {
      id: "uEvent_1",
      name: "GDG EVENT 1",
      description:
        "hfjk dgsheuio hgfkjxhg ghreiugh dsfdfdsfdsfdsf dsfsdfdsfsdfds fdsf sdfsdfsdfsdfewrryyrj",
      url: "src/assets/BackgroundPhotoONE.png",
      place: "ensia",
      startingDate: {
        year: "2025",
        month: "10",
        day: "12",
        hour: "8",
      },
      endingDate: {
        year: "2025",
        month: "10",
        day: "13",
        hour: "8",
      },
    },
    {
      id: "uEvent_2",
      name: "GDG EVENT 2",
      description:
        "hfjk dgsheuio hgfkjxhg ghreiugh dsfdfdsfdsfdsf dsfsdfdsfsdfds fdsf sdfsdfsdfsdfewrryyrj",
      url: "src/assets/BackgroundPhotoTWO.png",
      place: "lolo",
      startingDate: {
        year: "45646",
        month: "5",
        day: "456",
        hour: "45",
      },
      endingDate: {
        year: "789",
        month: "96456",
        day: "6",
        hour: "456",
      },
    },
    {
      id: "uEvent_3",
      name: "GDG EVENT 3",
      description:
        "hfjk dgsheuio hgfkjxhg ghreiugh dsfdfdsfdsfdsf dsfsdfdsfsdfds fdsf sdfsdfsdfsdfewrryyrj",
      url: "src/assets/BackgroundPhotoTHREE.png",
      place: "yaya",
      startingDate: {
        year: "1000",
        month: "10",
        day: "1",
        hour: "20",
      },
      endingDate: {
        year: "876",
        month: "242",
        day: "12121",
        hour: "213",
      },
    },
    {
      id: "uEvent_4",
      name: "GDG EVENT 4",
      description:
        "hfjk dgsheuio hgfkjxhg ghreiugh dsfdfdsfdsfdsf dsfsdfdsfsdfds fdsf sdfsdfsdfsdfewrryyrj",
      url: "src/assets/BackgroundPhotoFOUR.png",
      place: "plpl",
      startingDate: {
        year: "798",
        month: "465",
        day: "132",
        hour: "735",
      },
      endingDate: {
        year: "195",
        month: "852",
        day: "174",
        hour: "396",
      },
    },
  ];

  const visibleCount = 3;
  const [start, setStart] = useState(0);
  const [visibleRange, setVisibleRange] = useState({
    from: 0,
    to: visibleCount,
  });

  useEffect(() => {
    if (uEvents.length === 0) {
      setStart(0);
      return;
    }
    if (start > uEvents.length - 1) setStart(uEvents.length - 1);
    if (start < 0) setStart(0);
  }, [uEvents.length, start]);

  useEffect(() => {
    const from = Math.min(Math.max(0, start), Math.max(0, uEvents.length - 1));
    const to = from + visibleCount;
    setVisibleRange({ from, to });
  }, [start, visibleCount, uEvents.length]);

  const handleNext = () => {
    if (start + visibleCount > uEvents.length - 1) {
      setStart(0);
      return;
    }
    setStart((prev) =>
      Math.min(prev + visibleCount, Math.max(0, uEvents.length - 1))
    );
  };

  const handlePrev = () => {
    if (start === 0) {
      setStart(Math.floor(uEvents.length / visibleCount) * visibleCount);
      return;
    }
    setStart((prev) => Math.max(prev - visibleCount, 0));
  };

  function handleIndicatorClick(index) {
    setStart(index);
  }

  useEffect(() => {
    if (!uEvents.length) return;

    const id = setInterval(() => {
      setStart((prev) =>
        prev + visibleCount < uEvents.length ? prev + visibleCount : 0
      );
    }, 5000);

    return () => clearInterval(id);
  }, [uEvents.length, start]);

  return (
    <section className={styles.uEvents}>
      <div className={styles.titleContainer}>
        <h1>Upcoming Events</h1>
        <span>{uEvents.length}</span>
        <p className={styles.overlayTitle}>OUR NEXT EVENTS</p>
      </div>
      <div className={styles.details}>
        <div className={styles.gridContainer}>
          {uEvents.length && uEvents
            ? uEvents.map((item, index) => {
                const isActive =
                  index >= visibleRange.from && index < visibleRange.to;
                return (
                  <div
                    key={item.id}
                    className={
                      isActive
                        ? `${styles.eventContainer}`
                        : `${styles.eventContainer} ${styles.eventContainerInactive}`
                    }
                  >
                    <div className={styles.eventImageContainer}>
                      <img src={item.url} alt="" />
                    </div>
                    <div className={styles.textGroup}>
                      <div className={styles.infosGroup}>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                      </div>
                      <div className={styles.detailsGroup}>
                        <div className={styles.detailsGroupLeftSide}>
                          <h2>
                            {item.startingDate.day}
                            <span>{item.startingDate.month}</span>
                          </h2>
                        </div>
                        <div className={styles.detailsGroupRightSide}>
                          <p>{item.place}</p>
                          <p>
                            {item.startingDate.hour}:00 pm -
                            {item.endingDate.hour}:00pm
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.registerButtonContainer}>
                      <button className={styles.registerButton}>
                        Register
                      </button>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
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
            {uEvents.map((item, index) => {
              const isActive =
                index >= visibleRange.from &&
                index < visibleRange.to &&
                index % visibleCount === 0;
              return (
                index % visibleCount === 0 && (
                  <button
                    key={item.id}
                    onClick={() => handleIndicatorClick(index)}
                    className={
                      isActive
                        ? `${styles.eventIndicator}`
                        : `${styles.eventIndicator} ${styles.eventIndicatorInactive}`
                    }
                  ></button>
                )
              );
            })}
          </div>
          <svg
            viewBox="300 19 300 329"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleNext}
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
          </svg>
        </div>
      </div>
    </section>
  );
}

export default UEventsSection;
