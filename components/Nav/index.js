import Link from 'next/link'
import React from 'react'

export default function Nav({ buttonClass, month }) {
  return (
    <div className="flex items-center justify-center">
      <Link href="/">
        <a>
          <button className={buttonClass}>Voltar</button>
        </a>
      </Link>
      {month ? (
        <Link href={`/viewMonth-${month.slice(0, 3)}`}>
          <a>
            <button className={buttonClass}>Ver Detalhes</button>
          </a>
        </Link>
      ) : (
        <button className={`${buttonClass} disabled:opacity-75`} disabled>
          Ver Detalhes
        </button>
      )}
    </div>
  )
}
