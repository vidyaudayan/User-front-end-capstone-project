import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import subCategory from '../helpers/subCategory'
import { VerticalCardNew } from '../components/Card/VerticalCardNew'
const AllProductsDisplay = () => {
  return (
    <div className='container mx-auto p-8'>


      <div className='hidden lg:grid grid-cols-[250px,1fr] ml-10'>
        <div className='bg-slate-100 p-2 min-h-[calc(100vh-120px)] overflow-y-scroll'>
{/*sort by*/}
          <div >
            < h3 className='text-base uppercase font-medium text-slate-500 border-b pb-1 border-slate-300'>Sort by</h3>
            <form className='text-sm flex flex-col gap-2 py-2'>
              <div className='flex items-center gap-3'>
                <input type="radio" name='sort' />
                <label htmlFor="">Price- Low to High</label>
              </div>

              <div className='flex items-center gap-3'>
                <input type="radio" name='sort' />
                <label htmlFor="">Price- High to Low</label>
              </div>
            </form>

          </div>

{/*filter by*/}
          <div >
            < h3 className='text-base uppercase font-medium text-slate-500 border-b pb-1 border-slate-300'>Category</h3>
            <form className='text-sm flex flex-col gap-2 py-2'>
            {
                          subCategory.map((categoryName,index)=>{
                            return(
                              <div className='flex items-center gap-3'>
                                 <input type='checkbox' name={"subCategory"}  value={categoryName?.value} id={categoryName?.value}  />
                                 <label htmlFor={categoryName?.value}>{categoryName?.label}</label>
                              </div>
                            )
                          })
                        }
            </form>

          </div>
        </div>

        <div>
        <VerticalCardNew category={"665c08c584ec78676b1660a5"} heading={'Popualar In Fashion'}/> 
        </div>

      </div>
    </div>
  )

}

export default AllProductsDisplay