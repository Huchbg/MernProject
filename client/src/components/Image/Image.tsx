import { ImageProps } from 'next/image';
import * as S from './elements';

export const Image = ({ ...props }: ImageProps) => {
  return <S.Image {...props} />;
};
