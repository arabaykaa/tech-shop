import { Box, Button, Divider } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <Box sx={{ position: "fixed", width: "100%", height: "5.5rem", background: "white", boxShadow: "0 0 6px gray", zIndex: "1" }}>
            <Box sx={{ display: "flex", alignItems: "center", padding: "1rem 3rem" }}>
                <Box component={"h1"} sx={{ width: "30%", fontSize: { xs: "1rem", md: "2rem" } }}>
                    TECH-SHOP
                </Box>
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
            </Box>
            <Box sx={{ padding: "0 3rem" }}>
                <Divider sx={{ border: "1px solid rgba(0, 0, 0, 0.3)" }} />
            </Box>
        </Box>
    )
}
