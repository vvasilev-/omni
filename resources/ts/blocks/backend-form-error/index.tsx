/**
 * External dependencies
 */
import React from 'react';
import { Page } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/inertia-react';

/**
 * Internal dependencies
 */
import FormError, { FormErrorProps } from '@/components/form-error';

export type BackendFormErrorProps = {
    field: string,
} & FormErrorProps;

export type ExtendedPage = Page & {
    props: {
        errors: Record<string, string>,
    },
};

/**
 * @param  {Object} props
 * @param  {string} props.field
 * @param  {...Object} props.otherProps
 * @return {React.ReactElement}
 */
export const BackendFormError: React.FunctionComponent<BackendFormErrorProps> = ({
    field,
    ...otherProps
}) => {
    const { props: { errors } } = usePage<ExtendedPage>();

    if (! errors[field]) {
        return null;
    }

    return (
        <FormError {...otherProps}>
            {errors[field]}
        </FormError>
    );
};

export default BackendFormError;
