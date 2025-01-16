import Image from 'next/image'

import Header from '@/components/Header/Header'

export default function LandingPage() {
  return (
    <section className='w-full min-h-screen bg-blue-50'>
      <Header isSignedIn={true} isTopPage={true} />
      <section className='w-full mx-auto pt-40 pb-32 flex flex-col items-center'>
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
              「何を作ったらいいかわからない」を解決します
            </h2>
            <h2 className='text-xl font-semibold text-center text-blue-900'>
              開発を通して、プログラミングスキルを向上させましょう
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
          <div className='w-full space-y-8 pt-16 pb-8'>
            <h1 className='text-4xl font-bold text-center text-blue-900'>
              こんな悩みを持っていませんか？
            </h1>

            <section className='w-full flex flex-col items-center gap-8'>
              <div className='relative inline-block ml-5 mr-12 px-8 py-4 border-2 border-black rounded-lg bg-white text-left text-xl text-black speechBubbleLeft'>
                スクールに通ったが、次に何をしたらいいかわからない
              </div>
              <div className='relative inline-block mr-5 ml-16 px-8 py-4 border-2 border-black rounded-lg bg-white text-left text-xl text-black speechBubbleRight'>
                何か作って学びたいが、何を作ったらいいかわからない
              </div>
              <div className='relative inline-block ml-5 mr-12 px-8 py-4 border-2 border-black rounded-lg bg-white text-left text-xl text-black speechBubbleLeft'>
                基礎的な知識はあるが、何から始めたらいいかわからない
              </div>
            </section>
          </div>
        </div>
        <div className='relative w-full py-16 flex flex-col items-center gap-8'>
          <div className='w-full absolute flex justify-center'>
            <h3 className='text-9xl opacity-5'>RESOLVED</h3>
          </div>
          <div className='w-full space-y-8 pt-16 pb-8'>
            <h1 className='text-4xl font-bold text-center text-blue-900'>
              DokuAGTで解消しましょう！
            </h1>

            <section className='w-full flex flex-col gap-8 sm:gap-6 justify-center items-center px-2 sm:px-8'>
              <div className='relative w-full lg:w-2/3 px-4 py-8 sm:p-8 bg-white flex flex-col rounded-lg shadow-lg hover:shadow-none hover:-translate-y-2 duration-300 transition-all'>
                <h1 className='text-2xl font-semibold'>実装の提案</h1>
                <p className='p-2'>
                  ToDoアプリやカレンダーアプリ、ブログ等、基礎的なアプリケーションの実装を提案します
                  <br />
                  提案されるアプリケーションは、自分のスキルに合わせて選択することが可能です！
                </p>
                <Image
                  src='/images/check_mark.png'
                  alt='Motivation'
                  width={90}
                  height={90}
                  className='absolute -top-10 -left-8 sm:-top-8 sm:-left-12'
                />
              </div>
              <div className='relative w-full lg:w-2/3 px-4 py-8 sm:p-8 bg-white flex flex-col rounded-lg shadow-lg hover:shadow-none hover:-translate-y-2 duration-300 transition-all'>
                <h1 className='text-2xl font-semibold'>モチベーション維持</h1>
                <p className='p-2'>
                  基礎的なアプリケーション開発のため、実装期間は1ヶ月を想定しており、素早い開発が出来るような提案を行います！
                  <br />
                  タスクの生成は3回まで生成出来るため、違うアプリをいくつか実装することが可能です！
                </p>
                <Image
                  src='/images/check_mark.png'
                  alt='Motivation'
                  width={90}
                  height={90}
                  className='absolute -top-10 -left-8 sm:-top-8 sm:-left-12'
                />
              </div>
              <div className='relative w-full lg:w-2/3 px-4 py-8 sm:p-8 bg-white flex flex-col rounded-lg shadow-lg hover:shadow-none hover:-translate-y-2 duration-300 transition-all'>
                <h1 className='text-2xl font-semibold'>幅広い学習</h1>
                <p className='p-2'>
                  難易度は、初学者向けから中級者向けに提案しており、自分のスキルに合わせたアプリケーション開発が可能です！
                  <br />
                  現在は、Next.jsとReact.jsを使用したアプリケーションの提案を行っております！
                  <br />
                  <span className='text-red-500 font-semibold'>
                    ※今後の実装で開発言語を追加していく予定です
                  </span>
                </p>
                <Image
                  src='/images/check_mark.png'
                  alt='Motivation'
                  width={90}
                  height={90}
                  className='absolute -top-10 -left-8 sm:-top-8 sm:-left-12'
                />
              </div>
            </section>
          </div>
        </div>
        <div className='relative w-full py-16 flex flex-col items-center gap-8'>
          <div className='w-full absolute flex justify-center'>
            <h3 className='text-9xl opacity-5'>SERVICE</h3>
          </div>
          <div className='w-full space-y-8 pt-16 pb-8'>
            <h1 className='text-4xl font-bold text-center text-blue-900'>
              DokuAGTが提供するサービス
            </h1>

            <section className='w-full flex flex-col gap-6 justify-center items-center px-2 sm:px-8'>
              <div className='w-full flex flex-col items-center'>
                <div className='relative w-full lg:w-3/4 aspect-video bg-white rounded-lg shadow-lg'>
                  <Image
                    src='/images/generate_task.jpeg'
                    alt='generate task'
                    fill
                    style={{ objectFit: 'contain' }}
                    className='rounded-lg'
                  />
                </div>
                <div className='w-full md:w-1/2 flex flex-col items-center py-8'>
                  <div className='flex flex-col md:flex-row items-center md:gap-8'>
                    <div className='py-4 flex flex-row gap-2'>
                      <h4 className='pt-1 text-sm font-mono font-extrabold text-blue-500'>
                        FEATURE
                      </h4>
                      <h1 className='text-4xl text-blue-500'>01</h1>
                    </div>
                    <h1 className='pt-1 text-3xl font-bold'>タスク生成</h1>
                  </div>
                  <div className='w-full flex items-center justify-center p-4'>
                    <p className='text-sm md:text-base text-center font-semibold text-gray-500'>
                      自信のスキルに合わせたアプリケーション開発の提案を行います！
                      <br />
                      使用したいライブラリやアプリケーションの難易度を選択し、タスクを生成します！
                    </p>
                  </div>
                </div>
              </div>
              <div className='w-full flex flex-col items-center'>
                <div className='relative w-full lg:w-3/4 aspect-video bg-white rounded-lg shadow-lg'>
                  <Image
                    src='/images/generate_task.jpeg'
                    alt='generate task'
                    fill
                    style={{ objectFit: 'contain' }}
                    className='rounded-lg'
                  />
                </div>
                <div className='w-full md:w-1/2 flex flex-col items-center py-8'>
                  <div className='flex flex-col md:flex-row items-center md:gap-8'>
                    <div className='py-4 flex flex-row gap-2'>
                      <h4 className='pt-1 text-sm font-mono font-extrabold text-blue-500'>
                        FEATURE
                      </h4>
                      <h1 className='text-4xl text-blue-500'>02</h1>
                    </div>
                    <h1 className='pt-1 text-3xl font-bold'>最適期間の提案</h1>
                  </div>
                  <div className='w-full flex items-center justify-center p-4'>
                    <p className='text-sm md:text-base text-center font-semibold text-gray-500'>
                      CRUD等の基礎的な機能を搭載したアプリケーションの開発を選択できるため、
                      <br />
                      1ヶ月で全て実装出来るような提案を行います！
                    </p>
                  </div>
                </div>
              </div>
              <div className='w-full flex flex-col items-center'>
                <div className='relative w-full lg:w-3/4 aspect-video bg-white rounded-lg shadow-lg'>
                  <Image
                    src='/images/show_digitization.jpeg'
                    alt='generate task'
                    fill
                    style={{ objectFit: 'contain' }}
                    className='rounded-lg'
                  />
                </div>
                <div className='w-full md:w-1/2 flex flex-col items-center py-8'>
                  <div className='flex flex-col md:flex-row items-center md:gap-8'>
                    <div className='py-4 flex flex-row gap-2'>
                      <h4 className='pt-1 text-sm font-mono font-extrabold text-blue-500'>
                        FEATURE
                      </h4>
                      <h1 className='text-4xl text-blue-500'>03</h1>
                    </div>
                    <h1 className='pt-1 text-3xl font-bold'>データの可視化</h1>
                  </div>
                  <div className='w-full flex items-center justify-center p-4'>
                    <p className='text-sm md:text-base text-center font-semibold text-gray-500'>
                      タスクの完了・未完了を可視化し、学習の進捗を確認することができます!
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className='relative w-full py-16 flex flex-col items-center gap-8'>
            <div className='w-full absolute flex justify-center'>
              <h3 className='text-9xl opacity-5'>CONTACT</h3>
            </div>
            <div className='w-full space-y-8 pt-16 pb-8'>
              <h1 className='text-4xl font-bold text-center text-blue-900'>
                よくあるお問い合わせ
              </h1>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
