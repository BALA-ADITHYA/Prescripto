import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const DoctorsList = () => {
  const { doctors,aToken,getAllDoctors,changeAvailability}= useContext(AdminContext)

  useEffect(()=>{
    if(aToken){
      getAllDoctors()
    }
  },[aToken])
  return (
    <div className=' m-5 max-h-[90vh] overflow-y-scroll '>
      <h1 className=' text-lg font-medium'>All Doctors</h1>
      <div className=' flex flex-wrap w-full gap-4 gap-y-6 pt-5 '>
        {doctors.map((item,index)=>(
          <div className=' border border-indigo-200 rounded-xl overflow-hidden max-w-56 cursor-pointer group' key={index}>
            <img className=' bg-indigo-50 group-hover:bg-primary transition-all duration-500' src={item.image} alt="" />
            <div className=' p-4 '>
              <p className=' text-neutral-800 text-lg font-medium'>{item.name}</p>
              <p className=' text-sm text-zinc-600 '>{item.speciality}</p>
              <div className=' mt-2 flex items-center gap-1 text-sm'>
                <input onChange={()=>{changeAvailability(item_id)}} type="checkbox" checked={item.available} />
                <p>Available</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DoctorsList
