import { IconContext } from 'react-icons'
import { RiCloseCircleFill } from 'react-icons/ri'

type TaskItemDeleteModalProps = {
  isOpen: boolean
  onClose: () => void
}

export default function TaskItemDeleteModal({
  isOpen,
  onClose,
}: TaskItemDeleteModalProps) {
  if (isOpen) {
    return (
      <div className='fixed inset-0 max-h-screen z-50'>
        <div
          className='fixed inset-0 bg-black opacity-50 filter grayscale'
          onClick={onClose}
        ></div>
        <div className='h-screen flex items-center justify-center'>
          <div className='relative p-4 mx-2 bg-white flex flex-col gap-8 rounded-lg shadow-lg w-full md:w-2/5'>
            <div className='w-full flex flex-row justify-between items-center'>
              <h1 className='text-2xl font-semibold text-black border-b-2 border-blue-500'>
                削除完了
              </h1>
              <button onClick={onClose}>
                <IconContext.Provider value={{ size: '2em', color: 'black' }}>
                  <RiCloseCircleFill />
                </IconContext.Provider>
              </button>
            </div>
            <p>このタスクを削除しますか？</p>
          </div>
        </div>
      </div>
    )
  } else {
    return null
  }
}
