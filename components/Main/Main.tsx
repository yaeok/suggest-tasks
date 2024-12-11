import Link from 'next/link'

export default function Main(
  props: Readonly<{
    children: React.ReactNode
  }>
) {
  return (
    <main>
      <section className='min-h-screen bg-blue-50'>
        <div className='container min-h-screen mx-auto flex flex-row'>
          <section className='h-screen w-1/4 px-4 py-8 top-0 left-0 sticky z-10'>
            <div className='p-8 bg-white rounded-lg'>
              <nav className='flex flex-col gap-16'>
                <ul className='flex flex-col gap-4'>
                  <li className='text-lg'>
                    <Link
                      href=''
                      className='hover:border-b-2 hover:border-blue-500 hover:text-blue-500'
                    >
                      タスク生成
                    </Link>
                  </li>
                  <li className='text-lg'>
                    <Link
                      href=''
                      className='hover:border-b-2 hover:border-blue-500 hover:text-blue-500'
                    >
                      タスク一覧
                    </Link>
                  </li>
                  <li className='text-lg'>
                    <Link
                      href=''
                      className='hover:border-b-2 hover:border-blue-500 hover:text-blue-500'
                    >
                      プロンプト一覧
                    </Link>
                  </li>
                  <li className='text-lg'>
                    <Link
                      href=''
                      className='hover:border-b-2 hover:border-blue-500 hover:text-blue-500'
                    >
                      アカウント
                    </Link>
                  </li>
                </ul>
                <button className='px-4 py-2 text-white font-semibold bg-rose-500 rounded-full shadow-lg hover:shadow-none hover:translate-y-2 hover:duration-300 transition-all'>
                  ログアウト
                </button>
              </nav>
            </div>
          </section>
          <section className='w-3/4 px-4 py-8 flex flex-col justify-between items-center gap-4'>
            {props.children}
          </section>
        </div>
      </section>
    </main>
  )
}
