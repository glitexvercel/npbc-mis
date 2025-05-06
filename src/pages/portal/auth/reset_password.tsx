import React from 'react';

import {toast} from 'sonner';
import {FormLayout} from '@/components';
import {ControlledLabelledInput} from '../../../components/general/LabelledInput';
import {Button} from '@/components/ui/button';
import {useForm} from 'react-hook-form';
import {useMutation} from '@tanstack/react-query';
import {useRouter} from 'next/router';
import {forgotPasswordService, IForgotPassword} from '@/services/auth';
import {SubmitButton} from '@/components/e-learning/common';

const ResetPassword = () => {
	const router = useRouter();
	const {handleSubmit, control} = useForm();

	// reset password mutation
	const resetPasswordMutation = useMutation({
		mutationKey: ['forgot-password'],
		mutationFn: (data: IForgotPassword) => forgotPasswordService(data),
		onSuccess: async res => {
			toast.success(res?.data.message);
			await router.push('/portal/auth/login');
		},
		onError: error => {
			// @ts-ignore
			toast.error(error.response?.data?.message || 'An error occurred');
		},
	});

	const handleProceed = (data: IForgotPassword) => {
		resetPasswordMutation.mutate(data);
	};
	return (
    <FormLayout
      onSubmit={handleSubmit(handleProceed)}
      title="Forgot Password"
      formClassName={'gap-3'}>
			<h4 className={'text-xl md:text-2xl font-semibold text-c-blue '}>
				Reset your password
			</h4>
			<p className={'text-c-blue text-sm my-1 mb-3'}>
				To reset your password, enter your email address.
			</p>
			<ControlledLabelledInput
				name={'email'}
				control={control}
				labelClassName={'px-1'}
				containerClassName={'gap-2.5'}
				title={'Email Address'}
				inputClassName={'rounded-xl h-12'}
				placeholder={'Enter your email addres'}
			/>
			<div className={'w-full h-24'} />
			<SubmitButton
				type={'submit'}
				className={'bg-c-red text-white rounded-xl h-12'}
				disabled={resetPasswordMutation.isPending}
				isLoading={resetPasswordMutation.isPending}>
				{resetPasswordMutation?.isPending ? 'Sending...' : 'Proceed'}
			</SubmitButton>
		</FormLayout>
	);
};

export default ResetPassword;
