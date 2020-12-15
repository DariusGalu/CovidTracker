import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';

function InfoBox({ title, cases, total }) {
    return (
        <Card className="infoBox">
            <CardContent>
                {/* title */}
                <Typography color="textSecondary">{title}</Typography>
               
                {/* number of cases */}
                <h2 className="infoBox_cases">{cases}</h2>

                {/* 1.2 m total */}
                <Typography className="infoBox_total" color="textSecondary">
                    {total} Total
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox;
