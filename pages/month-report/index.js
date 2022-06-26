import React, { useCallback, useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from 'recharts'
import { getData, totalExpensesByType } from '../../lib/getMonthReport'
import Nav from '../../components/Nav'

export default function MonthReportTest() {
  const [data, setData] = useState()
  const [total, setTotal] = useState({})
  useEffect(() => {
    async function fetchData() {
      setData(await getData())
      setTotal(await totalExpensesByType())
    }
    fetchData()
  }, [renderGraph])
  const buttonClass =
    'bg-blue-500 hover:bg-blue-700 text-sm m-4 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline'
  const renderGraph = useCallback(() => {
    return (
      <BarChart width={500} height={500} data={data}>
        <CartesianGrid />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Básico" stackId="a" fill="green" />
        <Bar dataKey="Supérfluo" stackId="a" fill="darkred" />
      </BarChart>
    )
  }, [data])
  return (
    <>
      <Nav buttonClass={buttonClass} />
      <main>{new Date().toLocaleString('default', { month: 'long' })}</main>
      <br />
      {renderGraph()}
      <br />
      Total: {total.basic + total.superfluous}
      <br />
      Básico: {total.basic}
      <br />
      Supérfluo: {total.superfluous}
    </>
  )
}
