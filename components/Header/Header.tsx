import Link from 'next/link'

import Drawer from '@/components/Drawer/Drawer'
import { RoutePath } from '@/constants/RoutePath'

type HeaderProps = {
  isSignedIn: boolean
  isTopPage?: boolean
}

export default function Header({ isSignedIn, isTopPage }: HeaderProps) {
  return (
    <header
      className={`absolute top-0 left-0 w-full px-4 lg:px-16 py-4 ${
        isTopPage ? 'bg-white shadow-md' : ''
      }`}
    >
      <div className='container mx-auto flex flex-row justify-between items-center'>
        <div>
          <h1 className='text-3xl font-semibold text-black'>
            <Link href={RoutePath.HOME}>
              <span className='hover:text-blue-500'>DokuAGT</span>
            </Link>
          </h1>
        </div>
        <Drawer isSignedIn={isSignedIn} />
        <nav className='hidden lg:block'>
          <ul className='flex flex-row items-center gap-6'>
            <li className={isTopPage ? '' : 'hidden'}>
              <Link href={RoutePath.HOME}>
                <span className='hover:border-b-2 hover:border-blue-500 hover:text-blue-500'>
                  HOME
                </span>
              </Link>
            </li>
            <li className={isTopPage ? '' : 'hidden'}>
              <Link href={RoutePath.HOME}>
                <span className='hover:border-b-2 hover:border-blue-500 hover:text-blue-500'>
                  HOME
                </span>
              </Link>
            </li>
            <li className={isTopPage ? '' : 'hidden'}>
              <Link href={RoutePath.CONTACT}>
                <span className='hover:border-b-2 hover:border-blue-500 hover:text-blue-500'>
                  お問い合わせ
                </span>
              </Link>
            </li>
            <li>
              <Link href={isSignedIn ? RoutePath.SIGN_UP : RoutePath.SIGN_IN}>
                <span
                  className={`px-8 py-3 text-base rounded-full text-white shadow-lg font-semibold ${
                    isSignedIn ? 'bg-blue-500' : 'bg-green-500'
                  }`}
                >
                  {isSignedIn ? '新規登録' : 'ログイン'}
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
