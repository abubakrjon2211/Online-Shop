import React from 'react'
import Button from '@mui/material/Button';

const NotFound = () => {
  return (
    <div className='py-[200px] flex flex-col items-center justify-center gap-8'>
        <h1 className='font-bold text-8xl text-center'>404 Not Found</h1>
        <p className='text-center'>Your visited page not found. You may go home page.</p>
        <Button sx={{backgroundColor: "red", paddingTop: "15px", paddingBottom: "15px", paddingLeft: "30px", paddingRight: "30px", textAlign: "center"}} variant="contained" disableElevation>
      Back to home page
    </Button>
    </div>
  )
}

export default NotFound
