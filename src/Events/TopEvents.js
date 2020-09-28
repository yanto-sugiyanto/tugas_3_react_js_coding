import React from 'react';

const TopEvents=()=>{
    const handleFooter=(value, e)=>{
        e.preventDefault()
        alert(value)
    };

    return(
        <a href="/" onClick={e=>handleFooter("Selamat Menikmati", e)}>
            Back To home
        </a>
    )
}

export default TopEvents;

