import Speaker from "./Speaker";
import useRequestSpeakers from "./hooks/useRequestSpeakers";
// import { resolve } from "styled-jsx/css";
import ReactPlaceholder from "react-placeholder/lib";

function SpeakersList({ showSessions }) {
  const {
    speakersData, isLoading, hasErrored, error, onFavoriteToggle, 
  } = useRequestSpeakers(2000)

  
  if(hasErrored === true){
    return(
      <div className="text-danger">
        ERROR: <b>Loading Sepaker Data Failed {error}</b>
      </div>
    )
  }

  // if(isLoading === true) return <div>Loading.......</div>

  return (
    <div className="container speakers-list">
      <ReactPlaceholder
      type="media"
      rows={15}
      className="speakerlist-placeholder"
      ready={isLoading===false}>
      <div className="row">
        {speakersData.map(function (speaker) {
          return (
            <Speaker
              key={speaker.id}
              speaker={speaker}
              showSessions={showSessions}
              onFavoriteToggle={() => {
                onFavoriteToggle(speaker.id);
              }}
            />
          );
        })}
      </div>
      </ReactPlaceholder>
    </div>
  );
}
export default SpeakersList