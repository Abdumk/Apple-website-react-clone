import React from "react";
import Header from "../src/commonResource/Header/Header";
import Main from "./commonResource/Main/Main";
import Mac from "./commonResource/Routes/Mac/Mac"
import Iphone from "./commonResource/Routes/Iphone/Iphone"
import Ipad from "./commonResource/Routes/Ipad/Ipad"
import Watch from "./commonResource/Routes/Watch/Watch"
import Tv from "./commonResource/Routes/Tv/Tv"
import Music from "./commonResource/Routes/Music/Music"
import Support from "./commonResource/Routes/Support/Support"
import Cart from "./commonResource/Routes/Cart/Cart"
import Four04 from "./commonResource/Routes/Four04/Four04"
import Footer from "../src/commonResource/Footer/Footer";
import './commonResource/css/bootstrap.css'
import './commonResource/css/styles.css'
import {Routes,Route} from 'react-router-dom'
import SingleAppleProduct from "./commonResource/SingleAppleProduct/SingleAppleProduct";
import Shearlayout from "./commonResource/Shearedcompo/Shearlayout";


function App() {
  return (
    <>
      
      {/* <Header /> */}

      <Routes>   
        <Route path="/" element= {<Shearlayout />}>
            <Route path="/" element= {<Main />}/>
            <Route path="/mac" element= {< Mac />}/>
            <Route path="/iPhone" element= {<Iphone />}/>
            <Route path="/iphone/:pid" element={<SingleAppleProduct />}/>
            <Route path="/iPad" element= {<Ipad />}/>
            <Route path="/watch" element= {<Watch />}/>
            <Route path="/tv" element= {<Tv />}/>
            <Route path="/music" element= {<Music />}/>
            <Route path="/support" element= {<Support />}/>
            {/* <Route path="/search" element= {<Search />}/> */}
            <Route path="/cart" element= {<Cart />}/>
            <Route path="*" element= {<Four04 />}/>
        
        </Route>
    
      </Routes>
       {/* <Footer /> */}



       
      
    </>
   
  );
}

export default App;


