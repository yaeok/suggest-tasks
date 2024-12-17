'use client'

import Link from 'next/link'

import { RoutePath } from '@/constants/RoutePath'

export default function SideNav() {
  const handleLogout = async () => {}
  return (
    <div className='p-8 bg-white rounded-lg'>
      <nav className='flex flex-col gap-16'>
        <ul className='flex flex-col gap-4'>
          <li className='text-lg'>
            <Link
              href={RoutePath.GENERATE}
              className='hover:border-b-2 hover:border-blue-500 hover:text-blue-500'
            >
              タスク生成
            </Link>
          </li>
          <li className='text-lg'>
            <Link
              href={RoutePath.TASKS}
              className='hover:border-b-2 hover:border-blue-500 hover:text-blue-500'
            >
              タスク一覧
            </Link>
          </li>
          <li className='text-lg'>
            <Link
              href={RoutePath.PROMPT}
              className='hover:border-b-2 hover:border-blue-500 hover:text-blue-500'
            >
              プロンプト一覧
            </Link>
          </li>
          <li className='text-lg'>
            <Link
              href={RoutePath.ACCOUNT}
              className='hover:border-b-2 hover:border-blue-500 hover:text-blue-500'
            >
              アカウント
            </Link>
          </li>
        </ul>
        <button
          onClick={handleLogout}
          className='px-4 py-2 text-white font-semibold bg-rose-500 rounded-full shadow-lg hover:shadow-none hover:translate-y-2 hover:duration-300 transition-all'
        >
          ログアウト
        </button>
      </nav>
    </div>
  )
}
