import React from 'react';
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Basket, Main, NotFound, Market } from './pages';
import { Footer, Header } from './components';
import { Box } from '@mui/material';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Main />} />
        <Route path="/shop" element={<Basket />} />
        <Route path="/market" element={<Market />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )
  return (<RouterProvider router={router} />);
}

const Root = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100dvh" }}>
      <Header />
      <Box sx={{ flexGrow: "1", margin: { xs: "8rem 1rem", sm: "8rem 4rem" } }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  )
}

export default App;
