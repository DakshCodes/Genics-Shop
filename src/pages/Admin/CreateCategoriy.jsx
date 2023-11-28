import React, { useEffect, useState } from 'react'
import toast from "react-hot-toast";
import axios from "axios";
import CatgeoryForm from '../../components/Form/CatgeoryForm';
import { Modal } from "antd";

const CreateCategoriy = () => {

  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  //handle Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_SERVER}/api/v1/category/create-category`, {
        name,
      });
      if (data?.success) {
        toast.success(`${name} is created`);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
      setName('  ')
    } catch (error) {
      console.log(error);
      // toast.error("somthing went wrong in input form");
    }
  };

  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_SERVER}/api/v1/category/get-category`);
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something wwent wrong in getting catgeory");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  //update category
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `${import.meta.env.VITE_SERVER}/api/v1/category/update-category/${selected._id}`,
        { name: updatedName }
      );
      if (data?.success) {
        toast.success(`${updatedName} is updated`);
        setSelected(null);
        setUpdatedName("");
        setVisible(false);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //delete category
  const handleDelete = async (pId) => {
    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_SERVER}/api/v1/category/delete-category/${pId}`
      );
      if (data.success) {
        toast.success(`category is deleted`);

        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Somtihing went wrong");
    }
  };

  console.log(categories, "category")


  return (
    <div className='w-full bg-[#fff] h-full  justify-center flex flex-wrap'>
      <CatgeoryForm
        btn="Create"
        title="Create"
        handleSubmit={handleSubmit}
        value={name}
        setValue={setName}
        className="flex-grow "
      />
      <div className="border w-[20rem] flex-grow ">
        <div className="flex flex-col">
          <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden !bg-white">
                <table className="min-w-full divide-y bg-white table-fixed dark:divide-gray-700">
                  <thead className="bg-white dark:bg-gray-700">
                    <tr>
                      <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                        Name
                      </th>
                      <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                        action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                    {categories?.map((c) => (
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
                    ))}

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        onCancel={() => setVisible(false)}
        footer={null}
        visible={visible}
        className='flex justify-center items-center'
      >
        <CatgeoryForm
          btn="Edit"
          title="Edit"
          value={updatedName}
          setValue={setUpdatedName}
          handleSubmit={handleUpdate}
        />
      </Modal>
    </div >
  )
}

export default CreateCategoriy
