import { ComponentProps } from 'react'
import { styled } from '../styles'

export const TextArea = styled('textarea', {
  background: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $ignite500',
  display: 'flex',
  alignItems: 'baseline',

  fontFamily: '$default',
  fontSize: '$md',
  fontWeight: '$regular',
  color: '$white',
  resize: 'vertical',
  minHeight: 80,

  '&:nput:focus': {
    borderColor: '$ignite300',
    outline: 0,
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})

export interface TextAreaInterface extends ComponentProps<typeof TextArea> {}

TextArea.displayName = 'TextArea'
