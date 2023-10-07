import { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextArea, TextAreaInterface } from '@gcarpaneze-ui/react'

export default {
  title: 'Form/TextArea',
  component: TextArea,
  args: {},
  decorators: [
    (storie) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Observations:</Text>
          {storie()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaInterface>

export const Primary: StoryObj<TextAreaInterface> = {
  args: {
    placeholder: 'Add any observation',
  },
}

export const Disabled: StoryObj<TextAreaInterface> = {
  args: {
    disabled: true,
  },
}
