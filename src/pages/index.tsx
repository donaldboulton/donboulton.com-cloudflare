import * as React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { StaticImage } from 'gatsby-plugin-image'
import loadable from '@loadable/component'

const Main = loadable(() => import('../components/Main'))

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading',
    }
    this.handleOpenArticle = this.handleOpenArticle.bind(this)
    this.handleCloseArticle = this.handleCloseArticle.bind(this)
    this.setWrapperRef = this.setWrapperRef.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  setWrapperRef(node) {
    this.wrapperRef = node
  }

  handleOpenArticle(article) {
    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article,
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout,
      })
    }, 350)
  }

  handleCloseArticle() {
    this.setState({
      articleTimeout: !this.state.articleTimeout,
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: '',
      })
    }, 350)
  }

  handleClickOutside(event) {
    if (this.wrapperRef && event.target.id === 'wrapper') {
      if (this.state.isArticleVisible) {
        this.handleCloseArticle()
      }
    }
  }

  render() {
    return (
      <main location={this.props.location.pathname}>
        <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>
          <div id="wrapper">
            <Header onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout} />
            <Main
              isArticleVisible={this.state.isArticleVisible}
              timeout={this.state.timeout}
              articleTimeout={this.state.articleTimeout}
              article={this.state.article}
              onCloseArticle={this.handleCloseArticle}
              setWrapperRef={this.setWrapperRef}
            />
            <Footer timeout={this.state.timeout} />
          </div>
          <div id="bg">
            <StaticImage id="bg" formats={['auto', 'webp']} src="../../static/assets/bg.jpg" alt="PubliusLogic Image" />
          </div>
        </div>
      </main>
    )
  }
}

export default IndexPage

export const Head = () => (
  <>
    <title>Don Boulton</title>
    <meta name="description" content="Don Boulton Home" />
    <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
    <script type="application/ld+json">
      {JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        about: {
          '@id': 'https://donboulton.com',
        },
        audience: 'public',
        abstract:
          'PubliusLogic has Topics on Creation, Law, USA and World Governments, Life Matters. Our Main focus is the Re-Creation of Mankind to the Spiritual Beings you have forgotten about, as you only live in the Flesh. Your Soul and Spirit you deny.',
        author: {
          '@id': 'https://donboulton.com',
        },
        copyrightHolder: {
          '@id': 'https://publiuslogic.com',
        },
        copyrightYear: '2022',
        creator: {
          '@id': 'https://publiuslogic.com',
        },
        description: 'PubliusLogic name means to Publish Logic',
        image: {
          '@type': 'ImageObject',
          url: 'https://donboulton.com/static/assets/bg.jpg',
          width: '1400',
          height: '450',
        },
        inLanguage: 'en',
        name: 'PubliusLogic',
        publisher: {
          '@id': 'https://publiuslogic.com',
        },
        url: 'https://publiuslogic.com',
      })}
    </script>
    <script type="application/ld+json">
      {JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Home Page',
        url: 'https://donboulton.com/',
        image: {
          '@type': 'ImageObject',
          url: 'ttps://donboulton.com/static/assets/bg.jpg',
          width: '1400',
          height: '450',
        },
        publisher: {
          '@type': 'PubliusLogic',
          name: 'PubliusLogic',
        },
        license: 'http://publiuslogic.com/blog/0bsd-licence',
      })}
    </script>
  </>
)
