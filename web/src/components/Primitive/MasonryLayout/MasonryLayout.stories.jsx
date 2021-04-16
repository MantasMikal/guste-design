import React from 'react'

import MasonryLayout from '.'

export default {
  title: 'Layout/MasonryLayout',
  component: MasonryLayout,
  args: {
    loadAmount: 10,
    initialAmountToLoad: 10,
    gap: 10
  }
}
export const Default = (args) => (
  <MasonryLayout
    {...args}
    items={Array(20)
      .fill()
      .map((_, i) => (
        <img
          key={i}
          src={`https://source.unsplash.com/800x${
            Math.floor(Math.random() * 800) + 400
          }?nature`}
          alt=""
        />
      ))}
  />
)

export const DifferentWidths = (args) => (
  <MasonryLayout
    {...args}
    widths={{
      tablet: 3,
      desktop: 6,
      mobile: 2
    }}
    loadAmount={10}
    initialAmountToLoad={20}
    items={Array(100)
      .fill()
      .map((_, i) => (
        <img
          key={i}
          src={`https://source.unsplash.com/800x${
            Math.floor(Math.random() * 800) + 400
          }?nature`}
          alt=""
        />
      ))}
  />
)
