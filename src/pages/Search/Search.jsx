import React from 'react'
import Productcard from '../../components/ProductsCard/Productcard';
import { useSearch } from '../../context/search';

const Search = () => {

    const [values, setValues] = useSearch();

    console.log(values)

    return (
        <div>
            <div className='w-[80rem] flex justify-center items-center'>
                <h1>Search Resuts</h1>
                <h6>
                    {values?.results.length < 1
                        ? "No Products Found"
                        : `Found ${values?.results.length}`}
                </h6>
            </div>
            <div className="p-20 flex flex-wrap">
                {values?.results.map((p) => (
                    <Productcard link={`/detail/${p?.slug}`} key={p._id} p={p} />
                ))}
            </div>
        </div>
    )
}

export default Search
