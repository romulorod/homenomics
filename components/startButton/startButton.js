import { getSortedRoutes } from 'next/dist/shared/lib/router/utils'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function StartButton() {
  return (
    <div className="flex items-center justify-center mt-12">
      <Link href="/insertData">
        <a
          data-testid="home-link"
          className="bg-teal-400 hover:bg-cyano-500 text-black font-bold py-2 px-4 rounded-lg"
        >
          Get Started
        </a>
      </Link>
    </div>
  )
}
