
import './findDoctor.css' 
import Ellipse8 from '../assets/Ellipse 8.png';
import pngwing2 from '../assets/pngwing 2.png';
import pngwing1 from '../assets/pngwing 1.png';
import pngwing5 from '../assets/pngwing 5.png';
import Ellipse7 from '../assets/Ellipse 7.png';
import Rectangle74 from '../assets/Rectangle 74.png';

const FindDoctors = () => {
  return (
    <div className='findDoctorMainContainer'>
      <div className="firstDocDiv">
        <div className="inputContainer">
          <input className="inputCommonDoctorClass" id="serchforDoctor" placeholder='Search for nearby doctor' />
          <input className="inputCommonDoctorClass" id="serchNearDoctor" placeholder='Search for nearby doctor' />
          
          <img src={Ellipse7} id="moon" />
          <img src={pngwing5} id="treeImg" />
          <img src={Ellipse8} id="fullmoon" />
          <img src={pngwing1} id="circle" />
          <img src={pngwing2} id="avtar" />
          <img src={Rectangle74} id="bluerect1" />
          <img src={Rectangle74} id="bluerect2" />
          
        </div>
      </div>
      <div className="secondDocDiv">
       <div className="bottombtnContainer">
        <button id="btn1" className="btnn">Consult with a doctor</button>
        <button id="btn2" className="btnn">Order Medicines</button>
        <button id="btn3" className="btnn">Book test</button>
       </div>
      </div>
    </div>
  )
}

export default FindDoctors