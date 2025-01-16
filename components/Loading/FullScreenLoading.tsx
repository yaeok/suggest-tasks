type FullScreenLoadingProps = {
  message: string
}

export default function FullScreenLoading({ message }: FullScreenLoadingProps) {
  return (
    <section className='w-screen h-screen flex justify-center items-center animate-pulse'>
      <h1 className='text-3xl font-bold animate-pulse'>{message}</h1>
    </section>
  )
}
