import * as React from 'react'
import type { GatsbyBrowser } from 'gatsby'
import Layout from './src/components/layout'

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element }) => {
  return <Layout>{element}</Layout>
}

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(`This application has been updated. ` + `Reload to display the latest version?`)

  if (answer === true) {
    window.location.reload()
  }
}

export const onRouteUpdate = ({ location }) => {
  if (process.env.NODE_ENV !== 'production') {
    return null
  }

  const pagePath = location ? location.pathname + location.search + location.hash : undefined
  setTimeout(() => {
    if (typeof gtag === 'function') {
      gtag('event', 'page_view', 'gatsby-route-change', { page_path: pagePath })
    }
  }, 100)
}
