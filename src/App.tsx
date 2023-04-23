import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Main } from './pages';
import { Footer, Header } from './widgets';
import { Box } from '@mui/material';
import { ROUTES } from './route-config';

function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100dvh" }}>
      <Header />
      <Box sx={{ flexGrow: "1", margin: { xs: "8rem 1rem", sm: "8rem 4rem" } }}>
        <Routes>
          <Route index element={<Main />} />
          {ROUTES.map((pages) => (
            <Route key={pages.id} path={pages.path} element={pages.page} />
          ))}
        </Routes>
      </Box>
      <Footer />
    </Box>
  )
}

export default App;
