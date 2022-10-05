import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Link, useParams } from "react-router-dom";

const GET_LOCATION = gql`
    query Query($locationId: ID!) {
        location(id: $locationId) {
            id 
            name 
            type
            residents {
                id 
                image 
                name 
                episode {
                    episode
                }
            }
        }
  }
`

const Location = () => {
    const {id} = useParams();

    const {data, loading, error} = useQuery(GET_LOCATION, {
        variables: {locationId: id}
    });

    if(loading) return <p>Loading....</p> 
    if(error) return <p>Error! :)</p>

    const {name, residents, type} = data.location;

    return (
        <div>
            <p><Link to="/locations">Back</Link></p>
            <div className="location_section">
                <div className="location_header">
                    <h1>{name}</h1>
                </div>
                <div className="location_details">
                    <p>Type: {type}</p>
                    <p>Total Residents: {residents.length}</p>
                    <div className="residents_div">
                        {
                            residents.map(({id, image, name, episode}) => {
                                return (
                                    <div key={id} className="character_div">
                                        <div key={id} className="resident_section">
                                            <div className="resident_image">
                                                <img src={`${image}`} className="image" alt={`${name}`} />
                                            </div>
                                            <div className="resident_location">
                                                <p>Name: <Link to={`/character/${id}`}> {name}</Link></p>
                                                <p>Episode: 
                                                    <ul>
                                                    {
                                                        episode.map(obj=> {
                                                            return (
                                                                <li>{obj.episode}</li>
                                                            )
                                                        })
                                                    }
                                                    </ul>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Location;
