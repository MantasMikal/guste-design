import React, { useState, useCallback } from 'react'
import { string } from 'prop-types'
import { useSpring, to } from 'react-spring'
import { VscDebugRestart } from 'react-icons/vsc'
import useLocalStorage from 'hooks/useLocalStorage'
import Container from 'Primitive/Container'
import GugisHead from 'Common/GugisHead'
import ColorPalette from 'Common/ColorPalette'
import { defaultColors } from 'Common/GugisHead/defaultColors'

import styles from './Hero.module.scss'
import ButtonBase from 'Primitive/ButtonBase'

const COLORS = [
  '#FFE000',
  '#EE724B',
  '#E94A3B',
  '#E694BF',
  '#CD4592',
  '#58B789',
  '#277FC3',
  '#6164AB'
]

const Hero = () => {
  const [currentColor, setCurrentColor] = useState('white')
  const [{ st, xy }, set] = useSpring(() => ({ st: 0, xy: [0, 0] }))
  const [partColors, setPartColors] = useLocalStorage('colors', {
    ...defaultColors
  })

  const onMove = useCallback(({ clientX: x, clientY: y }) => {
    set({ xy: [x - window.innerWidth / 2, y - window.innerHeight / 2] })
  }, [])

  const pupilInterp = to([st, xy], (o, xy) => {
    return `translate(${xy[0] / 25},${xy[1] / 20 + o / 8})`
  })

  const handleColorChange = (part) => {
    console.log('Changing color', part)
    if (!currentColor) return
    setPartColors({
      ...partColors,
      [part]: currentColor
    })
  }

  const handleRestart = () => {
    setPartColors(defaultColors)
  }

  return (
    <div
      className={styles.Hero}
      onMouseMove={(e) => {
        const cursor = document && document.getElementById('cursor')
        cursor.style.left = `${e.pageX - 16 - 3}px`
        cursor.style.top = `${e.pageY - 70 - 3}px`
        onMove(e)
      }}
    >
      <div
        id="cursor"
        className={styles.Cursor}
        style={{
          backgroundColor: currentColor
        }}
      />
      <div className={styles.Tools}>
        <ButtonBase className={styles.Restart} onClick={() => handleRestart()}>
          <VscDebugRestart size="2.5em" />
        </ButtonBase>
        <ColorPalette
          className={styles.ColorPalette}
          colors={COLORS}
          onColorClick={setCurrentColor}
          activeColor={currentColor}
        />
      </div>
      <Container size="wide" gutter center>
        <div className={styles.HeadWrapper}>
          <GugisHead
            pupilInterp={pupilInterp}
            partColors={partColors}
            currentColor={currentColor}
            handleColorChange={handleColorChange}
          />
        </div>
      </Container>
    </div>
  )
}

Hero.propTypes = {
  title: string,
  subtitle: string
}

export default Hero
