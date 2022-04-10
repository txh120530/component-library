import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Headings, HeadingProps } from '../src/Headings.tsx';

const meta: Meta = {
  title: 'Headings',
  component: Headings,
  argTypes: {
    headingType: 'h2',
    children: {
      control: {
        headingType: 'text',
        children: 'text',
      },
    },
  },
};

export default meta;

const Template: Story<HeadingProps> = args => <Headings {...args}>Header</Headings>;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const H1 = Template.bind({});
export const H2 = Template.bind({});
export const H3 = Template.bind({});
export const H4 = Template.bind({});
export const H5 = Template.bind({});
export const H6 = Template.bind({});

H1.args = {
  headingType: 'h1'
}

H2.args = {
  headingType: 'h2'
}

H3.args = {
  headingType: 'h3'
}

H4.args = {
  headingType: 'h4'
}

H5.args = {
  headingType: 'h5'
}

H6.args = {
  headingType: 'h6'
}