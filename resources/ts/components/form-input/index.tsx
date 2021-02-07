/**
 * External dependencies
 */
import React from 'react';
import cx from 'classnames';

/**
 * @param  {Object} props
 * @param  {string} props.className
 * @param  {...Object} props.otherProps
 * @param  {...Object} props.otherProps
 * @return {React.ReactElement}
 */
export const FormInput = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<any>>(({
    className,
    ...otherProps
}, forwaredRef): React.ReactElement => {
    return (
        <input
            className={cx([
                'block',
                'w-full',
                'px-2',
                'py-1',
                'leading-tight',
                'border',
                'border-gray-300',
                'focus:border-blue-900',
                'focus:outline-none',
                className,
            ])}
            ref={forwaredRef}
            {...otherProps}
        />
    );
});

export default FormInput;
