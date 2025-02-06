// import styles from "./activity.module.css"
import { useState, useId } from 'react';
import { Button, Input } from '../index'
import styles from "./activity.module.css"
import { LocalizationProvider, DatePicker, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useForm } from 'react-hook-form';
import { callIcon, mailIcon, bulbIcon } from '../../assets';
function Activity() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const {register, handleSubmit} = useForm()
  const id = useId()
  return (
    <div className={styles.container}>
    <div className={styles.Btns}>
      <Button className={`${styles.actionBtn} ${styles.activeActionBtn}`}>
          <img src={callIcon} alt="" style={{height: "25px", width: "auto" }}/>
          <span>Log a Call</span>
        </Button>
      <Button className={styles.actionBtn}>
          <img src={mailIcon} alt="" style={{height: "25px", width: "auto" }}/>
          <span>Email</span>
        </Button>
      <Button className={styles.actionBtn}>
          <img src={bulbIcon} alt="" style={{height: "25px", width: "auto" }}/>
          <span>Event</span>
      </Button>
    </div>
    <form onSubmit={handleSubmit()}>
      <Input 
      {...register("subject", {
        required: true,
      })}
      label="Subject" 
      type="text" />
      <div className={styles.formRow}>
        <Input
        {...register("teamMember", {
          required: true
        })}
        label="Add Team Member" 
        placeholder="Select Team Member" 
        type="text" />
        <Input
        {...register("contact", {
          required: true,
        })}
        label="Add Contact" 
        placeholder="Select Contacts" 
        type="text" />
      </div>
      <div className={styles.formRow}>
              <div className={styles.muiField}>
                <label className={styles.muiLabel} htmlFor={id}>Due Date</label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    {...register("date", {
                      required: true,
                    })}
                    name={id}
                    value={selectedDate}
                    onChange={(newValue) => setSelectedDate(newValue)}
                    format='DD/MM/YYYY'
                    slotProps={{
                      textField: {
                        sx: { "& .MuiInputBase-input": { padding: "5px" },
                        borderRadius: "5px" },
                      },
                    }}
                  />
              </LocalizationProvider>
            </div>
        <div className={styles.muiField}>
          <label className={styles.muiLabel} htmlFor={id}>Time</label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
            {...register("time", {
              required: true,
            })}
            name={id}
            value={selectedTime}
            onChange={(newValue) => setSelectedTime(newValue)}
            slotProps={{
              textField: {
                sx: { "& .MuiInputBase-input": { padding: "5px" },
                borderRadius: "5px" },
              },
            }}
            />
          </LocalizationProvider>
        </div>
      </div>
      <div className={styles.description}>
          <label htmlFor={id}>Description</label>
          <textarea 
          {...register("description", {
            required: true,
          })}
          name={id} 
          rows="3"></textarea>
      </div>
      <div className={styles.submit}>
        <Button className={styles.submitBtn} type='submit'>Submit</Button>
      </div>
    </form>
    </div>
  )
}
export default Activity
