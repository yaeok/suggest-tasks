import { useRouter } from 'next/navigation'
import { IconContext } from 'react-icons'
import { RiCloseCircleFill } from 'react-icons/ri'

import { RoutePath } from '@/constants/RoutePath'
import { LogOutUseCase } from '@/usercase/log_out_use_case/log_out_use_case'

type LogoutModalProps = {
  isOpen: boolean
  onClose: () => void
}

export default function LogoutModal({ isOpen, onClose }: LogoutModalProps) {
  const router = useRouter()

  const handleLogout = async () => {
    setTimeout(async () => {
      const usecase = new LogOutUseCase()
      await usecase.execute()
      router.push(RoutePath.HOME)
    }, 1500)
  }
  if (isOpen) {
    return (
      <div className='fixed inset-0 max-h-screen z-50'>
        <div className='fixed inset-0 bg-black opacity-50 filter grayscale'></div>
        <div className='h-screen flex items-center justify-center'>
          <div className='relative px-8 py-4 mx-2 bg-white flex flex-col items-center gap-4 rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/3'>
            <button
              className='absolute -top-10 right-0 md:-right-10'
              onClick={onClose}
            >
              <IconContext.Provider value={{ size: '2.5em', color: 'white' }}>
                <RiCloseCircleFill />
              </IconContext.Provider>
            </button>
            <h1 className='w-full text-2xl font-semibold text-green-500'>
              ログアウト確認
            </h1>
            <p className='text-lg font-semibold'>本当にログアウトしますか？</p>
            <button
              onClick={handleLogout}
              className='px-4 py-2 text-white font-semibold bg-rose-500 rounded-full shadow-lg hover:shadow-none hover:translate-y-2 hover:duration-300 transition-all'
            >
              ログアウト
            </button>
          </div>
        </div>
      </div>
    )
  } else {
    return null
  }
}
