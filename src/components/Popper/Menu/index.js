import Tippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss'
import classNames from 'classnames/bind'
import { Wrapper as PooperWrapper } from '~/components/Popper'
import MenuItem from './MenuItem';
const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {

    const renderItems = () => {
        return items.map((item, index) => (
            <MenuItem key={index} data={item} />
        ))
    }

    return (
        <Tippy
            delay={[0, 300]}
            interactive
            placement='bottom-end'
            render={attrs => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PooperWrapper className={cx('menu-popper')}>
                        {renderItems()}
                    </PooperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;