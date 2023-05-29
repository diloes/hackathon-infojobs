'use client'
import React, { createContext, useState } from 'react'
import { dataOffers } from '@/mocks/dataOffers'

export const OffersContext = createContext({})

export const OffersProvider = ({ children }: { children: React.ReactNode }) => {
  const [offers] = useState(dataOffers)
  const [offerSelected, setOfferSelected] = useState<any>()

  return (
    <OffersContext.Provider value={{ offers, offerSelected, setOfferSelected }}>
      {children}
    </OffersContext.Provider>
  )
}
