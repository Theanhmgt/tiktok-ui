import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import style from './AccountItem.module.scss'
const cx = classNames.bind(style)
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80" alt="TheAnh" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <sapn>AnhTN</sapn>
                    <FontAwesomeIcon className={cx('ckeck')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>
                    anhnt.20_04
                </span>
            </div>
        </div>
    );
}

export default AccountItem;