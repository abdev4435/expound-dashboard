/* eslint-disable no-unused-vars */
import React from 'react'
import styles from "./header.module.css"
import { tagIcon, addIcon, contactsIcon, hamMenuIcon, refreshIcon, doneIcon, correctIcon } from "../../assets/index"
import { Button } from "../index"
function Header() {
  return (
    <div>
    <div className={styles.headerContainer}>
      <div className={styles.heading}>
        <span>Dashboard / Lead / <span style={{color: "blue", textDecoration: "underline"}}>LE-1023</span></span>
        <h2>LE-1023</h2>
      </div>
      <div className={styles.iconContainer}>
        <img src={tagIcon} alt="" className={styles.headerIcons}/>
        <img src={addIcon} alt="" className={styles.headerIcons}/>
        <img src={contactsIcon} alt="" className={styles.headerIcons}/>
        <img src={hamMenuIcon} alt="" className={styles.headerIcons}/>
        <img src={refreshIcon} alt="" className={styles.headerIcons}/>
      </div>
    </div>
      <div className={styles.headingBtns}>
        <div className={styles.headingBtnsLeft}>
          <Button className={styles.doneBtn}>
            <img src={doneIcon} alt="" className={styles.headingBtnsIcon}/>
          </Button>
          <Button className={styles.doneBtn}>
            <img src={doneIcon} alt="" className={styles.headingBtnsIcon}/>
          </Button>
          <Button className={styles.nurturingBtn}>Nurturing</Button>
          <Button className={styles.convertBtn}>Convert</Button>
        </div>
        <div className={styles.headingBtnsRight}>
          <Button className={styles.markConvertedBtn}>
            <img src={correctIcon} alt="" className={styles.headingBtnsIcon}/>
            Mark as Converted
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Header
