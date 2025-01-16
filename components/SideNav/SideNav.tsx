'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { RoutePath } from '@/constants/RoutePath'

import LogoutButton from './Logout/LogoutButton'

const SelectedType = {
  GENERATE: 'GENERATE',
  TASKS: 'TASKS',
  ACCOUNT: 'ACCOUNT',
} as const

type SelectedType = (typeof SelectedType)[keyof typeof SelectedType]

export default function SideNav() {
  const [selected, setSelected] = useState<SelectedType>(SelectedType.GENERATE)
  const path = usePathname()
  useEffect(() => {
    if (path === RoutePath.GENERATE) {
      setSelected(SelectedType.GENERATE)
    } else if (path === RoutePath.TASKS) {
      setSelected(SelectedType.TASKS)
    } else if (path === RoutePath.ACCOUNT) {
      setSelected(SelectedType.ACCOUNT)
    }
  }, [path])

  return (
    <div className='min-w-40 p-8 bg-white rounded-lg shadow-lg'>
      <nav className='flex flex-col gap-16'>
        <ul className='flex flex-col gap-4'>
          <li>
            <Link href={RoutePath.GENERATE}>
              <span
                className={`text-lg font-semibold hover:text-blue-800 ${
                  selected === SelectedType.GENERATE
                    ? 'border-b-2 border-blue-800 text-blue-800'
                    : ''
                }`}
              >
                タスク生成
              </span>
            </Link>
          </li>
          <li>
            <Link href={RoutePath.TASKS}>
              <span
                className={`text-lg font-semibold hover:text-blue-800 ${
                  selected === SelectedType.TASKS
                    ? 'border-b-2 border-blue-800 text-blue-800'
                    : ''
                }`}
              >
                タスク一覧
              </span>
            </Link>
          </li>
          <li>
            <Link href={RoutePath.ACCOUNT}>
              <span
                className={`text-lg font-semibold hover:text-blue-800 ${
                  selected === SelectedType.ACCOUNT
                    ? 'border-b-2 border-blue-800 text-blue-800'
                    : ''
                }`}
              >
                アカウント
              </span>
            </Link>
          </li>
        </ul>
        <LogoutButton />
      </nav>
    </div>
  )
}
