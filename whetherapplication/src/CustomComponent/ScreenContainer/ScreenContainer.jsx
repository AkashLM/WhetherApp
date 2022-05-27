import "../ScreenContainer/ScreenContainer.scss";
import Video6 from "../../SampleVideos/sampleV1.mp4";
import InformationContainer from "../InformationContainer/InformationContainer";
const ScreenContainer = () => {
  return <div className="Screen-Wrapper">
      <video src={Video6} autoPlay={true} loop={true} muted={true} className="video-container"/>
      <InformationContainer />
  </div>;
};

export default ScreenContainer;
