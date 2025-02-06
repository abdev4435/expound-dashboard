// import React from 'react'
import styles from "./navbar.module.css"
import { menuIcon, searchIcon, bellIcon, calendarIcon, settingsIcon, profileIcon } from "../../assets/index"
function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <div className={styles.left}>
        <img src={menuIcon} alt="" className={styles.menuIcon}/>
        <h1 className={styles.brandName}>Expound Technivo</h1>
      </div>
      <div className={styles.right}>
        <div className={styles.search}>
          <button className={styles.searchBtn}>
            <img src={searchIcon} alt="" className={styles.searchIcon}/>
          </button> 
        </div>
        <div className={styles.navIcons}>
          <button className={styles.navBtn}>
            <img src={bellIcon} alt="" className={styles.navIcon}/>
          </button>
          <button className={styles.navBtn}>
            <img src={calendarIcon} alt="" className={styles.navIcon}/>
          </button>
          <button className={styles.navBtn}>
            <img src={settingsIcon} alt="" className={styles.navIcon}/>
          </button>
        </div>
        <div className="profile">
          <button className={styles.profileBtn}>
            <img src={profileIcon} alt="" className={styles.profileIcon}/>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
