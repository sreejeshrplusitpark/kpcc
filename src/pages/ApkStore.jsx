import React from 'react'
import NethajiApp from '../assets/img/Nethaji_app.png'
import apkAndroid from '../assets/img/apkAndroid.jpg'
import { Link } from 'react-router-dom'

function ApkStore() {
    const handleimage=()=>
    {
        window.open("https://drive.google.com/file/d/1JaErEuQEmlwDk089nf3IKq-nuRuvz67o/view?usp=sharing", "_blank");
    }
  return (
    <div style={{backgroundColor:'#4267B2'}} className='w-100'>
        <div className="container py-5">
            {/* vedio */}
            <section>

            </section>
            <section className='container'>
                <h6 className='text-white'>Download Link For KPCC- DMC MEDIA ORGANIZER APP</h6>
                {/* nethaji app */}
                <div style={{backgroundColor:'#191B4D'}} className="row py-3 rounded-5">
                  <div className="col-lg-2 text-center text-white">
                    <img style={{minWidth:'200px',height:'200px'}} src={NethajiApp}  className='img-fluid bg-white rounded-5' alt="" />
                  </div>
                  <div className='col-lg-8  text-white mt-3'>
                    <h4 className='text-white'>NETHAJI</h4>
                     <Link onClick={handleimage} > <img className='py-4 ' src={apkAndroid}  alt="" /></Link>
                    </div>
                </div>
            </section> 
            
            {/* <section className='mt-3'>
                <div style={{backgroundColor:'#191B4D'}} className="row py-3 rounded-5">
                  <div className="col-lg-2 text-center text-white">
                    <img style={{minWidth:'200px',height:'200px'}} src={NethajiApp}  className='img-fluid bg-white rounded-5' alt="" />
                  </div>
                  <div className='col-lg-8  text-white mt-3'>
                    <h4 className='text-white'>NETHAJI</h4>
                     <Link > <img className='py-4' src={apkAndroid}  alt="" /></Link>
                    </div>
                </div>
            </section> 
            <section className='mt-3'>
                <div style={{backgroundColor:'#191B4D'}} className="row py-3 rounded-5">
                  <div className="col-lg-2 text-center text-white">
                    <img style={{minWidth:'200px',height:'200px'}} src={NethajiApp}  className='img-fluid bg-white rounded-5' alt="" />
                  </div>
                  <div className='col-lg-8  text-white mt-3'>
                    <h4 className='text-white'>NETHAJI</h4>
                     <Link > <img className='py-4' src={apkAndroid}  alt="" /></Link>
                    </div>
                </div>
            </section> 
            <section className='mt-3'>
                <div style={{backgroundColor:'#191B4D'}} className="row py-3 rounded-5">
                  <div className="col-lg-2 text-center text-white">
                    <img style={{minWidth:'200px',height:'200px'}} src={NethajiApp}  className='img-fluid bg-white rounded-5' alt="" />
                  </div>
                  <div className='col-lg-8  text-white mt-3'>
                    <h4 className='text-white'>NETHAJI</h4>
                     <Link > <img className='py-4' src={apkAndroid}  alt="" /></Link>
                    </div>
                </div>
            </section> 
            <section className='mt-3'>
                <div style={{backgroundColor:'#191B4D'}} className="row py-3 rounded-5">
                  <div className="col-lg-2 text-center text-white">
                    <img style={{minWidth:'200px',height:'200px'}} src={NethajiApp}  className='img-fluid bg-white rounded-5' alt="" />
                  </div>
                  <div className='col-lg-8  text-white mt-3'>
                    <h4 className='text-white'>NETHAJI</h4>
                     <Link > <img className='py-4' src={apkAndroid}  alt="" /></Link>
                    </div>
                </div>
            </section> 
            <section className='mt-3'>
                <div style={{backgroundColor:'#191B4D'}} className="row py-3 rounded-5">
                  <div className="col-lg-2 text-center text-white">
                    <img style={{minWidth:'200px',height:'200px'}} src={NethajiApp}  className='img-fluid bg-white rounded-5' alt="" />
                  </div>
                  <div className='col-lg-8  text-white mt-3'>
                    <h4 className='text-white'>NETHAJI</h4>
                     <Link > <img className='py-4' src={apkAndroid}  alt="" /></Link>
                    </div>
                </div>
            </section> 
            <section className='mt-3'>
                <div style={{backgroundColor:'#191B4D'}} className="row py-3 rounded-5">
                  <div className="col-lg-2 text-center text-white">
                    <img style={{minWidth:'200px',height:'200px'}} src={NethajiApp}  className='img-fluid bg-white rounded-5' alt="" />
                  </div>
                  <div className='col-lg-8  text-white mt-3'>
                    <h4 className='text-white'>NETHAJI</h4>
                     <Link > <img className='py-4' src={apkAndroid}  alt="" /></Link>
                    </div>
                </div>
            </section> 
            <section className='mt-3'>
                <div style={{backgroundColor:'#191B4D'}} className="row py-3 rounded-5">
                  <div className="col-lg-2 text-center text-white">
                    <img style={{minWidth:'200px',height:'200px'}} src={NethajiApp}  className='img-fluid bg-white rounded-5' alt="" />
                  </div>
                  <div className='col-lg-8  text-white mt-3'>
                    <h4 className='text-white'>NETHAJI</h4>
                     <Link > <img className='py-4' src={apkAndroid}  alt="" /></Link>
                    </div>
                </div>
            </section> 
            <section className='mt-3'>
                <div style={{backgroundColor:'#191B4D'}} className="row py-3 rounded-5">
                  <div className="col-lg-2 text-center text-white">
                    <img style={{minWidth:'200px',height:'200px'}} src={NethajiApp}  className='img-fluid bg-white rounded-5' alt="" />
                  </div>
                  <div className='col-lg-8  text-white mt-3'>
                    <h4 className='text-white'>NETHAJI</h4>
                     <Link > <img className='py-4' src={apkAndroid}  alt="" /></Link>
                    </div>
                </div>
            </section> 
            <section className='mt-3'>
                <div style={{backgroundColor:'#191B4D'}} className="row py-3 rounded-5">
                  <div className="col-lg-2 text-center text-white">
                    <img style={{minWidth:'200px',height:'200px'}} src={NethajiApp}  className='img-fluid bg-white rounded-5' alt="" />
                  </div>
                  <div className='col-lg-8  text-white mt-3'>
                    <h4 className='text-white'>NETHAJI</h4>
                     <Link > <img className='py-4' src={apkAndroid}  alt="" /></Link>
                    </div>
                </div>
            </section> 
            <section className='mt-3'>
                <div style={{backgroundColor:'#191B4D'}} className="row py-3 rounded-5">
                  <div className="col-lg-2 text-center text-white">
                    <img style={{minWidth:'200px',height:'200px'}} src={NethajiApp}  className='img-fluid bg-white rounded-5' alt="" />
                  </div>
                  <div className='col-lg-8  text-white mt-3'>
                    <h4 className='text-white'>NETHAJI</h4>
                     <Link > <img className='py-4' src={apkAndroid}  alt="" /></Link>
                    </div>
                </div>
            </section> 
            <section className='mt-3'>
                <div style={{backgroundColor:'#191B4D'}} className="row py-3 rounded-5">
                  <div className="col-lg-2 text-center text-white">
                    <img style={{minWidth:'200px',height:'200px'}} src={NethajiApp}  className='img-fluid bg-white rounded-5' alt="" />
                  </div>
                  <div className='col-lg-8  text-white mt-3'>
                    <h4 className='text-white'>NETHAJI</h4>
                     <Link > <img className='py-4' src={apkAndroid}  alt="" /></Link>
                    </div>
                </div>
            </section> 
            <section className='mt-3'>
                <div style={{backgroundColor:'#191B4D'}} className="row py-3 rounded-5">
                  <div className="col-lg-2 text-center text-white">
                    <img style={{minWidth:'200px',height:'200px'}} src={NethajiApp}  className='img-fluid bg-white rounded-5' alt="" />
                  </div>
                  <div className='col-lg-8  text-white mt-3'>
                    <h4 className='text-white'>NETHAJI</h4>
                     <Link > <img className='py-4' src={apkAndroid}  alt="" /></Link>
                    </div>
                </div>
            </section> 
            <section className='mt-3'>
                <div style={{backgroundColor:'#191B4D'}} className="row py-3 rounded-5">
                  <div className="col-lg-2 text-center text-white">
                    <img style={{minWidth:'200px',height:'200px'}} src={NethajiApp}  className='img-fluid bg-white rounded-5' alt="" />
                  </div>
                  <div className='col-lg-8  text-white mt-3'>
                    <h4 className='text-white'>NETHAJI</h4>
                     <Link > <img className='py-4' src={apkAndroid}  alt="" /></Link>
                    </div>
                </div>
            </section>  */}
        </div>
    </div>
  )
}

export default ApkStore
