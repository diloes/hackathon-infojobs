import React from 'react'

const HeaderOfferExtended = ({ offerSelected }: any) => {
  return (
    <>
      <h1 className='text-3xl font-semibold'>{offerSelected?.title}</h1>
      <div className='flex gap-2'>
        <p className='text-blue-600'>{offerSelected?.author?.name}</p>
        <p>-</p>
        <p className='text-red-500'>{offerSelected?.city}</p>
        <p>-</p>
        <p className='text-green-500'>{offerSelected?.teleworking.value} </p>
      </div>
      <div className='mt-2 border' />
    </>
  )
}

export default HeaderOfferExtended
