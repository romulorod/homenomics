import React from 'react'
import Nav from '../../components/Nav'

export default function ViewMonth() {
  const buttonClass =
    'bg-blue-500 hover:bg-blue-700 text-sm m-4 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline'
  return (
    <>
      <Nav buttonClass={buttonClass} />
    </>
  )
}
export async function getServerSideProps({ params }) {
  //const course = await getCourse(params.id)
  //const currentDate = new Date().toISOString()
  console.log(params)
  return {
    props: {},
  }
}
