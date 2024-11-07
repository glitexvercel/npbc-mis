import React from "react";

import { useRouter } from "next/router";
import { toast } from "sonner";
import { ControlledLabelledInput } from "../../../components/general/LabelledInput";
import { useForm } from "react-hook-form";
import { FormLayout } from "../../../components";
import { SubmitButton } from "../../../components/e-learning/common";
import { useMutation } from "@tanstack/react-query";
import { changePasswordService, IChangePassword } from "../../../services/auth";
import { Spinner } from "react-bootstrap";

const ChangePassword = () => {
  const router = useRouter();
  const { handleSubmit, control } = useForm();

  // change password mutation
  const changePasswordMutation = useMutation({
    mutationKey: ["change-password"],
    mutationFn: (data: IChangePassword) => changePasswordService(data),
    onSuccess: async () => {
      toast.success("Password updated successfully");
      await router.push("/portal/auth/login");
    },
  });

  const handleProceed = (data: IChangePassword) => {
    changePasswordMutation.mutate(data);
  };

  // toast a message to tell use to reset password on mount
  React.useEffect(() => {
    toast.info(
      "Kindly change your password. Set old password as the password sent to your email"
    );
  }, []);

  return (
    <FormLayout onSubmit={handleSubmit(handleProceed)} formClassName={"gap-3"}>
      <h4 className={"text-xl md:text-2xl font-semibold text-c-blue "}>
        Change your password
      </h4>
      <p className={"text-c-blue text-sm my-1 mb-3"}>
        Kindly change your password. Set old password as the password sent to
        your email
      </p>

      <div className={"space-y-5"}>
        <ControlledLabelledInput
          name={"old_password"}
          control={control}
          required={true}
          labelClassName={"px-1"}
          containerClassName={"gap-2.5"}
          title={"Old Password"}
          inputClassName={"rounded-xl h-12"}
          type={"password"}
          placeholder={"Enter old password"}
        />

        <ControlledLabelledInput
          name={"password"}
          control={control}
          required={true}
          labelClassName={"px-1"}
          containerClassName={"gap-2.5"}
          title={"New Password"}
          inputClassName={"rounded-xl h-12"}
          type={"password"}
          placeholder={"Enter new password"}
        />

        <ControlledLabelledInput
          name={"password_confirmation"}
          control={control}
          required={true}
          labelClassName={"px-1"}
          containerClassName={"gap-2.5"}
          title={"Confirm New Password"}
          inputClassName={"rounded-xl h-12"}
          type={"password"}
          placeholder={"Confirm new password"}
        />
      </div>

      <div className={"w-full h-8"} />

      <SubmitButton
        type={"submit"}
        className={"bg-c-red text-white rounded-xl h-12"}
        disabled={changePasswordMutation.isPending}
        isLoading={changePasswordMutation.isPending}
      >
        {changePasswordMutation?.isPending
          ? "Updating Password..."
          : "Update Password"}
      </SubmitButton>
    </FormLayout>
  );
};

export default ChangePassword;
