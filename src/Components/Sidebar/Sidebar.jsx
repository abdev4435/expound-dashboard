/* eslint-disable no-unused-vars */
import React from 'react'
import styles from "./sidebar.module.css"
import { blocksIcon, buildingIcon, layerIcon, pinIcon, shopIcon, suitcaseIcon, userIcon } from '../../assets/index'
import { Button } from "../index"
function Sidebar() {
  return (
    <aside className={styles.Sidebar}>
      <Button className={styles.sidebarBtn}>
      <img src={layerIcon} alt="" className={styles.sidebarIcon} />
      </Button>
      <Button className={styles.sidebarBtn}>
      <img src={pinIcon} alt="" className={styles.sidebarIcon} />
      </Button>
      <Button className={styles.sidebarBtn}>
      <img src={suitcaseIcon} alt="" className={styles.sidebarIcon} />
      </Button>
      <Button className={styles.sidebarBtn}>
      <img src={buildingIcon} alt="" className={styles.sidebarIcon} />
      </Button>
      <Button className={styles.sidebarBtn}>
      <img src={userIcon} alt="" className={styles.sidebarIcon} />
      </Button>
      <Button className={styles.sidebarBtn}>
      <img src={shopIcon} alt="" className={styles.sidebarIcon} />
      </Button>
      <Button className={styles.sidebarBtn}>
      <img src={blocksIcon} alt="" className={styles.sidebarIcon} />
      </Button>
    </aside>
  )
}

export default Sidebar
