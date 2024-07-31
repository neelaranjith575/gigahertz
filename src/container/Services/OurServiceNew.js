// src/FlipCard.js
import React from 'react';
import './OurService.css';
import { Box, Typography } from '@mui/material';

const ourService = ({ frontText, backText, image }) => {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">

                    <Box component={"img"}
                        src={image}
                        sx={{ color: '#ffffff', p: 2, width: { xs: 80, md: 100 }, height: { xs: 80, md: 100 }, mb: 3, }}
                    />
                    <Typography sx={{ color: '#000000', fontFamily: 'Inter', fontWeight: 600, fontSize: { xs: '11px', md: '14px' }, textAlign: 'center' }}>{frontText}</Typography>

                </div>
                <div className="flip-card-back">

                    <Typography sx={{ color: '#ffffff', fontFamily: 'Inter', fontWeight: 400, fontSize: { xs: '11px', md: '14px' }, textAlign: 'center' }}>{backText}</Typography>

                </div>
            </div>
        </div>
    );
};

export default ourService;