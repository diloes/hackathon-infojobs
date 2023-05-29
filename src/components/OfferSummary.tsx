import { useContext } from 'react'
import { OffersContext } from '@/context/OffersContext'

interface Props {
  offer: Offer
}

const OfferSummary = ({ offer }: Props) => {
  const { offerSelected, setOfferSelected }: any = useContext(OffersContext)

  return (
    <li
      key={offer.id}
      className='p-4 bg-white border-2 flex rounded-md'
      style={
        offerSelected === offer
          ? { backgroundColor: '#e4f0fe' }
          : { backgroundColor: '#fff' }
      }
      onClick={() => setOfferSelected(offer)}
    >
      <img
        src={offer.author.logoUrl}
        alt={offer.title}
        width={70}
        height={70}
        className='max-h-16 mr-4 '
      />
      <div>
        <h2 className='text-lg'>{offer.title}</h2>
        <h3 className='text-[#167db7] text-md mb-2'>{offer.author.name}</h3>
        <p className='text-[#89898a] text-md mb-2'>
          <span className='text-gray-700'> {offer.city}</span> |{' '}
          <span className='text-blue-500'>{offer.teleworking.value}</span> |{' '}
          <span className='text-[#00A550]'>Hace 2d</span>
        </p>
        <p className='mb-2 text-[#89898a]'>
          {offer.study.value} | <span className='text-red-600'>Al menos 1 año</span>
        </p>
        <p className='text-[#89898a] text-md'>
          Indefinido | 8:00 - 18:00 | <span className='text-blue-500'>24.000€/año</span>{' '}
        </p>
      </div>
    </li>
  )
}

export default OfferSummary
