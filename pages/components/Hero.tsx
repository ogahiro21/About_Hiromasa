import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors } from 'consts/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Hero: React.VFC = () => {
  return (
    <HeroWrapper>
      <TopView>
        <picture>
          <source srcSet="/img/profile_img.webp" type="image/webp" />
          <img src="/img/profile_img.png" />
        </picture>
        <GlassWrapper>
          <Glass>
            大丈夫。
            <br />
            僕 最強
            <br />
            だから。
          </Glass>
        </GlassWrapper>
        <BlackLine />
      </TopView>
      <Intro>
        アピールポイントアピールポイントアピールポイントアピールポイントアピールポイントアピールポイントアピールポイントアピールポイント
      </Intro>
      <SnsIcons>
        <a
          href="https://www.instagram.com/wristyle_hiro"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={['fab', 'instagram']} />
        </a>
        <a
          href="https://www.facebook.com/hiromasaogawaa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={['fab', 'facebook']} />
        </a>
        <a
          href="https://twitter.com/wristyle_hiro"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={['fab', 'twitter']} />
        </a>
      </SnsIcons>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.section`
  height: 100vh;
  padding: 24px;
`;

const TopView = styled.div`
  position: relative;
  text-align: right;
`;

const GlassWrapper = styled.div`
  position: absolute;
  text-align: left;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GlassPropety = {
  blur: '4px',
  bgOpacity: '0.4',
};

const Glass = styled.h1`
  font-size: 4.5rem;
  background: rgba(255, 255, 255, ${GlassPropety.bgOpacity});
  backdrop-filter: blur(${GlassPropety.blur});
  -webkit-backdrop-filter: blur(${GlassPropety.blur});
  border-radius: 8px;
  border: 4px solid rgba(255, 255, 255, 0.4);
  padding: 0.5rem 0.25rem;
`;

const BlackLine = styled.div`
  width: 30%;
  position: absolute;
  bottom: 0;
  height: 3px;
  background-color: ${colors.text.base};
`;

const Intro = styled.p`
  margin-top: 2rem;
`;

const SnsIcons = styled.div`
  margin-top: 2rem;
  display: flex;
  width: 50%;
  justify-content: space-between;
  font-size: 2.5rem;
  a {
    color: ${colors.text.base};
  }
`;
