import styles from "./ContactSection.module.css";

function ContactSection() {
  return (
    <section className={styles.contact}>
      <div className={styles.details}>
        <div className={styles.textContainer}>
          <div className={styles.textGroup}>
            <div className={styles.titleContainer}>
              <h1>Let's Connect</h1>
              <svg
                width="77"
                height="69"
                viewBox="0 0 77 69"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39.4585 58.8895L39.136 59.2147C32.3933 65.8167 21.6414 65.9755 14.7064 59.5759L14.3744 59.2615C7.45463 52.5434 7.18544 41.555 13.6886 34.5081L14.003 34.1761L17.2766 30.8039L21.6239 34.9394L18.308 38.3547C13.7917 43.0066 13.9012 50.44 18.5529 54.9565C23.205 59.4727 30.6381 59.3626 35.1545 54.7106L38.6368 51.1242L42.9828 55.259L39.4585 58.8895ZM62.9502 9.88428C69.6585 16.7358 69.714 27.7266 62.9961 34.6462L60.8733 36.8319L56.5261 32.6964L58.6918 30.4664C63.2078 25.8144 63.0979 18.3821 58.4462 13.8658C53.7942 9.34966 46.3619 9.45959 41.8455 14.1113L39.5144 16.5123L35.1662 12.377L37.5403 9.93184C44.365 2.90232 55.5964 2.73676 62.6259 9.56145L62.9502 9.88428Z"
                  fill="#282828"
                />
                <line
                  x1="33"
                  y1="40.7835"
                  x2="43.5312"
                  y2="30.2523"
                  stroke="#282828"
                  strokeWidth="9"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h3>
              Have questions, ideas, want to collab or get involved?
              <br />
              Reach out to us today and become part of our vibrant community.
            </h3>
          </div>
          <div className={styles.logoContainer}>
            <img src="src\assets\GDGLogo.png" alt="" />
          </div>
        </div>
        <form action="" className={styles.form} id="myForm">
          <input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Your Name"
          />
          <input
            type="email"
            name="userEmail"
            id="userEmail"
            placeholder="Your Email"
          />
          <input
            type="text"
            name="letter"
            id="letter"
            placeholder="Your Question/idea"
          />
        </form>
      </div>
      <div className={styles.formControl}>
        <div className={styles.dummyDiv}></div>
        <div className={styles.controls}>
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.controlsCorner}
          >
            <path d="M200 200 L200 0 L0 0 Q200 0 200 200 Z" fill="#EDEDED" />
            <rect x="0" y="0" width="200" height="200" fill="none" />
          </svg>
          <div className={styles.buttonContainer}>
            <button form="myForm" type="submit">
              Send
            </button>
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

export default ContactSection;
