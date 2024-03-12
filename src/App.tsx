import { useState } from 'react'
import './App.css'
import BigCard from './components/BigCard/BigCard'
import ContactMe from './components/ContactMe/ContactMe'
import { Footer } from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import { Presentation } from './components/Presentation/Presentation'
import { SkillsList } from './components/SkillsList/SkillsList'
import { ProjectCardInterface } from './utils/types'
import ProjectsList from './components/ProjectsList/ProjectsList'

// const GOLDEN = "#D8A338"
// const DGOLDEN = "#2F2209"
// const LGOLDEN = "232, 200, 136"

// const PURPLE = "#AF4390"
// const DPURPLE = "#250E1E"
// const LPURPLE = "211, 141, 191"

// const BLUE = "#2C4C8E"
// const DBLUE = "#080F1B"
// const LBLUE = "107, 141, 209"

const COLOR = ["#2C4C8E", "#D8A338", "#AF4390"]
const DCOLOR = ["#080F1B", "#2F2209", "#250E1E"]
const LCOLOR = ["107, 141, 209", "232, 200, 136", "211, 141, 191"]


function App() {
  document.title = 'Sebastian Gonzales - Portfolio'
  const [bigCardData, setBigCardData] = useState<ProjectCardInterface>({
    name: '',
    api: '',
    shortDesc: "",
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
      shortDesc: "",
      description: '',
      tech: [],
      images: [],
      url: '',
      repo: '',
      desktop: false,
      mobile: false
    })
  }

  const [pos, setPos] = useState(Math.round(Math.random() * 2))
  const [color, setColor] = useState({
    color: COLOR[pos],
    light: LCOLOR[pos],
    dark: DCOLOR[pos]
  })

  const changeColors = () => {
    if(pos === 2) {
      setPos(0)
      setColor({
        color: COLOR[0],
        light: LCOLOR[0],
        dark: DCOLOR[0]
      })
    } else {
      setColor({
        color: COLOR[pos + 1],
        light: LCOLOR[pos + 1],
        dark: DCOLOR[pos + 1]
      })
      setPos(pos + 1)
    }
  }
  return (
    <div 
    className="max-w-full box-content min-h-screen flex items-center
    flex-col gap-16 relative
    "
    // style={{
    //   background: `radial-gradient(at 0% 0%, ${color.dark} 0px, transparent 50%), radial-gradient(at 100% 100%, ${color.dark} 0px, transparent 50%)`,
    // }}
    >
      <NavBar color={color.color} darkColor={color.dark} changeColors={changeColors} />
      <Presentation color={color.color} lightColor={color.light} darkColor={color.dark} />
      <ProjectsList color={color.color} lightColor={color.light} darkColor={color.dark} openCard={fillBigCard}/>
      <SkillsList color={color.color} lightColor={color.light} darkColor={color.dark} />
      {
        bigCardData.name !== '' && 
        <BigCard data={bigCardData} closeBigCard={closeBigCard}
         color={color.color} darkColor={color.dark}
        />
      }
      <ContactMe color={color.color} lightColor={color.light} darkColor={color.dark} />
      <Footer color={color.color} darkColor={color.dark} />
    </div>
  )
}
export default App
