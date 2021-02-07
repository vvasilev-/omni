/**
 * External dependencies
 */
import React from 'react';
import cx from 'classnames';

/**
 * @param  {Object} props
 * @param  {string} props.className
 * @param  {...Object} props.otherProps
 * @return {React.ReactElement}
 */
export const FormInput: React.FunctionComponent<React.InputHTMLAttributes<any>> = ({
    className,
    ...otherProps
}): React.ReactElement => {
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
            {...otherProps}
        />
    );
};

export default FormInput;
