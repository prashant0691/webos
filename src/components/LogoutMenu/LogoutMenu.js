import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";
import styles from "./LogoutMenu.module.scss";

const LogoutMenu = () => {
  return (
    <div className={styles.root}>
      <FormControl className={styles.form}>
        <FormLabel>Showcase carousal speed</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel className={styles.radioButtonContainer} value="female" control={<Radio />} label="Slow" />
          <FormControlLabel className={styles.radioButtonContainer} value="male" control={<Radio />} label="Medium" />
        </RadioGroup>
        <div className={styles.section}>
          <FormLabel className={styles.radio}>NFT Information</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel className={styles.radioButtonContainer} value="female" control={<Radio />} label="Slow" />
            <FormControlLabel className={styles.radioButtonContainer} value="male" control={<Radio />} label="Medium" />
          </RadioGroup>
        </div>
        <div className={styles.section}>
          <FormLabel className={styles.radio}>QR Code</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel className={styles.radioButtonContainer} value="female" control={<Radio />} label="Slow" />
            <FormControlLabel className={styles.radioButtonContainer} value="male" control={<Radio />} label="Medium" />
          </RadioGroup>
        </div>
      </FormControl>
    </div>
  )

}

export default LogoutMenu;