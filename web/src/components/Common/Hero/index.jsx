/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useCallback } from 'react'
import { string } from 'prop-types'
import { useSpring, to } from 'react-spring'
import { RiRestartLine } from 'react-icons/ri'
import { GrClear } from 'react-icons/gr'
import classNames from 'classnames'
import useLocalStorage from 'hooks/useLocalStorage'
import Container from 'Primitive/Container'
import GugisHead from 'Common/GugisHead'
import ColorPalette from 'Common/ColorPalette'
import { defaultColors, clearedColors } from 'Common/GugisHead/defaultColors'

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
  '#6164AB'
]

const instructionTextMap = {
  0: 'Pick a color',
  1: 'Color your identity - reinvent yourself.',
  2: ''
}

const Hero = () => {
  const [instructionStep, setInstructionStep] = useState(0)
  const [currentColor, setCurrentColor] = useState('white')
  const [{ st, xy }, set] = useSpring(() => ({
    st: 0,
    xy: [0, 0],
    config: { mass: 1, tension: 350, friction: 15, precision: 0.1 }
  }))
  const [partColors, setPartColors] = useLocalStorage('colors', {
    ...defaultColors
  })

  const onMove = useCallback(
    ({ clientX: x, clientY: y }) => {
      set({ xy: [x - window.innerWidth / 2, y - window.innerHeight / 2] })
    },
    [set]
  )

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

  const handleClear = () => {
    setPartColors(clearedColors)
  }

  return (
    <div
      className={styles.Hero}
      onMouseMove={(e) => {
        const cursor = document && document.getElementById('cursor')
        cursor.style.left = `${e.pageX - 15}px`
        cursor.style.top = `${e.pageY - 67}px`
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
            className={classNames(
              styles.Clear,
              instructionStep === 2 && styles.showIntro
            )}
            onClick={() => handleClear()}
          >
            <GrClear size="2em" />
            <span className={styles.Tooltip}>Clear colors</span>
          </ButtonBase>
          <ButtonBase
            className={classNames(
              styles.Restart,
              instructionStep === 2 && styles.showIntro
            )}
            onClick={() => handleRestart()}
          >
            <RiRestartLine size="2.2em" />
            <span className={styles.Tooltip}>Restart</span>
          </ButtonBase>
          <ColorPalette
            className={styles.ColorPalette}
            colors={COLORS}
            onColorClick={handleCurrentColorChange}
            activeColor={currentColor}
          />
        </div>
        <Type size="base" className={styles.Instructions}>
          {instructionTextMap[instructionStep]}
        </Type>
      </div>
      <Container size="wide" gutter center>
        <div className={styles.HeadWrapper}>
          <GugisHead
            pupilInterp={pupilInterp}
            partColors={partColors}
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
