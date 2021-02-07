/**
 * External dependencies
 */
import React from 'react';

/**
 * @param  {Object} props
 * @param  {string} props.className
 * @param  {React.ReactNode} props.children
 * @return {React.ReactElement}
 */
export const Spacer: React.FunctionComponent<React.HTMLAttributes<any>> = ({
    className,
    children,
}): React.ReactElement => {
    return (
        <div className={className}>
            {children}
        </div>
    );
};

export default Spacer;
