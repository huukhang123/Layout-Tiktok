import React, { useState, useEffect } from 'react';
import styles from './Avatar.module.css'

function Avatar() {
    return (<a
        className={`${styles.wrapper} `}
        data-e2e="video-author-avatar"
        href="/@mixigaming"
    >
        <div
            className={styles.item}
            style={{ width: 56, height: 56 }}
        >
            <span
                shape="circle"
                data-e2e=""
                className="e1vl87hj2 tiktok-gcksof-SpanAvatarContainer-StyledAvatar e1e9er4e0"
                style={{ width: 56, height: 56 }}
            >
                <img
                    loading="lazy"
                    alt=""
                    src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/a187c4dfa896a5ea449a4c5d3927b20a~c5_100x100.jpeg?x-expires=1685163600&x-signature=vf5rRLcgPb9STGCWsZOQ%2FB8%2B9RE%3D"
                    className="tiktok-1zpj2q-ImgAvatar e1e9er4e1"
                />
            </span>
        </div>
    </a>);
}

export default Avatar;