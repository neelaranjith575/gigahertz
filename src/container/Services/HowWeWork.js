
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
                        mt: 4,
                        mb: 3
                    }}
                >
                    <Paper elevation={0} sx={{ borderRadius: '10px', padding: { xs: 1, md: 3.5 }, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: { xs: '30vh', md: '40vh' }, boxShadow: "6px 6px 6px 0px #116FC624" }}>
                        <Box component={"img"}
                            src={image}
                            sx={{ color: '#ffffff', backgroundColor: '#5698D5', p: 2, width: 100, height: 100, mb: 3 }}
                        />
                        <Typography sx={{ color: '#116FC6', fontFamily: 'Inter', fontWeight: 700, fontSize: { xs: '14px', md: '24px' }, textAlign: 'center' }}>{coreHeading}</Typography>
                    </Paper>
                </Box>

            </div>

        </>
    )
}
export default HowWeWork;