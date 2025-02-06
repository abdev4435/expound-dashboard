/* eslint-disable no-unused-vars */
import { useState } from 'react'
import styles from './account.module.css'
import { Button, AccountDetails, BasicDetails, Details, LeadDetails, OtherContacts, TabDetails, Tabs, Team } from "../index"
import { infoIcon,editIcon } from '../../assets'

function Account() {
  const [title, setTitle] = useState("test")
  const [firstName, setFirstName] = useState("Ramesh")
  const [lastName, setLastName] = useState("Sharma")
  const tabArr = ["Basic Details", "Account Details", "Lead Details", "Team", "Other Contacts"]
  const [selected, setSelected] = useState(tabArr?.[0] || "")

  const tabComponents = {
    "Basic Details": (props) => <BasicDetails {...props}/>,
    "Account Details": (props) => <AccountDetails {...props}/>,
    "Lead Details": (props) => <LeadDetails {...props}/>,
    "Team": (props) => <Team {...props}/>,
    "Other Contacts": (props) => <OtherContacts {...props}/>,
  }
  return (
    <div className={styles.container}> 
      <Details title={title} firstName={firstName} lastName={lastName}/>
      <Tabs tabArr = {tabArr} selected={selected} setSelected={setSelected}/>
      <TabDetails selected={selected} tabComponents={tabComponents} title={title} firstName={firstName} lastName={lastName}/>
      <div className={styles.bottom}>
        <div className={styles.bottomWarning}>
        <img src={infoIcon} alt="" style={{height: "15px", width: "auto"}}/>
          <span>10 empty fields, fill the pending information</span>
        </div>
        <div>
          <Button className={styles.bottomEditBtn}>
            <img src={editIcon} alt="" style={{height: "20px", width: "auto"}}/>
          </Button>
        </div>
      </div>

    </div>
  )
}

export default Account
