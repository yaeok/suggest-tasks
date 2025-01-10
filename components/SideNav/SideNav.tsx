import Link from 'next/link'

import { RoutePath } from '@/constants/RoutePath'

import LogoutButton from './Logout/LogoutButton'

export default function SideNav() {
  return (
    <div className='p-8 bg-white rounded-lg shadow-lg'>
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
          {/* <li className='text-lg'>
            <Link
              href={RoutePath.PROMPT}
              className='hover:border-b-2 hover:border-blue-500 hover:text-blue-500'
            >
              プロンプト一覧
            </Link>
          </li> */}
          <li className='text-lg'>
            <Link
              href={RoutePath.ACCOUNT}
              className='hover:border-b-2 hover:border-blue-500 hover:text-blue-500'
            >
              アカウント
            </Link>
          </li>
        </ul>
        <LogoutButton />
      </nav>
    </div>
  )
}
