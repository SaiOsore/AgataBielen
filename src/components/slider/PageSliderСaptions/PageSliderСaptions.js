import React from 'react';
import { 
  PageSliderCaptionsStyled,
  PageSliderContainer,
  PageSliderBlock,
  PageSliderCaptionsLine,
  PageSliderCaptionsNum
} from './PageSliderСaptionsStyled';

const PageSliderCaptions = (props) => {
  const {
    postDate,
    author,
    num,
  } = props;

  return (
    <PageSliderCaptionsStyled>
      <PageSliderContainer>
        <PageSliderBlock>
          {postDate}
        </PageSliderBlock>
        <PageSliderBlock>
          <PageSliderCaptionsLine />
        </PageSliderBlock>
        <PageSliderBlock>
          by {author}
        </PageSliderBlock>
      </PageSliderContainer>
      <PageSliderCaptionsNum>
        Coll. №{num}
      </PageSliderCaptionsNum>
    </PageSliderCaptionsStyled>
  );
}

export default PageSliderCaptions;