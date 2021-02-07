/**
* External dependencies
*/
import React from 'react';

/**
 * Internal dependencies
 */
import FormLabel from '@/components/form-label';
import FormInput from '@/components/form-input';
import Button from '@/components/button';
import Spacer from '@/components/spacer';

/**
 * @return {React.ReactElement}
 */
export const Login: React.FunctionComponent = (): React.ReactElement => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-sm bg-white shadow px-10 py-8">
                <Spacer className="mb-6">
                    <FormLabel>
                        Потребителско име:
                    </FormLabel>

                    <FormInput type="text" autoFocus />
                </Spacer>

                <Spacer className="mb-6">
                    <FormLabel>
                        Парола:
                    </FormLabel>

                    <FormInput type="password" />
                </Spacer>

                <Button type="submit">
                    Влез
                </Button>
            </div>
        </div>
    );
};

export default Login;
