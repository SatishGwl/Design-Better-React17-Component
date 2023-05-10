import {data} from '../SpeakerData';
import Speaker from '../public/src/Speaker';

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