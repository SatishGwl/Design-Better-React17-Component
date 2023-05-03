import {data} from '../SpeakerData';
console.log('+++data++', data)

const IndexPage = ()=> {
    return(
        <div className='container speaker-list'>
            <div className='row'>
                {data.map(function(speaker){
                    const {id, bio, first, last, favourite, twitterHandler, company, sessions } = speaker;
                    console.log('+++Speaker++', typeof(speaker))
                    return(
                        <div key={id} className='col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12'>
                        <div className='card card-heigth p-4 mt-4'>
                            <div className='speaker-img d-flex flex-row justify-content-center align-item-center h-300'>
                                <img className='contain-fit'
                                    src={`/images/speaker-${id}.jpg`}
                                    width='300'
                                    alt={`{ ${first} ${last} }`}
                                /> 
                            </div>
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
                            <div className='sessionBox card h-250'>
                                <span className='session w-100'>
                                    {sessions[0].title}
                                </span>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}
export default IndexPage;