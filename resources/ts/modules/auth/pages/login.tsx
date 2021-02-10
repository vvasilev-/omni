/**
* External dependencies
*/
import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { useForm } from 'react-hook-form';

/**
 * Internal dependencies
 */
import FormLabel from '@/components/form-label';
import FormInput from '@/components/form-input';
import Button from '@/components/button';
import Spacer from '@/components/spacer';
import BackendFormError from '@/blocks/backend-form-error';

export type LoginFormData = {
    username: string,
    password: string,
};

/**
 * @return {React.ReactElement}
 */
export const Login: React.FunctionComponent = () => {
    const {
        register,
        formState,
        handleSubmit,
    } = useForm<LoginFormData>({
        defaultValues: {
            username: '',
            password: '',
        },
    });

    const onSubmit = async (data: LoginFormData) => {
        await Inertia.post(window.route('auth.login'), data);
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <form className="w-full max-w-sm bg-white shadow px-10 py-8" onSubmit={handleSubmit(onSubmit)}>
                <Spacer className="mb-6">
                    <FormLabel>
                        Потребителско име:
                    </FormLabel>

                    <FormInput
                        type="text"
                        name="username"
                        ref={register()}
                        autoFocus
                    />

                    <BackendFormError field="username" />
                </Spacer>

                <Spacer className="mb-6">
                    <FormLabel>
                        Парола:
                    </FormLabel>

                    <FormInput
                        type="password"
                        name="password"
                        ref={register()}
                    />

                    <BackendFormError field="password" />
                </Spacer>

                <Button type="submit" isLoading={formState.isSubmitting}>
                    Влез
                </Button>
            </form>
        </div>
    );
};

export default Login;
