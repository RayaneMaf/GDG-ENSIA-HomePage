import styles from "./RegistirationsSection.module.css";

function RegistirationsSection() {
  let areOpen = true;
  return (
    <section className={styles.registirations}>
      <div className={styles.container}>
        <div className={styles.textGroup}>
          <h1>Secure Your Spot</h1>
          <div className={styles.registirationsStatus}>
            <span
              className={areOpen ? styles.statusOpen : styles.statusClosed}
            ></span>
            <h3>Registrations are {areOpen ? "open" : "closed"}</h3>
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
