function Categories() {
    return (
        <div className="my-6 sm:my-10 text-center max-w-7xl mx-auto px-6">
            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4">Categories</h1>

            <div className="flex justify-center mb-6 sm:mb-8">
                <img src='./group-3.png' alt="Group 3" className=" w-1/3 sm:w-1/2 md:w-20" />
            </div>

            {/* Categories section */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-4 md:gap-6 mb-8 sm:mb-12">
                <div className="box-border h-40 sm:h-48 w-32 sm:w-40 md:w-48 p-2  px-2 py-12 bg-gray-100 rounded text-center font-bold">
                    <img src="./image.png" className="w-24 sm:w-32 h-24 sm:h-32 mx-auto" alt="Personal Development" />
                    <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-nowrap">Personal Development</p>
                </div>

                <div className="box-border h-40 sm:h-48 w-32 sm:w-40 md:w-48 p-2 px-2 py-12  bg-gray-100 rounded text-center font-bold">
                    <img src='./group-2.png' className="w-24 sm:w-32 h-24 sm:h-32 mx-auto" alt="Business & Soft Skills" />
                    <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-nowrap">Business & Soft Skills</p>
                </div>

                <div className="box-border h-40 sm:h-48 w-32 sm:w-40 md:w-48 p-2 px-2 py-12 bg-gray-100 rounded text-center font-bold">
                    <img src='./group-4.png' className="w-24 sm:w-32 h-24 sm:h-32 mx-auto" alt="Languages" />
                    <p className="mt-4 sm:mt-6 text-xs sm:text-sm">Languages</p>
                </div>

                <div className="box-border h-40 sm:h-48 w-32 sm:w-40 md:w-48 p-2 px-2 py-12 bg-gray-100 rounded text-center font-bold">
                    <img src='./group-5.png' className="w-24 sm:w-32 h-24 sm:h-32 mx-auto" alt="Academics" />
                    <p className="mt-4 sm:mt-6 text-xs sm:text-sm">Academics</p>
                </div>

                <div className="box-border h-40 sm:h-48 w-32 sm:w-40 md:w-48 p-2 px-2 py-12 bg-gray-100 rounded text-center font-bold">
                    <img src='./group-6.png' className="w-24 sm:w-32 h-24 sm:h-32 mx-auto" alt="Design & Creativity" />
                    <p className="mt-4 sm:mt-6 text-xs sm:text-sm">Design & Creativity</p>
                </div>
            </div>

            {/* Additional categories */}
            <div className="flex flex-wrap justify-center gap-6  sm:gap-4 md:gap-6 mb-8 sm:mb-12">
                <div className="box-border h-40 sm:h-48 w-32 sm:w-40 md:w-48 p-2 px-2 py-12  bg-gray-100 rounded text-center font-bold">
                    <img src='./group-7.png' alt="Music" className="w-24 sm:w-32 h-24 sm:h-32 mx-auto" />
                    <p className="mt-4 sm:mt-6 text-xs sm:text-sm">Music</p>
                </div>

                <div className="box-border h-40 sm:h-48 w-32 sm:w-40 md:w-48 p-2 px-2 py-12 bg-gray-100 rounded text-center font-bold">
                    <img src='./health.png' className="w-24 sm:w-32 h-24 sm:h-32 mx-auto" alt="Health & Fitness" />
                    <p className="mt-4 sm:mt-6 text-xs sm:text-sm">Health & Fitness</p>
                </div>

                <div className="box-border h-40 sm:h-48 w-32 sm:w-40 md:w-48 p-2 px-2 py-12 bg-gray-100 rounded text-center font-bold">
                    <img src='./group-8.png' className="w-24 sm:w-32 h-24 sm:h-32 mx-auto" alt="Lifestyle & Hobbies" />
                    <p className="mt-4 sm:mt-6 text-xs sm:text-sm">Lifestyle & Hobbies</p>
                </div>

                <div className="box-border h-40 sm:h-48 w-32 sm:w-40 md:w-48 p-2 px-2 py-12 bg-gray-100 rounded text-center font-bold">
                    <img src='./group-9.png' className="w-24 sm:w-32 h-24 sm:h-32 mx-auto" alt="Development" />
                    <p className="mt-4 sm:mt-6 text-xs sm:text-sm">Development</p>
                </div>

                <div className="box-border h-40 sm:h-48 w-32 sm:w-40 md:w-48 p-2 px-2 py-12  bg-gray-100 rounded text-center font-bold">
                    <img src='./group-10.png' className="w-24 sm:w-32 h-24 sm:h-32 mx-auto" alt="Investing, Finance & Accounting" />
                    <p className="mt-4 sm:mt-6 text-xs sm:text-sm">Investing, Finance & Accounting</p>
                </div>
            </div>
        </div>
    );
}

export default Categories;
