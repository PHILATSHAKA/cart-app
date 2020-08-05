import React, { FC } from 'react';
import { CMSSwitcher } from '~/molecules';

interface IProps {
  [x: string]: any;
}

const CMS: FC<IProps> = (props: IProps) => {
  return (
    <CMSSwitcher/>
  );
};

CMS.defaultProps = {};

export default CMS;
