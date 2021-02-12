/**
 * External dependencies
 */
import React from 'react';

/**
 * @return {React.ReactElement}
 */
export const Content: React.FunctionComponent = ({
    children,
}) => {
    return (
        <main className="col-span-10">
            {children}
        </main>
    );
};

export default Content;
