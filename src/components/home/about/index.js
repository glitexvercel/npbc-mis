/* eslint-disable @next/next/no-img-element */
import Life from './Life'
import SvgItem from './SvgItem'

const About = () => {
    return (
        <div className='bg-c-blue p-14 flex flex-col items-center text-white'>
            <div className="mx-auto w-11/12 flex">

                {/* Logo */}
                <div className="flex flex-col items-center gap-6 flex-[0.7]" data-aos="fade-right">
                    <img src="/images/layout/logo-2.png" alt='logo' className='h-56 ' />

                    <h4 className="c-h5 text-center text-white">
                        Nairobi Pentecostal <br /> Bible College
                    </h4>
                </div>
                {/* Description */}
                <div className="flex flex-col gap-16 flex-1">
                    <p className="c-xl text-[22px] text-[#FFFFFFB2] leading-8" data-aos="fade-left">We desire to be the training centre of choice among our target denominations and churches by providing the best training skills that are relevant to society.</p>

                    <div className="flex flex-col gap-3" data-aos="fade-left">
                        <h5 className="c-xl font-semibold text-white capitalize">We are more than a bible college</h5>

                        <p className='text-white'>We exist to bring maturity to church and transformation to society through equipped leadership based on Christian values and principles by training people in their area of calling</p>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h5 className="c-xl font-semibold text-white capitalize" data-aos="fade-up">4 Reasons you&apos;ll love NPBC</h5>

                        <div className="flex w-full justify-between" data-aos="fade-up">


                            <SvgItem title={"Affordable"}>
                                <AffordableSvg />
                            </SvgItem>

                            <SvgItem title={"Accessible"}>
                                <AccessibleSvg />

                            </SvgItem>

                            <SvgItem title={"Accredited"}>
                                <AccreditedSvg />
                            </SvgItem>

                            <SvgItem title={<>Relevant <br /> to Ministry</>}>
                                <RelevantSvg />

                            </SvgItem>
                        </div>
                    </div>


                </div>
            </div>

            {/* Life At NPBC */}
            <Life />
        </div>
    )
}

export default About

const AffordableSvg = () => (
    <svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_120_453)">
            <path d="M33.1167 17.45C29.5983 16.7625 25.9584 17.0625 22.6 18.3167C22.437 18.3812 22.2882 18.4773 22.1623 18.5993C22.0363 18.7214 21.9357 18.867 21.866 19.028C21.7254 19.3531 21.7196 19.7207 21.85 20.05C21.9804 20.3793 22.2363 20.6433 22.5614 20.784C22.8864 20.9246 23.254 20.9304 23.5834 20.8C26.475 19.7067 29.6116 19.4299 32.65 20C32.8281 20.0469 33.014 20.0563 33.196 20.0278C33.3779 19.9993 33.552 19.9333 33.7072 19.8342C33.8624 19.7351 33.9954 19.6048 34.0977 19.4517C34.2001 19.2986 34.2697 19.126 34.302 18.9447C34.3343 18.7634 34.3288 18.5773 34.2856 18.3983C34.2425 18.2192 34.1627 18.0511 34.0514 17.9044C33.94 17.7577 33.7995 17.6356 33.6386 17.546C33.4777 17.4563 33.3 17.4009 33.1167 17.3833V17.45Z" fill="#092A59" />
            <path d="M42.55 30.1166C43.8018 30.1166 44.8167 29.1018 44.8167 27.8499C44.8167 26.5981 43.8018 25.5833 42.55 25.5833C41.2981 25.5833 40.2833 26.5981 40.2833 27.8499C40.2833 29.1018 41.2981 30.1166 42.55 30.1166Z" fill="#092A59" />
            <path d="M59.4333 31.05C59.2789 30.8215 59.0701 30.6348 58.8258 30.5068C58.5814 30.3788 58.3091 30.3135 58.0333 30.3167C56.6868 30.1297 55.4514 29.4677 54.55 28.45C52.8155 26.5541 51.3414 24.4354 50.1667 22.15L54.9667 14.65C55.2579 14.2154 55.4364 13.715 55.4858 13.1942C55.5353 12.6733 55.4542 12.1484 55.25 11.6667C55.0454 11.2284 54.7363 10.8472 54.3497 10.5566C53.9632 10.266 53.5111 10.0748 53.0333 10C49.9809 9.58863 46.8741 10.0209 44.05 11.25C42.4315 11.9629 40.9085 12.8756 39.5167 13.9667C36.7906 12.7443 33.8878 11.9623 30.9167 11.65C19.1 10.5 8.3 18.1667 6.91666 28.3333C6.37756 28.0908 5.89473 27.7389 5.49879 27.2999C5.10286 26.861 4.80247 26.3445 4.61666 25.7833C4.49783 25.3985 4.45725 24.9938 4.49733 24.5931C4.5374 24.1923 4.65732 23.8037 4.85 23.45C5.02279 23.1531 5.26974 22.9061 5.56666 22.7333C5.76912 22.6108 5.94545 22.4495 6.08559 22.2588C6.22573 22.0681 6.32693 21.8516 6.38342 21.6218C6.43991 21.392 6.45058 21.1533 6.41482 20.9193C6.37905 20.6854 6.29756 20.4608 6.175 20.2583C6.05243 20.0559 5.89119 19.8795 5.70047 19.7394C5.50976 19.5993 5.29331 19.4981 5.06349 19.4416C4.83366 19.3851 4.59496 19.3744 4.36101 19.4102C4.12706 19.4459 3.90245 19.5274 3.7 19.65C2.8932 20.1452 2.2274 20.8397 1.76666 21.6667C1.3383 22.4428 1.06902 23.2965 0.974585 24.1779C0.880147 25.0594 0.962445 25.9508 1.21666 26.8C1.52958 27.8291 2.04849 28.7838 2.74185 29.6061C3.43522 30.4284 4.28856 31.1011 5.25 31.5833L6.78333 32.35C6.97489 36.4071 8.00785 40.3801 9.81666 44.0167L10.1 44.65C11.5456 47.7073 13.3893 50.5598 15.5833 53.1333C15.7395 53.3111 15.9318 53.4536 16.1473 53.5513C16.3628 53.649 16.5967 53.6997 16.8333 53.7H24.3667C24.6396 53.6986 24.9081 53.6303 25.1484 53.5008C25.3888 53.3714 25.5937 53.185 25.7451 52.9579C25.8965 52.7307 25.9898 52.4699 26.0169 52.1982C26.0439 51.9266 26.0037 51.6525 25.9 51.4L25.25 49.9L27.2167 50.1167C29.4335 50.3358 31.6665 50.3358 33.8833 50.1167C34.5 51.1167 35.1667 52.1167 35.9 53.1C36.0535 53.3101 36.254 53.4813 36.4855 53.5999C36.7171 53.7186 36.9732 53.7814 37.2333 53.7833H44.4667C44.7418 53.7831 45.0125 53.7148 45.2548 53.5845C45.497 53.4542 45.7033 53.2659 45.8551 53.0365C46.007 52.8072 46.0996 52.5437 46.1249 52.2698C46.1502 51.9959 46.1073 51.72 46 51.4667C45.7167 50.8 45.4333 50.0833 45.2167 49.4667C44.9167 48.5833 44.6833 47.8 44.5 47.05C46.3406 46.0563 48.0299 44.8048 49.5167 43.3333C51.1773 43.5341 52.856 43.5341 54.5167 43.3333C54.8048 43.2898 55.0764 43.1714 55.3045 42.9901C55.5326 42.8088 55.7092 42.5708 55.8167 42.3L59.5833 32.6167C59.6893 32.3634 59.7311 32.0878 59.7049 31.8145C59.6787 31.5412 59.5854 31.2786 59.4333 31.05ZM53.1333 40.1167C51.8249 40.1911 50.5124 40.1297 49.2167 39.9333C47.7412 39.6841 46.3167 39.1942 45 38.4833C44.61 38.29 44.1599 38.2568 43.7459 38.391C43.3318 38.5252 42.9866 38.816 42.7842 39.2013C42.5817 39.5866 42.5381 40.0358 42.6625 40.4529C42.7869 40.87 43.0695 41.2219 43.45 41.4333C44.1465 41.7985 44.8645 42.1214 45.6 42.4C44.6912 43.176 43.6821 43.8262 42.6 44.3333L40.8333 45.1333C40.8333 45.1333 41.65 48.7833 42.2 50.4H38.2333C37.8333 49.8333 35.8167 46.4667 35.8167 46.4667L34.7 46.6167C32.3544 46.9549 29.9776 47.022 27.6167 46.8167C26.5167 46.7167 24.6833 46.4833 23.25 46.2333L20.6667 45.7833C20.6667 45.7833 21.7167 49.8333 21.9167 50.35H17.6167C15.8602 48.1993 14.3715 45.8431 13.1833 43.3333L12.8833 42.6833C10.7178 38.5149 9.80335 33.8094 10.25 29.1333C11.15 20.4833 20.45 13.95 30.5667 14.9C33.5096 15.2299 36.3737 16.0643 39.0333 17.3667L40.0667 17.85L40.9 17.0667C42.1978 15.907 43.6646 14.9516 45.25 14.2333C47.3476 13.3236 49.6389 12.9512 51.9167 13.15L46.2833 21.9667L46.7 22.8C48.1556 25.7319 50.0123 28.4468 52.2167 30.8667C53.2405 31.8673 54.4528 32.6548 55.7833 33.1833L53.1333 40.1167Z" fill="#092A59" />
        </g>
        <defs>
            <clipPath id="clip0_120_453">
                <rect width="60" height="60" fill="white" transform="translate(0.25)" />
            </clipPath>
        </defs>
    </svg>
)

const AccessibleSvg = () => (
    <svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M43.25 2.5H8.25C6.92392 2.5 5.65215 3.02678 4.71447 3.96447C3.77678 4.90215 3.25 6.17392 3.25 7.5V30H8.25V7.5H43.25V2.5Z" fill="#092A59" />
        <path d="M53.25 12.5H18.25C16.9239 12.5 15.6521 13.0268 14.7145 13.9645C13.7768 14.9021 13.25 16.1739 13.25 17.5V42.5C13.25 43.8261 13.7768 45.0979 14.7145 46.0355C15.6521 46.9732 16.9239 47.5 18.25 47.5H32.075V51.325H28.25V55H43.25V51.3H39.45V47.5H53.25C54.5761 47.5 55.8479 46.9732 56.7855 46.0355C57.7232 45.0979 58.25 43.8261 58.25 42.5V17.5C58.25 16.1739 57.7232 14.9021 56.7855 13.9645C55.8479 13.0268 54.5761 12.5 53.25 12.5ZM53.25 42.5H18.25V17.5H53.25V42.5Z" fill="#092A59" />
    </svg>

)

const AccreditedSvg = () => (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.25 31.1063L21.3937 26.25L18.75 28.8938L26.25 36.3938L41.25 21.3937L38.6063 18.75L26.25 31.1063Z" fill="#092A59" />
        <path d="M30 56.25L18.42 50.0756C15.1188 48.3193 12.3581 45.6972 10.4342 42.4907C8.5104 39.2842 7.49604 35.6144 7.50001 31.875V7.5C7.501 6.50574 7.89641 5.55249 8.59946 4.84945C9.3025 4.1464 10.2558 3.75099 11.25 3.75H48.75C49.7443 3.75099 50.6975 4.1464 51.4006 4.84945C52.1036 5.55249 52.499 6.50574 52.5 7.5V31.875C52.504 35.6144 51.4896 39.2842 49.5658 42.4907C47.6419 45.6972 44.8813 48.3193 41.58 50.0756L30 56.25ZM11.25 7.5V31.875C11.2469 34.9346 12.0771 37.9373 13.6514 40.5608C15.2258 43.1843 17.4849 45.3296 20.1863 46.7663L30 51.9994L39.8138 46.7681C42.5154 45.3313 44.7747 43.1858 46.3491 40.5619C47.9234 37.9381 48.7535 34.935 48.75 31.875V7.5H11.25Z" fill="#092A59" />
    </svg>


)

const RelevantSvg = () => (
    <svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M39.94 22.0825L32 16.8288V13.75H35.75V11.25H32V7.5H29.5V11.25H25.75V13.75H29.5V16.8288L21.56 22.0825C21.3878 22.1965 21.2465 22.3514 21.1488 22.5333C21.0511 22.7152 21 22.9185 21 23.125V28.5963L9.05 33.2087C8.81448 33.2996 8.612 33.4597 8.46921 33.6679C8.32641 33.876 8.24999 34.1226 8.25 34.375V52.5H10.75V35.2325L22.7 30.62C22.9355 30.5291 23.138 30.3691 23.2808 30.1609C23.4236 29.9527 23.5 29.7062 23.5 29.4538V23.7963L30.75 19L38 23.7975V29.455C38.0003 29.7284 38.0901 29.9941 38.2559 30.2115C38.4216 30.4289 38.654 30.586 38.9175 30.6588L50.75 33.92V52.5H53.25V32.9688C53.25 32.6952 53.1603 32.4291 52.9945 32.2115C52.8288 31.9938 52.5962 31.8365 52.3325 31.7637L40.5 28.5013V23.125C40.5 22.9185 40.4489 22.7152 40.3512 22.5333C40.2535 22.3514 40.1122 22.1965 39.94 22.0825Z" fill="#092A59" />
        <path d="M22 37.5C22 37.1685 21.8683 36.8505 21.6339 36.6161C21.3995 36.3817 21.0815 36.25 20.75 36.25C20.4185 36.25 20.1005 36.3817 19.8661 36.6161C19.6317 36.8505 19.5 37.1685 19.5 37.5V52.5H22V37.5ZM40.75 36.25C41.0815 36.25 41.3995 36.3817 41.6339 36.6161C41.8683 36.8505 42 37.1685 42 37.5V52.5H39.5V37.5C39.5 37.1685 39.6317 36.8505 39.8661 36.6161C40.1005 36.3817 40.4185 36.25 40.75 36.25ZM30.75 37.5C29.7554 37.5 28.8016 37.8951 28.0983 38.5983C27.3951 39.3016 27 40.2554 27 41.25V52.5H34.5V41.25C34.5 40.2554 34.1049 39.3016 33.4017 38.5983C32.6984 37.8951 31.7446 37.5 30.75 37.5Z" fill="#092A59" />
    </svg>


)