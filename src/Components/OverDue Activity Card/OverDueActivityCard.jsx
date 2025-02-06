/* eslint-disable react/prop-types */
import styles from "./overDueActivityCard.module.css"
import { callIcon } from "../../assets/index"
function OverDueActivityCard({heading = "Heading", dueDate = "06-02-2025", time = "15:10:00"}) {
  return (
    <div className={styles.container}>
      <div className={styles.cardHeader}>
        <img src={callIcon} alt="" style={{height: "20px", width: "auto"}}/>
        <span>{heading}</span>
      </div>
      <div className={styles.due}>
        <div className={styles.col}>
          <span>Due Date</span>
          <span>{dueDate}</span>
        </div>
        <div className={styles.col}>
          <span>Time</span>
          <span>{time}</span>
        </div>
      </div>
    </div>
  )
}
export default OverDueActivityCard
