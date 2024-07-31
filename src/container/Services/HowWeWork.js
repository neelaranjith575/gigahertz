
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';


const HowWeWork = ({ coreHeading, image }) => {
    return (
        <>
            <div className="container" data-aos="fade-up">

                <Box
                    sx={{
                        display: 'flex',
                        mt: { xs: 0, md: 4 },
                        mb: 3
                    }}
                >
                    <Paper elevation={1} sx={{ borderRadius: '10px', padding: { xs: 1, md: 3.5 }, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: { xs: '20vh', md: '30vh' }, width: { xs: '200px', md: '20vw' } }} >
                        <Box component={"img"}
                            src={image}
                            sx={{ color: '#ffffff', backgroundColor: '#5698D5', p: 2, width: 90, height: 90, mb: 3, }}
                        />
                        <Typography sx={{ color: '#116FC6', fontFamily: 'Inter', fontWeight: 700, fontSize: { xs: '12px', md: '16px' }, textAlign: 'center' }}>{coreHeading}</Typography>

                    </Paper>
                </Box>

            </div >

        </>
    )
}
export default HowWeWork;