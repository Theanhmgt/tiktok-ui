import classNames from "classnames/bind";
import style from './Button.module.scss'
import { Link } from "react-router-dom";
const cx = classNames.bind(style)

function Button({
    to,
    href,

    primary = false,
    outline = false,
    text = false,
    disable = false,
    rounded = false,

    small = false,
    large = false,

    className,

    lefticon,

    onClick,

    children,
    ...passProps
}) {

    let Comp = 'button'

    const _props = {
        onClick,
        // target = _blak
        ...passProps
    }

    //Remove even listener when disable
    if (disable) {
        Object.keys(_props).forEach(key => {
            if (key.startsWith('on') && typeof _props[key] === 'function') {
                delete _props[key];
            }
        })
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        text,
        rounded,
        disable,

        small,
        large
    })

    if (to) {
        _props.to = to
        Comp = Link
    } else if (href) {
        _props.href = href
        Comp = 'a'
    }

    return (
        <Comp className={classes} {..._props}>

            {lefticon && <span className={cx('icon')}>{lefticon}</span>}
            <span className={cx('title')}>
                {children}
            </span>

        </Comp>
    );
}

export default Button;