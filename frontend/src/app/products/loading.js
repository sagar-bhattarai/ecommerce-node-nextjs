import {FaImage} from "react-icons/fa";

const LoadingCard = () => {
    return (
        <div className="relative w-full max-w-[18rem] bg-neutral-primary-soft p-6 border border-default rounded-sm shadow-xs">
             <div className="absolute right-[10px] rounded-xl w-15 h-6 bg-primary"></div>
            <div >
                <div className="flex items-center justify-center rounded-base mb-6 bg-gray-100 min-h-[10rem]">
                    <FaImage className="text-gray-500 text-3xl"/>
                </div>
            </div>
            <div>
                <div className="flex items-center space-x-3 mb-6">
                   <div className="w-54 h-5 bg-gray-200"></div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="w-32 h-5 bg-gray-400"></div>
                    <div className="w-24 h-5 bg-gray-200 py-0.5 "></div>
                </div>
                <div className="flex items-center justify-between mt-6">
                    <div className="w-28 h-10 bg-gray-300"></div>
                    <div className="w-10 h-10 rounded-full bg-primary "> </div>
                </div>
            </div>
        </div>
    )
}

const productsLoading = () => {
    return (
        <div className="container mx-auto flex justify-center gap-2 items-center p-5">
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
        </div>
    )
}

export default productsLoading