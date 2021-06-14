import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
// FontAwsomeのインポート
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/pro-solid-svg-icons';
import { far } from '@fortawesome/pro-regular-svg-icons';
import { fal } from '@fortawesome/pro-light-svg-icons';
import { fad } from '@fortawesome/pro-duotone-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

// 全てのFontAwesomeアイコンをライブラリに追加
library.add(fas, far, fal, fad, fab);
const Home: React.VFC = () => {
  return <Hero />;
};

export default Home;
