import styles from "./Nav.module.css";

function Nav() {
  const openHam = () => {
    const ham = document.querySelector(`.${styles.hamContainer}`);
    ham.classList.add(styles.active);
  };

  const closeHam = () => {
    const ham = document.querySelector(`.${styles.hamContainer}`);
    ham.classList.remove(styles.active);
  };

  return (
    <>
      <section className={styles.navContainer}>
        <div className={styles.logoContainer}>
          <svg
            viewBox="39 19 557 329"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.logoSVG}
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
          <h1 className={styles.logoTitle}>
            Google Developer Group <span>ENSIA</span>
          </h1>
        </div>
        <svg viewBox="0 0 30 24" className={styles.navIconOpen} onClick={openHam}>
          <path d="M 2 2 l 26 0" />
          <path d="M 2 12 l 26 0" />
          <path d="M 2 22 l 26 0" />
        </svg>
        <ul className={styles.navWrapper}>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Events</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <button>Register</button>
          </li>
        </ul>
      </section>
      <section className={styles.hamContainer}>
        <div className={styles.menu}>
          <div className={styles.closeHamIconContainer}>
            <svg
              viewBox="0 0 24 24"
              className={styles.navIconClose}
              onClick={closeHam}
            >
              <path d="M 2 2 l 20 20" />
              <path d="M 2 22 l 20 -20" />
            </svg>
          </div>
          <div className={styles.hamWrapperContainer}>
            <ul className={styles.hamWrapper}>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Events</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
            </ul>
            <button>Register</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Nav;
