import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';



export default function About() {
  return (
    <div>
        <div style={{height:500,width:1440,backgroundColor:"black",marginLeft:40,display:'flex'}}>
            <div style={{height:250,width:320,marginTop:100,paddingLeft:100}}>
                <h2 style={{color:'white'}}>NEED HELP?</h2>
                <p style={{color:'white'}}>+92 304 6565 189 (9am - 10pm , Mon - Sat)</p>
                <p style={{color:'white'}}>mrawais0304@gmail.com</p>
            </div>

            <div style={{height:250,width:320,marginTop:100,marginLeft:50}}>
                <h2 style={{color:'white'}}>CUSTOMER SERVICE</h2>
                <p style={{color:'white',width:130}}>Contact Us Delivery & Orders Returns & Exchanges Terms & Conditions Privacy Policy Track My Order Payment Guide</p>
            </div>

            <div style={{height:250,width:320,marginTop:100,marginLeft:50}}>
                <h2 style={{color:'white'}}>COMPANY</h2>
                <p style={{color:'white',width:120}}>About Us Careers Store locator Store Addresses</p>

            </div>


            <div style={{height:250,width:320,marginTop:100,marginLeft:50}}>
                <h2 style={{color:'white'}}>FOLLOW US</h2>
                <div style={{display:'flex',gap:30}}>
                    <InstagramIcon style={{color:'white'}}/>
                    < FacebookIcon style={{color:'white',}}/>
                    <LinkedInIcon  style={{color:'white'}}/>
                    < TwitterIcon style={{color:'white'}}/>
                </div>

            </div>

        </div>

        
    </div>
  )
}
