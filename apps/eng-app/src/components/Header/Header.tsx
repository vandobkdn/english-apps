import { View } from '../../primitives';
import { Logo } from './Logo';
import Navigation from './Navigation';

import './header.scss';

export const Header = () => {
  return (
    <View className="header">
      <Logo />
      <Navigation />
    </View>
  );
};
