/**
 * External dependencies
 */
import React from 'react';
import cx from 'classnames';

export type FormErrorProps = React.HTMLAttributes<any>;

/**
 * @param  {Object} props
 * @param  {string} props.className
 * @param  {React.ReactNode} props.children
 * @param  {...Object} props.otherProps
 * @return {React.ReactElement}
 */
export const FormError: React.FunctionComponent<FormErrorProps> = ({
    className,
    children,
    ...otherProps
}): React.ReactElement => {
    return (
        <span
            className={cx([
                'block',
                'select-none',
                'mt-2',
                'text-sm',
                'text-red-600',
                className,
            ])}
            {...otherProps}
        >
            {children}
        </span>
    );
};

export default FormError;
