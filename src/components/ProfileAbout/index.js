import React, { useState } from "react"
import styles from "./style.module.css"
import ProfileNav from "../Images/ProfileNav"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBookmark } from "@fortawesome/free-solid-svg-icons"
//import {faFileUpload } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from "@fortawesome/free-solid-svg-icons"

/*<i class="far fa-bookmark"></i>*/

const ProfileAbout = ({ name, total }) => {
  return (
    <section className={styles.form}>
      <div className={styles.firstDiv}>
        <div className={styles.pictureDiv}>
          <ProfileNav />
        </div>
        <div className={styles.statistics}>
          <div className={styles.counters}>
            <h4>{total}</h4>
            <h4>0 </h4>
          </div>
          <div className={styles.labels}>
            <h4>posts</h4>
            <h4>followers</h4>
          </div>
        </div>
      </div>

      <div className={styles.secondDiv}>
        <div className={styles.heading}>
          <div className={styles.nameAndEdit}>
            <h2 className={styles.username}>{name}</h2>
            <div className={styles.editDiv}>
              <FontAwesomeIcon icon={faEdit} size="2x" color="gray" />
            </div>
          </div>
          <div className={styles.bookmarkDiv}>
            <a href="http://localhost:8000/bookmarks">
              <FontAwesomeIcon icon={faBookmark} size="2x" color="gray" />
            </a>
          </div>
        </div>
        <div className={styles.text}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. 
          </p>
        </div>
      </div>
    </section>
  )
}
export default ProfileAbout
