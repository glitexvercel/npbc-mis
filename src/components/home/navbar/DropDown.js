import React from 'react'

const DropDown = ({ list, isCurrent }) => {

    if (!list || list?.length === 0) { return null }

    return (
        <div className={`bg-c-red absolute z-40 shadow right-0 p-3 min-w-[170px] flex flex-col gap-2
${isCurrent ? "h-auto" : "h-[0px] p-[0px]"} duration-500 ease-in-out
        `}>
            <div className={`h-4 w-4 bg-c-red absolute right-0 left-0 mx-auto -top-2 rotate-45
            ${isCurrent ? "" : "hidden"} ease-in-out
            `} />
            {
                list?.map((item, key) => (
                    <DropDownItem path={item?.path} key={key} text={item?.name} isCurrent={isCurrent} />
                ))
            }
        </div>
    )
}

export default DropDown

const DropDownItem = ({ text, isCurrent,path }) => (
    <div className={`text-white c-normal  font-semibold p-2 duration-150 ease-in-out ${isCurrent ? "text-xs" : "hidden text-[0px] "}`}>
        <a href={path}>
            {text}
        </a>
    </div>
)
