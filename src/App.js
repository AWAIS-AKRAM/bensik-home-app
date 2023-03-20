import logo from './logo.svg';
import './App.css';
import img1 from "./assets/Random Symboles 3.png"
import img2 from "./assets/Hero.png"
import ServicesCard from './components/servicesCard';
import Vector from './components/Vector.png';
import icon from './components/icon.png'
import img3 from './assets/unsplash.png'
import Cards from './components2/Cards';
import house from "./assets/house.png"
import icon1 from "./assets/icon 1.png"
import icon2 from "./assets/icon 2.png"
import icon3 from "./assets/icon 3.png"
import icon4 from "./assets/icon 4.png"
import icon5 from "./assets/icon 5.png"
import img4 from "./assets/unsplash2.png"
import ProjectsCards from './components3/ProjectsCards';
import building from "./assets/building.png"
import building2 from "./assets/building2.png"
import building3 from "./assets/building3.png"
import building4 from "./assets/building4.png"
import InputCards from './components4/InputCards';
import image4 from "./assets/logo 1.png"
import image5 from "./assets/facebook.png"
import image6 from "./assets/twitter.png"
import image7 from "./assets/linkedin.png"




function App() {
  return (
    <div className="App">
      <div className='d'>
      <ul className='ul'>
        <li> <a href="#">Home</a> </li>
        <li> <a href="#">About us</a> </li>
        <li> <a href="#">Project</a> </li>
        <li> <a href="#">Services</a> </li>
        <li> <a href="#">Contact Us</a> </li>

      </ul>
      </div>
      <div className='d2'>
      <img src={img1} alt="" />
      <h2 className='h1'>The Box</h2>
      </div>

      <div>
        <img className='img1' src={img2} alt="" />
        <h1 className='h2' >Our Reputation</h1>
      </div>
      

      <div style={{display:'flex' ,marginTop:150,gap:66,marginLeft:216}}>
      <ServicesCard Vector={Vector} text={"Best Services"} textcolor={"#3D445C"} p={"Nullam senectus porttitor in eget. Eget rutrum leo interdum."} pcolor={"#858EAD"}/>
      <ServicesCard Vector={Vector} text={" Best Teams"} textcolor={"#3D445C"} p={"Cursus semper tellus volutpat aliquet lacus."}  pcolor={"#858EAD"}/>
      <ServicesCard Vector={icon} text={"Best Designs"} textcolor={"#3D445C"} p={"Ultricies at ipsum nunc, tristique nam lectus."} pcolor={"#858EAD"}/>
      </div>

      <div>
        <img className='img3' src={img3} alt="" />
        <div className='d4'>
          <h1 className='h3'>About us</h1>
          <p className='p1'>For more than 30 years we have been delivering world-class construction and we’ve built many lasting relationships along the way.   We’ve matured into an industry leader and trusted resource for those seeking quality, innovation and reliability when building in the U.S.</p>
          <input className='input1' type="text" placeholder='More On Your History' />
        </div>
      </div>

      <div><h1 className='h5'>Services</h1></div>


      <div style={{display:'flex',gap:98 , marginLeft:216}}>
        <Cards bgColor={"#FFFFFF"} htag={"Construction"} textcolor={"#2947A9"} house={house} />
        <Cards bgColor={"#2947A9"} htag={"Renovation"} textcolor={"#FFFFFF"} house={icon1} />
        <Cards bgColor={"#FFFFFF"} htag={"Consultation"} textcolor={"#2947A9"} house={icon2} />
      </div>
      <div style={{display:'flex',gap:98,marginTop:50,marginLeft:216}}>
      <Cards bgColor={"#2947A9"} htag={"Repair Services"} textcolor={"#FFFFFF"} house={icon3} />
      <Cards bgColor={"#FFFFFF"} htag={"Architecture"} textcolor={"#2947A9"} house={icon4} />
      <Cards bgColor={"#2947A9"} htag={"Electric"} textcolor={"#FFFFFF"} house={icon5} />
      </div>
      <div>
        <img className='image4' src={img4} alt="" />
        <h1 className='h6'>Free consultation with exceptional quality</h1>
        <p className='p2'>Just one call away: +84 1102 2703</p>
        <button className='b2'>Get your consultation</button>
      </div>

      <div>
        <h1 className='h7'>Projects</h1>
        
        <hr className='hr2' />
        <h1 className='h8'>All</h1>
      <ul className='ul2'>
        <li>Commercial</li>
        <li>Residential</li>
        <li>Other</li>
      </ul>

      </div>

      <div style={{display:'flex',gap:30, marginLeft:528,marginTop:-200 }}>
      <ProjectsCards bgColor={"#2947A9"} building={building}  htag={"Wildstone Infra Hotel"} ptag={"2715 Ash Dr. San Jose, South Dakota"}
        textColor={"#FFFFFF"}/>
      <ProjectsCards bgColor={"#2947A9"} building={building2} htag={"Wish Stone Building"}  ptag={"2972 Westheimer Rd. Santa Ana, Illinois "}
         textColor={"#FFFFFF"}/>
      </div>

      <div style={{display:'flex',gap:30, marginTop:20,marginLeft:528}}>
      <ProjectsCards bgColor={"#2947A9"} building={building3}  htag={"Mr. Parkinston’s House"} ptag={"3517 W. Gray St. Utica, Pennsylvania"}
        textColor={"#FFFFFF"}/>
      <ProjectsCards bgColor={"#2947A9"} building={building4} htag={"Oregano Height"}  ptag={"2464 Royal Ln. Mesa, New Jersey "}
         textColor={"#FFFFFF"}/>
      </div>

      <div style={{display:'flex', textAlign:'center', gap:150,marginLeft:528,marginTop:70}}>
        <div className='d5'> Back</div>
        <div className='d6'>Next </div>
      </div>

      <div>
        <h1 className='h9'>What can us do for you?</h1>
        <p className='p3'>We are ready to work on a project of any complexity, whether it’s commercial or residential.</p>
      </div>
<div style={{display:'flex',gap:20,marginLeft:424}}>
  <InputCards/>
  <InputCards/>
  </div>
  <div style={{display:'flex',gap:20,marginLeft:424,marginTop:30}}>
  <InputCards/>
  <InputCards/>
  </div>
  <div>
  <input className='input2' placeholder='Message' type="text" />
  <p className='p4'> * indicates a required field</p>
  <button className='b3'>Submit</button>

  </div>
<div>
  <ul className='ul3'>
    <li>Address:</li>
    <li>Phone:</li>
    <li>Email:</li>
  </ul>
</div>
<div>
  <ul  className='ul4'>
    <li>6391 Elgin St. Celina, Delaware 10299</li>
    <li>+84 1102 2703</li>
    <li>hello@thebox.com</li>

  </ul>
  <img className='image5' src={image4} alt="" />
</div>


<div>
  <h1 className='h10'>Newsletter:</h1>
  <input className='input4' type="text" placeholder='Your email here' name="" id="" />
  <div className='d7'>
  <button className='b4' >Subscribe</button>
  <h1 className='h11'>Social:</h1>
  <div style={{display:'flex',gap:50,marginLeft:904}}>
    <img src={image5} alt="" />
    <img src={image6} alt="" />
    <img src={image7} alt="" />
  </div>
  </div>

  <div style={{height:70,width:1440,backgroundColor:"#2947A9",marginTop:20,}}>
    <p className='p5'>TheBox Company © 2022. All Rights Reserved</p>
  </div>
</div>

      
    </div>
  );
}

export default App;
