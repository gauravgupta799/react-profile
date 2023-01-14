import React, {useState} from 'react'

const DarkLight = () => {
    const [mode, setMode] = useState(false);
  return (
    <>
      { mode ?  
        <i class='bx bx-sun'></i> :
        <i class='bx bx-moon' ></i>
      }
    </>
  )
}

export default DarkLight
