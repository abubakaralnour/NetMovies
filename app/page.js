
import First from "./component/First/First";
import Footer from "./component/Footer/Footer";
import RootTrand from "./component/RooTrand/page";
import MoreReason from "./component/MoreReason/MoreReason";
import Login from "./component/Login/page";
import LoginMobile from "./component/LoginmMobil/page";
import RootLogin from "./component/RootLogin/page";

export default function Page() {
  return (
    <>
    <div className="bg-black" >
        <First/>
       
    <RootTrand/>
    <MoreReason/>
    
   
        <Footer/> 
       
</div>
    </>
  )
}




