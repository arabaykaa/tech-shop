import { Box, Typography } from '@mui/material'
import React from 'react'

export const NotFound = () => {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "7rem" }}>
            <Typography sx={{ fontSize: { xs: "2rem", md: "6rem" }, fontWeight: "bold" }}>Page Not Found</Typography>
        </Box>
    )
}
