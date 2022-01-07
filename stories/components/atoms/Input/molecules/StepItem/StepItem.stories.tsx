/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import { Meta } from '@storybook/react';
import StepItem, { StepItemProps } from '../../../../../../components/molecules/StepItem';

export default {
  title: 'Component/Molecules/StepItem',
  component: StepItem,
} as Meta;

const Template = (args: StepItemProps) => <StepItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: '1. Start',
  icon: 'step1',
  thumbnail: '/img/Thumbnail-1.png',
  desc1: 'Pilih salah satu game',
  desc2: 'yang ingin kamu top up',
};
