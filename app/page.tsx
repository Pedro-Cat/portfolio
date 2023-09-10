import Image from 'next/image'
import { Rewind } from 'lucide-react'

export default function Home() {
  return (
    <body className='l-wrapper c-wrapper'>
      <div className='l-noise'></div>
      <div className='is-film-border__trigger'></div>

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

      <div className='l-glitch-area'>
        <main className='l-main'>
          <div className='l-main__container is-glitching'>
            <section className='l-section'>
              <div className='l-text c-text'>
                <p className='u-margin--none'>
                  I&apos;m <span className='u-font--shenttpuro u-color--white'>Pedro Catunda</span> , a
                  <span className='u-wrap--none'> Computer Science student </span>
                </p> 
                <p>
                  and a KENSHI!
                </p>
              </div>
              <div className='l-img c-img'>
                <Image src={'/myself.JPG'} fill alt='myself' className='u-gradient--bottom' />
              </div>
            </section>

            <section className='l-section'>
              <div className='l-text c-text'>
                <span className='u-color--white u-font--bigger'>Check out my valuable fights!</span>
              </div>
            </section>

            <section className='l-section'>
              <div className='l-text c-text'>
                <span className='u-color--white u-font--bigger'>Check out my valuable fights!</span>
              </div>
            </section>
            <section className='l-section'>
              <div className='l-text c-text'>
                <span className='u-color--white u-font--bigger'>Check out my valuable fights!</span>
              </div>
            </section>
          </div>
        </main>

        <footer className='l-footer'>
          <div className='l-footer__container'>
            footer
          </div>
        </footer>
      </div>

    <div className='is-film-border__bottom'></div>
    </body>
  )
}
