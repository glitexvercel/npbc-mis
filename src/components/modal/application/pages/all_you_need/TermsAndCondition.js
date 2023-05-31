import React from "react";

const TermsAndCondition = ({ isChecked, handleCheck }) => {
  return (
    <div className={"flex-1"}>
      <h6 className={"c-medium font-bold text-c-blue px-3"}>
        Terms and Condition
      </h6>

      <div className={"px-3 border-l border-l-gray-400 my-4"}>
        <p className={"leading-6 text-sm"}>
          Students should read the policies and align their life, thought and
          deed to it. <span className={"text-c-red"}>Read the policies</span>
        </p>
        <br />

        <p className={"leading-6 text-sm"}>It covers the following:</p>
        <ul className={" flex flex-col "}>
          <button onClick={() => switchModal(1)}>
            <li
              className={
                "py-2 focus:outline-none text-sm font-semibold flex justify-between items-center"
              }
            >
              <span>Academic policies</span>
              {/*    icon*/}
              <svg
                width="16"
                height="15"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.31818 3.10668e-06C1.83597 3.10668e-06 1.37351 0.191561 1.03253 0.532536C0.691558 0.873511 0.5 1.33597 0.5 1.81818V18.1818C0.5 18.664 0.691558 19.1265 1.03253 19.4675C1.37351 19.8084 1.83597 20 2.31818 20H18.6818C19.164 20 19.6265 19.8084 19.9675 19.4675C20.3084 19.1265 20.5 18.664 20.5 18.1818V11.8182C20.5 11.5771 20.4042 11.3458 20.2337 11.1754C20.0632 11.0049 19.832 10.9091 19.5909 10.9091C19.3498 10.9091 19.1186 11.0049 18.9481 11.1754C18.7776 11.3458 18.6818 11.5771 18.6818 11.8182V18.1818H2.31818V1.81818H8.68182C8.92292 1.81818 9.15415 1.72241 9.32464 1.55192C9.49513 1.38143 9.59091 1.1502 9.59091 0.909094C9.59091 0.667988 9.49513 0.436757 9.32464 0.26627C9.15415 0.0957822 8.92292 3.10668e-06 8.68182 3.10668e-06H2.31818ZM20.2345 0.265457C20.4036 0.434938 20.499 0.664259 20.5 0.903639V6.36364C20.5 6.60474 20.4042 6.83597 20.2337 7.00646C20.0632 7.17695 19.832 7.27273 19.5909 7.27273C19.3498 7.27273 19.1186 7.17695 18.9481 7.00646C18.7776 6.83597 18.6818 6.60474 18.6818 6.36364V3.10364L9.32545 12.4618C9.24093 12.5463 9.14059 12.6134 9.03015 12.6591C8.91971 12.7049 8.80135 12.7284 8.68182 12.7284C8.56228 12.7284 8.44392 12.7049 8.33348 12.6591C8.22305 12.6134 8.1227 12.5463 8.03818 12.4618C7.95366 12.3773 7.88661 12.277 7.84087 12.1665C7.79512 12.0561 7.77158 11.9377 7.77158 11.8182C7.77158 11.6986 7.79512 11.5803 7.84087 11.4698C7.88661 11.3594 7.95366 11.2591 8.03818 11.1745L17.3964 1.81818H14.1364C13.8953 1.81818 13.664 1.72241 13.4935 1.55192C13.323 1.38143 13.2273 1.1502 13.2273 0.909094C13.2273 0.667988 13.323 0.436757 13.4935 0.26627C13.664 0.0957822 13.8953 3.10668e-06 14.1364 3.10668e-06H19.5909C19.7104 -0.000309546 19.8287 0.0229795 19.9392 0.0685337C20.0497 0.114088 20.15 0.18101 20.2345 0.265457Z"
                  fill="#A22531"
                />
              </svg>
            </li>
          </button>

          <button onClick={() => switchModal(1)}>
            <li
              className={
                "py-2 focus:outline-none text-sm font-semibold flex justify-between items-center"
              }
            >
              <span>Character and Discipline</span>
              {/*    icon*/}
              <svg
                width="16"
                height="15"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.31818 3.10668e-06C1.83597 3.10668e-06 1.37351 0.191561 1.03253 0.532536C0.691558 0.873511 0.5 1.33597 0.5 1.81818V18.1818C0.5 18.664 0.691558 19.1265 1.03253 19.4675C1.37351 19.8084 1.83597 20 2.31818 20H18.6818C19.164 20 19.6265 19.8084 19.9675 19.4675C20.3084 19.1265 20.5 18.664 20.5 18.1818V11.8182C20.5 11.5771 20.4042 11.3458 20.2337 11.1754C20.0632 11.0049 19.832 10.9091 19.5909 10.9091C19.3498 10.9091 19.1186 11.0049 18.9481 11.1754C18.7776 11.3458 18.6818 11.5771 18.6818 11.8182V18.1818H2.31818V1.81818H8.68182C8.92292 1.81818 9.15415 1.72241 9.32464 1.55192C9.49513 1.38143 9.59091 1.1502 9.59091 0.909094C9.59091 0.667988 9.49513 0.436757 9.32464 0.26627C9.15415 0.0957822 8.92292 3.10668e-06 8.68182 3.10668e-06H2.31818ZM20.2345 0.265457C20.4036 0.434938 20.499 0.664259 20.5 0.903639V6.36364C20.5 6.60474 20.4042 6.83597 20.2337 7.00646C20.0632 7.17695 19.832 7.27273 19.5909 7.27273C19.3498 7.27273 19.1186 7.17695 18.9481 7.00646C18.7776 6.83597 18.6818 6.60474 18.6818 6.36364V3.10364L9.32545 12.4618C9.24093 12.5463 9.14059 12.6134 9.03015 12.6591C8.91971 12.7049 8.80135 12.7284 8.68182 12.7284C8.56228 12.7284 8.44392 12.7049 8.33348 12.6591C8.22305 12.6134 8.1227 12.5463 8.03818 12.4618C7.95366 12.3773 7.88661 12.277 7.84087 12.1665C7.79512 12.0561 7.77158 11.9377 7.77158 11.8182C7.77158 11.6986 7.79512 11.5803 7.84087 11.4698C7.88661 11.3594 7.95366 11.2591 8.03818 11.1745L17.3964 1.81818H14.1364C13.8953 1.81818 13.664 1.72241 13.4935 1.55192C13.323 1.38143 13.2273 1.1502 13.2273 0.909094C13.2273 0.667988 13.323 0.436757 13.4935 0.26627C13.664 0.0957822 13.8953 3.10668e-06 14.1364 3.10668e-06H19.5909C19.7104 -0.000309546 19.8287 0.0229795 19.9392 0.0685337C20.0497 0.114088 20.15 0.18101 20.2345 0.265457Z"
                  fill="#A22531"
                />
              </svg>
            </li>
          </button>

          <button onClick={() => switchModal(1)}>
            <li
              className={
                "py-2 focus:outline-none text-sm font-semibold flex justify-between items-center"
              }
            >
              <span>Financial Policies</span>
              {/*    icon*/}
              <svg
                width="16"
                height="15"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.31818 3.10668e-06C1.83597 3.10668e-06 1.37351 0.191561 1.03253 0.532536C0.691558 0.873511 0.5 1.33597 0.5 1.81818V18.1818C0.5 18.664 0.691558 19.1265 1.03253 19.4675C1.37351 19.8084 1.83597 20 2.31818 20H18.6818C19.164 20 19.6265 19.8084 19.9675 19.4675C20.3084 19.1265 20.5 18.664 20.5 18.1818V11.8182C20.5 11.5771 20.4042 11.3458 20.2337 11.1754C20.0632 11.0049 19.832 10.9091 19.5909 10.9091C19.3498 10.9091 19.1186 11.0049 18.9481 11.1754C18.7776 11.3458 18.6818 11.5771 18.6818 11.8182V18.1818H2.31818V1.81818H8.68182C8.92292 1.81818 9.15415 1.72241 9.32464 1.55192C9.49513 1.38143 9.59091 1.1502 9.59091 0.909094C9.59091 0.667988 9.49513 0.436757 9.32464 0.26627C9.15415 0.0957822 8.92292 3.10668e-06 8.68182 3.10668e-06H2.31818ZM20.2345 0.265457C20.4036 0.434938 20.499 0.664259 20.5 0.903639V6.36364C20.5 6.60474 20.4042 6.83597 20.2337 7.00646C20.0632 7.17695 19.832 7.27273 19.5909 7.27273C19.3498 7.27273 19.1186 7.17695 18.9481 7.00646C18.7776 6.83597 18.6818 6.60474 18.6818 6.36364V3.10364L9.32545 12.4618C9.24093 12.5463 9.14059 12.6134 9.03015 12.6591C8.91971 12.7049 8.80135 12.7284 8.68182 12.7284C8.56228 12.7284 8.44392 12.7049 8.33348 12.6591C8.22305 12.6134 8.1227 12.5463 8.03818 12.4618C7.95366 12.3773 7.88661 12.277 7.84087 12.1665C7.79512 12.0561 7.77158 11.9377 7.77158 11.8182C7.77158 11.6986 7.79512 11.5803 7.84087 11.4698C7.88661 11.3594 7.95366 11.2591 8.03818 11.1745L17.3964 1.81818H14.1364C13.8953 1.81818 13.664 1.72241 13.4935 1.55192C13.323 1.38143 13.2273 1.1502 13.2273 0.909094C13.2273 0.667988 13.323 0.436757 13.4935 0.26627C13.664 0.0957822 13.8953 3.10668e-06 14.1364 3.10668e-06H19.5909C19.7104 -0.000309546 19.8287 0.0229795 19.9392 0.0685337C20.0497 0.114088 20.15 0.18101 20.2345 0.265457Z"
                  fill="#A22531"
                />
              </svg>
            </li>
          </button>

          <button onClick={() => switchModal(1)}>
            <li
              className={
                "py-2 focus:outline-none text-sm font-semibold flex justify-between items-center"
              }
            >
              <span>Health and Safety</span>
              {/*    icon*/}
              <svg
                width="16"
                height="15"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.31818 3.10668e-06C1.83597 3.10668e-06 1.37351 0.191561 1.03253 0.532536C0.691558 0.873511 0.5 1.33597 0.5 1.81818V18.1818C0.5 18.664 0.691558 19.1265 1.03253 19.4675C1.37351 19.8084 1.83597 20 2.31818 20H18.6818C19.164 20 19.6265 19.8084 19.9675 19.4675C20.3084 19.1265 20.5 18.664 20.5 18.1818V11.8182C20.5 11.5771 20.4042 11.3458 20.2337 11.1754C20.0632 11.0049 19.832 10.9091 19.5909 10.9091C19.3498 10.9091 19.1186 11.0049 18.9481 11.1754C18.7776 11.3458 18.6818 11.5771 18.6818 11.8182V18.1818H2.31818V1.81818H8.68182C8.92292 1.81818 9.15415 1.72241 9.32464 1.55192C9.49513 1.38143 9.59091 1.1502 9.59091 0.909094C9.59091 0.667988 9.49513 0.436757 9.32464 0.26627C9.15415 0.0957822 8.92292 3.10668e-06 8.68182 3.10668e-06H2.31818ZM20.2345 0.265457C20.4036 0.434938 20.499 0.664259 20.5 0.903639V6.36364C20.5 6.60474 20.4042 6.83597 20.2337 7.00646C20.0632 7.17695 19.832 7.27273 19.5909 7.27273C19.3498 7.27273 19.1186 7.17695 18.9481 7.00646C18.7776 6.83597 18.6818 6.60474 18.6818 6.36364V3.10364L9.32545 12.4618C9.24093 12.5463 9.14059 12.6134 9.03015 12.6591C8.91971 12.7049 8.80135 12.7284 8.68182 12.7284C8.56228 12.7284 8.44392 12.7049 8.33348 12.6591C8.22305 12.6134 8.1227 12.5463 8.03818 12.4618C7.95366 12.3773 7.88661 12.277 7.84087 12.1665C7.79512 12.0561 7.77158 11.9377 7.77158 11.8182C7.77158 11.6986 7.79512 11.5803 7.84087 11.4698C7.88661 11.3594 7.95366 11.2591 8.03818 11.1745L17.3964 1.81818H14.1364C13.8953 1.81818 13.664 1.72241 13.4935 1.55192C13.323 1.38143 13.2273 1.1502 13.2273 0.909094C13.2273 0.667988 13.323 0.436757 13.4935 0.26627C13.664 0.0957822 13.8953 3.10668e-06 14.1364 3.10668e-06H19.5909C19.7104 -0.000309546 19.8287 0.0229795 19.9392 0.0685337C20.0497 0.114088 20.15 0.18101 20.2345 0.265457Z"
                  fill="#A22531"
                />
              </svg>
            </li>
          </button>

          <button onClick={() => switchModal(1)}>
            <li
              className={
                "py-2 focus:outline-none text-sm font-semibold flex justify-between items-center"
              }
            >
              <span>Use of college Resources</span>
              {/*    icon*/}
              <svg
                width="16"
                height="15"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.31818 3.10668e-06C1.83597 3.10668e-06 1.37351 0.191561 1.03253 0.532536C0.691558 0.873511 0.5 1.33597 0.5 1.81818V18.1818C0.5 18.664 0.691558 19.1265 1.03253 19.4675C1.37351 19.8084 1.83597 20 2.31818 20H18.6818C19.164 20 19.6265 19.8084 19.9675 19.4675C20.3084 19.1265 20.5 18.664 20.5 18.1818V11.8182C20.5 11.5771 20.4042 11.3458 20.2337 11.1754C20.0632 11.0049 19.832 10.9091 19.5909 10.9091C19.3498 10.9091 19.1186 11.0049 18.9481 11.1754C18.7776 11.3458 18.6818 11.5771 18.6818 11.8182V18.1818H2.31818V1.81818H8.68182C8.92292 1.81818 9.15415 1.72241 9.32464 1.55192C9.49513 1.38143 9.59091 1.1502 9.59091 0.909094C9.59091 0.667988 9.49513 0.436757 9.32464 0.26627C9.15415 0.0957822 8.92292 3.10668e-06 8.68182 3.10668e-06H2.31818ZM20.2345 0.265457C20.4036 0.434938 20.499 0.664259 20.5 0.903639V6.36364C20.5 6.60474 20.4042 6.83597 20.2337 7.00646C20.0632 7.17695 19.832 7.27273 19.5909 7.27273C19.3498 7.27273 19.1186 7.17695 18.9481 7.00646C18.7776 6.83597 18.6818 6.60474 18.6818 6.36364V3.10364L9.32545 12.4618C9.24093 12.5463 9.14059 12.6134 9.03015 12.6591C8.91971 12.7049 8.80135 12.7284 8.68182 12.7284C8.56228 12.7284 8.44392 12.7049 8.33348 12.6591C8.22305 12.6134 8.1227 12.5463 8.03818 12.4618C7.95366 12.3773 7.88661 12.277 7.84087 12.1665C7.79512 12.0561 7.77158 11.9377 7.77158 11.8182C7.77158 11.6986 7.79512 11.5803 7.84087 11.4698C7.88661 11.3594 7.95366 11.2591 8.03818 11.1745L17.3964 1.81818H14.1364C13.8953 1.81818 13.664 1.72241 13.4935 1.55192C13.323 1.38143 13.2273 1.1502 13.2273 0.909094C13.2273 0.667988 13.323 0.436757 13.4935 0.26627C13.664 0.0957822 13.8953 3.10668e-06 14.1364 3.10668e-06H19.5909C19.7104 -0.000309546 19.8287 0.0229795 19.9392 0.0685337C20.0497 0.114088 20.15 0.18101 20.2345 0.265457Z"
                  fill="#A22531"
                />
              </svg>
            </li>
          </button>
        </ul>

        <div className={"flex gap-5"}>
          <input
            type={"checkbox"}
            className={""}
            checked={isChecked}
            onChange={(e) => handleCheck(e.target.checked)}
          />
          <p className={"leading-6 text-sm"}>
            I have read and I agree to the policies
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndCondition;
