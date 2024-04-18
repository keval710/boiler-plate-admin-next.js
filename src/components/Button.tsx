'use client'
import React from 'react'
import { Button, Stack } from '@mui/material';

interface Props {
    handleIsOpen: () => void
}

const CustomButton: React.FC<Props> = ({ handleIsOpen }) => {
    return (
        <>
            <Stack direction="row">
                <Button
                    variant="outlined"
                    color="primary"
                    size="medium"
                    onClick={() => handleIsOpen()}
                >
                    Add Data
                </Button>
            </Stack>
        </>
    )
}

export default CustomButton