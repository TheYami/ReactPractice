import React, { useContext } from 'react'

import Light from '../assets/img/light.svg'
import Dark from '../assets/img/dark.svg'
import { themeContext } from '../App'

function Content() {

    const {theme} = useContext(themeContext)
  return (
    <main className={theme === "dark" ? "dark" : "light"}>
        <div>
            <h1>TheYami Official</h1>
        </div>
        <img src={theme === "dark" ? Dark : Light} alt="img" />
    </main>
  )
}

export default Content