import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import './styles.css';

const Episodes = () => {

    const GET_EPISODES = gql`
    query Query {
        episodes {
            results {
                id 
                name 
                episode 
                air_date
            }
        }
    }
`
    const {data, loading, error} = useQuery(GET_EPISODES);

    if(loading) return <p>Loading episodes...</p>
    if(error) return <p>An error occured...</p>

    const results = data.episodes.results.map(({id, name, episode, air_date}) => {
        return (
            <div className="episode_item" key={id}>
                <div className="episode_name">{id}. <Link to="/"> {name}</Link></div>
                <div className="episode_code"><Link to="/">{episode}</Link></div>
            </div>
        )
    })

    return (
        <div>
            <div className="episodes_list">
                {results}
            </div>
        </div>
    )
}

export default Episodes;
