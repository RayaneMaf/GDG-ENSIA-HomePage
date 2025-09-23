import styles from "./RegistirationsSection.module.css";

function RegistirationsSection() {
  let areOpen = false;
  return (
    <section className={styles.registirations}>
      <div className={styles.container}>
        <div className={styles.textGroup}>
          <h2>Secure Your Spot</h2>
          <div className={styles.registirationsStatus}>
            <span
              className={areOpen ? styles.statusOpen : styles.statusClosed}
            ></span>
            <p>Registrations are {areOpen ? "open" : "closed"}</p>
          </div>
        </div>
        <div className={styles.ticketsContainer}>
          <img src="src\assets\Ticket.png" alt="Ticket Image" />
          <img src="src\assets\Ticket.png" alt="Ticket Image" />
          <img src="src\assets\Ticket.png" alt="Ticket Image" />
        </div>
      </div>
    </section>
  );
}

export default RegistirationsSection;
