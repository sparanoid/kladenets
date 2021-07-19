import {
  colorAlphaIterator,
  colorSaturationIterator,
  colorLightnessIterator,
  colorSet
} from './KladenetsConfig';

import '../../dist/kladenets.css';
import './storybook.css';

function generateDom(colorScheme) {
  let dom = ``;

  dom += `<h2>Alpha Loop</h2><div class="grid grid-color-a">`
  for (const prop in colorAlphaIterator) {
    dom += `<div style="background-color: var(--${colorScheme}-a${prop})">--${colorScheme}-a${prop}</div>`
  }
  dom += `</div>`

  dom += `<h2>Saturation Loop</h2><div class="grid grid-color-s">`
  for (const prop in colorSaturationIterator) {
    dom += `<div style="background-color: var(--${colorScheme}-s${prop})">--${colorScheme}-s${prop}</div>`
  }
  dom += `</div>`

  dom += `<h2>Lightness Loop</h2><div class="grid grid-color-l">`
  for (const prop in colorLightnessIterator) {
    dom += `<div style="background-color: var(--${colorScheme}-l${prop})">--${colorScheme}-l${prop}</div>`
  }
  dom += `</div>`

  return dom;
}

export default {
  title: 'Kladenets/Colors',
  argTypes: {
    colorScheme: {
      control: {
        type: 'select',
        options: colorSet
      },
    },
  },
};

const Template = ({ colorScheme, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return generateDom(colorScheme);
};

export const TextColor = Template.bind({});
TextColor.args = {
  colorScheme: 'text-color',
};

export const LinkColor = Template.bind({});
LinkColor.args = {
  colorScheme: 'link-color',
};

export const BackgroundColor = Template.bind({});
BackgroundColor.args = {
  colorScheme: 'bg-color',
};

export const CodeColor = Template.bind({});
CodeColor.args = {
  colorScheme: 'code-color',
};

export const Blue = Template.bind({});
Blue.args = {
  colorScheme: 'blue',
};

export const Indigo = Template.bind({});
Indigo.args = {
  colorScheme: 'indigo',
};

export const Purple = Template.bind({});
Purple.args = {
  colorScheme: 'purple',
};

export const Pink = Template.bind({});
Pink.args = {
  colorScheme: 'pink',
};

export const Red = Template.bind({});
Red.args = {
  colorScheme: 'red',
};

export const Orange = Template.bind({});
Orange.args = {
  colorScheme: 'orange',
};

export const Yellow = Template.bind({});
Yellow.args = {
  colorScheme: 'yellow',
};

export const Green = Template.bind({});
Green.args = {
  colorScheme: 'green',
};

export const Teal = Template.bind({});
Teal.args = {
  colorScheme: 'teal',
};

export const Cyan = Template.bind({});
Cyan.args = {
  colorScheme: 'cyan',
};
