
import './home.css'
import bx_time from '../../assets/bx_time.png';
import iconoirHealthcare from '../../assets/iconoirHealthcare.png';
import Rectangle from '../../assets/Rectangle.png';
import Group from '../../assets/Group.png';
import Chamber from '../../assets/Chamber.png';
import CustomerCare from '../../assets/CustomerCare.png';
import onlineSpercialist from '../../assets/onlineSpercialist.png';
import Security from '../../assets/Security.png';
import neurology from '../../assets/neurology.png';
import blood_pressure from '../../assets/blood_pressure.png';
import surgical_sterilization from '../../assets/surgical_sterilization.png';
import Vector from '../../assets/Vector.png';
import pediatric_surgery from '../../assets/pediatric_surgery.png';
import opthalmology from '../../assets/opthalmology.png';
import orthopaedics from '../../assets/orthopaedics.png';
import output1 from '../../assets/output1.png';
import image22 from '../../assets/image 22.png';
import Group8 from '../../assets/Group 8.png';
import Arc from '../../assets/Arc.png';
import output2 from '../../assets/output2.png';
import TopSpecialist from '../../components/LandingPages/TopSpecialist/TopSpecialist';
import Testimonials from '../../components/LandingPages/Testimonials/Testimonials';
import Services from "../../components/LandingPages/Services/Services"


const Home = () => {
  return (
    <div className="OuterHomeContainer">
      {/* *****************Doctor Section Part 1**************** */}
      <div className="doctorSection">
        <div className="leftDiv">
          <h1 id="firstHeading">
            Doc-Q - Where Your
            <br /> Time Matters as Much
            <br /> as Your Health
          </h1>
          {/* <h1 id="updatedHeading">Doc-Q – Where Your Time Matters as Much as Your Health</h1> */}
          <img src={output1} width="100%" />
          <p id="secondPara">
            Break free from waiting for doctor appointments!
            <br /> Prioritizing your time with swift consultations,
            <br /> surgeries, and rapid medical services for a<br /> healthier,
            hassle-free experience."
          </p>
          {/* <p id="updatedPara">Break free from waiting for doctor appointments! Prioritizing your time with swift consultations,  surgeries, and rapid medical services for a  healthier, hassle-free experience."</p> */}
          <button id="mybtn" className='rounded-full'>Book Appointment</button>
        </div>
        <div className="middleDiv">
          <img id="docImage1" src={image22} width="100%" />
          <img id="docImage2" src={Group8} width="40%" />
        </div>
        <div className="rightDiv">
          <img id="arcImage" src={Arc} width="25%" />
          <img id="outputImage" src={output2} width="100%" />
          <p>
            <span>“</span>A trusted assistance companion for your health needs.{" "}
            <span>”</span>
          </p>
        </div>
      </div>

      {/* *****************Jambotron Section Part 2**************** */}
      <div className="Jambotron">
        <div className="jamboDiv" id="jambo1">
          <div className="jamboleft">
            <img id="reactangle" src={Rectangle} />
            <img id="smallimg" src={bx_time} />
          </div>
          <div className="jamboright">
            <p className="commonBoldpara">24 hours services</p>
            <p className="paradesign">
              lorem ipsum dolor sit
              <br /> amet,connector adicipafg
            </p>
          </div>
        </div>

        <div className="jamboDiv" id="jambo2">
          <div className="jamboleft">
            <img id="reactangle" src={Rectangle} />
            <img id="smallimg" src={Group} />
          </div>
          <div className="jamboright">
            <p className="commonBoldpara">Best reviews</p>
            <p className="paradesign">
              lorem ipsum dolor sit
              <br /> amet,connector adicipafg
            </p>
          </div>
        </div>

        <div className="jamboDiv" id="jambo3">
          <div className="jamboleft">
            <img id="reactangle" src={Rectangle} />
            <img id="smallimg" src={iconoirHealthcare} />
          </div>
          <div className="jamboright">
            <p className="commonBoldpara">High quality care</p>
            <p className="paradesign">
              lorem ipsum dolor sit
              <br /> amet,connector adicipafg
            </p>
          </div>
        </div>
      </div>

      {/* *****************ServicesSection Section Part 3**************** */}
      <div className='flex justify-center items-center'>
      <Services />
      </div>
      <TopSpecialist />
      <Testimonials />
    </div>
  );
};

export default Home;
