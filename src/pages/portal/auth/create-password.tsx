import React from 'react';
import {FormLayout} from '@/components';
import { toast } from "sonner";
import {useRouter} from 'next/router';
import { ControlledLabelledInput } from '@/components/general/LabelledInput';
import { useForm } from 'react-hook-form';
import { SubmitButton } from '@/components/e-learning/common';
import { useMutation } from '@tanstack/react-query';
import { IPassword, IResetPassword, resetPasswordService } from '@/services/auth';



const CreatePassword = () => {
  const router = useRouter();
  const { token, email } = router.query;
  const { handleSubmit, control } = useForm();

  // reset password mutation
  const reserPasswordMutation = useMutation({
    mutationKey: ["reset-password"],
    mutationFn: (data: IResetPassword) => resetPasswordService(data),
    onSuccess: async () => {
      toast.success("Password updated successfully");
      await router.push("/portal/auth/login"); 
    },
    onError: (error) => {
      // @ts-ignore
      toast.error(error.response?.data?.message || "An error occurred");
    },
  });

  const handleProceed = (data: IPassword) => {
    if (data?.password === data?.password_confirmation) {
      const formData: IResetPassword = {
        token: token,
        email: email,
        password: data?.password,
        password_confirmation: data?.password_confirmation
      }
      reserPasswordMutation.mutate(formData);
    } else toast.error("Please! Confirm your password.");
  };

	return (
    <FormLayout
      onSubmit={handleSubmit(handleProceed)}
      title="Reset Password"
      formClassName={'gap-4'}>
			<h4 className={'text-xl md:text-2xl font-semibold text-c-blue'}>
				Create a Password
			</h4>

			<p className={'text-c-blue text-sm my-1 mb-2'}>Enter your new password.</p>

			<div className={'space-y-5'}>
				<ControlledLabelledInput
					name={'password'}
					control={control}
					required={true}
					labelClassName={'px-1'}
					containerClassName={'gap-2.5'}
					title={'New Password'}
					inputClassName={'rounded-xl h-12'}
					type={'password'}
					placeholder={'Enter new password'}
				/>

				<ControlledLabelledInput
					name={'password_confirmation'}
					control={control}
					required={true}
					labelClassName={'px-1'}
					containerClassName={'gap-2.5'}
					title={'Confirm New Password'}
					inputClassName={'rounded-xl h-12'}
					type={'password'}
					placeholder={'Confirm new password'}
				/>
			</div>

			<div className={'w-full h-24'} />

			<SubmitButton
        type={"submit"}
        className={"bg-c-red text-white rounded-xl h-12"}
        disabled={reserPasswordMutation.isPending}
        isLoading={reserPasswordMutation.isPending}
      >
        {reserPasswordMutation?.isPending
          ? "Updating Password..."
          : "Reset Password"}
      </SubmitButton>
		</FormLayout>
	);
};

export default CreatePassword;
