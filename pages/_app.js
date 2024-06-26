import '../styles/global.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
import 'prism-themes/themes/prism-dracula.css'
import { Analytics } from '@vercel/analytics/react';

const App = ({ Component, pageProps }) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  // return <Component {...pageProps} />
  return (
  <>
  <Component {...pageProps} />
  <Analytics />
  </>
  );
}

export default App
// updated analytics for website