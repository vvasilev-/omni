/**
 * External dependencies
 */
import React from 'react';
import cx from 'classnames';

export type SidebarLinkProps = {
    icon?: React.ReactNode,
    text?: string,
    active?: boolean,
} & React.AnchorHTMLAttributes<any>;

/**
 * @param  {Object} props
 * @param  {React.ReactNode} props.icon
 * @param  {string} props.text
 * @param  {boolean} props.active
 * @param  {...Object} props.otherProps
 * @return {React.ReactElement}
 */
export const SidebarLink: React.FunctionComponent<SidebarLinkProps> = ({
    icon,
    text,
    active = false,
    ...otherProps
}) => {
    return (
        <a
            className={cx(
                'flex items-center px-8 py-2 hover:bg-blue-100 hover:text-blue-900 hover:border-r-4 hover:border-blue-900',
                { 'bg-blue-100 text-blue-900 border-r-4 border-blue-900': active }
            )}
            {...otherProps}
        >
            {icon}

            {text && (
                <span className="ml-4 font-medium">{text}</span>
            )}
        </a>
    );
};

export default SidebarLink;
