/**
 * External dependencies
 */
import React from 'react';
import cx from 'classnames';

/**
 * Internal dependencies
 */
import Loading from '@/components/button/loading';
import variants, { Variant } from '@/components/button/variants';

type Props = {
    as?: 'button' | 'a',
    variant?: Variant,
    isLoading?: boolean,
} & React.ButtonHTMLAttributes<any> & React.AnchorHTMLAttributes<any>;

/**
 * @param  {Object} props
 * @param  {string} [props.as=button]
 * @param  {string} [props.variant=blue]
 * @param  {string} props.className
 * @param  {boolean} props.isLoading
 * @param  {boolean} props.disabled
 * @param  {React.ReactNode} props.children
 * @param  {...Object} props.otherProps
 * @return {React.ReactElement}
 */
export const Button: React.FunctionComponent<Props> = ({
    as: Component = 'button',
    variant = 'blue',
    className,
    isLoading = false,
    disabled,
    children,
    ...otherProps
}): React.ReactElement => {
    return (
        <Component
            className={cx([
                'flex',
                'items-center',
                'px-4',
                'py-2',
                'bg-indi',
                'font-bold',
                'focus:outline-none',
                'disabled:opacity-50',
                variants[variant],
                className,
            ])}
            disabled={disabled || isLoading}
            {...otherProps}
        >
            <Loading isLoading={isLoading} />

            {! isLoading && (
                children
            )}
        </Component>
    );
};

export default Button;
