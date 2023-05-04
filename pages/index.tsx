import React from 'react';
import {Inter} from 'next/font/google'
import ComingSoon from "@/pages/coming-soon";

const inter = Inter({subsets: ['latin']})

export default function Home() {
  return (
      <main>
          <ComingSoon />
      </main>
  )
}
