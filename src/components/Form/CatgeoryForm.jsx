import React from 'react'

const CatgeoryForm = ({ handleSubmit,btn, value,title, setValue }) => {
    return (
        <div className='w-[max-content] flex-grow m-auto'>
            <div className="h-full  bg-[#fff] flex flex-col justify-start sm:py-12">
                <div className="relative  sm:max-w-xl sm:mx-auto">
                    <div className="relative  bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                        <div className="max-w-md mx-auto">
                            <div className="flex items-center space-x-5">
                                <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">i</div>
                                <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                                    <h2 className="leading-relaxed">{title} Category</h2>
                                </div>
                            </div>
                            <div className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <div className="flex flex-col">
                                        <label className="leading-loose">Category Name</label>
                                        <input
                                            value={value}
                                            onChange={(e) => setValue(e.target.value)}
                                            type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Enter category name" />
                                    </div>
                                </div>
                                <div className="pt-4 flex items-center space-x-4">
                                    <button onClick={handleSubmit} className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">{btn}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CatgeoryForm
