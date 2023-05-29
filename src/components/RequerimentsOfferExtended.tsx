import React from 'react'

const RequerimentsOfferExtended = ({ offerSelected }: any) => {
  return (
    <>
      <h4 className='font-semibold mt-2'>Estudios mínimos</h4>
      <p className='mb-2'>{offerSelected?.study.value}</p>
      <h4 className='font-semibold'>Experiencia mínima</h4>
      <p className='mb-2'>{offerSelected?.experienceMin.value}</p>
      <h4 className='font-semibold'>Requisitos mínimos</h4>
      <p>
        {offerSelected?.requirementMin.split('\n').map((item: string) => (
          <p key={item}>{item}</p>
        ))}
      </p>
      <div className='mt-2 border' />
    </>
  )
}

export default RequerimentsOfferExtended
