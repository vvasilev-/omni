/**
 * External dependencies
 */
import React from 'react';
import { IconDashboard } from '@tabler/icons';

/**
 * Internal dependencies
 */
import SidebarLink from '@/blocks/layout/sidebar-link';

/**
 * @return {React.ReactElement}
 */
export const Sidebar: React.FunctionComponent = () => {
    return (
        <aside className="col-span-2 bg-white shadow">
            <nav>
                <SidebarLink
                    text="Табло"
                    icon={<IconDashboard />}
                    href={window.route('dashboard')}
                    active={window.route().current('dashboard')}
                />
            </nav>
        </aside>
    );
};

export default Sidebar;
