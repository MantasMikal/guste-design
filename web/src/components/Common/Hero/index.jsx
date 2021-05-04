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
import Type from 'Primitive/Type'

const COLORS = [
  '#FFE000',
  '#EE724B',
  '#E94A3B',
  '#E694BF',
  '#CD4592',
  '#58B789',
  '#277FC3',
  '#6164AB',
  
]

const instructionTextMap = {
  0: 'Pick a color',
  1: 'You know what to do next ;)',
  2: ''
}

const Hero = () => {
  const [instructionStep, setInstructionStep] = useState(0)
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

  const handleCurrentColorChange = (color) => {
    instructionStep === 0 && setInstructionStep(1)
    setCurrentColor(color)
  }

  const handleColorChange = (part) => {
    instructionStep === 1 && setInstructionStep(2)
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
      <div className={styles.ToolBar}>
        <div className={styles.Tools}>
          <ButtonBase
            className={styles.Restart}
            onClick={() => handleRestart()}
          >
            <VscDebugRestart size="2.5em" />
          </ButtonBase>
          <ColorPalette
            className={styles.ColorPalette}
            colors={COLORS}
            onColorClick={handleCurrentColorChange}
            activeColor={currentColor}
          />
        </div>
        <Type size='base' className={styles.Instructions}>
          {instructionTextMap[instructionStep]}
        </Type>
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
