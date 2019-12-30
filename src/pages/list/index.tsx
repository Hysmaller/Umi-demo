import React from 'react';
import styles from './index.css';

export default function(props: any) {
    console.log(process.env.apiUrl, 'console.log(process.env.apiUrl);');
    const handle = () => {
        const {mainAppProps} = props;
        if (mainAppProps) {
            mainAppProps.router.push('/')
        }
    }
  return (
    <div className={styles.normal} onClick={handle}>
      这是商品详情
    </div>
  );
}
