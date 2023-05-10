import {data} from '../SpeakerData';
console.log('+++data++', data.sessions)

function Session({title, room}){
    console.log('+++props+++', title);
    return(
        <span className='session w-100'>
             {title} <strong>Room: {room}</strong>
        </span>
    )
}

function Sessions({sessions}){
    console.log('+++sessions+++', data.sessions)
    return(
        <div className='sessionBox card h-250'>
            <Session title={sessions[0].title}
            room={sessions[0].room.name}/>
        </div>
    )
}

const SpeakerImage = ({id, first, last}) =>{
    return(
        <div className='speaker-img d-flex flex-row justify-content-center align-item-center h-300'>
        <img className='contain-fit'
            src={`/images/speaker-${id}.jpg`}
            width='300'
            alt={`{ ${first} ${last} }`}
        /> 
    </div>
    )
}

const SpeakerDemographics = ({first, last, bio, company, twitterHandler, favourite}) =>{
    return(
        <div className='speaker-info'>
            <div className='d-flex justify-content-between mb-3'>
                <h3 className='text-turncate w-200'>
                    {first} {last}
                </h3>
            </div>
            <div>
                <p>{bio}{company}{twitterHandler}{favourite}</p>
            </div>
        </div>
    )
}

const Speaker =({speaker})=>{
    const {id, first, last, sessions} = speaker;
    return(
        <div key={id} className='col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12'>
        <div className='card card-heigth p-4 mt-4'>
            <SpeakerImage id={id} first={first} last={last}/>
            <SpeakerDemographics {...speaker}/>
            <Sessions sessions={sessions}/>
        </div>
    </div>
    )
}

const IndexPage = ()=> {
    return(
        <div className='container speaker-list'>
            <div className='row'>
                {data.map(function(speaker){
                    return(
                       <Speaker key={speaker.id} speaker={speaker}/>
                    )
                })}
            </div>
        </div>
    )
}
export default IndexPage;