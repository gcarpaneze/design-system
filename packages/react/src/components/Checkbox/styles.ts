import * as Checkbox from '@radix-ui/react-checkbox'
import { styled } from '../../styles'

export const CheckBoxContainer = styled(Checkbox.Root, {
  all: 'unset',
  lineHeight: 0,
  width: '$6',
  height: '$6',
  background: '$gray900',
  borderRadius: '$xs',
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  border: '2px solid $gray900',

  '&:focus': {
    border: '2px solid $ignite300',
  },

  '&[data-state="checked"]': {
    background: '$ignite300',
  },
})

export const CheckBoxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',
})
