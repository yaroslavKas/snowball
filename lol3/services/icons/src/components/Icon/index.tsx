import React, { FC } from 'react';
import { IconProps } from '../../types';
import '../../fonts/front_icon.scss';
import './index.scss';

const Icon: FC<IconProps> = ({
  name = '',
  categoryIcon = '',
  className = '',
  title = '',
  ...props
}) => {
  const IconName = categoryIcon
    ? `${categoryIcon}, icon-${categoryIcon}-${name}`
    : `icon-${name}`;
  const classes = `icon ${IconName} ${className}`;
  return <i title={title} className={classes} {...props} />;
};

export default Icon;
