import React from 'react'

function HeaderOption({Icon, title, selected}) {
  return (
    <div className={`flex items-center space-x-1 border-b-[3px] 
    border-transparent cursor-pointer pb-3 transition duration-75
     hover:text-gray-900 ${selected && "text-blue-600 border-blue-600 font-[600]"}`}>
        <Icon className="h-4"/>
        <p className='hidden sm:inline-flex'>{title}</p>
    </div>
  )
}

export default HeaderOption