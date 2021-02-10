/**
 * External dependencies
 */
import React from 'react';
import { IconLoader } from '@tabler/icons';

export type LoadingProps = {
    isLoading?: boolean,
};

/**
 * @param  {Object} props
 * @param  {boolean} props.isLoading
 * @return {React.ReactElement}
 */
export const Loading: React.FunctionComponent<LoadingProps> = ({
    isLoading,
}) => {
    if (! isLoading) {
        return null;
    }

    return (
        <IconLoader
            className="animate-spin"
        />
    );
};


export default Loading;
