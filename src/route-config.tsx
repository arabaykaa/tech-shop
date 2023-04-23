import React from 'react'
import { Basket, Main, Market, NotFound } from './pages';

interface IRoutes {
  id: number;
  path: string;
  page: JSX.Element;
}

export const ROUTES: ReadonlyArray<IRoutes> = [
  {
    id: 1,
    path: "/",
    page: <Main />,
  },
  {
    id: 2,
    path: "/shop",
    page: <Basket />,
  },
  {
    id: 3,
    path: "/market",
    page: <Market />,
  },
  {
    id: 4,
    path: "*",
    page: <NotFound />,
  },
] as const
