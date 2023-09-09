import Image from 'next/image'
import { Rewind } from 'lucide-react'

export default function Home() {
  return (
    <body className='l-wrapper c-wrapper'>
      <div className='l-noise'></div>

      <header className='l-header c-header'>
        <div className='l-header__container'>
          {/* sobe para o inicio */}
          <Rewind className='l-icon c-icon'></Rewind>
          <div className='l-navbar'>
            {/* manda para projects */}
            <div className='l-navbar__option c-navbar__option'>
              Projects
            </div>
            {/* manda para contact */}
            <div className='l-navbar__option c-navbar__option'>
              Contact
            </div>
          </div>
        </div>
      </header>

      <main className='l-main'>
        <div className='l-main__container'>
          <div className='l-card'>
            <div className='c-text'>
              <p>
                I'm <span className='u-font--shenttpuro u-color--white'>Pedro Catunda</span> , a Computer Science student
              </p> 
              <p>
                and a KENSHI!
              </p>
            </div>
            <div className='l-img c-img'>
              <Image src={'/myself.JPG'} fill alt='myself' />
            </div>
          </div>
        </div>
      </main>

      <footer className='l-footer'>
        <div className='l-footer__container'>
          footer
        </div>
      </footer>

    </body>
  )
}
