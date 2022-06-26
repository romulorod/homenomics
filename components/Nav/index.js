import Link from 'next/link'
import React from 'react'

export default function Nav({ buttonClass, month }) {
  return (
    <div className="flex w-full items-center justify-center">
      <Link href="/">
        <a data-testid="voltar">
          <button className={buttonClass}>Voltar</button>
        </a>
      </Link>
      {month && (
        <Link href={`/month-report`} disabled={!month}>
          <a data-testid="detalhes">
            <button className={buttonClass}>Ver Detalhes</button>
          </a>
        </Link>
      )}
    </div>
  )
}
