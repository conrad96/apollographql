import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Link, useParams } from "react-router-dom";

const Episode = () => {

    const GET_EPISODE = gql`
    query Query ($episodeId: ID!) {
        episode(id: $episodeId) {
            id 
            name 
            episode
            created 
            characters {
                id 
                name 
                image 
            }
        }
    }
`;
    const {id} = useParams();

    const {data, loading, error} = useQuery(GET_EPISODE, {
        variables: {episodeId: id}
    });

    if(loading) return <p>Loading episode information...</p>
    if(error) return <p>An error occured...</p>

    const {episode, created, characters} = data.episode;

    return (
        <div>
            <Link to={`/episodes`}>Back</Link>
            <div className="episode_detail">
                <div className="episode_header">
                    <h2>{episode}</h2>
                </div>
                <div className="episode_details">
                    <div className="episode_characters">
                    {
                        characters.map(({id, name, image}) => {
                            return (
                            <div key={id} className="character_area">
                                <div className="character_img"><img src={`${image}`} alt={`${name}`} className="episode_character_image" /></div>
                                <div className="character_details">
                                    <Link to={`/character/${id}`}>{name}</Link>
                                </div>
                            </div>)
                        })
                    }
                    </div>
                </div>
                <div className="episode_footer">
                    Created: {created}
                </div>
            </div>
        </div>
    )
}

export default Episode;
