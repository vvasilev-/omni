/**
 * External dependencies
 */
import React from 'react';
import cx from 'classnames';

/**
 * @param  {Object} props
 * @param  {string} props.className
 * @param  {React.ReactNode} props.children
 * @param  {...Object} props.otherProps
 * @return {React.ReactElement}
 */
export const FormLabel: React.FunctionComponent<React.LabelHTMLAttributes<any>> = ({
    className,
    children,
    ...otherProps
}): React.ReactElement => {
    return (
        <label
            className={cx([
                'block',
                'select-none',
                'mb-2',
                className,
            ])}
            {...otherProps}
        >
            {children}
        </label>
    );
};

export default FormLabel;
