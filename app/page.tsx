import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin, Rewind } from 'lucide-react'
import { copyClick, copyOut } from './copy'

export default function Home() {
  return (
    <body className='l-wrapper c-wrapper'>
      <div className='l-noise' />
      <div className='is-film-border__trigger' />

      <header className='l-header c-header'>
        <div className='l-header__container'>
          <div className='l-navbar'>
            <Link href={'#projects'} className='l-navbar__option c-navbar__option'>
              Projects
            </Link>
            <Link href={'#contact'} className='l-navbar__option c-navbar__option'>
              Contact
            </Link>
          </div>
          <Link href={'#home'} className='l-navbar__option c-icon u-font--bigger'>
            &lt;&lt;
          </Link>
        </div>
      </header>

      <div className='l-glitch-area'>
        <main className='l-main'>
          <div className='l-main__container is-glitching'>
            <section id='home' className='l-section'>
              <div className='l-text c-text'>
                <p className='u-margin--none'>
                  I&apos;m <span className='u-font--shenttpuro u-color--white'>Pedro Catunda</span> , a
                  <span className='u-wrap--none'> Computer Science student </span>
                </p> 
                <p>
                  and a KENSHI!
                </p>
                <div className='u-gap u-gap--large'>
                  <Link href={'https://github.com/Pedro-Cat'} target='_blank'>
                    <Github className='u-color--white u-hover--scale' />
                  </Link>
                  <Link href={'https://www.linkedin.com/in/pedro-catunda-019a3b249/'} target='_blank'>
                    <Linkedin className='u-color--white u-hover--scale' />
                  </Link>
                </div>
              </div>
              <div className='l-img l-img--portrait c-img c-img--portrait'>
                <Image src={'/myself.JPG'} fill alt='myself' className='u-gradient--top-bottom-lite' />
              </div>
            </section>

            <section className='l-section l-section--background c-img c-img--background-invert'>
              <Image src={'/kendo-fight-hd.png'} fill alt='bg' className='u-gradient--top-bottom' />
            </section>

            <section className='l-section'>
              <div className='l-text c-text'>
                <span className='u-color--white u-font--bigger'>Check out my valuable fights!</span>
                <div className='l-img l-img--arrow c-img c-img--arrow'>
                  <Image src={'/japanese-arrow2.png'} fill alt='arrow' />
                </div>
              </div>
            </section>

            <section id='projects' className='l-section l-section--content'>
              <div className='l-section__content'>
                <div className='l-section__title c-section__title'>
                  Academic Papers:
                </div>
                <div className='l-section__project c-section__project'>
                  <div className='l-section__image c-img c-img--background-gray'>
                    <Image src={'/cnn-meters-project.png'} fill alt='image' className='u-gradient--top-bottom' />
                  </div>
                  <div className="l-section__info">
                    <div className="l-section__title c-section__title u-font--small">
                      CEGAS-AMR: A Dataset and Application for Automatic Gas Meter Reading using CNN
                    </div>
                  </div>
                </div>

                <div className='l-section__title c-section__title'>
                  Personal Projects:
                </div>
                <div />
                <div className='l-section__project c-section__project u-cursor-default'>
                  <div className='l-section__image c-img c-img--background-gray'>
                    <Image src={'/placeholder.jpg'} fill alt='placeholder' className='u-gradient--top-bottom' />
                  </div>
                  <div className="l-section__info">
                    <div className="l-section__title c-section__title u-font--small">
                      Project-MGL <br /> - Coming Soon -
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* <section className='l-section l-section--background c-img c-img--background-gray'>
              <Image src={'/blossom-background.png'} fill alt='bg' className='u-gradient--top-bottom' />
            </section> */}

            <section className='l-section'>
              <div id='contact' className='l-contact__anchor' />
              <div className='l-text c-text'>
                <span className='u-color--white u-font--bigger'>Contact me!</span>
                <div className='l-img l-img--arrow c-img c-img--arrow'>
                  <Image src={'/japanese-arrow2.png'} fill alt='arrow' />
                </div>
                <div className='l-contact'>
                  <div className='l-email c-email' onClick={copyClick} onMouseOut={copyOut}>
                    pcatundarocha@gmail.com
                    <div className='l-email__tag c-email__tag'>
                      Loading JS...
                    </div>
                  </div>
                  <div className='u-gap u-gap--large'>
                    <Link href={'https://www.linkedin.com/in/pedro-catunda-019a3b249/'} target='_blank'>
                      <Linkedin className='u-color--white u-hover--scale' />
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            <section className='l-section l-section--background c-img c-img--background-gray u-width-90p u-mobile-disapear'>
              <Image src={'/village-paintbrush.jpg'} fill alt='bg' className='u-gradient--top-bottom' />
            </section>

            <section className='l-section l-section--background c-img c-img--background-gray u-height-100vh u-mobile-only'>
              <Image src={'/mountain3.jpg'} fill alt='bg' className='u-gradient--top-bottom' />
            </section>

            <section id='contact' className='l-section'>
              <div className='l-text c-text'>
                <span className='u-color--white u-font--bigger'>The End?</span>
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
