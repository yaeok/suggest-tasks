import Link from 'next/link'
import { RoutePath } from '@/constants/RoutePath'

// お問合せ要件選択
const ListItem = [
  '利用料金について',
  '資料請求について',
  'サポート内容について',
  'その他',
]

export default function ContactPage() {
  return (
    <div className='w-full min-h-screen bg-blue-50 flex flex-col justify-center items-center'>
      <header className='absolute top-0 left-0 w-full px-4 lg:px-16 py-4'>
        <h1 className='text-3xl font-semibold text-black'>
          <Link href={RoutePath.HOME}>
            <span className='hover:text-blue-500'>DokuAGT</span>
          </Link>
        </h1>
      </header>
      <div className='w-full md:w-2/3 lg:w-1/3 py-8 flex flex-col items-center gap-4 bg-white rounded-lg shadow-lg'>
        <h1 className='text-4xl font-semibold text-black text-center py-4'>
          お問い合わせフォーム
        </h1>
        <form className='w-full px-4'>
          <label htmlFor='' className='text-sm'>
            お問い合わせ区分
            <span> *</span>
          </label>
          <div className='w-full p-2 border border-gray-300 rounded-md'>
            <select name='category' className='w-full'>
              <option value=''></option>
              {ListItem.map((ListItem) => (
                <option value={ListItem}>{ListItem}</option>
              ))}
            </select>
          </div>

          <label htmlFor='' className='text-sm'>
            お名前
            <span> *</span>
          </label>
          <input
            type='text'
            placeholder='山田 太郎'
            className='w-full p-2 border border-gray-300 rounded-md'
          />
          <label className='text-sm'>
            メールアドレス
            <span> *</span>
          </label>
          <input
            type='email'
            placeholder='mail@example.com'
            className='w-full p-2 border border-gray-300 rounded-md'
          />
          <label htmlFor='' className='text-sm'>
            お問い合わせ内容
          </label>
          <textarea
            placeholder='例：利用料金について知りたい'
            className='w-full p-2 border border-gray-300 rounded-md'
          />
          <button
            type='submit'
            className='w-full py-2 rounded-md bg-blue-500 text-white font-semibold shadow-lg hover:shadow-none hover:translate-y-1 hover:duration-300 transition-all'
          >
            送信
          </button>
        </form>
      </div>
    </div>
  )
}
