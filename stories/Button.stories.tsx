import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '../src/Button.tsx';

const meta: Meta = {
  title: 'Button',
  component: Button,

  argTypes: {
  	children: 'Click Me',
  	size: 'medium',
  	variant: {
  		options: ['default', 'outline', 'disabled'],
  		control: {
  			type: 'radio'
  		}
  	},
  	color: {
  		options: ['blue', 'red', 'gray'],
  		control: {
  			type: 'radio'
  		}
  	}

  }
};

export default meta;

const Template: Story<ButtonProps> = args => <Button {...args}>CLICK ME</Button>;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Blue = Template.bind({});
export const Red = Template.bind({});
export const Gray = Template.bind({});

Blue.args = {
	size: 'medium',
	color: 'blue',
	variant: 'default'
};


Red.args = {
	size: 'medium',
	color: 'red',
	variant: 'default'
};
Gray.args = {
	size: 'medium',
	color: 'gray',
	variant: 'default'
};
