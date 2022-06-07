import React from 'react';

import SlidesLayout from 'components/common/Layouts/SlidesLayout';
import { SlideOne } from 'svgs/SlidesLogo';

import * as S from './styles';

const FirstSlide = () => (
  <>
    <SlidesLayout>
      <S.ImgSlideOne>
        <SlideOne />
      </S.ImgSlideOne>
      <S.TextContainer>
        <S.HeadText>Useful by design</S.HeadText>
        <S.MainText>
          Rabet is designed with accessibility in mind, allowing users
          to execute Stellar's major operations in a user-friendly
          environment.
        </S.MainText>
      </S.TextContainer>
    </SlidesLayout>
  </>
);

export default FirstSlide;