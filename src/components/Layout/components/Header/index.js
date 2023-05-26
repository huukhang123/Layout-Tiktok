import styles from './Header.module.css';
import images from '~/assets/images';
import Button from '~/components/Button';


import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faEllipsisVertical, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional

const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={`${styles.wrapper}`}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>
                <Tippy render={attrs => (
                    <div className={cx('search-réult')} tabIndex="-1" {...attrs}>
                        ket qua
                    </div>
                )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Tìm kiếm" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />

                        </button>


                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <Button text>Upload</Button>
                    <Button primary>Log in</Button>

                    <button className={cx('more-btn')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </button>
                </div>
            </div>
        </header>
    );

}
export default Header;