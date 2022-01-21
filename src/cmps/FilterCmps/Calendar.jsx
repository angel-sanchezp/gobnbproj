
import React, { Component, useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import StaticDateRangePicker from '@mui/lab/StaticDateRangePicker';

import Box from '@mui/material/Box';




export class Calendar extends React.Component {
    
    state = {
        value: [null, null],
    }


    handleChange = ({ target }) => {
        // console.log('target', target)
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, [field]: value } }))
    }




    render() {
        const {value}= this.state
        return (
        
            <StaticDateRangePicker                                            
            displayStaticWrapperAs="desktop"
            value={value}
            onChange={(newValue) => {
                console.log('new value ', newValue)
                // setValue(newValue);
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

}