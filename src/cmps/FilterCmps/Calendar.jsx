
import React, { Component, useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import StaticDateRangePicker from '@mui/lab/StaticDateRangePicker';
// import DateRangePicker from '@mui/lab/DateRangePicker';


import Box from '@mui/material/Box';




export function Calendar({onSetDate , filterBy}) {
    console.log('filter by in deteils',filterBy)

    const [value, setValue] = useState([filterBy.dateIn, filterBy.dateOut]);
    console.log(value)

    useEffect(() => {
        onSetDate(value); // using camelCase for variable name is recommended.
      }, [value]);

return (

    <StaticDateRangePicker
        displayStaticWrapperAs="desktop"
        value={value}
        onChange={(newValue) => {
            console.log('new value ', newValue)
            setValue(newValue)

        }}
        renderInput={(startProps, endProps) => (

            <React.Fragment>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} />
            </React.Fragment>
        )}
    />
)



}