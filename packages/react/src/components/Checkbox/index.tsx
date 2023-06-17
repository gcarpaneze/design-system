import { ComponentProps } from 'react'
import { Check } from '@phosphor-icons/react'
import { CheckBoxContainer, CheckBoxIndicator } from './styles'

export interface CheckboxProps
  extends ComponentProps<typeof CheckBoxContainer> {}

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckBoxContainer {...props}>
      <CheckBoxIndicator asChild>
        <Check weight="bold" />
      </CheckBoxIndicator>
    </CheckBoxContainer>
  )
}
