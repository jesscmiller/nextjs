import Layout from '..comps/Layout'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return 
  <Layout>
    <Component {...pageProps} />
  </Layout>
    
}

export default MyApp
