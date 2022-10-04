import React from "react";
import {gql, useQuery} from '@apollo/client'
import './styles.css';

const FetchCharacters = () => {

    const GET_CHARACTERS = gql`
        query Query {
            characters {
                results {
                    id
                    name
                    image
                    location {
                        name 
                        dimension
                    }
                }
              }
        }
    `;

    const {data, loading, error} = useQuery(GET_CHARACTERS);

    if(loading) return <p>Loading....</p>
    if(error) return <p>Error occured.. {error} </p>

    return data.characters.results.map(({id, name, image, location}) => {
        return (
        <div key={id} className="character_section">
            <div className="character_image">
                <img src={`${image}`} className="image" alt={`${name}`} />
            </div>
            <div className="character_name">{name}</div>
            <div className="character_location">
                <p>Location: {location.name}</p>
                <p>Dimension: {location.dimension}</p>
            </div>
        </div>
        )
    });
}

const App = () => {
    return (
        <div className="body_section">
            <FetchCharacters />
        </div>
    )
}

export default App;
