import React, { useEffect, useState } from 'react'
// import rahulGandhi from '../assets/img/rahulgandhiImg.png'
import prideLogo from '../assets/img/prideLogo.png'
import teaserimg from '../assets/img/rahulgandhiImg.png'
import playstore from '../assets/img/google-play.png'
import youtubeImage from '../assets/img/youtubeAppImg.png'
import { Link } from 'react-router-dom'
import url from '../baseUrl'
import axios from 'axios'
import teaservideo from '../assets/videos/kpcc-pride-Teaser.mp4'
function ApkStore() {
  const [app,setApp] = useState([])
  const getAllApps = async() => {
    const result = await axios.get(`${url}/api/admin/app-links`)
    setApp(result.data);
    // find the object with name nethaji
    const nethajiApp = result.data.find(ap => ap.name === 'Nethaji')
    console.log(nethajiApp);
    // set the value of the key apk = https://drive.google.com/file/d/1fwjmFFxvDk3SdvwKV00Qs22vFBz-8Kc3/view?usp=sharing
    if(nethajiApp){
      nethajiApp.apk = "https://drive.google.com/file/d/1JaErEuQEmlwDk089nf3IKq-nuRuvz67o/view?usp=sharing"
    }else{
      console.log('not found');
    }
  }
  console.log(app);


  const handlePride = () => {
    window.open("https://drive.google.com/file/d/1fwjmFFxvDk3SdvwKV00Qs22vFBz-8Kc3/view?usp=sharing", "_blank");
  }

  useEffect(() => {
   
    getAllApps()
  },[])
  return (
    <div style={{ backgroundColor: '#4267B2' }} className='w-100'>
      <div style={{ backgroundColor: '' }} className="container py-5">
        {/* vedio */}
        {/* <section className='row pt-4 d-flex align-items-start'>
                <div  className='col-lg-8'>
                  <video   className='w-100 rounded-5'  src={teaservideo} controls ></video>
                  </div>
                <div className="col-lg-4">
                    <img src={teaserimg} className='w-100 img-fluid' alt="" />
                    <div style={{marginTop:'-50px'}}  className='text-white'>
                        <h1>KPCC P.R.I.D.E</h1>
                        <p>Designed and Developed by <span className='fw-bold fs-6'>Type O7 Technocrats</span></p>
                        <p>Concepts and Architecture by <span className='fw-bold fs-6'>Jovin C Varghese</span></p>
                    </div>
                </div>
            </section> */}

        {/* pride */}
        <section className='container'>
        <h4 className='text-white text-uppercase pt-5'>Download link for Kpcc P.R.I.D.E</h4>
        {/* KPCC PRIDE */}
        <div style={{ backgroundColor: '#191B4D' }} className="row py-3 rounded-5 d-flex align-items-start justify-content-center">
          <div className="col-lg-2 col-sm-12 text-center text-lg-start text-white">
            <img style={{ minWidth: '200px', height: '200px' }} src={prideLogo} className='img-fluid bg-white rounded-5' alt="" />
          </div>
          <div className="col-lg-10 d-flex align-items-center justify-content-center mx-sm-auto  py-3">
          <div className='d-flex  flex-column align-items-center justify-content-start mx-sm-auto gap-3'>  
            <h4 className='text-white text-lg-start text-center'>KPCC - P.R.I.D.E (PEOPLE REGION IDENTITY DETAILS ENUMERATION)</h4>
            {/* apk buttons */}
            <div className=' col-lg-12 col-sm-6 d-flex justify-content-start align-items-center gap-3 w-100  flex-wrap '>
                     {/* ios */}
                     <Link to="https://apps.apple.com/in/app/kpcc-pride/id6483858700"  target="_blank" className='btn btn-light '>
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <div>
                          <i class="fa-brands fa-apple fs-2 me-2"></i>
                         </div>
                        <div className='d-flex flex-column'>
                          <span className='fs-6'>Download on the</span>
                          <span className='fw-bold text-start'>APP STORE</span>
                        </div>
                      </div>
                    </Link>
                    {/* google play */}
                    <Link className='apkbtns btn btn-light '>
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <img style={{ height: '30px', width: '30px' }} src={playstore} className='img-fluid me-2' alt="" />
                        </div>
                        <div className='d-flex flex-column'>
                          <span className='fs-6 text-start'>GET IT ON</span>
                          <span className='fw-bold'>GOOGLE PLAY</span>
                        </div>
                      </div>
                    </Link>
          {/* youtube */}
            <Link className='apkbtns btn btn-light py-3 px-4'><img style={{ height: '30px', width: '60px' }} className='img-fluid' src={youtubeImage} alt="" /></Link>

                     {/* apk */}
                     <div className='d-flex align-items-start justify-content-start gap-2'>
                       <Link className='apkbtns btn btn-light text-black text-start    d-flex align-items-center'>
                        <span className='border-end border-dark pe-3 border-2'>APK For <br/> <span className='fw-bold'>ANDROID</span> </span>
                      <i class="fa-solid fa-download ms-3 fs-3"></i></Link>
                       {/* PWA */}
                       <Link  className='apkbtns btn btn-light text-black text-start fw-semibold  d-flex align-items-center py-2'>
                        <span className='border-end border-dark pe-3 border-2 fs-3 '>PWA </span>
                      <i class="fa-solid fa-download ms-3 fs-3"></i></Link>
                     </div>
                  </div>
          </div>
          </div>
        </div> 
        </section>
        <h4 className='text-white text-uppercase pt-5'>Download Link For KPCC- DMC MEDIA ORGANIZER APP</h4>
        {/* main container for all apps */}
        <section style={{ backgroundColor: '#191B4D' }} className='p-3 container rounded-5 d-flex align-items-center justify-content-center w-100 flex-column gap-3'>

        {/*1. All Apps */}
        {app?.length>0&&
        app.map((item,index)=>(
<div key={index} style={{ backgroundColor: '#191B4D' }} className="row py-3 rounded-5   d-flex align-items-start justify-content-center w-100">
          <div className="col-lg-2 col-sm-12 text-center text-lg-start text-white">
            <img style={{ minWidth: '200px', height: '200px' }} src={item?.image} className='img-fluid bg-white rounded-5' alt="" />
          </div>
          <div className="col-lg-8 d-flex align-items-start justify-content-start mx-sm-auto  py-3">
          <div className='d-flex  flex-column align-items-start justify-content-between mx-sm-auto gap-3'>  
            <h4 className='text-white text-lg-start w-100 text-center text-uppercase'>{item?.name}</h4>
            {/* apk buttons */}
            <div className=' col-lg-12 col-sm-6 d-flex justify-content-start  align-items-start gap-2 w-100  flex-wrap'>
                    {/* ios */}
                    <Link to={item?.appstore?item.appstore:"/"} target="_blank" className='btn btn-light '>
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <div>
                          <i class="fa-brands fa-apple fs-2 me-2"></i>
                         </div>
                        <div className='d-flex flex-column'>
                          <span className='fs-6'>Download on the</span>
                          <span className='fw-bold text-start'>APP STORE</span>
                        </div>
                      </div>
                    </Link>
                    {/* google play */}
                    <Link to={item?.playstore?item.playstore:"/"} target="_blank" className='apkbtns btn btn-light '>
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <img style={{ height: '30px', width: '30px' }} src={playstore} className='img-fluid me-2' alt="" />
                        </div>
                        <div className='d-flex flex-column'>
                          <span className='fs-6 text-start'>GET IT ON</span>
                          <span className='fw-bold'>GOOGLE PLAY</span>
                        </div>
                      </div>
                    </Link>
                    {/* youtube */}
                    <Link className='apkbtns btn btn-light py-3 px-4'>
                      <img style={{ height: '30px', width: '60px' }} className='img-fluid' src={youtubeImage} alt="" /></Link>
                     {/* apk */}
                     <div className='d-flex align-items-start justify-content-start gap-2'>
                       <Link to={item?.apk?item.apk:"/"} target='_blank' className='btn apkbtns btn-light text-black text-start   d-flex align-items-center'>
                        <span className='border-end border-dark pe-3 border-2'>APK For <br/> <span className='fw-bold'>ANDROID</span> </span>
                      <i class="fa-solid fa-download ms-3 fs-3"></i></Link>
                       {/* PWA */}
                       <Link to={item?.pwa?item.pwa:"/"} target='_blank' className='apkbtns btn btn-light text-black text-start fw-semibold  d-flex align-items-center py-2'>
                        <span className='border-end border-dark pe-3 border-2 fs-3 '>PWA </span>
                      <i class="fa-solid fa-download ms-3 fs-3"></i></Link>
                     </div>
                  </div>
          </div>
          </div>
        </div>
        ))
           }
        </section>
      </div>
    </div>
  )
}

export default ApkStore
