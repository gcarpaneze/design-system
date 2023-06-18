import { ComponentProps } from 'react'

import { styled } from '../styles/index'

export const Box = styled('div', {
  padding: '$6',
  borderRadius: '$md',
  background: '$gray800',
  border: '1px solid $gray600',
})

export interface BoxProps extends ComponentProps<typeof Box> {}
