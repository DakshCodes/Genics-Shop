import React from 'react'

const User = () => {
  return (
    <div>
      <div className=" w-full h-full flex-grow ">
        <div className="flex flex-col">
          <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden !bg-white">
                <table className="min-w-full divide-y bg-white table-fixed dark:divide-gray-700">
                  <thead className="bg-white dark:bg-gray-700">
                    <tr>
                      <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                        S.No
                      </th>
                      <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                        Name
                      </th>
                      <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                    {/* {Users?.map((c) => (
                      <>
                        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white" key={c._id}>{c.name}</td>
                          <td className="py-4  flex gap-8 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white" key={c._id}>
                            <button
                              className="btn btn-primary ms-2"
                              onClick={() => {
                                setVisible(true);
                                setUpdatedName(c.name);
                                setSelected(c);
                              }}
                            >
                              Edit
                            </button>
                            <button
                              // className="btn btn-danger ms-2"
                              onClick={() => {
                                handleDelete(c._id);
                              }}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      </>
                    ))} */}
                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">1</td>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Daksh</td>
                      <td className="py-4  flex gap-8 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <button
                          class="inline-flex items-center px-4 py-2 bg-[green] transition ease-in-out delay-75 hover:bg-[green] text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110"
                        // onClick={() => {
                        //   handleDelete(c._id);
                        // }}
                        >
                          <svg
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            fill="none"
                            class="h-5 w-5 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              stroke-width="2"
                              stroke-linejoin="round"
                              stroke-linecap="round"
                            ></path>
                          </svg>

                          Block
                        </button>
                        <button
                          class="inline-flex items-center px-4 py-2 bg-red-600 transition ease-in-out delay-75 hover:bg-red-700 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110"
                        // onClick={() => {
                        //   handleDelete(c._id);
                        // }}
                        >
                          <svg
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            fill="none"
                            class="h-5 w-5 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              stroke-width="2"
                              stroke-linejoin="round"
                              stroke-linecap="round"
                            ></path>
                          </svg>

                          Delete
                        </button>

                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User
