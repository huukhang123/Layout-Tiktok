import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Styles from './SuggestedAccounts.css';
const cx = classNames.bind(Styles);

function AccountItem() {
    return <div className={cx('accoutn-item')}>
        <img
            className={cx('avatar')}
            src="https://phunugioi.com/wp-content/uploads/2020/01/anh-avatar-supreme-dep-lam-dai-dien-facebook.jpg"
            alt=''
        />
        <div className={cx('item-info')}>
            <p className={cx('nick-name ')}>
                <strong>Quocphunguyen </strong>
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </p>
            <p className={cx('name')}>Quốc Nguyễn Phú</p>
        </div>
    </div>;

}
// AccountItem.PropTypes = {};

export default AccountItem;
