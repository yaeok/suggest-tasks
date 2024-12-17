import Header from '@/components/Header/Header'

export default function LandingPage() {
  return (
    <section className='w-screen min-h-screen bg-blue-50'>
      <Header isSignedIn={true} />
      <section className='container mx-auto pt-64'>
        <h1 className='text-4xl font-semibold text-center text-blue-900'>
          DokuAGT ～独学サポートエージェント～
        </h1>
        <h2 className='text-xl font-semibold text-center text-blue-900'>
          DokuAGTはプログラミング初学者、駆け出しエンジニアへ向けた学習支援サービスです。
        </h2>
        <h2 className='text-xl font-semibold text-center text-blue-900'>
          基礎知識を身に付けた方の次のステップをサポートします。
        </h2>
      </section>
    </section>
  )
}
