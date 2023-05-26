import React, { useState, useEffect } from 'react';
import styles from './Item.module.css'
import Avatar from '../Avatar';

function Item() {
    console.log(styles)
    return <div
        className={`${styles.wrapper}`}
    >
        <Avatar />
        <div className="tiktok-10gdph9-DivContentContainer etvrc4k1">
            <div className={`${styles['tiktok-Container']}`}>
                <div className="tiktok-title">
                    <div className="tiktok-1mnwhn0-DivAuthorContainer etvrc4k6">
                        <a
                            className="avatar-anchor etvrc4k4 tiktok-m1rpgs-StyledLink er1vbsz0"
                            href="/@mixigaming"
                        >

                        </a>
                        <a
                            className="emt6k1z1 tiktok-1ew4g6u-StyledLink-StyledAuthorAnchor er1vbsz0"
                            href="/@mixigaming"
                        >
                            <h3
                                data-e2e="video-author-uniqueid"
                                className={`${styles['tiktok-debnpy']}`}
                            >
                                mixigaming
                                <svg
                                    className="tiktok-shsbhf-StyledVerifyBadge e1aglo370"
                                    width={14}
                                    data-e2e=""
                                    height={14}
                                    viewBox="0 0 48 48"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx={24} cy={24} r={24} fill="#20D5EC" />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M37.1213 15.8787C38.2929 17.0503 38.2929 18.9497 37.1213 20.1213L23.6213 33.6213C22.4497 34.7929 20.5503 34.7929 19.3787 33.6213L10.8787 25.1213C9.70711 23.9497 9.70711 22.0503 10.8787 20.8787C12.0503 19.7071 13.9497 19.7071 15.1213 20.8787L21.5 27.2574L32.8787 15.8787C34.0503 14.7071 35.9497 14.7071 37.1213 15.8787Z"
                                        fill="white"
                                    />
                                </svg>
                            </h3>
                            <h4
                                data-e2e="video-author-nickname"
                                className={`${styles['tiktok-Name']}`}
                            >
                                Độ Phùng
                            </h4>
                        </a>
                    </div>
                    <button
                        type="button"
                        data-e2e="feed-follow"
                        className={`${styles['tiktok--Button']}`}
                    >
                        Follow
                    </button>
                </div>
                <div className={`${styles['tiktok-DivWrapper']}`}>
                    <div
                        className="tiktok-ml44fi-DivText e1mzilcj1"
                        style={{ maxHeight: "unset" }}
                    >
                        {/* <div className="tiktok-1lrnklc-DivBtnWrapper e1mzilcj4">
                            <button
                                type="button"
                                className="tiktok-3yoi7l-ButtonExpand e1mzilcj2"
                            >
                                more
                            </button>
                        </div> */}
                        <div className=" tiktok-1d7krfw-DivOverflowContainer e1mzilcj5">
                            <div
                                data-e2e="video-desc"
                                className="tiktok-11cua35-DivContainer ejg0rhn0"
                            >
                                <span className={`${styles['tiktok-Text']}`}>xời, :)) </span>
                                <a
                                    target="_self"
                                    rel="opener"
                                    className="ejg0rhn5 tiktok-g8ml1x-StyledLink-StyledCommonLink er1vbsz0"
                                    aria-label="Watch more videos of the #mixigaming category"
                                    href="/tag/mixigaming"
                                >
                                    <strong className={`${styles['tiktok-StrongText']}`}>
                                        #mixigaming{" "}
                                    </strong>
                                </a>
                                <span className="tiktok-j2a19r-SpanText efbd9f0"> </span>
                            </div>
                        </div>
                    </div>
                </div>
                <h4 data-e2e="video-music" className="tiktok-zo4ukd-H4Link epjbyn0">
                    <a
                        target="_self"
                        rel="opener"
                        aria-label="Watch more videos with music nhạc nền  - Độ Phùng"
                        className={`${styles['tiktok-StyledLink']}`}
                        href="/music/nhạc-nền-Độ-Phùng-7236007497820588806"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill="rgba(22, 24, 35, 1)"
                            styletype={0}
                            className="tiktok-1alsdqb-StyledIcon epjbyn2"
                        >
                            <use xlinkHref="#Music_Note-8c658968" />
                        </svg>
                        nhạc nền - Độ Phùng
                    </a>
                </h4>
            </div>
            <div className="tiktok-kd7foj-DivVideoWrapper e1bh0wg710">
                <div
                    tabIndex={0}
                    role="button"
                    aria-label="Watch in full screen"
                    id="one-column-item-3"
                    data-e2e="feed-video"
                    className="tiktok-odzdbj-DivVideoCardContainer e1bh0wg71"
                >

                    <div className="tiktok-143if4o-DivVideoPlayerContainer e1bh0wg79">
                        <div mode={0} className="tiktok-1xe50ry-DivContainer e1yey0rl0">
                            <img
                                mode={0}
                                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/oQ9hXdXnErCCk7NAXrkzNgKIs1AfB1boLO0yIq~tplv-f5insbecw7-1:720:720.jpeg?x-expires=1685012400&x-signature=a1SQkRky7qrXhU1eObXJe2EPPsw%3D"
                                alt="xời, :)) #mixigaming "
                                loading="lazy"
                                className="tiktok-1itcwxg-ImgPoster e1yey0rl1"
                            />
                        </div>
                        <div
                            tabIndex={0}
                            role="button"
                            aria-label="Pause"
                            aria-pressed="false"
                            data-e2e="video-play"
                            className="tiktok-mlcjt3-DivPlayIconContainer-StyledDivPlayIconContainer e1bh0wg73"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                fill="#fff"
                            >
                                <use xlinkHref="#Play_Fill-6957a00f" />
                            </svg>
                        </div>
                        <div className="tiktok-q09c19-DivVoiceControlContainer e1bh0wg76">
                            <div
                                data-e2e="video-sound"
                                tabIndex={0}
                                role="button"
                                aria-label="Volume"
                                aria-pressed="true"
                                className="tiktok-105iyqb-DivMuteIconContainer e1bh0wg75"
                            >
                                <svg
                                    width={24}
                                    data-e2e=""
                                    height={24}
                                    viewBox="0 0 48 48"
                                    fill="#fff"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M20.3359 8.37236C22.3296 7.04325 25 8.47242 25 10.8685V37.1315C25 39.5276 22.3296 40.9567 20.3359 39.6276L10.3944 33H6C4.34314 33 3 31.6568 3 30V18C3 16.3431 4.34315 15 6 15H10.3944L20.3359 8.37236ZM21 12.737L12.1094 18.6641C11.7809 18.8831 11.3948 19 11 19H7V29H11C11.3948 29 11.7809 29.1169 12.1094 29.3359L21 35.263V12.737ZM32.9998 24C32.9998 21.5583 32.0293 19.3445 30.4479 17.7211C30.0625 17.3255 29.9964 16.6989 30.3472 16.2724L31.6177 14.7277C31.9685 14.3011 32.6017 14.2371 33.0001 14.6195C35.4628 16.9832 36.9998 20.3128 36.9998 24C36.9998 27.6872 35.4628 31.0168 33.0001 33.3805C32.6017 33.7629 31.9685 33.6989 31.6177 33.2724L30.3472 31.7277C29.9964 31.3011 30.0625 30.6745 30.4479 30.2789C32.0293 28.6556 32.9998 26.4418 32.9998 24ZM37.0144 11.05C36.6563 11.4705 36.7094 12.0995 37.1069 12.4829C40.1263 15.3951 42.0002 19.4778 42.0002 23.9999C42.0002 28.522 40.1263 32.6047 37.1069 35.5169C36.7094 35.9003 36.6563 36.5293 37.0144 36.9498L38.3109 38.4727C38.6689 38.8932 39.302 38.9456 39.7041 38.5671C43.5774 34.9219 46.0002 29.7429 46.0002 23.9999C46.0002 18.2569 43.5774 13.078 39.7041 9.43271C39.302 9.05421 38.6689 9.10664 38.3109 9.52716L37.0144 11.05Z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="tiktok-fxqf0v-DivVideoControlBottom e1n49v430" />
                        <p
                            tabIndex={0}
                            role="button"
                            aria-label="Report"
                            data-e2e="video-report"
                            className="tiktok-1uqdtvn-PReportText e1bh0wg77"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={14}
                                fill="currentColor"
                                className="tiktok-lmz8ok-StyledIconFlag e1bh0wg78"
                            >
                                <use xlinkHref="#Flag-0b46c668" />
                            </svg>
                            Report
                        </p>
                    </div>
                </div>
                <div className="tiktok-wc6k4c-DivActionItemContainer e1whjx9o0">
                    <button
                        type="button"
                        aria-label="Like video
  376.9K likes"
                        aria-pressed="false"
                        className="tiktok-1ok4pbl-ButtonActionItem e1hk3hf90"
                    >
                        <span
                            data-e2e="like-icon"
                            className="tiktok-12vi4up-SpanIconWrapper e1hk3hf91"
                            style={{ color: "rgb(22, 24, 35)" }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                fill="currentColor"
                            >
                                <use xlinkHref="#heart-fill-03bd63df" />
                            </svg>
                        </span>
                        <strong
                            data-e2e="like-count"
                            className="tiktok-14xas1m-StrongText e1hk3hf92"
                        >
                            376.9K
                        </strong>
                    </button>
                    <button
                        type="button"
                        aria-label="Read or add comments
  2046 comments"
                        className="tiktok-1ok4pbl-ButtonActionItem e1hk3hf90"
                    >
                        <span
                            data-e2e="comment-icon"
                            className="tiktok-12vi4up-SpanIconWrapper e1hk3hf91"
                            style={{ color: "rgb(22, 24, 35)" }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                fill="currentColor"
                            >
                                <use xlinkHref="#Bubble_Ellipsis_Right_Fill-a497dc09" />
                            </svg>
                        </span>
                        <strong
                            data-e2e="comment-count"
                            className="tiktok-14xas1m-StrongText e1hk3hf92"
                        >
                            2046
                        </strong>
                    </button>
                    <button
                        type="button"
                        aria-label="Share video
  666 shares"
                        aria-expanded="false"
                        className="tiktok-1ok4pbl-ButtonActionItem e1hk3hf90"
                    >
                        <span
                            data-e2e="share-icon"
                            className="tiktok-12vi4up-SpanIconWrapper e1hk3hf91"
                            style={{ color: "rgb(22, 24, 35)" }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                fill="currentColor"
                            >
                                <use xlinkHref="#pc-share-44d9fe83" />
                            </svg>
                        </span>
                        <strong
                            data-e2e="share-count"
                            className="tiktok-14xas1m-StrongText e1hk3hf92"
                        >
                            666
                        </strong>
                    </button>
                </div>
            </div>
        </div>
    </div>
        ;
}

export default Item;