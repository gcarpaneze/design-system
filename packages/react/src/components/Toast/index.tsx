import { ComponentProps } from 'react'
import * as ToastRadix from '@radix-ui/react-toast'
import { X } from '@phosphor-icons/react'

import {
  ToastClose,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewPort,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
  title: string
  description: string
}

export function Toast(props: ToastProps) {
  return (
    <ToastRadix.Provider>
      <ToastRoot {...props}>
        <ToastTitle>{props.title}</ToastTitle>
        <ToastDescription>{props.description}</ToastDescription>
        <ToastClose>
          <X weight="light" size={20} />
        </ToastClose>
      </ToastRoot>

      <ToastViewPort />
    </ToastRadix.Provider>
  )
}
