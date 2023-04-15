import React from 'react'
import { Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'

export const HeaderLinks = () => {
    return (
        <Box sx={{ width: "70%", display: "flex", gap: "1rem", justifyContent: "flex-end" }}>
            <Button>
                <Link to={"/"} style={{ color: "black", fontWeight: "bold", fontSize: "1rem" }}>main</Link>
            </Button>
            <Button>
                <Link to={"/market"} style={{ color: "black", fontWeight: "bold", fontSize: "1rem" }}>market</Link>
            </Button>
            <Button>
                <Link to={"/shop"} style={{ color: "black", fontWeight: "bold", fontSize: "1rem" }}>shop</Link>
            </Button>
        </Box>
    )
}
