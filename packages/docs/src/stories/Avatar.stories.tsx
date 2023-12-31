import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@gcarpaneze-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/gcarpaneze.png',
    alt: '',
  },
  argTypes: {
    src: {
      control: 'text',
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}
export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
