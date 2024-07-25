import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
const Room = () => {
    const {id} = useParams();
    let myMeeting = async (element) => {
       
         const appID = 869762598 ;
         const serverSecret = "9ad056509d0917f59eba20bacfe31bed";
         const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,id,Date.now().toString(),"Aditya");
   
       
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