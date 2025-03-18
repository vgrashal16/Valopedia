import React, { useState, useEffect } from 'react';
import { useParams, useNavigate} from 'react-router-dom';

function AgentDetails(props) {
    const { agentName } = useParams();
    const [agentDetails, setAgentDetails] = useState(null); 
    const agentjson = props.agentjson;
    const navigate = useNavigate();
    
    useEffect(() => {
        const matchedAgent = agentjson.find(agent => agent.displayName === agentName);

        if (matchedAgent) {
            setAgentDetails(matchedAgent); 
        }
    }, [agentjson, agentName]);

    console.log(agentDetails);
    return (
        <div className="agent-details">
            {agentDetails && (
            <> 
            <div className="agent-potrait">
                <button className='goBackBtn' onClick={() => navigate('/')}>Go Back</button>
                <img src={agentDetails.fullPortraitV2}></img>
            </div>
            <div className="abilities">
            {agentDetails.abilities.map((ability, index) => (
                <div key={index} className="ability">
                    <img src={ability.displayIcon} alt={ability.displayName} className="ability-icon"/>
                    <div className="ability-info">
                        <h3>{ability.displayName}</h3>
                        <p>{ability.description}</p>
                    </div>
                </div>
            ))}
            </div>
            </>  
            )}
        </div>
    );
}

export default AgentDetails;
