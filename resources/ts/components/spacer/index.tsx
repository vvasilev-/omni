/**
 * External dependencies
 */
import React from 'react';

interface Props {
    className?: string,
}

/**
 * @param  {Object} props
 * @param  {string} props.className
 * @param  {React.ReactNode} props.children
 * @return {React.ReactElement}
 */
export const Spacer: React.FunctionComponent<Props> = ({
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
