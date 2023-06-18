import { ComponentProps, ElementRef, forwardRef } from 'react'
import { TextInputContainer, Prefix, Input } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}

// eslint-disable-next-line react/display-name
export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, ...props }: TextInputProps, ref) => {
    return (
      <TextInputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input {...props} ref={ref} />
      </TextInputContainer>
    )
  },
)
