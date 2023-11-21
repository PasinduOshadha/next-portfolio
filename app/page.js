import Image from 'next/image'
import Link from 'next/link'
import dp from './images/dp-pasindu-oshadha.jpeg'
import './styles/theme-styles.css'

import IconListItem from '@components/IconListItem/IconListItem'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center p-3 sm:p-0">
      <div className='fade-in-bottom card flex flex-col items-center w-100 md:w-50 lg:w-2/4 xl:w-2/5 bg-zinc-900 p-10 rounded-md transition-all duration-200 hover:bg-zinc-800'>
        <Image
        className='w-52 sm:w-23 md:w-48 lg:w-40 rounded-full mb-4'
        src={dp} alt='Pasindu Oshadha'
        placeholder='blur'
        blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN88x0AAtUB5fwEgi0AAAAASUVORK5CYII='
        />
        <h1 className='text-xl md:text-2xl font-light mb-4'>Hello  <span className='wave'>👋</span></h1>
        <h2 className="text-white text-3xl md:text-4xl font-regular mb-4 text-center">I am Pasindu Oshadha</h2>
        <div>
          <p className='text-white text-center font-light'>I am deeply interested in developing web applications with best ever user experience to make the internet more user friendly to everyone.</p>
        </div>
        <div className="contact-wrpper text-white mt-5">
          <p className='mb-4 text-center'>Contact Me</p>
          <div className="social-media flex flex-row justify-center gap-x-3.5 items-center">

            <IconListItem icon={faFacebook} url={'https://m.me/Pasindu.Oshadha'} />

            <IconListItem icon={faLinkedin} url={'https://www.linkedin.com/in/pasindu7/'} />

            <Link
            className='flex flex-row gap-x-2 bg-white text-black px-4 py-2 rounded-full hover:text-white transition-all ease-in-out duration-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500' href={'tel:0740836021'}>
              Ring Me
              <FontAwesomeIcon icon={faPhone} width={'15px'} />
              </Link>

          </div>
        </div>
      </div>
    </main>
  )
}
