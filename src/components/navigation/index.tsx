import React from 'react';
import QuickButton from './QuickButton';
import Gnb from './GNB';
import NavigationProvider from './NavigationProvider';

type INavigation = React.PropsWithChildren;
const Navigation = ({ children }: INavigation) => {
  return (
    <NavigationProvider>
      <Gnb />
      {children}
      <QuickButton />
    </NavigationProvider>
  );
};

export default Navigation;
