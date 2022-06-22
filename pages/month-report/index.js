import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from 'recharts'

export default function MonthReport() {
  const data = [
    { name: 'Mercado', Básicos: 30, Supérfluo: 70 },
    { name: 'Luz', Básicos: 12, Supérfluo: 88 },
    { name: 'Gás', Básicos: 15, Supérfluo: 85 },
    { name: 'Aluguel', Básicos: 35, Supérfluo: 65 },
    { name: 'Restaurantes', Básicos: 54, Supérfluo: 46 },
    //{ name: 'F', Básicos: 72, Supérfluo: 28 },
    //{ name: 'G', Básicos: 32, Supérfluo: 68 },
  ]
  return (
    <>
      <main>{new Date().toLocaleString('default', { month: 'long' })}</main>
      <BarChart width={500} height={500} data={data}>
        <CartesianGrid />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Básicos" stackId="a" fill="purple" />
        <Bar dataKey="Supérfluo" stackId="a" fill="green" />
      </BarChart>
    </>
  )
}
