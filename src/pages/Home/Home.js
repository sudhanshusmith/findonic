import React from 'react'

import Hero from './Hero/Hero'
import Step from './Step/Step'
import How from './How/How'
import Download from './Download/Download'

function Home() {
  return (
    <>
    <div id="Top" class="page-content">
    <Hero />
    <Step />
    <How />
    <Download />
    </div>
    </>
  )
}

export default Home