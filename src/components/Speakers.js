import SpeakersToolbar from "./SpeakersToolbar";
import SpeakersList from "./SpeakersList";
import { SpeakerFilterProvider } from "./Contexts/speakerContextFilter";

function Speakers() {
    return (
      <SpeakerFilterProvider startingShowSessions={false}>
        <SpeakersToolbar />
        <SpeakersList />
      </SpeakerFilterProvider>
    );
  }
  
  export default Speakers;