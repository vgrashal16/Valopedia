import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function AgentDetails(props) {
    const { agentName } = useParams();
    const [agentDetails, setAgentDetails] = useState(null); 
    const agentjson = props.agentjson;

    useEffect(() => {
        const matchedAgent = agentjson.find(agent => agent.displayName === agentName);

        if (matchedAgent) {
            setAgentDetails(matchedAgent); 
        }
    }, [agentjson, agentName]);

    return (
        <div className="agent-details">
            <h2>{agentName} Ability Details</h2>
            {agentDetails && (
                <div>
                    <p>Agent ID: {agentDetails.uuid}</p>
                    <p>Agent Description: {agentDetails.description}</p>
                </div>
            )}
        </div>
    );
}

export default AgentDetails;
