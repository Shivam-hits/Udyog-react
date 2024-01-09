import React from 'react'
import Header from './container/Header/header'
import Footer  from './container/footer/footer.jsx'
import Landing from "../src/Pages/landing"

function App() {
  return (
    <div>
      {/* homepage */}
      <Landing/>
      <Header />
      <Footer />

    </div>
  )
}

export default App;