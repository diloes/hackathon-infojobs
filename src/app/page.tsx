'use client'
import Filters from '@/components/Filters'
import OfferExtended from '@/components/OfferExtended'
import OfferSummary from '@/components/OfferSummary'
import { OffersContext } from '@/context/OffersContext'
import { useContext, useEffect } from 'react'

export default function Home() {
  const { offers, offerSelected, setOfferSelected }: any = useContext(OffersContext)

  useEffect(() => {
    setOfferSelected(offers[0])
  }, [offers])

  return (
    <main className='grid grid-cols-[0.6fr,1.3fr,2.1fr] mt-1'>
      <Filters />

      <ul>
        {offers.map((offer: any) => {
          return <OfferSummary offer={offer} key={offer.id} />
        })}
      </ul>
      {offerSelected ? (
        <OfferExtended />
      ) : (
        <h3 className='text-center text-2xl'>Cargando...</h3>
      )}
    </main>
  )
}
