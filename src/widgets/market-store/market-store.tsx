import React from 'react'
import { Cards } from '../../components';
import { Grid } from '@mui/material';

interface IPhone {
    id: number;
    image: string;
    title: string;
}
const phones: IPhone[] = [
    {
        id: 1,
        image: "",
        title: "Ihone 12",
    },
    {
        id: 2,
        image: "",
        title: "Iphone 13",
    },
    {
        id: 3,
        image: "",
        title: "Samsung S22",
    },
    {
        id: 4,
        image: "",
        title: "NOKIA",
    },
    {
        id: 5,
        image: "",
        title: "NOKIA",
    },
    {
        id: 6,
        image: "",
        title: "NOKIA",
    },
    {
        id: 7,
        image: "",
        title: "NOKIA",
    }
]

export const MarketStore = () => {
    return (
        <Grid container spacing={5} sx={{ display: "flex", justifyContent: "center" }}>
            {phones.map((item) => (
                <Grid key={item.id} item xs={9} sm={6} md={4} lg={2.5}>
                    <Cards images={item.image} title={item.title} />
                </Grid>
            ))}
        </Grid>
    )
}
