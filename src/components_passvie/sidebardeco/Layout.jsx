import React from 'react'
import styles from './Layout.module.css'

import { Sidebar } from './Sidebar'


export const Layout = ({children}) => {
  return (
    <div className={styles.container}>
        {children}

        <div className={styles.layout}>
        <Sidebar/>
        <div className={styles.contents}>{children}</div>
    </div>
    </div>
  )
}
