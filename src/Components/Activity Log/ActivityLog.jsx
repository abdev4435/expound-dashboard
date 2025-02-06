import styles from "./activityLog.module.css"

function ActivityLog() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Activity Logs</h2>
      </div>
      <div className={styles.logContainer}>
        <div className={styles.logHeader}>
          <span>January 2025</span>
        </div>
        <div className={styles.logDetails}>
          <div className={styles.log}>
          <div className={styles.date}>
            <span>10/01</span>
          </div>
          <div className={styles.description}>
            <span>Lead | 03:12 PM</span>
            <span>New Lead Created by Anamnaaj</span>
          </div>
          </div>
          <div className={styles.log}>
          <div className={styles.date}>
            <span>13/01</span>
          </div>
          <div className={styles.description}>
            <span>Status | 06:20 PM</span>
            <span>Status Updated to Nurturing</span>
          </div>
          </div>
          <div className={styles.log}>
          <div className={styles.date}>
            <span>28/01</span>
          </div>
          <div className={styles.description}>
            <span>Activity | 04:30 PM</span>
            <span>Share Catelogue</span>
          </div>
          </div>
          <div className={styles.log}>
          <div className={styles.date}>
            <span>28/01</span>
          </div>
          <div className={styles.description}>
            <span>Activity | 04:30 PM</span>
            <span>Introductory Call</span>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActivityLog
