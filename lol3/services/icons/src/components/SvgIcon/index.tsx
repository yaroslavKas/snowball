import React, { FC } from 'react';
import { SvgIconProps } from '../../types';
import svgIcons from './icons';
import './index.scss';

const SvgIcon: FC<SvgIconProps> = ({
  name,
  className = '',
  title = '',
  defaultIcon = '',
  ...props
}) => {
  const Component = svgIcons[name] || svgIcons[defaultIcon];

  if (!Component) {
    return null;
  }

  return (
    <Component
      title={title}
      // className={`${styles.svg} ${className}`}
      {...props}
    />
  );
};

export default SvgIcon;
