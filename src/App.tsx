import React from 'react';
import { invoke } from '@tauri-apps/api/tauri';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

function App() {
  const clickHandler = async () => {
    // Invoke the command
    invoke('do_command');
    invoke('post_command', { userName: 'Sergii' });
    const res = await invoke('get_command', { userName: 'Sergii' });
    alert(res);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <p>Hello</p>
          <Button variant="contained" onClick={clickHandler}>
            Hello World
          </Button>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
