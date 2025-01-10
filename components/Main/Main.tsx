import SideNav from '@/components/SideNav/SideNav'

export default function Main(
  props: Readonly<{
    children: React.ReactNode
  }>
) {
  return (
    <main>
      <section className='min-h-screen bg-blue-50'>
        <div className='max-w-screen-xl min-h-screen mx-auto flex flex-col md:flex-row'>
          <section className='md:h-screen md:w-1/4 px-4 py-8 md:top-0 md:left-0 md:sticky md:z-10'>
            <SideNav />
          </section>
          <section className='md:w-3/4 px-4 py-8 flex flex-col justify-between items-center gap-4'>
            {props.children}
          </section>
        </div>
      </section>
    </main>
  )
}
