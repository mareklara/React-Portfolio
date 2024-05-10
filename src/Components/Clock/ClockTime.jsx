
import React, {useEffect, useState} from 'react';

export const ClockTime = () => {

    const [time, setTime] = useState(new Date())

    useEffect(() =>{
        const interval = setInterval(() => setTime(new Date()), 1000);

        return () =>{
            clearInterval(interval)
        }
    }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  return (
    <div className='text-center'>
        <p className='font-bold'>{`${hours}:${minutes}:${seconds}`}</p>
    </div>

  )
}
