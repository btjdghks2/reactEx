import React from 'react';
import {Link} from 'react-router-dom';
import { TiHome } from 'react-icons/ti';
import { FaRegCompass } from 'react-icons/fa';
import { MdSubscriptions } from 'react-icons/md';
import  styles  from './Sidebarcss.module.css';



export const Sidebar  = () =>  {
  return (
    <div className={styles.munu}>
      <Link to="/" className={styles.link}>
        <TiHome className={styles.icon}/>
        홈
      </Link>
      <Link to="/explore" className={styles.link}>
        <FaRegCompass className={styles.icon}/>
        탐색
      </Link>
      <Link to="/subscription" className={styles.link}>
        <MdSubscriptions className={styles.icon}/>
        구독
      </Link>

    </div>
  )
}

