/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import Sidebar from '@/blocks/layout/sidebar';
import Content from '@/blocks/layout/content';

/**
 * @param  {Object} props
 * @param  {React.ReactNode} props.children
 * @return {React.ReactElement}
 */
export const Layout: React.FunctionComponent = ({
    children,
}) => {
    return (
        <div className="grid grid-cols-12 min-h-screen">
            <Sidebar />

            <Content>
                {children}
            </Content>
        </div>
    );
};

export default Layout;
