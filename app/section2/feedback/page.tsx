"use client"
import React from 'react'
import Link from 'next/link';
import {Fragment} from 'react';
import Header from "../component/Header"
import styles from "../../../styles/header.module.scss"
import {AiOutlineShareAlt} from "react-icons/ai";
import {VscFeedback} from "react-icons/vsc";

const Feedback = () => {
  return (
    <Fragment>
      <Header rightElements={[
          <button onClick={() => {
            alert('복사!');
          }}
          className={styles.box}
          style={{marginRight: 8}}
          key="button"
          >
              <AiOutlineShareAlt size={20}/>
          </button>,
          <Link href="/" className={styles.box} key="link">링크<VscFeedback size={20}/></Link>
      ]}>
        
      </Header>
    </Fragment>
  )
}

export default Feedback
