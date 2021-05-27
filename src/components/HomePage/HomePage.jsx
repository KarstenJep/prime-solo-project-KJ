import moment from 'moment';
import React, { useEffect, useState } from 'react';
// import LogOutButton from '../LogOutButton/LogOutButton';
import {useDispatch, useSelector} from 'react-redux';
import DateTime from '../Date/Date';

function HomePage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const batches = useSelector((store) => store.batch);
  const [date, setDate] = useState(new Date());
  const weekday = moment().format('dddd');
  const dispatch = useDispatch();
  
  console.log('in home', batches, user);
  console.log("moment", moment().format('dddd')); 

  useEffect(() => {
    // on page load, get list of batches from the database
    dispatch({ type: 'FETCH_BATCHES' });
  }, [])


  return (
    <>
    <div>
            {/* <p>{date.toLocaleDateString()}</p> */}
            <h2>{weekday}, {date.getMonth() + 1}/{date.getDate()}</h2>
    </div>
    
    {batches.map(batch => {
      console.log('in home map', batch);
      return (
        <div key={batch.hop_id}>
          <h4>{batch.name}</h4>
          <ul></ul>
        </div>
      )
    })}
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>It's time to party #{user.id}</p>
    </div>
    </>
  );
}


export default HomePage;