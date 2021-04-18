import React from 'react';
import { gql, useQuery } from '@apollo/client';
import LaunchesItem from './LaunchesItem';
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      <h1 className='display-4 my-3'>Launches</h1>
      {data.launches.map((curr) => (
        <LaunchesItem
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
