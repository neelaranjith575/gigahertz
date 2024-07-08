
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';


const CoreValues = ({ coreHeading, coreContent }) => {
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
                    <Paper elevation={0} sx={{ borderRadius: '10px', padding: { xs: 1, md: 3.5 }, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: { xs: '25vh', md: '40vh' }, boxShadow: "6px 6px 6px 0px #116FC624" }}>
                        <VisibilityOutlinedIcon sx={{ fontSize: '100px', color: '#ffffff', backgroundColor: '#5698D5', p: 1.5, borderRadius: '100px', width: 55, height: 55, mb: 3 }} />
                        <Typography sx={{ color: '#116FC6', fontFamily: 'Inter', fontWeight: 700, fontSize: { xs: '14px', md: '24px' }, textAlign: 'center' }}>{coreHeading}</Typography>
                        <Typography sx={{ color: '#575757', fontFamily: 'Inter', fontWeight: 400, fontSize: { xs: '12px', md: '16px' }, textAlign: 'center' }}>{coreContent}</Typography>
                    </Paper>
                </Box>

            </div>

        </>
    )
}
export default CoreValues;