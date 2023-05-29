import React from 'react'

const Filters = () => {
  return (
    <div className='bg-white p-4 rounded-md mt-[2.2px] ml-1 shadow-sm'>
      <fieldset>
        <legend>Ordenar ofertas</legend>
        <input type='radio' value='fecha' />
        <label>Fecha de publicación</label>
        <br />
        <input type='radio' value='relevancia' />
        <label>Relevancia</label>
        <br />
      </fieldset>

      <fieldset className='mt-8'>
        <legend>Palabra clave</legend>
        <div className='flex'>
          <input
            type='text'
            placeholder='Buscar...'
            className='border-2 text-sm mr-2 p-1 rounded'
          />
          <button className='border border-blue-600 text-blue-600 p-2 rounded text-sm'>
            OK
          </button>
        </div>
      </fieldset>

      <fieldset className='mt-8'>
        <legend>Tipo de oferta</legend>
        <input type='checkbox' value='executive' />
        <label>Solo executive</label>
      </fieldset>

      <fieldset className='mt-8'>
        <legend>Fecha</legend>
        <input type='radio' value='fecha' />
        <label>Cualquier fecha</label>
        <br />
        <input type='radio' value='24' />
        <label>Últimas 24 horas</label>
        <br />
        <input type='radio' value='7' />
        <label>Últimos 7 días</label>
        <br />
        <input type='radio' value='15' />
        <label>Últimos 15 días</label>
      </fieldset>

      <fieldset className='mt-8'>
        <legend>Provincia</legend>
        <input type='checkbox' value='madrid' />
        <label>Madrid</label>
        <br />
        <input type='checkbox' value='barcelona' />
        <label>Barcelona</label>
        <br />
        <input type='checkbox' value='valencia' />
        <label>Valencia</label>
        <br />
        <input type='checkbox' value='sevilla' />
        <label>Sevilla</label>
        <br />
        <p className='text-blue-600 mt-2'>Mostrar todas</p>
      </fieldset>

      <fieldset className='mt-8'>
        <legend>Presencial/Teletrabajo</legend>
        <input type='checkbox' value='hibrido' />
        <label>Híbrido (248)</label>
        <br />
        <input type='checkbox' value='remoto' />
        <label>Solo teletrabajo (543)</label>
        <br />
        <input type='checkbox' value='presencial' />
        <label>Presencial (129)</label>
        <br />
        <input type='checkbox' value='sin_especificar' />
        <label>Sin especificar (83)</label>
      </fieldset>

      <fieldset className='mt-8'>
        <legend>Categoría del puesto</legend>
        <input type='checkbox' value='hibrido' />
        <label>Informática y telecomunicaciones (548)</label>
        <br />
        <input type='checkbox' value='remoto' />
        <label>Ingenieros y técnicos (143)</label>
        <br />
        <input type='checkbox' value='presencial' />
        <label>Diseño y artes gráficas (24)</label>
        <br />
        <input type='checkbox' value='sin_especificar' />
        <label>Otros (4)</label>
      </fieldset>
    </div>
  )
}

export default Filters
