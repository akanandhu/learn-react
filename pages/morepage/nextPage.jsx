import React from 'react'
import next from 'next'
import Link from 'next/link'

function nextPage() {
  return (
    <div>
      <h2>Page Number : <Link href={'/morepage2/nextPage1'}> 2 </Link></h2>
    </div>
  )
}

export default nextPage
