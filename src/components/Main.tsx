import * as React from 'react'
import PropTypes from 'prop-types'
import { StaticImage } from 'gatsby-plugin-image'
import { RiFacebookBoxFill } from '@react-icons/all-files/ri/RiFacebookBoxFill'
import { RiTwitterFill } from '@react-icons/all-files/ri/RiTwitterFill'
import { RiInstagramFill } from '@react-icons/all-files/ri/RiInstagramFill'
import { RiGithubFill } from '@react-icons/all-files/ri/RiGithubFill'
import { RiYoutubeFill } from '@react-icons/all-files/ri/RiYoutubeFill'

const Main = props => {
  const close = (
    <div
      className="close"
      onClick={() => {
        props.onCloseArticle()
      }}
    ></div>
  )
  return (
    <div ref={props.setWrapperRef} id="main" style={props.timeout ? { display: 'flex' } : { display: 'none' }}>
      <article
        id="intro"
        className={`${props.article === 'intro' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`}
        style={{ display: 'none' }}
      >
        <a href="https://bibwoe.com" rel="noopener noreferrer" target="_blank" area-label="Bibwoe">
          <h2 className="major">Bibwoe.com</h2>
        </a>
        <span className="image main">
          <a href="https://bibwoe.com" rel="noopener noreferrer" target="_blank" area-label="Bibwoe">
            <StaticImage formats={['auto', 'webp']} src="../../static/assets/pic01.jpg" alt="Mansbooks" />
          </a>
        </span>
        <p>
          Basic Instructions Books While On Earth, Creation Of All{' '}
          <a
            href="https://bibwoe.com/posts/creation-of-all"
            rel="noopener noreferrer"
            target="_blank"
            area-label="Bibwoe"
          >
            Bibwoe.com
          </a>
        </p>
        <p>
          In the Beginning, everything was in Chaos, within the midst, “Void of Life”. Having a slight glow as all
          particles were slightly bouncing off each other. A slight vibrative movement, were the only actions. No
          binding force to create the attractions for life!
        </p>
        {close}
      </article>

      <article
        id="work"
        className={`${props.article === 'work' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`}
        style={{ display: 'none' }}
      >
        <a href="https://mansbooks.com" rel="noopener noreferrer" target="_blank" area-label="Mansbooks">
          <h2 className="major">Mansbooks.com</h2>
        </a>
        <span className="image main">
          <a href="https://mansbooks.com" rel="noopener noreferrer" target="_blank" area-label="Mansbooks">
            <StaticImage formats={['auto', 'webp']} src="../../static/assets/pic02.jpg" alt="Mansbooks" />
          </a>
        </span>
        <p>
          Mansbooks.com is Angelina Jordan's Webinar and Videos Site. A place where all of mankind will keep his views
          on self. Once a year a new page can be added with updates on who you think you are within the context of your
          species.
        </p>
        <p>
          Who are you and what are you, when the time comes to open the books of life, your views will be compared to
          Gods Books of life. Your views of self can be somewhat of a defense to what is held in Gods books of your
          life's iniquitous behaviors.
        </p>
        {close}
      </article>

      <article
        id="about"
        className={`${props.article === 'about' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`}
        style={{ display: 'none' }}
      >
        <a href="https://publiuslogic.com" rel="noopener noreferrer" target="_blank" area-label="PubliusLogic">
          <h2 className="major">PubliusLogic.com</h2>
        </a>
        <span className="image main">
          <a href="https://publiuslogic.com" rel="noopener noreferrer" target="_blank" area-label="PubliusLogic">
            <StaticImage formats={['auto', 'webp']} src="../../static/assets/pic03.jpg" alt="PubliusLogic" />
          </a>
        </span>
        <p>
          At PubliusLogic we Publish Logic as Common Sense. Publius was taken from The Federalist Papers and my
          extensive studies Of the USA Books at Large = Us Congressional Reports most of my focus was on Books I and II,
          including a lot of Notes and Letters from our Founding Fathers as well as reading all of the Publius
          publications and extensively studying the true intent of some. Logic part of the name came from Thomas Payne's
          book, "Common Sense", = Logic.
        </p>
        {close}
      </article>

      <article
        id="contact"
        className={`${props.article === 'contact' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Contact Form</h2>
        <form className="contact-form" action="/api/submit" name="contact" method="POST" enctype="multipart/form-data">
          <input type="hidden" name="form-name" value="contact" />
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="4"></textarea>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>
            <li>
              <input type="reset" value="Reset" />
            </li>
          </ul>
        </form>

        <ul className="icons">
          <li>
            <a
              href="https://twitter.com/donboulton"
              className="icon"
              rel="noopener noreferrer"
              target="_blank"
              area-label="Twitter"
            >
              <RiTwitterFill
                alt="Twitter"
                style={{
                  fontSize: '2rem',
                  color: 'gray',
                }}
              />
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a
              href="https://facebook.com/donboulton"
              className="icon"
              rel="noopener noreferrer"
              target="_blank"
              area-label="Facebook"
            >
              <RiFacebookBoxFill
                alt="Facebook"
                style={{
                  fontSize: '2em',
                  color: 'gray',
                }}
              />
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/boulton3662/"
              className="icon"
              rel="noopener noreferrer"
              target="_blank"
              area-label="Instagram"
            >
              <RiInstagramFill
                alt="Instagram"
                style={{
                  fontSize: '2em',
                  color: 'gray',
                }}
              />
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/donaldboulton/donboulton.com-cloudflare"
              className="icon"
              rel="noopener noreferrer"
              target="_blank"
              area-label="Github"
            >
              <RiGithubFill
                alt="Github"
                style={{
                  fontSize: '2em',
                  color: 'gray',
                }}
              />
              <span className="label">GitHub</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCHED4RFSxXXNGDDvWpgzHXg"
              className="icon"
              rel="noopener noreferrer"
              target="_blank"
              area-label="Youtube"
            >
              <RiYoutubeFill
                alt="Youtube"
                style={{
                  fontSize: '2em',
                  color: 'gray',
                }}
              />
              <span className="label">Youtube</span>
            </a>
          </li>
        </ul>
        {close}
      </article>
    </div>
  )
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
