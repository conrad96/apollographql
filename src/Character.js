import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Link, useParams } from "react-router-dom";

const GET_CHARACTER = gql`
    query Query($characterId: ID!) {
        character(id: $characterId) {
            id
            name 
            gender 
            species 
            image 
            location {
                id 
                name 
                dimension 
            }
            origin {
                name 
            }
        }
    }
`

const Character = () => {
    const {id} = useParams();

    const {data, loading, error} = useQuery(GET_CHARACTER, {
        variables: {characterId: id}
    });

    if(loading) return <p>Loading....</p> 
    if(error) return <p>Error! :)</p>

    const {image, gender, name, location, origin, species} = data.character;

    return (
        <div>
            <p><Link to="/characters">Back</Link></p>
            <div className="character_section">
                <div className="character_img">
                    <img src={`${image}`} className="img_photo" alt={`${name}`} />
                </div>
                <div className="character_details">
                    <p>Name: {name}</p>
                    <p>Gender: {gender}</p>
                    <p>Species: {species}</p>
                    <p>Origin: {origin.name}</p>
                    <p>Location: {location.name}</p>
                </div>
            </div>
        </div>
    );
}

export default Character;
