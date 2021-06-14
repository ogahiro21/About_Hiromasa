import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors } from 'consts/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const WhoAmI: React.VFC = () => {
  return (
    <picture>
      <source srcSet="/img/whoami.webp" type="image/webp" />
      <img src="/img/whoami.png" />
    </picture>
  );
};
