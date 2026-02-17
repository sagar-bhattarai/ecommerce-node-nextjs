const LoadingCard = () => {
    return (
        <div className="relative w-full max-w-[18rem] bg-neutral-primary-soft p-6 border border-default rounded-sm shadow-xs">
            <p className="brand absolute right-[10px]" >Brand</p>
            <div >
                <div className="rounded-base mb-6 min-h-[10rem]"></div>
            </div>
            <div>
                <div className="flex items-center space-x-3 mb-6">
                    <span className="bg-brand-softer border border-transparent text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 ">Ratings</span>
                </div>
                <div className="flex flex-col">
                    <div className="text-xl text-heading font-semibold tracking-tight">Product Name</div>
                    <span className="text-xs font-medium py-0.5 ">category name</span>
                </div>
                <div className="flex items-center justify-between mt-6">
                    <span className="text-3xl font-extrabold text-heading">Price </span>
                    <button type="button" className="inline-flex items-center text-white dark:text-black  hover:text-white bg-brand cursor-pointer hover:bg-primary box-border border border-gray-200 focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-full text-sm px-2 py-2 focus:outline-none">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" /></svg>
                    </button>
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