'use client'

import React from 'react'
import Link from 'next/link';
import styles from "../../../styles/header.module.scss";
import Images from "./Image";
import useMap from "../../hooks/useMap";
import {useRouter} from 'next/navigation';

interface Props {
  onClickLogo?: () => void;
  rightElements?: React.ReactElement[];
}

const Header = ({rightElements}: Props) => {
  
  const {resetMapOptions, getMapOptions} = useMap();

  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.flexItem}>
        {/* <Link href="/" className={styles.box}>
          <img src="/tmax.png" width={48} height={48} alt="tmax로고"/>
        </Link> */}
        <Link href="/" className={styles.box}>
          <Images/>
        </Link>
      </div>

      {rightElements && <div className={styles.flexItem}>{rightElements}</div> }
    </header>
  )
}

export default Header
