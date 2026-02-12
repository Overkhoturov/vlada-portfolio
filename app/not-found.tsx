// app/[lang]/error.tsx
'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { useLocale } from '@/utils/providers/locale-provider'

export default function Notfound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      custom not found
    </div>
  )
}
