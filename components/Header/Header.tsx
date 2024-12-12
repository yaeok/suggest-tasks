import Link from 'next/link'

import DrawerButton from '@/components/Drawer/DrawerButton/DrawerButton'
import { RoutePath } from '@/constants/route_path'

type HeaderProps = {
  isSignedIn: boolean
}

export default function Header({ isSignedIn }: HeaderProps) {
  return (
    <header className='absolute top-0 left-0 w-full bg-white px-4 lg:px-16 py-4 shadow'>
      <div className='container mx-auto flex flex-row justify-between items-center'>
        <div className='flex flex-row items-center gap-2'>
          <h1 className='text-3xl font-semibold text-black'>
            <Link href={RoutePath.HOME}>
              <span className='hover:border-b-2 hover:border-blue-500 hover:text-blue-500'>
                DokuAGT
              </span>
            </Link>
          </h1>
          <h3 className='text-lg font-semibold text-blue-700 hidden lg:block'>
            ～独学サポート～
          </h3>
        </div>
        <DrawerButton />
        <nav className='hidden lg:block'>
          <ul className='flex flex-row items-center gap-6'>
            <li>
              <Link href={RoutePath.HOME}>
                <span className='hover:border-b-2 hover:border-blue-500 hover:text-blue-500'>
                  HOME
                </span>
              </Link>
            </li>
            <li>
              <Link href={RoutePath.HOME}>
                <span className='hover:border-b-2 hover:border-blue-500 hover:text-blue-500'>
                  HOME
                </span>
              </Link>
            </li>
            <li>
              <Link href={RoutePath.HOME}>
                <span className='hover:border-b-2 hover:border-blue-500 hover:text-blue-500'>
                  HOME
                </span>
              </Link>
            </li>
            <li>
              <Link href={isSignedIn ? RoutePath.SIGN_UP : RoutePath.SIGN_IN}>
                <span className='px-8 py-2 bg-blue-500 text-lg rounded-full text-white shadow-lg font-semibold'>
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
