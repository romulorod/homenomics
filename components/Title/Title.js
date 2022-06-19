import Image from 'next/image'
import React from 'react'

export default function Title() {
  const titleClasses =
    'flex justify-center items-center mt-6 mb-2 font-medium text-xl lg:text-6xl text-amber-500'
  return (
    <>
      <h1 className={titleClasses}>Homenomics</h1>
      <br />
      <h3 className="flex justify-center items-center text-indigo-800 mb-12">
        Your personal house economy project!
      </h3>
      <div className="flex align-items justify-center">
        <Image src={'/assets/pie-chart-svgrepo-com.svg'} alt="Pie chart" width={75} height={75} />
      </div>
    </>
  )
}
