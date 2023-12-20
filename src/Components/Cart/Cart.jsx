

export const Cart = () => {
    const totalItems = 8;
    return (
        <div className="bg-skin-primary-dark-lighter md:w-screen md:fixed md:left-0 md:overflow-y-scroll no-scrollbar">
            <div className="mx-auto sm:max-w-xl md:max-w-5xl md:max-h-screen">
                <div className="pt-12 h-screen bg-skin-primary-dark-lighter md:pt-[11.5rem]">
                    <div className="flex items-center font-black justify-between">
                        <div className="flex items-center justify-evenly gap-3">
                            <h2 className="block font-lato mr-4 ml-3 md:block">Cart( {totalItems} {totalItems > 1 ? "items" : "item"})</h2>
                            <div className="fixed left-0 top-12 w-full z-10  md:relative md:top-0 md:w-fit md:z-0">

                                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ">
                                    ₹78 saved on this order
                                </span>
                            </div>
                        </div>

                        <button className="font-bold  py-1 px-2  rounded-md border border-[#FB3A68]  text-[#FB3A68] " >
                            Empty Card
                        </button>

                    </div>

                    {/* second div */}
                    <div className="bg-white pt-12 sm:hidden px-3">
                        <div className="pb-60 bg-skin-primary-dark-lighter md:pb-0 md:flex md:mx-2 md:justify-between">
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}