import { createButton } from './Button';

import '../../dist/kladenets.css';

export default {
  title: 'Kladenets/Colors',
  argTypes: {
    label: { control: 'text' },
    primary: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    onClick: { action: 'onClick' },
  },
};

const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return `
  <div style="background-color: var(--link-color-0)">${label}</div>
  <div style="background-color: var(--link-color-3)">${label}</div>
  <div style="background-color: var(--link-color-5)">${label}</div>
  <div style="background-color: var(--link-color-7)">${label}</div>
  <div style="background-color: var(--link-color-10)">${label}</div>
  <div style="background-color: var(--link-color-15)">${label}</div>
  `;
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const SmallTest = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
