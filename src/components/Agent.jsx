import React from 'react'
import '../App.css';
import {Link} from 'react-router-dom';

function Agent(props) {

  return (
    <div className='agent'>
        <div className="agentImg custom-cursor-default-hover">
            <img src={props.potrait}></img>
        </div>
        <div className='content'>          
            <div className="name">
                {props.displayName}
            </div>
            <div className="desc">
                //BIOGRAPHY
                <span className='descSpan'>{props.desc}</span>


                <div className='info'>
                    <div className="role">
                        //ROLE<br/>
                        <span className='roleDesc'>
                            {props.role} 
                            <img src={props.roleIcon}></img>  
                        </span>
                        <span className='roleinfo'>
                            {props.roleInfo}
                        </span>
                    </div>
                    <div className="smallpotrait">
                        <img src={props.smallpotrait}></img>
                    </div>
                </div>
            </div>
            <div className="ability">
                <Link to={`/${props.displayName}`}>
                    <button className='abilityBtn'>ABILITIES 🡽</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Agent
