import React from 'react'
import Grid from '.'

export default {
  title: 'Layout/Grid',
  component: Grid,
  argTypes: {
    style: {
      control: {
        type: 'object',
        options: [{ gridTemplateColumns: '1fr 1fr' }]
      }
    }
  }
}

export const Default = (args) => (
  <Grid {...args}>
    <img src="https://source.unsplash.com/500x500?nature" alt="" />
    <img src="https://source.unsplash.com/500x500?nature" alt="" />
    <img src="https://source.unsplash.com/500x500?nature" alt="" />
    <img src="https://source.unsplash.com/500x500?nature" alt="" />
  </Grid>
)
