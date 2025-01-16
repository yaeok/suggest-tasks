type LoadingProps = {
  message: string
}

export default function Loading({ message }: LoadingProps) {
  return (
    <div className='w-full h-full flex justify-center items-center z-50'>
      <h1 className='text-4xl font-semibold text-black animate-pulse'>
        {message}
      </h1>
    </div>
  )
}
