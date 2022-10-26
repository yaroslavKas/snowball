import React from 'react';
import svgIcons from '../components/SvgIcon';

export type SVGProps = React.DetailedHTMLProps<
  React.HTMLAttributes<SVGElement>,
  SVGElement
>;

export type SvgIconProps = SVGProps & {
  name: keyof typeof svgIcons | string;
  title?: string;
  defaultIcon?: keyof typeof svgIcons;
};

export type IconProps = {
  name: string;
  title?: string;
  className?: string;
  categoryIcon?: string;
  onClick?: () => void;
};
