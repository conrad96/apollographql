import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";

const Locations = () => {

    const GET_LOCATIONS = gql`
    query Query {
        locations {
          results {
            id 
            name
            dimension
          }
        }
      }`;

    const {data, loading, error} = useQuery(GET_LOCATIONS);

    if(loading) return <p>Loading locations...</p>
    if(error) return <p>An error occured...</p>

    const results = data.locations.results.map(({id, name, dimension}) => {
        return (
            <div className="location_item" key={id}>
                <div className="location_name">{id}. <Link to={`/location/${id}`}> {name}</Link>
                    <div className="location_dimension">{dimension}</div>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className="locations_list">
                {results}
            </div>
        </div>
    )
}

export default Locations;
