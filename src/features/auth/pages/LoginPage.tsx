import { Box, Button, Paper, Typography } from '@mui/material';
import { Container } from '@mui/system';
import * as React from 'react';

export default function LoginPage() {
  const styles = {
    container: () => ({
      display: 'flex',
      flexFlow: 'row norwap',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
    }),
  };
  return (
    <Container sx={styles.container}>
      <Paper elevation={2} sx={{ p: 3 }}>
        <Typography variant="h5" component="h1">
          Student Management
        </Typography>
        <Box mt={4}>
          <Button fullWidth variant="contained" color="primary">
            Fake Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
