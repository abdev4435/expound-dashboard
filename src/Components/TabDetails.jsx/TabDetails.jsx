/* eslint-disable react/prop-types */
import styles from './tabdetails.module.css'

function TabDetails({selected, tabComponents, title, firstName, lastName}) {
  const SelectedComponent = tabComponents[selected]
  console.log(tabComponents)
  return (
    <div className={styles.container}>
      <div>
        {SelectedComponent ? (<SelectedComponent title={title} firstName={firstName} lastName={lastName}/>) :  " "}
      </div>
    </div>
  )
}

export default TabDetails
