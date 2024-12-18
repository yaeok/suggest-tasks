import Image from 'next/image';

import Header from '@/components/Header/Header';

export default function LandingPage() {
  return (
    <section className='w-full min-h-screen bg-blue-50'>
      <Header isSignedIn={true} />
      <section className='container mx-auto pt-64 pb-32'>
        <div className='flex flex-row items-center justify-center gap-8'>
          <div className='w-1/2'>
            <h1 className='text-3xl font-extrabold'>初学者エンジニアの</h1>
            <h1 className='text-3xl font-extrabold'>「勉強法がわからない」を</h1>
            <h1 className='text-3xl font-extrabold'>素早く解決します！</h1>
          </div>
          <div className='w-1/2'>
            <Image
              src='/images/landing_step_up_image.jpg'
              alt='image'
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
    </section>
  )
}
