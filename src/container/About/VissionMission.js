
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import TrackChangesOutlinedIcon from '@mui/icons-material/TrackChangesOutlined';

const VissionMission = ({ vissionHeading, vissionContent, missionHeading, missionContent }) => {
    return (
        <>
            <div className="container" data-aos="fade-up">
                <Box
                    sx={{
                        display: 'flex',
                       
                        
                    }}
                >
                    <Grid container spacing={15} p={10}>
                        <Grid item xs={6}>
                            <Paper elevation={0} sx={{ backgroundColor: '#ECF2F7', height:'418px', borderRadius:'25px 25px 125px 25px', pt:6, pb:10,pl:5,pr:5 }}>
                                <Box sx={{backgroundColor:'#5698D5', p:3, borderRadius:'15px', width:93, height:93, mb:3}}>
                                <VisibilityOutlinedIcon sx={{fontSize:'50px', color:'#ffffff'}} />
                                </Box>
                                <Typography sx={{color:'#116FC6', fontFamily:'Inter', fontWeight:700, fontSize:'24px'}}>{vissionHeading}</Typography>
                                <Typography sx={{color:'#575757', fontFamily:'Inter', fontWeight:400, fontSize:'16px'}}>{vissionContent}</Typography>
                            </Paper>
                        </Grid>

                        <Grid item xs={6}>
                            <Paper elevation={0} sx={{ backgroundColor: '#ECF2F7', height:'418px', borderRadius:'25px 25px 125px 25px', pt:6, pb:10,pl:5,pr:5 }} >
                            <Box sx={{backgroundColor:'#5698D5', p:3, borderRadius:'15px', width:93, height:93, mb:3}}>
                                <TrackChangesOutlinedIcon sx={{fontSize:'50px', color:'#ffffff'}} />
                                </Box>
                                <Typography sx={{color:'#116FC6', fontFamily:'Inter', fontWeight:700, fontSize:'24px'}}>{missionHeading}</Typography>
                                <Typography sx={{color:'#575757', fontFamily:'Inter', fontWeight:400, fontSize:'16px'}}>{missionContent}</Typography>
                            </Paper>
                        </Grid>

                    </Grid>




                </Box>

            </div>

        </>
    )
}
export default VissionMission;