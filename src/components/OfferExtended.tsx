import { useContext } from 'react'
import { OffersContext } from '@/context/OffersContext'
import HeaderOfferExtended from './HeaderOfferExtended'
import RequerimentsOfferExtended from './RequerimentsOfferExtended'

export const OfferExtended = () => {
  const { offerSelected }: any = useContext(OffersContext)

  return (
    <div className='bg-white border-2 p-6 h-[screen-height] rounded-md'>
      <HeaderOfferExtended offerSelected={offerSelected} />
      <RequerimentsOfferExtended offerSelected={offerSelected} />
      <h3 className='text-2xl mt-3 mb-2'>Descripción</h3>
      <p>
        {offerSelected.description.split('\n').map((item: any) => (
          <p className='mt-2' key={item}>
            {item}
          </p>
        ))}
      </p>
    </div>
  )
}

export default OfferExtended
