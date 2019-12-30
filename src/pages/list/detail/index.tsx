import React from 'react';
import styles from './index.css';

export default function(props: any) {
    console.log(props, 'propspropssss');
    const handle = () => {
        const {mainAppProps} = props;
        mainAppProps.router.push('/')
    }
  return (
    <div className={styles.normal} onClick={handle}>
        XXXX
    </div>
  );
}
