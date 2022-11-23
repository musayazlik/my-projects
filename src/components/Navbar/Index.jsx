import './style.css'

import { Icon } from '@iconify/react'

/** Image */

import Logo from '../../assets/image/Favicon.png'
import Materialize from '../../assets/image/materialize.svg'

const Navbar = () => {
  return (
    <div>
      <header className='text-gray-600 body-font bg-slate-100/50 shadow-lg shadow-slate-200/50 border-solid border-b-2 border-slate-300/50'>
        <div className='xl:container grid justify-between xl:p-5 flex-col xl:flex-row  items-center grid-cols-12 gap-y-2 '>
          <div className='logo  p-5 xl:p-0 flex xl:justify-center items-center gap-4 order-1 xl:order-1 col-span-7 sm:col-span-8 xl:col-span-3'>
            <a href='/'>
              <img src={Logo} alt='logo' className='w-8 sm:w-12' />
            </a>
            <a
              href='./'
              className='flex title-font font-medium items-center text-zinc-800 underline decoration-zinc-800 decoration-wavy decoration-4 '>
              <span className='text-md sm:text-4xl font-extrabold '>Live Projects</span>
            </a>
          </div>
          <nav className='py-4 flex bg-slate-100 xl:bg-transparent flex-wrap items-center text-base justify-center order-3 xl:order-2 col-span-12 xl:col-span-7'>
            <a
              href='./'
              className='mr-5 duration-300 hover:scale-110 text-xl font-semibold hover:shadow-lg hover:shadow-indigo-600/50 bg-indigo-600 border border-b-4 border-indigo-800 text-white rounded-sm sm:rounded-md flex justify-center gap-3 items-center tracking-wide min-h-[44px] min-w-[50px] md:px-4 md:py-2.5 px-0 py-0'>
              <Icon
                icon='akar-icons:bootstrap-fill'
                className='text-2xl font-extrabold '
              />{' '}
              <span className='hidden md:block'>Bootstrap</span>
            </a>
            <a
              href='./'
              className='mr-5 duration-300 hover:scale-110 text-xl font-semibold hover:shadow-lg hover:shadow-blue-600/50 bg-blue-600 border border-b-4 border-blue-800 text-white rounded-sm sm:rounded-md flex justify-center gap-3 items-center tracking-wide min-h-[44px] min-w-[50px] md:px-4 md:py-2.5 px-0 py-0'>
              <Icon
                icon='teenyicons:tailwind-solid'
                className='text-2xl font-extrabold '
              />{' '}
              <span className='hidden md:block'>Tailwind</span>
            </a>
            <a
              href='./'
              className='mr-5 duration-300 hover:scale-110 text-xl font-semibold hover:shadow-lg hover:shadow-cyan-600/50 bg-cyan-600 border border-b-4 border-cyan-800 text-white rounded-sm sm:rounded-md flex justify-center gap-3 items-center tracking-wide min-h-[44px] min-w-[50px] md:px-4 md:py-2.5 px-0 py-0'>
              <Icon
                icon='tabler:brand-bulma'
                className='text-2xl font-extrabold '
              />{' '}
              <span className='hidden md:block'>Bulma</span>
            </a>
            <a
              href='./'
              className=' duration-300 hover:scale-110 text-xl font-semibold hover:shadow-lg hover:shadow-red-600/50 bg-red-600 border border-b-4 border-red-800 text-white rounded-sm sm:rounded-md flex justify-center gap-3 items-center tracking-wide min-h-[44px] min-w-[50px] md:px-4 md:py-2.5 px-0 py-0'>
              <img src={Materialize} alt='' className='w-10' />
              <span className='hidden md:block'>Materialize</span>
            </a>
          </nav>
          <div className='darkMode p-5 xl:p-0 relative flex items-center justify-end gap-3 order-2 xl:order-3   col-span-5 sm:col-span-4 xl:col-span-2'>
            <Icon icon='ph:sun-duotone' className='text-sm sm:text-2xl'  />
            <input
              id='btn'
              className='btn absolute bottom-0 left-0'
              type='checkbox'
            />
            <label htmlFor='btn' className='cont'></label>

            <Icon icon='ph:moon-duotone' className='text-sm sm:text-2xl' />
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar
