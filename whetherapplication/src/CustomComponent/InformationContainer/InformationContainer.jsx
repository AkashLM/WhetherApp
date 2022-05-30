import "../InformationContainer/InformationContainer.scss";
import Video4 from "../../SampleVideos/sampleV4.mp4";
import { useEffect, useState } from "react";
import axios from "axios";
const InformationContainer = () => {
  const [Data, setData] = useState(null);

  const getDetails = async () => {
    try {
      const Response = await axios.get(
        "http://api.weatherapi.com/v1/current.json?key=52789c55c58a474982e134039222705&q=18.435061,73.849220"
      );
      console.log("Response:", Response);
      const FilterData = Response.data;
      setData(FilterData);
      console.log(FilterData)
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  function refreshPage() {
    window.location.reload(false);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      refreshPage();
    }, 60000);
    return () => clearTimeout(timer);
  }, []);

  // console.log(Data);
  // const Icon={Data.current.condition.icon};
  if(Data){  return (
    <div className="Info-Container">
      <video
        src={Video4}
        autoPlay={true}
        loop={true}
        muted={true}
        className="Info_background-Video"
      />
      <div className="Info-details">
        <div className="Info-Left">
          <div className="Info-Left-Section-A">
            Climate: {Data.current.condition.text}
          </div>
          <div className="Info-Left-Section-B">
            <div className="B-Left-Logo">Temp Logo</div>
            <div className="B-Right-Temp">{Data.current.temp_c}° C</div>
          </div>
          <div className="Info-Left-Section-C">
            <div className="C-Left-logo"></div>
            <div className="C-Right-Text">
              Humidity: {Data.current.humidity}
            </div>
          </div>
          <div className="Info-Left-Section-D">
            <div className="D-Left-logo"></div>
            <div className="D-Right-Text">Place:</div>
            <div className="D-Right-Details">{Data.location.name}</div>
          </div>
          <div className="Info-Left-Section-E">
            <div className="E-Left-logo"></div>
            <div className="E-Right-Text">Region:</div>
            <div className="E-Right-Details">{Data.location.region}</div>
          </div>
          <div className="Info-Left-Section-F">
            <div className="F-Left-logo"></div>
            <div className="F-Right-Text">Country:</div>
            <div className="F-Right-Details">{Data.location.country}</div>
          </div>
        </div>
        <div className="Info-Right">
          <div className="Right-Section-1">
            <div className="Right-Header-Top">Day Forcast:</div>
          </div>
          <div className="Right-Section-2">
            <div className="Section-2-List">
              <div className="List-Header">Wind Direction :</div>
              <div className="List-Details">W N W</div>
            </div>
            <div className="Section-2-List">
              <div className="List-Header">Wind Speed :</div>
              <div className="List-Details">{Data.current.wind_mph} mph</div>
            </div>
            <div className="Section-2-List">
              <div className="List-Header">Pressure : </div>
              <div className="List-Details">{Data.current.pressure_mb} mb</div>
            </div>
            <div className="Section-2-List">
              <div className="List-Header">Cloud MG :</div>
              <div className="List-Details">{Data.current.cloud}</div>
            </div>
            <div className="Section-2-List">
              <div className="List-Header">UV Index:</div>
              <div className="List-Details">{Data.current.uv}</div>
            </div>
          </div>
          <div className="Right-Section-3">
            <div className="Section-3-Div-1">Monday</div>
            <div className="Section-3-Div-1">{Data.current.last_updated}</div>
            <div className="Section-3-Div-1">{Data.location.tz_id}</div>
          </div>  
        </div>
      </div>
    </div>
  );}else{
    <div>Loading</div>
  }

};

export default InformationContainer;
