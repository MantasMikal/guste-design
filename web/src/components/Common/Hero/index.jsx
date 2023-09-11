/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useCallback } from 'react'
import { string } from 'prop-types'
import { useSpring, to } from 'react-spring'
import { RiRestartLine } from 'react-icons/ri'
import { GrClear } from 'react-icons/gr'
import classNames from 'classnames'
import Container from 'Primitive/Container'
import GugisHead from 'Common/GugisHead'
import ColorPalette from 'Common/ColorPalette'
import { defaultColors, clearedColors } from 'Common/GugisHead/defaultColors'

import styles from './Hero.module.scss'
import ButtonBase from 'Primitive/ButtonBase'
import Type from 'Primitive/Type'
import { useEffect } from 'react'
import Pointer from 'Common/GugisHead/Pointer'
import SmartLink from 'Primitive/SmartLink'
import { NavigationContext } from 'Context/NavigationContext'
import { StaticImage } from 'gatsby-plugin-image'

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
  0: 'Pick a color.',
  1: 'Color your identity.',
  2: ''
}

const Hero = () => {
  const { setContactModalOpen } = React.useContext(NavigationContext)
  const [instructionStep, setInstructionStep] = useState(0)
  const [reveal, setReveal] = useState(false)
  const [currentColor, setCurrentColor] = useState('white')
  const [{ st, xy }, set] = useSpring(() => ({
    st: 0,
    xy: [0, 0],
    config: { mass: 1, tension: 350, friction: 15, precision: 0.1 }
  }))
  const [partColors, setPartColors] = useState({
    initialized: false,
    ...defaultColors
  })

  const onMove = useCallback(
    ({ clientX: x, clientY: y }) => {
      set({ xy: [x - window.innerWidth / 2, y - window.innerHeight / 2] })
    },
    [set]
  )

  const pupilInterp = to([st, xy], (o, xy) => {
    return `translate(${-xy[0] / 25},${xy[1] / 20 + o / 8})`
  })

  const handleCurrentColorChange = (color) => {
    if (instructionStep === 0) {
      setInstructionStep(1)
    }
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

  useEffect(() => {
    {
      const timeout = setTimeout(() => {
        setReveal(true)
        handleClear()
      }, 2000)
      return () => clearTimeout(timeout)
    }
  }, [])

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
      <div className={styles.BgImage}>
        <StaticImage
          src={'./sky.jpg'}
          placeholder="blurred"
          layout="fullWidth"
          objectFit="cover"
        />
      </div>
      <Pointer id="cursor" className={styles.Cursor} fill={currentColor} />
      <div className={styles.ToolBar}>
        <div className={styles.Title}>
          <h1>Brand identity design & original art with personality.</h1>
        </div>
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
          &nbsp;{instructionTextMap[instructionStep]}
        </Type>
      </div>
      <Container size="wide" gutter center>
        <div className={styles.HeadWrapper}>
          <GugisHead
            className={classNames(reveal && styles.reveal)}
            pupilInterp={pupilInterp}
            partColors={partColors}
            handleColorChange={handleColorChange}
          />
        </div>
        <div className={styles.DescriptionWrapper}>
          <Type size="baseSmall" as="p" className={styles.Description}>
            Want to elevate your identity? Upgrade your dream vision with
            personality-filled designs that resonate both with you and your
            audience.
          </Type>
          <SmartLink
            onClick={() => setContactModalOpen(true)}
            className={styles.ConnectButton}
          >
            <Type size="base" as="span">
              Connect
            </Type>
          </SmartLink>
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
