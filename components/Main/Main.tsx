import SideNav from '@/components/SideNav/SideNav'

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
            <SideNav />
          </section>
          <section className='w-3/4 px-4 py-8 flex flex-col justify-between items-center gap-4'>
            {props.children}
          </section>
        </div>
      </section>
    </main>
  )
}
