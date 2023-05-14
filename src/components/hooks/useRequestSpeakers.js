import { data } from "../../../SpeakerData";
import { useState, useEffect } from "react";
export const REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    FAILURE: "failure",
}

function useRequestSpeakers(delayTimes= 1000) { 
  const [speakersData, setSpeakersData] = useState([]);
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING)
//   const [isLoading, setIsLoading] = useState(true);
//   const [hasErrored, setHasErrored] = useState(false)
  const [error, setError] = useState("");
  const delay = (ms)=> new Promise((resolve)=> setTimeout(resolve, ms));

  //custome hooks
  
  
  
  useEffect(()=>{
    async function delayFunc(){
      try{
        await delay(delayTimes);
        setRequestStatus(REQUEST_STATUS.SUCCESS)
        // setIsLoading(false)
        setSpeakersData(data)
      } catch(e){
        requestStatus(REQUEST_STATUS.FAILURE)
        // setIsLoading(false);
        // setHasErrored(true);
        setError(e);
      }
   
    }
    delayFunc()
  },[]);

  function onFavoriteToggle(id) {
    const speakersRecPrevious = speakersData.find(function (rec) {
      return rec.id === id;
    });
    const speakerRecUpdated = {
      ...speakersRecPrevious,
      favorite: !speakersRecPrevious.favorite,
    };
    const speakersDataNew = speakersData.map(function (rec) {
      return rec.id === id ? speakerRecUpdated : rec;
    });

    setSpeakersData(speakersDataNew);
  }
  return {
    speakersData,
    requestStatus,
    // isLoading,
    // hasErrored,
    error,
    onFavoriteToggle
  }
}
export default useRequestSpeakers;
