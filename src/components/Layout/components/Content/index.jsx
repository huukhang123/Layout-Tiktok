import React, { useState, useEffect } from 'react';
import styles from './Content.module.css'
import Item from './Item';

function Content() {
    return <div className={`${styles.wrapper}`}>
        <Item />
        <Item />

    </div>;
}

export default Content;