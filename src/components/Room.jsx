import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
const Room = () => {
    const {id} = useParams();
    let myMeeting = async (element) => {
       
         const appID =  ;//use your own appID from zegocloud
         const serverSecret = "";//use your own server secreat from zegocloud
         const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,id,Date.now().toString(),"");//write your own name or any name you want to write for yourself
   
       
         const zp = ZegoUIKitPrebuilt.create(kitToken);
         zp.joinRoom({
           container: element,
           sharedLinks: [
             {
               name: 'Personal link',
               url:`http://localhost:5173/room/${id}`
                
             },
           ],
           scenario: {
             mode: ZegoUIKitPrebuilt.OneONoneCall,
           },
           showScreenSharingButton:true,
         
         });
   
       
     };
  return (
    <div
    className="myCallContainer"
    ref={myMeeting}
    style={{ width: '100vw', height: '100vh' }}
  ></div>
  )
}

export default Room
