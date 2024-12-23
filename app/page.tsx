import Image from 'next/image'

import Header from '@/components/Header/Header'

export default function LandingPage() {
  return (
    <section className='w-full min-h-screen bg-blue-50'>
      <Header isSignedIn={true} />
      <section className='w-full mx-auto pt-56 pb-32 flex flex-col items-center'>
        <div className='py-16 space-y-4'>
          <div className='space-y-1'>
            <h1 className='text-5xl font-extrabold text-center text-blue-900'>
              DokuAGT
            </h1>
            <h1 className='text-5xl font-extrabold text-center text-blue-900'>
              ～独学サポートエージェント～
            </h1>
          </div>

          <div className='space-y-1'>
            <h2 className='text-xl font-semibold text-center text-blue-900'>
              DokuAGTはプログラミング初学者、駆け出しエンジニアへ向けた学習支援サービスです
            </h2>
            <h2 className='text-xl font-semibold text-center text-blue-900'>
              「何を作ったらいいかわからない」を解決します！
            </h2>
          </div>
        </div>
        <div className='py-12'>
          <Image src='/images/career_up.png' alt='' height={800} width={800} />
        </div>
        <div className='relative w-full py-16 flex flex-col items-center gap-8'>
          <div className='w-full absolute flex justify-center'>
            <h3 className='text-9xl opacity-5'>TROUBLE</h3>
          </div>
          <div className='w-full space-y-8 py-8'>
            <h1 className='text-4xl font-bold text-center text-blue-900'>
              こんな悩みを持っていませんか？
            </h1>

            <div className='w-full flex flex-col items-center gap-8'>
              <div className='relative inline-block ml-5 mr-12 px-8 py-4 border-2 border-black rounded-lg bg-white text-left text-xl text-black speechBubbleLeft'>
                スクールに通ったが、次に何をしたらいいかわからない
              </div>
              <div className='relative inline-block mr-5 ml-16 px-8 py-4 border-2 border-black rounded-lg bg-white text-left text-xl text-black speechBubbleRight'>
                何か作って学びたいが、何を作ったらいいかわからない
              </div>
              <div className='relative inline-block ml-5 mr-12 px-8 py-4 border-2 border-black rounded-lg bg-white text-left text-xl text-black speechBubbleLeft'>
                基礎的な知識はあるが、実務で使えるスキルが身についていない
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
