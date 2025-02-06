/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './main.module.css'
import { Header, Account, Action, OverDueActivities, ActivityLog } from '../index';
function MainContent() {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.container}>
        <div className={styles.left}>
          <Account />
        </div>
        <div className={styles.right}>
          <div className={styles.top}>
            <div className={styles.topLeft}>
              <Action />
            </div>
            <div className={styles.topRight}>
              <ActivityLog />
            </div>
          </div>
          <div className={styles.bottom}>
            <OverDueActivities />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainContent
