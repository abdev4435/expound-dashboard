import { useState } from "react"
import styles from "./action.module.css" 
import { Activity, Actionables, Tasks, NoteFile, TabDetails, Tabs } from "../index"
function Action() {
  const tabArr = ["Activity", "Actionables", "Tasks", "Note & File"]
  const [selected, setSelected] = useState(tabArr?.[0] || "")

  const tabComponents = {
    "Activity": () => <Activity />,
    "Actionables": () => <Actionables />,
    "Tasks": () => <Tasks />,
    "Note & File": () => <NoteFile/>,
  }
  return (
    <div className={styles.container}>
      <div className={styles.tabContainer}>
        <Tabs tabArr = {tabArr} selected={selected} setSelected={setSelected}/>
        <TabDetails selected={selected} tabComponents={tabComponents}/>
      </div>
    </div>
  )
}

export default Action
