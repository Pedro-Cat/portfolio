import Image from 'next/image'
import { Rewind } from 'lucide-react'

export default function Home() {
  return (
    <body className='l-wrapper c-wrapper'>
      <div className='l-noise'></div>
      <div className='is-film-border__trigger'></div>

      <header className='l-header c-header'>
        <div className='l-header__container'>
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
          {/* sobe para o inicio */}
          {/* <Rewind className='l-icon c-icon'></Rewind> */}
          <div className='l-navbar__option c-icon u-font--bigger'>
            &lt;&lt;
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
              <div className='l-img l-img--portrait c-img--portrait'>
                <Image src={'/myself.JPG'} fill alt='myself' className='u-gradient--bottom' />
              </div>
            </section>

            <section className='l-section'>
              <div className='l-text c-text'>
                <span className='u-color--white u-font--bigger'>Check out my valuable fights!</span>
                <div className='l-img l-img--arrow c-img--arrow'>
                  <Image src={'/japanese-arrow2.png'} fill alt='arrow' />
                </div>
              </div>
            </section>

            <section className='l-section l-section--background c-img--background-invert'>
              <Image src={'/kendo-fight-hd.png'} fill alt='bg' className='u-gradient--top-bottom' />
            </section>

            <section className='l-section l-section--content'>
              <div className='l-section__content'>
                <div className='l-section__title'>
                  Academic Papers
                </div>
                <div className='l-section__project'>
                  Project
                </div>
              </div>
            </section>

            {/* <section className='l-section l-section--background c-img--background-gray'>
              <Image src={'/blossom-background.png'} fill alt='bg' className='u-gradient--top-bottom' />
            </section> */}

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
