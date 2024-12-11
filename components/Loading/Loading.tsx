type LoadingProps = {
  message: string
}

export default function Loading({ message }: LoadingProps) {
  return (
    <div className='w-screen min-h-screen absolute top-0 left-0 flex justify-center items-center bg-white z-50'>
      <h1 className='text-4xl font-semibold text-black animate-pulse'>
        {message}
      </h1>
    </div>
  )
}
