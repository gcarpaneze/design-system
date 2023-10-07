import { StoryObj, Meta } from '@storybook/react'
import { ToastProps, Toast, Box, Button } from '@gcarpaneze-ui/react'
import { useState } from 'react'

const DemoToast = (props: ToastProps) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setOpen(true)}>Agendar</Button>

      <Toast open={open} onOpenChange={setOpen} {...props} />
    </>
  )
}

export default {
  title: 'Form/Toast',
  component: DemoToast,
  decorators: [
    (Story) => {
      return <Box css={{ position: 'relative' }}>{Story()}</Box>
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 26 outubro',
  },
}
