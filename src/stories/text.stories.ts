import type { Meta, StoryObj } from '@storybook/angular';
import { TextComponent } from '../app/text/text.component';

const meta: Meta<TextComponent> = {
  title: 'Text Story',
  component: TextComponent,
  tags: ['autodocs'],
} as Meta;

export default meta;
type Story = StoryObj<TextComponent>;

export const Default: Story = {
  args: {
    label: 'Yellow Prompt!',
    labelColor: '#fff',
    bgColor: 'yellow',
  },
};

export const Green: Story = {
  args: {
    label: 'Green Prompt!',
    labelColor: '#fff',
    bgColor: 'green',
  },
};

export const Red: Story = {
  args: {
    label: 'Red Prompt!',
    labelColor: '#fff',
    bgColor: "red",
  },
};
