import type { Meta, StoryObj } from '@storybook/angular';

import { ImageComponent } from '../app/image/image.component';

export default {
  title: 'Example/Image Component',
  component: ImageComponent,
} as Meta;

type Story = StoryObj<ImageComponent>;

// const Template: StoryObj<ImageComponent> = (args: ImageComponent) => ({
//   component: ImageComponent,
//   props: args,
// });

export const NoImageCaption: Story = {
  args: {
    altTxt: 'test image',
    figCaptionTxt: '',
    imgOpacity: 1,
  },
};

export const WithImageCaption: Story = {
  args: {
    altTxt: '',
    figCaptionTxt:
      "The French Quarter or White Town area in Pondicherry is filleThe French Quarter or White Town area in Pondicherry is filleThe French Quarter or White Town area in Pondicherry is filleThe French Quarter or White Town area in Pondicherry is filleThe French Quarter or White Town area in Pondicherry is filleThe French Quarter or White Town area in Pondicherry is filleThe French Quarter or White Town area in Pondicherry is filleThe French Quarter or White Town area in Pondicherry is filleThe French Quarter or White Town area in Pondicherry is filleThe French Quarter or White Town area in Pondicherry is filleThe French Quarter or White Town area in Pondicherry is filleThe French Quarter or White Town area in Pondicherry is filleThe French Quarter or White Town area in Pondicherry is fille",
  },
};

export const WithFullOpacity: Story = {
  args: {
    imgOpacity: 1,
  },
};
export const WithHalfOpacity: Story = {
  args: {
    imgOpacity: 0.5,
  },
};
