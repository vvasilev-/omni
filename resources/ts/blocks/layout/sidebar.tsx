/**
 * External dependencies
 */
import React from 'react';
import { IconDashboard, IconLogout } from '@tabler/icons';

/**
 * Internal dependencies
 */
import SidebarLink from '@/blocks/layout/sidebar-link';

/**
 * @return {React.ReactElement}
 */
export const Sidebar: React.FunctionComponent = () => {
    return (
        <aside className="col-span-2 relative bg-white shadow py-4">
            <nav>
                <SidebarLink
                    text="Табло"
                    icon={<IconDashboard />}
                    href={window.route('dashboard')}
                    active={window.route().current('dashboard')}
                />
            </nav>

            <nav className="absolute bottom-0 w-full mb-4">
                <SidebarLink
                    as="button"
                    text="Изход"
                    method="post"
                    icon={<IconLogout />}
                    href={window.route('auth.logout')}
                />
            </nav>
        </aside>
    );
};

export default Sidebar;
