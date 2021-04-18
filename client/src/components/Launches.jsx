import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import LaunchesItem from './LaunchesItem';
import MissionKey from './MissionKey';
const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

const Launches = () => {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);
  const [filter, setFilter] = useState('all');
  const handleFilter = (e) => {
    setFilter(e.target.value);
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      <h1 className='display-4 my-3'>Launches</h1>
      <MissionKey />
      <div class='mb-3 row'>
        <div className='col-md-4'></div>
        <div className='col-md-4'>
          <select class='form-control' onChange={handleFilter}>
            <option value='all' selected>
              All Launches
            </option>
            <option value='success'>Successful Launches</option>
            <option value='fail'>Failed Launches</option>
          </select>
        </div>
        <div className='col-md-4'></div>
      </div>
      {data.launches.map((curr) => (
        <LaunchesItem
          filter={filter}
          key={curr.flight_number}
          flight_number={curr.flight_number}
          mission_name={curr.mission_name}
          launch_date_local={curr.launch_date_local}
          launch_success={curr.launch_success}
        />
      ))}
    </div>
  );
};

export default Launches;
