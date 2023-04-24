import { useState } from 'react'
import './App.css'
import { AboutMe } from './components/AboutMe/AboutMe'
import BigCard from './components/BigCard/BigCard'
import ContactMe from './components/ContactMe/ContactMe'
import { Footer } from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import { Presentation } from './components/Presentation/Presentation'
import { SkillsList } from './components/SkillsList/SkillsList'
import { Visualizer } from './components/Visualizer/Visualizer'
import { ProjectCardInterface } from './utils/types'

function App() {
  document.title = 'Sebastian Gonzales - Portfolio'
  const [bigCardData, setBigCardData] = useState<ProjectCardInterface>({
    name: '',
    api: '',
    description: '',
    tech: [],
    images: [],
    url: '',
    repo: '',
    desktop: false,
    mobile: false
  })

  const fillBigCard = (a:ProjectCardInterface) => {
    setBigCardData(a)
  }
  const closeBigCard = () => {
    setBigCardData({
      name: '',
      api: '',
      description: '',
      tech: [],
      images: [],
      url: '',
      repo: '',
      desktop: false,
      mobile: false
    })
  }
  return (
    <>
      <NavBar />
      <Visualizer setBigCardData={fillBigCard} />
      <Presentation />
      <SkillsList />
      <AboutMe />
      <ContactMe />
      <Footer />
      {
        bigCardData.name !== '' && 
        <BigCard data={bigCardData} closeBigCard={closeBigCard} />
      }
    </>
  )
}

export default App
