import { RxHamburgerMenu } from 'react-icons/rx'

export default function DrawerButton() {
  return (
    <button className='block lg:hidden' onClick={() => console.log('click')}>
      <RxHamburgerMenu />
    </button>
  )
}
