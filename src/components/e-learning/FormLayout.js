import React from "react";
import Image from "next/image";

import Layout from "@/layout";

const FormLayout = ({ title = "", children, formClassName = "", ...rest }) => {
  return (
    <Layout
      hideApplication={true}
      showNavigation={false}>
      {/*hero section */}
      <div className={"relative h-[40vh] bg-white"}>
        <Image
          src={"/images/e-learning/students.jpeg"}
          alt={"student-portal"}
          className={"h-full w-full object-cover"}
          width={1000}
          height={950}
        />

        <div
          className={
            "absolute inset-0 bg-[#000000B0] flex flex-col justify-center"
          }
        >
          <div className={"max-w-[1300px] w-full mx-auto"}>
            <h3
              className={
                "font-bold text-white text-2xl md:text-3xl lg:text-4xl"
              }
            >
              {title || "Student Portal"}
            </h3>

            <p className={"mt-2 text-sm w-full md:w-1/3 lg:w-1/4 text-white"}>
              Sign in to manage your account and view updates and information
              communicated by the administration.
              <br /> <br />
              The default password is your registration. Change the default
              password to a more secure and private password.
            </p>
          </div>
        </div>
      </div>

      {/*  form section  */}
      <div className={"h-60 relative max-w-[1300px] w-full mx-auto"}>
        <form
          className={`absolute right-0 bottom-10 z-10 bg-white shadow p-3 sm:p-5 lg:p-10 md:min-w-[600px] rounded-2xl flex flex-col ${formClassName}`}
          {...rest}
        >
          {children}
        </form>
      </div>
    </Layout>
  );
};

export default FormLayout;
