import React, { useState } from "react"
import styles from "./style.module.css"
import ProfileNav from "../Images/ProfileNav"
import {myLocalStorage} from '../../helper'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBookmark,
  faLongArrowAltDown,
} from "@fortawesome/free-solid-svg-icons"
//import {faFileUpload } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from "@fortawesome/free-solid-svg-icons"


const ProfileAbout = ({ name, total }) => {

  let doExist = () => !!myLocalStorage.getItem('owner')

  console.log("na profilu")
  //console.log(myLocalStorage.getItem('owner').toLowerCase())
  console.log(name)

  let count = 0;

  if(doExist()){
    console.log("first if")
    if(myLocalStorage.getItem('owner').toLowerCase() === name){
      console.log("drugi if")
    count = count + 1;}
  }else{
    console.log("skipped if")
  }
  return (
    <section className={styles.form}>
      <div className={styles.firstDiv}>
        <div className={styles.pictureDiv}>
          <ProfileNav />
        </div>
        <div className={styles.statistics}>
          <div className={styles.counters}>
            <h4>{total}</h4>
            <h4>{count}</h4>
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
              <FontAwesomeIcon icon={faEdit} size="2x" color="#696f45" />
            </div>
          </div>
          <div className={styles.bookmarkDiv}>
            <a href="http://localhost:8000/bookmarks">
              <FontAwesomeIcon icon={faBookmark} size="2x" color="#696f45" />
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
