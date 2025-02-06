import { Button, OverDueActivityCard } from "../index"
import styles from "./overDueActivities.module.css"

function OverDueActivities() {

  const overDueActivities = [
    {
      heading: "Share Catalogue",
      dueDate: "2025-01-28",
      time: "16:20:00"
    },
    {
      heading: "Introductory Call",
      dueDate: "2025-01-28",
      time: "17:30:00"
    }
  ]
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>OverDue Activities</h2>
        <Button className={styles.upcomingBtn}>View Upcoming</Button>
      </div>
      <div className={styles.activities}>
        {overDueActivities?.map((act) => (
          <OverDueActivityCard key={act.name} heading={act.heading} dueDate={act.dueDate} time={act.time}/>
        ))}
      </div>
    </div>
  )
}

export default OverDueActivities
