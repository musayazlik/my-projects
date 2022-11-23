import './style.css'

import { Icon } from '@iconify/react'

/** Image */

import Logo from '../../assets/image/Favicon.png'
import Materialize from '../../assets/image/materialize.svg'

const Navbar = () => {
  return (
    <div>
      <header className='text-gray-600 body-font bg-slate-100/50 shadow-lg shadow-slate-200/50 border-solid border-b-2 border-slate-300/50'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center '>
          <div className='logo flex justify-center items-center gap-4'>
            <a href='/'>
              <img src={Logo} alt='logo' className='w-12 h-12' />
            </a>
            <a
              href='./'
              className='flex title-font font-medium items-center text-zinc-800 underline decoration-zinc-600 decoration-wavy decoration-2 '>
              <span className='text-4xl font-extrabold '>Live Projects</span>
            </a>
          </div>
          <nav className='md:mx-auto flex flex-wrap items-center text-base justify-center'>
            <a
              href='./'
              className='mr-5 duration-300 hover:scale-110 text-xl font-semibold hover:shadow-lg hover:shadow-indigo-600/50 bg-indigo-600 text-white px-4 py-2.5 rounded-md flex justify-center gap-3 items-center tracking-wide'>
              <Icon
                icon='akar-icons:bootstrap-fill'
                className='text-2xl font-extrabold '
              />{' '}
              Bootstrap
            </a>
            <a
              href='./'
              className='mr-5 duration-300 hover:scale-110 text-xl font-semibold hover:shadow-lg hover:shadow-blue-600/50 bg-blue-600 text-white px-4 py-2.5 rounded-md flex justify-center gap-3 items-center tracking-wide'>
              <Icon
                icon='teenyicons:tailwind-solid'
                className='text-2xl font-extrabold '
              />{' '}
              Tailwind
            </a>
            <a
              href='./'
              className='mr-5 duration-300 hover:scale-110 text-xl font-semibold hover:shadow-lg hover:shadow-cyan-600/50 bg-cyan-600 text-white px-4 py-2.5 rounded-md flex justify-center gap-3 items-center tracking-wide'>
              <Icon
                icon='tabler:brand-bulma'
                className='text-2xl font-extrabold '
              />{' '}
              Bulma
            </a>
            <a
              href='./'
              className='mr-5 duration-300 hover:scale-110 text-xl font-semibold hover:shadow-lg hover:shadow-red-600/50 bg-red-600 text-white px-4 py-2.5 rounded-md flex justify-center gap-3 items-center tracking-wide'>
              <img src={Materialize} alt='' className='w-12' />
              Materialize
            </a>
          </nav>
          <div className='darkMode relative flex items-center gap-3'>
            <Icon icon='ph:sun-duotone' width={22} />
            <input
              id='btn'
              className='btn absolute bottom-0 left-0'
              type='checkbox'
            />
            <label htmlFor='btn' className='cont'></label>

            <Icon icon='ph:moon-duotone' width={22} />
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar
