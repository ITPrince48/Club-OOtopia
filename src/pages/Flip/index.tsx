import React from 'react'
import { useDispatch } from 'react-redux'
import { Box, Button, Stack, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const dispatch=useDispatch();
  const navigate=useNavigate()
  const cardclick=(para: any)=>{
    dispatch({ type: 'CARDCOUNT_SET', cardcount: para });
    navigate("/flip-flop-frenzy/home")
  }
  // const cardcount = useSelector((state: any) => state.flipstate.cardcount);
  return (
    <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
      <Toolbar />
      <Box textAlign={'center'}>
        <Stack fontSize={'50px'} lineHeight={5}>Seletion</Stack>
        <Stack alignItems={'center'} direction={'column'} rowGap={10}>
          <Stack maxWidth={'300px'} width={'100%'}>
            <Button variant="contained" onClick={()=>{cardclick(3)}}>
              3 Flip Cards
            </Button>
          </Stack>
          <Stack maxWidth={'400px'} width={'100%'}>
            <Button variant="contained" onClick={()=>{cardclick(4)}}>
              4 Flip Cards
            </Button>
          </Stack>
          <Stack maxWidth={'500px'} width={'100%'}>
            <Button variant="contained" onClick={()=>{cardclick(5)}}>
              5 Flip Cards
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  )
}
