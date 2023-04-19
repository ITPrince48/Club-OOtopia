import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Button, FormControl, Grid, Input, InputAdornment, Paper, Stack, Toolbar } from '@mui/material'
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Home() {
    const cardcount = useSelector((state: any) => state.flipstate.cardcount)
    const [num, setnum] = useState(4);
    useEffect(()=>{
        if(cardcount===3) setnum(4);
        else if(cardcount===4) setnum(3);
        else if(cardcount===5) setnum(2.5);
    },[cardcount])

    return (
        <Stack>
            <Toolbar />
            <Stack direction={'row'} justifyContent={'space-evenly'}>
                <Stack>
                    <Button variant='contained'>Please Bet</Button>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <Input
                            id="standard-adornment-amount"
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        />
                    </FormControl>
                </Stack>
                <Stack>
                    <Stack>Flip-Flop</Stack>
                    <Stack>Frenzy</Stack>
                </Stack>
                <Stack>
                    <Button variant='contained'>Connected</Button>
                    <Button variant='contained'>zpPJ1aTBPVPNgDzxoZ</Button>
                </Stack>
            </Stack>
            <Grid container spacing={8} sx={{ margin: 'auto', maxWidth: '1000px' }}>
                {/* {
                    // cardcount.map(() => (
                    //     <div>mjj</div>
                    // ))
                } */}
                <Grid item xs={num}>
                    <Item>xs=8</Item>
                </Grid>
                <Grid item xs={num}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid item xs={num}>
                    <Item>xs=4</Item>
                </Grid>

            </Grid>
        </Stack>
    )
}
