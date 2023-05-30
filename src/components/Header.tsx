import Image from 'next/image'

const Header = () => {
  return (
    <header className='bg-white py-5 px-20 w-full h-1/3 flex justify-between items-center shadow-md text-gray-500'>
      <div className='flex items-center gap-4'>
        <Image src='/icon.png' alt='icon' width={40} height={40} className='rounded' />
        <nav>
          <ul className='flex items-center gap-4'>
            <li>Empleos</li>
            <li>Mis ofertas</li>
            <li>CV</li>
            <li>Quién me ve</li>
          </ul>
        </nav>
      </div>
      <div className='flex gap-1'>
        <Image
          src='/profile.png'
          alt='icon'
          width={33}
          height={33}
          className='rounded-full'
        />
        <Image src='/arrow-down.png' alt='arrow' width={28} height={20} />
      </div>
    </header>
  )
}

export default Header
