import type { ReactElement } from 'react';
import Grid from '@mui/material/Grid';
import Title from './Title';
import DarkMode from './DarkMode';
import { styled } from '@mui/system';

const NavBar = (): ReactElement => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={10}>
        <TitleAlign>
          <Title />
        </TitleAlign>
      </Grid>
      <Grid item xs={2}>
        <DarkModeSpacer>
          <DarkMode />
        </DarkModeSpacer>
      </Grid>
    </Grid>
  );
};

const TitleAlign = styled('div')({
  'text-align': 'left',
  padding: 16,
});

const DarkModeSpacer = styled('div')({
  padding: 16,
  'vertical-align': 'middle',
});

export default NavBar;