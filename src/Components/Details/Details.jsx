/* eslint-disable react/prop-types */
import styles from "./details.module.css"
import { infoIcon, profileIcon } from '../../assets'
import {Button} from "../index"
function Details({title, firstName, lastName}) {
  return (
    <div className={styles.userDetails}>
    <div className={styles.topDetails}>
      <span style={{fontWeight: "500"}}>{title}</span>
      <div className={styles.info}>
        <img src={infoIcon} alt="" style={{height: "15px", width: "auto"}}/>
        <span>Pending Actions</span>
        </div>
    </div>
    <div className={styles.mainDetails}>
      <h2>{firstName} {lastName}</h2>
      <div className={styles.mainBtns}>
        <Button className={styles.createAccountBtn}>
          Create Account
        </Button>
        <Button className={styles.createContactBtn}>
          Create Contact
        </Button>
      </div>
    </div>
    <div className={styles.bottomDetails}>
      <div className={styles.bottomProfile}>
        <img src={profileIcon} alt="" style={{height: "30px", width: "auto"}}/>
        <span>Anamnaaj Mansuri</span>
      </div>
        <span>Event</span>
    </div>
  </div>
  )
}

export default Details
