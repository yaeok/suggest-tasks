import { IconContext } from 'react-icons'
import { RiCloseCircleFill } from 'react-icons/ri'

type SuccessMessageModalProps = {
  message: string
  isOpen: boolean
  onClose: () => void
}

export default function SuccessMessageModal({
  message,
  isOpen,
  onClose,
}: SuccessMessageModalProps) {
  if (isOpen) {
    return (
      <div className='fixed inset-0 max-h-screen z-50'>
        <div className='fixed inset-0 bg-black opacity-50 filter grayscale'></div>
        <div className='h-screen flex items-center justify-center'>
          <div className='relative px-8 py-4 mx-2 bg-white flex flex-col rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/3'>
            <button
              className='absolute -top-10 right-0 md:-right-10'
              onClick={onClose}
            >
              <IconContext.Provider value={{ size: '2.5em', color: 'white' }}>
                <RiCloseCircleFill />
              </IconContext.Provider>
            </button>
            <h1 className='text-2xl font-semibold text-green-500'>Success</h1>
            <p className='text-lg text-center font-semibold'>{message}</p>
          </div>
        </div>
      </div>
    )
  } else {
    return null
  }
}
