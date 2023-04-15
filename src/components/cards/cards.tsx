import { Box, Button, Paper, Typography } from '@mui/material'
import React from 'react'

interface IProps {
    images: string;
    title: string;
}

export const Cards = ({ images, title }: IProps) => {
    return (
        <Paper sx={{
            display: "flex", flexDirection: "column", height: "370px", background: "rgba(0, 0, 0, 0.2)", borderRadius: "12px"
        }}>
            <Box sx={{ flexGrow: "1" }}>
                <img src={images} alt="techPhoto" style={{ clipPath: "none" }} />
            </Box>
            <Typography sx={{
                minHeight: "50px", display: "flex",
                justifyContent: "center", alignItems: "center", fontSize: "20px"
            }}>
                {title}
            </Typography>
            <Box sx={{ minHeight: "70px", background: "rgba(255, 255, 255, 0.5)" }}>
                <Button sx={{ width: "50%", height: "100%", borderRadius: "0 0 0 12px" }}>
                    more
                </Button>
                <Button sx={{ width: "50%", height: "100%", borderRadius: "0 0 12px 0" }}>
                    buy
                </Button>
            </Box>
        </Paper>
    )
}
