'use client'

import { createContext, useContext } from 'react'
import { DictionaryType } from '../i18n/dictionaries'

const DictionaryContext = createContext<DictionaryType | null>(null)

export function DictionaryProvider({
  children,
  dictionary
}: {
  children: React.ReactNode
  dictionary: DictionaryType
}) {
  return (
    <DictionaryContext.Provider value={dictionary}>
      {children}
    </DictionaryContext.Provider>
  )
}

export function useDictionary() {
  const context = useContext(DictionaryContext)
  
  if (!context) {
    throw new Error('useDictionary must be used within a DictionaryProvider')
  }
  
  return context
}
