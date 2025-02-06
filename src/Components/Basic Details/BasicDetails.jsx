/* eslint-disable react/prop-types */
import styles from "./basicdetails.module.css"
function BasicDetails({title, firstName, lastName}) {
  return (
    <div className={styles.container}>
      <div className={styles.userDetails}>
        <div className={styles.detailsCol}>
          <span className={styles.detailsHeading}>Title</span>
          <span className={styles.detail}>{title}</span>
        </div>
        <div className={styles.detailsCol}>
          <span className={styles.detailsHeading}>First Name</span>
          <span className={styles.detail}>{firstName}</span>
        </div>
        <div className={styles.detailsCol}>
          <span className={styles.detailsHeading}>Last Name</span>
          <span className={styles.detail}>{lastName}</span>
        </div>
      </div>
      <div className={styles.addressDetailsHeading}>
        <h2>Address Details</h2>
      </div>
      <div className={styles.addressDetails}>
      <div className={styles.detailsCol}>
          <span className={styles.detailsHeading}>Region</span>
          <span className={styles.detail}>APAC</span>
        </div>
        <div className={styles.detailsCol}>
          <span className={styles.detailsHeading}>Country</span>
          <span className={styles.detail}>India</span>
        </div>
        <div className={styles.detailsCol}>
          <span className={styles.detailsHeading}>Zone</span>
          <span className={styles.detail}>North</span>
        </div>
      </div>
    </div>
  )
}
export default BasicDetails
