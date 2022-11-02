import { Container } from '@mui/material';
import React from 'react';
import HeaderBar from './headerBar';
import NavigationProvider from './NavigationProvider';
import QuickButton from './QuickButton';
interface LayoutProps {
  hasHeaderBar?: boolean;
  profileButton?: boolean;
  backArrow?: boolean; // 뒤로가기로 할껀지, Main으로 바로 넘어가게할건지? 고민이 필요 기존에는 Main으로 바로 넘어가더라
  hasQuickButton?: boolean;
  children: React.ReactNode;
}

const Layout = ({
  hasHeaderBar,
  profileButton,
  backArrow,
  hasQuickButton,
  children,
}: LayoutProps) => {
  return (
    <NavigationProvider>
      {hasHeaderBar ? (
        <HeaderBar backArrow={backArrow} profileButton={profileButton} />
      ) : null}
      <Container
        sx={{
          height: 'calc(100vh - 4rem)',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        {children}
      </Container>
      {hasQuickButton ? <QuickButton /> : null}
    </NavigationProvider>
  );
};

export default Layout;
