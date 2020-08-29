import React from 'react';
import { Button, Typography } from 'antd';

import styles from './Home.css';

const { Title } = Typography;

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <Title className={styles.header}>
        THE BATTLE FOR MIDDLE EARTH: REFORGED
      </Title>
      <Button className={styles.playBtn}>PLAY</Button>
    </div>
  );
}
