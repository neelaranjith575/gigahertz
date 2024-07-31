
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';


const OurServices = ({ coreHeading, image }) => {
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
                    <Paper elevation={1} sx={{ borderRadius: '10px', padding: { xs: 1, md: 3.5 }, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: { xs: '25vh', md: '33vh' }, width: { xs: '200px', md: '15vw' }, backgroundColor: '#116FC624' }} >
                        <Box component={"img"}
                            src={image}
                            sx={{ color: '#ffffff', p: 2, width: 100, height: 100, mb: 3, }}
                        />
                        <Typography sx={{ color: '#000000', fontFamily: 'Inter', fontWeight: 600, fontSize: { xs: '14px', md: '16px' }, textAlign: 'center' }}>{coreHeading}</Typography>

                    </Paper>
                </Box>

            </div >

        </>
    )
}
export default OurServices;