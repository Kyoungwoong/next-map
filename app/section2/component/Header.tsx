import React from 'react'
import Link from 'next/link';
import styles from "../../../styles/header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.flexItem}>
        <Link href="/" className={styles.box}>
          <img src="/tmax.png" width={48} height={48} alt="tmax로고"/>
        </Link>
      </div>
    </header>
  )
}

export default Header
