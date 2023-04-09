import { Box, Button } from '@mui/material'
import React from 'react'

export const Cards = () => {
    return (
        <Box sx={{
            width: { xs: "160px", sm: "260px" }, display: "flex", flexDirection: "column",
            height: "330px", gap: "30px", background: "yellow"
        }}>
            <Box>
                <img src="/" alt="techPhoto" />
            </Box>
            <Box>
                <Button>
                    more
                </Button>
                <Button>
                    buy
                </Button>
            </Box>
        </Box>
    )
}
