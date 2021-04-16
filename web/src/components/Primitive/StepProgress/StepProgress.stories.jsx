import React from 'react'

import StepProgress from '.'

export default {
  title: 'Specific/StepProgress',
  component: StepProgress
}

export const Default = (args) => (
  <StepProgress {...args}>
    <StepProgress.Item complete>Choose</StepProgress.Item>
    <StepProgress.Item complete>Details</StepProgress.Item>
    <StepProgress.Item complete>Payment</StepProgress.Item>
    <StepProgress.Item current>Confirm</StepProgress.Item>
    <StepProgress.Item>Complete</StepProgress.Item>
  </StepProgress>
)

export const CustomStatus = (args) => (
  <StepProgress {...args}>
    <StepProgress.Item status="positive">Choose</StepProgress.Item>
    <StepProgress.Item status="negative">Details</StepProgress.Item>
    <StepProgress.Item status="positive">Payment</StepProgress.Item>
    <StepProgress.Item current>Confirm</StepProgress.Item>
    <StepProgress.Item>Complete</StepProgress.Item>
  </StepProgress>
)

export const LoopongNumbers = (args) => {
  const items = ['Choose', 'Details', 'Payment', 'Confirm', 'Complete']
  const currentStep = 4
  return (
    <StepProgress {...args}>
      {items.map((item, i) => {
        const step = i + 1
        return (
          <StepProgress.Item
            key={step}
            complete={step < currentStep}
            current={step === currentStep}
          >
            {item}
            <div style={{ fontSize: '0.8em' }}>
              Step {step} of {items.length}
            </div>
          </StepProgress.Item>
        )
      })}
    </StepProgress>
  )
}
