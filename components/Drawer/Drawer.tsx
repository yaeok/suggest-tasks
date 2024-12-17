'use client'

import Link from 'next/link'
import { useState } from 'react'

import DrawerButton from '@/components/Drawer/DrawerButton/DrawerButton'
import { RoutePath } from '@/constants/RoutePath'

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <div
        id='drawer-example'
        className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } bg-white w-60 sm:w-80`}
        tabIndex={-1}
        aria-labelledby='drawer-label'
      >
        <button
          type='button'
          className='text-slate-800 bg-transparent rounded-lg text-sm w-8 h-8 absolute top-4 right-4 flex items-center justify-center'
          onClick={toggleDrawer}
        >
          ✕
        </button>
        <nav className='pl-4 pt-8'>
          <ul className='flex flex-col gap-8'>
            <li>
              <Link href='#home'>
                <span className='text-lg font-mono font-semibold border-blue-500 hover:text-blue-500 hover:border-b-2'>
                  HOME
                </span>
              </Link>
            </li>
            <li>
              <Link href={RoutePath.SIGN_UP}>
                <span className='px-8 py-2 bg-blue-500 text-lg rounded-full text-white shadow-lg font-semibold'>
                  今すぐ登録
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <DrawerButton toggleDrawer={toggleDrawer} />
    </div>
  )
}

export default Drawer
