import React from 'react'
import { Box, Divider } from '@mui/material'
import { HeaderLogo } from './header-logo'
import { HeaderLinks } from './header-links'

export const HeaderContainer = () => {
    return (
        <Box sx={{ position: "fixed", width: "100%", height: "5.5rem", background: "white", boxShadow: "0 0 6px gray", zIndex: "1" }}>
            <Box sx={{ display: "flex", alignItems: "center", padding: "1rem 3rem" }}>
                <HeaderLogo />
                <HeaderLinks />
            </Box>
            <Box sx={{ padding: "0 3rem" }}>
                <Divider sx={{ border: "1px solid rgba(0, 0, 0, 0.3)" }} />
            </Box>
        </Box>
    )
}
