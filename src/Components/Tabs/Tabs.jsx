/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import styles from './tabs.module.css'
function Tabs({tabArr, selected, setSelected}) {
  const handleClick = (tab) => {
    setSelected(tab)
  }
  return (
    <div className={styles.container}>
      {tabArr?.map((tab) =>
      (
      <button key={tab} className={`${styles.tabBtn} ${selected === tab ? styles.activeTab : ""}`} onClick={() => {handleClick(tab)}}>{tab}</button>
      ))}
    </div>
  )
}
export default Tabs
