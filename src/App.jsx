import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import photo1 from "./assets/Hero img.png"
import Kord from "./assets/savernake-knives-f4jl2ezowuM-unsplash 2@2x.png"
import "./App.css"
import lime from "./assets/Image@2x.png"
import Povor from "./assets/Povor.png"
import Vegul from "./assets/Vegul.png"
import People1 from "./assets/People1.png"
import People2 from "./assets/People2.png"
import People3 from "./assets/People3.png"
import People4 from "./assets/People4.png"
import two from "./assets/2.png"
import one from "./assets/1.png"
import five from "./assets/5.png"
import three from "./assets/3.png"
import food from "./assets/Food.png"
import myaso from "./assets/myaso.png"
import limon from "./assets/Limon.png"
import mindal from "./assets/Mindal.png"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import f1 from "./assets/f1.png"
import f2 from "./assets/f2.png"
import f3 from "./assets/f3.png"
import f4 from "./assets/f4.png"
import f5 from "./assets/f5.png"
import f6 from "./assets/f6.png"
import f7 from "./assets/f7.png"
import f8 from "./assets/f8.png"
import f9 from "./assets/f9.png"
import Juce from "./assets/Juce.png"
import Juce2 from "./assets/Juce2.png"
import j1 from "./assets/j1.png"
import j2 from "./assets/j2.png"
import j3 from "./assets/j3.png"
import faht from "./assets/Fath.png"
import facebook from "./assets/facebook.png"
import twitter from "./assets/twitter.png"
import instagram from "./assets/instagram.png"

const App = () => {

    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
  return (
    <div>
      <div className="w-full h-[121px] bg-[#0C0C0C] fixed flex items-center justify-around top-0 z-30">
        <h1 className="text-[#FFFFFF] font-[700] text-[44px]">Gerícht</h1>
        <div className="flex gap-[80px]">
          <p className="text-[#FFFFFF] font-[400] tet-[16px]">Home</p>
          <p className="text-[#FFFFFF] font-[400] tet-[16px]">Pages</p>
          <p className="text-[#FFFFFF] font-[400] tet-[16px]">Contact us</p>
          <p className="text-[#FFFFFF] font-[400] tet-[16px]">Landing</p>
        </div>
        <div className="flex gap-[20px]">
          <h1 className="text-[#FFFFFF] font-[600] text-[16px]">
            Log in / registration
          </h1>
          <h1 className="text-[#FFFFFF] font-[600] text-[16px]">|</h1>
          <h1 className="text-[#FFFFFF] font-[600] text-[16px]">book table</h1>
        </div>
      </div>
      <div className="w-full h-[1000px] bg-[#0C0C0C] pt-[50px]">
        <div className="flex items-center justify-around mt-[120px]">
          <div className="flex flex-col gap-[20px]">
            <h3 className="text-[#FFFFFF] font-[700] text-[23px]">
              Chase the new Flavour
            </h3>
            <h1 className="text-[#DCCA87] font-[700] text-[90px]">
              The Key To <br /> Fine Dining
            </h1>
            <p className="text-[#AAAAAA] font-[400] text-[16px]">
              Sit tellus lobortis sed senectus vivamus molestie. <br />{" "}
              Condimentum volutpat morbi facilisis quam scelerisque <br />{" "}
              sapien. Et, penatibus aliquam amet tellus{" "}
            </p>
            <button className="w-[157px] h-[44px] bg-[#DCCA87]">
              Explore Menu
            </button>
          </div>
          <img src={photo1} alt="" />
        </div>
      </div>
      <div className='bg-[url("./src/assets/BG.png")] w-full h-[959px] flex items-center justify-around'>
        <div
          data-aos="fade-right"
          className="w-[525px] flex flex-col gap-[40px] text-end items-end"
        >
          <h1 className="text-[#DCCA87] font-[600] text-[64px]">About Us</h1>
          <p className="text-[#AAAAAA] font-[400] text-[16px] w-[470px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <button className="w-[141px] h-[44px] bg-[#DCCA87]">Know More</button>
        </div>
        <div data-aos="flip-up">
          <img className="w-[84px] h-[703px]" src={Kord} alt="" />
        </div>
        <div
          data-aos="fade-left"
          className="w-[525px] flex flex-col gap-[40px]"
        >
          <h1 className="text-[#DCCA87] font-[600] text-[64px]">Our History</h1>
          <p className="text-[#AAAAAA] font-[400] text-[16px] w-[470px]">
            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
            Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
            odio nec aliquet.
          </p>
          <button className="w-[141px] h-[44px] bg-[#DCCA87]">Know More</button>
        </div>
      </div>

      <div className="w-full h-[650px] bg-[#0C0C0C] flex items-center justify-center">
        <div className="main w-[1364px] h-[466px] bg-[#131313] flex flex-col gap-[35px] items-center justify-center">
          <h3 className="text-[#FFFFFF] font-[700] text-[23px]">
            Reservations
          </h3>
          <h1 className="text-[#DCCA87] font-[600] text-[64px]">
            Book A Table
          </h1>
          <div className="flex gap-[30px]">
            <select className="select w-[412px] h-[60px] bg-[#0C0C0C]">
              <option value="">1 Preson</option>
              <option value="">2 Preson</option>
              <option value="">3 Preson</option>
            </select>
            <select className="select w-[412px] h-[60px] bg-[#0C0C0C]">
              <option value="">12/05/21</option>
              <option value="">05/10/06</option>
              <option value="">06/11/22</option>
            </select>
            <select className="select w-[412px] h-[60px] bg-[#0C0C0C]">
              <option value="">11:00 AM</option>
              <option value="">22:00 PM</option>
              <option value="">07:40 AM</option>
            </select>
          </div>
          <button className="w-[133px] h-[44px] bg-[#DCCA87]">Book Now</button>
        </div>
      </div>
      <div className='bg-[url("./src/assets/BG2.jpg")] w-full h-[800px]'>
        <div className="flex flex-col gap-[60px] pt-[240px] pl-[100px]">
          <h1 className="text-[#FFFFFF] font-[600] text-[64px]">Bar Menu</h1>
          <h1 className="text-[#FFFFFF] font-[600] text-[64px]">Food Menu</h1>
          <h1 className="text-[#FFFFFF] font-[600] text-[64px]">
            Desserts Menu
          </h1>
        </div>
      </div>
      <div className="w-full h-[1300px] bg-[#0C0C0C]">
        <h3 className="text-[#FFFFFF] font-[700] text-[23px] text-center pt-[150px]">
          Menu that fits you palatte
        </h3>
        <h1 className="text-[#DCCA87] font-[600] text-[64px] text-center pt-[30px]">
          Today’s Special
        </h1>
        <div className="flex mt-[100px] justify-around">
          <div
            data-aos="fade-up"
            className="w-[412px] flex flex-col gap-[50px]"
          >
            <h1 className="text-[#FFFFFF] font-[600] text-[45px] text-center">
              Wine & Beer
            </h1>
            <div className="flex items-center justify-around">
              <h3 className="text-[#DCCA87] font-[700] text-[23px]">
                Chapel Hill Shiraz <br />
                <span className="text-[#AAAAAA] font-[400] text-[16px]">
                  AU | Bottle
                </span>
              </h3>
              <h1 className="border border-[#FAFAFA] w-[119px] h-[1px] mt-[-27px]"></h1>
              <h3 className="text-[#FFFFFF] font-[700] text-[23px] mt-[-30px]">
                $56
              </h3>
            </div>

            <div className="flex items-center justify-around">
              <h3 className="text-[#DCCA87] font-[700] text-[23px]">
                Catena Malbec <br />
                <span className="text-[#AAAAAA] font-[400] text-[16px]">
                  AR | Bottle
                </span>
              </h3>
              <h1 className="border border-[#FAFAFA] w-[119px] h-[1px] mt-[-27px]"></h1>
              <h3 className="text-[#FFFFFF] font-[700] text-[23px] mt-[-30px]">
                $59
              </h3>
            </div>

            <div className="flex items-center justify-around">
              <h3 className="text-[#DCCA87] font-[700] text-[23px]">
                La Vieille Rosé <br />
                <span className="text-[#AAAAAA] font-[400] text-[16px]">
                  FR | 750 ml
                </span>
              </h3>
              <h1 className="border border-[#FAFAFA] w-[119px] h-[1px] mt-[-27px]"></h1>
              <h3 className="text-[#FFFFFF] font-[700] text-[23px] mt-[-30px]">
                $44
              </h3>
            </div>

            <div className="flex items-center justify-around">
              <h3 className="text-[#DCCA87] font-[700] text-[23px]">
                Rhino Pale Ale <br />
                <span className="text-[#AAAAAA] font-[400] text-[16px]">
                  CA | 750 ml
                </span>
              </h3>
              <h1 className="border border-[#FAFAFA] w-[119px] h-[1px] mt-[-27px]"></h1>
              <h3 className="text-[#FFFFFF] font-[700] text-[23px] mt-[-30px]">
                $31
              </h3>
            </div>

            <div className="flex items-center justify-around">
              <h3 className="text-[#DCCA87] font-[700] text-[23px]">
                Irish Guinness
                <br />
                <span className="text-[#AAAAAA] font-[400] text-[16px]">
                  IE | 750 ml
                </span>
              </h3>
              <h1 className="border border-[#FAFAFA] w-[119px] h-[1px] mt-[-27px]"></h1>
              <h3 className="text-[#FFFFFF] font-[700] text-[23px] mt-[-30px]">
                $26
              </h3>
            </div>
          </div>
          <div data-aos="zoom-in">
            <img className="w-[412px] h-[660px]" src={lime} alt="" />
          </div>
          <div
            data-aos="fade-down"
            className="w-[412px] flex flex-col gap-[50px]"
          >
            <h1 className="text-[#FFFFFF] font-[600] text-[45px] text-center">
              Cocktails
            </h1>
            <div className="flex items-center justify-around">
              <h3 className="text-[#DCCA87] font-[700] text-[23px]">
                Aperol Spritz
                <br />
                <span className="text-[#AAAAAA] font-[400] text-[16px]">
                  Aperol | Villa Marchesi prosecco
                </span>
              </h3>
              <h1 className="border border-[#FAFAFA] w-[119px] h-[1px] mt-[-27px] ml-[-40px]"></h1>
              <h3 className="text-[#FFFFFF] font-[700] text-[23px] mt-[-30px]">
                $20
              </h3>
            </div>

            <div className="flex items-center justify-around">
              <h3 className="text-[#DCCA87] font-[700] text-[23px]">
                Dark 'N' Stormy
                <br />
                <span className="text-[#AAAAAA] font-[400] text-[16px]">
                  Dark rum | Ginger beer | Slice Lime
                </span>
              </h3>
              <h1 className="border border-[#FAFAFA] w-[119px] h-[1px] mt-[-27px] ml-[-55px]"></h1>
              <h3 className="text-[#FFFFFF] font-[700] text-[23px] mt-[-30px]">
                $16
              </h3>
            </div>

            <div className="flex items-center justify-around">
              <h3 className="text-[#DCCA87] font-[700] text-[23px]">
                Daiquiri
                <br />
                <span className="text-[#AAAAAA] font-[400] text-[16px]">
                  Rum | Citrus juice | Sugar
                </span>
              </h3>
              <h1 className="border border-[#FAFAFA] w-[119px] h-[1px] mt-[-27px] ml-[15px]"></h1>
              <h3 className="text-[#FFFFFF] font-[700] text-[23px] mt-[-30px]">
                $10
              </h3>
            </div>

            <div className="flex items-center justify-around">
              <h3 className="text-[#DCCA87] font-[700] text-[23px]">
                Old Fashioned
                <br />
                <span className="text-[#AAAAAA] font-[400] text-[16px]">
                  Bourbon | Brown sugar | Angostura
                </span>
              </h3>
              <h1 className="border border-[#FAFAFA] w-[119px] h-[1px] mt-[-27px] ml-[-60px]"></h1>
              <h3 className="text-[#FFFFFF] font-[700] text-[23px] mt-[-30px]">
                $31
              </h3>
            </div>

            <div className="flex items-center justify-around">
              <h3 className="text-[#DCCA87] font-[700] text-[23px]">
                Negroni
                <br />
                <span className="text-[#AAAAAA] font-[400] text-[16px]">
                  Gin | Sweet Vermouth | Campari
                </span>
              </h3>
              <h1 className="border border-[#FAFAFA] w-[119px] h-[1px] mt-[-27px] ml-[-30px]"></h1>
              <h3 className="text-[#FFFFFF] font-[700] text-[23px] mt-[-30px]">
                $26
              </h3>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center mt-[100px]">
          <button className="w-[136px] h-[44px] bg-[#DCCA87]">View More</button>
        </div>
      </div>
      <div className='bg-[url("./src/assets/BG.png")] w-full h-[959px] flex items-center justify-around'>
        <img
          data-aos="zoom-in-up"
          className="w-[634px] h-[789px]"
          src={Povor}
          alt=""
        />
        <div data-aos="zoom-in-down" className="flex flex-col gap-[40px]">
          <h3 className="text-[#FFFFFF] font-[700] text-[23px]">Chef’s Word</h3>
          <h1 className="text-[#DCCA87] font-[600] text-[64px]">
            What we believe in
          </h1>
          <div className="flex gap-[5px]">
            <img className="w-[47px] h-[40px] mt-[-20px]" src={Vegul} alt="" />
            <p className="w-[550px] text-[#AAAAAA] font-[400] text-[14px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus rem minima ipsa alias, totam a aliquid odio. Corporis
              quas eveniet ducimus temporibus facere, optio animi iusto officia
              repudiandae veritatis praesentium provident commodi magni
              assumenda sapiente dolorum eaque adipisci.
            </p>
          </div>
          <h3 className="text-[#DCCA87] font-[400] text-[32px]">Kevin Luo</h3>
          <p className="text-[#AAAAAA] font-[400] text-[16px]">
            Chef & Founder
          </p>
          <h1 className="text-[#AAAAAA] font-[400] text-[64px]">Kevin Luo</h1>
        </div>
      </div>

      <div className="w-full h-[1000px] bg-[#0C0C0C]">
        <h3 className="text-[#FFFFFF] font-[700] text-[23px] text-center pt-[130px]">
          Testimony
        </h3>
        <h1 className="text-[#DCCA87] font-[600] text-[64px] text-center pt-[30px]">
          Happy customers
        </h1>

        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="flex items-center justify-around mt-[100px]"
        >
          <div className="flex items-center gap-[20px]">
            <img src={People1} alt="" />
            <div className="flex flex-col gap-[20px]">
              <p className="text-[#AAAAAA] font-[400] text-[16px] w-[350px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor
                sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
                Nulla scelerisque scelerisque congue.
              </p>
              <h3 className="text-[#DCCA87] font-[400] text-[32px]">
                Wade Warren
              </h3>
              <p className="text-[#F5EFDB] font-[400] text-[16px]">Sommelier</p>
            </div>
          </div>
          <div className="flex items-center gap-[20px]">
            <img src={People2} alt="" />
            <div className="flex flex-col gap-[20px]">
              <p className="text-[#AAAAAA] font-[400] text-[16px] w-[350px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor
                sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
                Nulla scelerisque scelerisque congue.
              </p>
              <h3 className="text-[#DCCA87] font-[400] text-[32px]">
                Jane Cooper
              </h3>
              <p className="text-[#F5EFDB] font-[400] text-[16px]">Chef</p>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="flex items-center justify-around mt-[100px]"
        >
          <div className="flex items-center gap-[20px]">
            <img src={People3} alt="" />
            <div className="flex flex-col gap-[20px]">
              <p className="text-[#AAAAAA] font-[400] text-[16px] w-[350px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor
                sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
                Nulla scelerisque scelerisque congue.
              </p>
              <h3 className="text-[#DCCA87] font-[400] text-[32px]">
                Robert Fox
              </h3>
              <p className="text-[#F5EFDB] font-[400] text-[16px]">Chef</p>
            </div>
          </div>
          <div className="flex items-center gap-[20px]">
            <img src={People4} alt="" />
            <div className="flex flex-col gap-[20px]">
              <p className="text-[#AAAAAA] font-[400] text-[16px] w-[350px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor
                sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
                Nulla scelerisque scelerisque congue.
              </p>
              <h3 className="text-[#DCCA87] font-[400] text-[32px]">
                Brooklyn Simmons
              </h3>
              <p className="text-[#F5EFDB] font-[400] text-[16px]">Caterer</p>
            </div>
          </div>
        </div>
      </div>

      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        className='bg-[url("./src/assets/bg1.png")] w-full  bg-cover bg-center h-[600px] bg-no-repeat'
      ></div>

      <div className='bg-[url("./src/assets/BG.png")] w-full h-[750px] flex items-center justify-around'>
        <div className="w-[700px] flex flex-col gap-[60px]">
          <h3 className="text-[#FFFFFF] font-[700] text-[23px]">
            Awards & recognition
          </h3>
          <h1 className="text-[#DCCA87] font-[600] text-[64px]">Our Laurels</h1>
          <div className="flex  gap-[30px]">
            <div className="flex items-center gap-[20px]">
              <img src={two} alt="" />
              <div className="flex flex-col gap-[10px]">
                <h1 className="text-[#DCCA87] font-[700] text-[23px]">
                  Bib Gourmond
                </h1>
                <p className="text-[#AAAAAA] font-[400] text-[16px] w-[180px]">
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-[20px]">
              <img src={one} alt="" />
              <div className="flex flex-col gap-[10px]">
                <h1 className="text-[#DCCA87] font-[700] text-[23px]">
                  Rising Star
                </h1>
                <p className="text-[#AAAAAA] font-[400] text-[16px] w-[180px]">
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
              </div>
            </div>
          </div>

          <div className="flex  gap-[30px]">
            <div className="flex items-center gap-[20px]">
              <img src={five} alt="" />
              <div className="flex flex-col gap-[10px]">
                <h1 className="text-[#DCCA87] font-[700] text-[23px]">
                  Bib Gourmond
                </h1>
                <p className="text-[#AAAAAA] font-[400] text-[16px] w-[180px]">
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-[20px]">
              <img src={three} alt="" />
              <div className="flex flex-col gap-[10px]">
                <h1 className="text-[#DCCA87] font-[700] text-[23px]">
                  Rising Star
                </h1>
                <p className="text-[#AAAAAA] font-[400] text-[16px] w-[180px]">
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img className="w-[555] h-[600px]" src={food} alt="" />
      </div>

      <div data-aos="flip-right" className="w-full h-[1300px] bg-[#0C0C0C]">
        <p className="text-[#FFFFFF] font-[700] text-[23px] text-center pt-[150px]">
          Blogs
        </p>
        <h1 className="text-[#DCCA87] font-[600] text-[64px] text-center pt-[30px]">
          Gerícht updates
        </h1>
        <div className="flex items-center justify-around mt-[100px]">
          <div className="w-[412px]">
            <img className="w-[412px] h-[430px]" src={myaso} alt="" />
            <div className="flex justify-between mt-[20px]">
              <h3 className="text-[#FAFAFA] font-[400] text-[16px]">
                16 Apr 2021
              </h3>
              <h3 className="text-[#FAFAFA] font-[400] text-[16px]">
                - Annalisa L
              </h3>
            </div>
            <h1 className="text-[#DCCA87] font-[400] text-[32px] w-[410px] mt-[30px]">
              tips for prepping and caring for your grill
            </h1>
            <p className="text-[#AAAAAA] font-[400] text-[16x] w-[410px] mt-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              mattis ipsum turpis elit elit scelerisque egestas mus in.
            </p>
            <h3 className="text-[#DCCA87] font-[700] text-[16px] mt-[30px]">
              Read More
            </h3>
          </div>
          <div className="w-[412px]">
            <img className="w-[412px] h-[430px]" src={limon} alt="" />
            <div className="flex justify-between mt-[20px]">
              <h3 className="text-[#FAFAFA] font-[400] text-[16px]">
                16 Apr 2021
              </h3>
              <h3 className="text-[#FAFAFA] font-[400] text-[16px]">
                - Annalisa L
              </h3>
            </div>
            <h1 className="text-[#DCCA87] font-[400] text-[32px] w-[410px] mt-[30px]">
              tips for prepping and caring for your grill
            </h1>
            <p className="text-[#AAAAAA] font-[400] text-[16x] w-[410px] mt-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              mattis ipsum turpis elit elit scelerisque egestas mus in.
            </p>
            <h3 className="text-[#DCCA87] font-[700] text-[16px] mt-[30px]">
              Read More
            </h3>
          </div>
          <div className="w-[412px]">
            <img className="w-[412px] h-[430px]" src={mindal} alt="" />
            <div className="flex justify-between mt-[20px]">
              <h3 className="text-[#FAFAFA] font-[400] text-[16px]">
                16 Apr 2021
              </h3>
              <h3 className="text-[#FAFAFA] font-[400] text-[16px]">
                - Annalisa L
              </h3>
            </div>
            <h1 className="text-[#DCCA87] font-[400] text-[32px] w-[410px] mt-[30px]">
              tips for prepping and caring for your grill
            </h1>
            <p className="text-[#AAAAAA] font-[400] text-[16x] w-[410px] mt-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              mattis ipsum turpis elit elit scelerisque egestas mus in.
            </p>
            <h3 className="text-[#DCCA87] font-[700] text-[16px] mt-[30px]">
              Read More
            </h3>
          </div>
        </div>
        <div className="flex justify-center pt-[80px]">
          <button className="w-[136px] h-[44px] bg-[#DCCA87]">View More</button>
        </div>
      </div>

      <div className='bg-[url("./src/assets/BG.png")] w-full h-[900px]'>
        <h3 className="text-[#FFFFFF] font-[700] text-[23px] text-center pt-[100px]">
          Instagram
        </h3>
        <h1 className="text-[#DCCA87] font-[600] text-[64px] text-center pt-[20px]">
          Photo Gallery
        </h1>

        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={f1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={f2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={f3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={f4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={f5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={f6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={f7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={f8} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={f9} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={f1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={f2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={f3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={f4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={f5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={f6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={f7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={f8} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={f9} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-full h-[500px] bg-[#0C0C0C]">
        <h3 className="text-[#FFFFFF] font-[700] text-[23px] text-center pt-[100px]">
          Newsletter
        </h3>
        <h1 className="text-[#DCCA87] font-[600] text-[64px] text-center pt-[30px]">
          Subscribe to Our Newsletter
        </h1>
        <p className="text-[#FFFFFF] font-[400] text-[16px] text-center pt-[20px]">
          And never miss latest Updates!
        </p>
        <div className="flex items-center justify-center gap-[50px] mt-[70px]">
          <input
            className="w-[635px] h-[60px] border border-[#F5EFDB] bg-transparent pl-[20px] text-[white]"
            type="text"
            placeholder="Email Address"
          />
          <button className="w-[129px] h-[44px] bg-[#DCCA87] text-[#0C0C0C] font-[700] text-[16px]">
            Subscirbe
          </button>
        </div>
      </div>
      <div className='bg-[url("./src/assets/BG.png")] w-full h-[1100px] flex items-center justify-around bg-no-repeat bg-cover'>
        <div className='bg-[url("./src/assets/home.png")] w-[634px] h-[840px] flex items-center'>
          <h1 className="text-[#FFFFFF] font-[700] text-[181px] relative text-center">
            On the Rocks
          </h1>
        </div>
      </div>
      <div className="w-full h-[600px] bg-[#0C0C0C] flex items-center justify-center">
        <div className="main w-[1364px] h-[466px] bg-[#131313] flex flex-col gap-[35px] items-center justify-center">
          <h3 className="text-[#FFFFFF] font-[700] text-[23px]">
            Reservations
          </h3>
          <h1 className="text-[#DCCA87] font-[600] text-[64px]">
            Book A Table
          </h1>
          <div className="flex gap-[30px]">
            <select className="select w-[412px] h-[60px] bg-[#0C0C0C]">
              <option value="">1 Preson</option>
              <option value="">2 Preson</option>
              <option value="">3 Preson</option>
            </select>
            <select className="select w-[412px] h-[60px] bg-[#0C0C0C]">
              <option value="">12/05/21</option>
              <option value="">05/10/06</option>
              <option value="">06/11/22</option>
            </select>
            <select className="select w-[412px] h-[60px] bg-[#0C0C0C]">
              <option value="">11:00 AM</option>
              <option value="">22:00 PM</option>
              <option value="">07:40 AM</option>
            </select>
          </div>
          <button className="w-[133px] h-[44px] bg-[#DCCA87]">Book Now</button>
        </div>
      </div>
      <div className='bg-[url("./src/assets/BG.png")] w-full h-[1100px] bg-cover bg-no-repeat flex items-center justify-around'>
        <img className="w-[523px] h-[700px]" src={Juce} alt="" />
        <div className="flex flex-col gap-[30px]">
          <img className="w-[630px] " src={Juce2} alt="" />
          <h3 className="text-[#FFFFFF] font-[700] text-[23px]">About Us</h3>
          <h1 className="text-[#DCCA87] font-[600] text-[64px] w-[600px]">
            Food, Drinks, entertainment in one
          </h1>
          <p className="text-[#AAAAAA] font-[400] text-[16px] w-[450px]">
            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
            Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
            odio nec aliquet.
          </p>
          <button className="w-[141px] h-[44px] bg-[#DCCA87]">Know More</button>
        </div>
      </div>

      <div className="w-full h-[1100px] bg-[#0C0C0C]">
        <h3 className="text-[#FFFFFF] font-[700] text-[23px] text-center pt-[150px]">
          Wide Range to choose from
        </h3>
        <h1 className="text-[#DCCA87] font-[600] text-[64px] text-center pt-[30px]">
          What’s Your Poison?
        </h1>
        <div className="mt-[100px] flex items-center justify-around">
          <img src={j1} alt="" />
          <img src={j2} alt="" />
          <img src={j3} alt="" />
        </div>
      </div>

      <div className='bg-[url("./src/assets/shampanskiy.png")] w-full h-[900px] flex items-center justify-center'>
        <div className="flex flex-col gap-[30px]">
          <h1 className="text-[#DCCA87] font-[600] text-[128px]">
            Happy Hours
          </h1>
          <p className="text-[#FFFFFF] font-[700] text-[32px]">
            Monday - Friday (4:00 Pm - 7:00 pm)
          </p>
        </div>
      </div>

      <div className="w-full h-[1300px] bg-[#0C0C0C]">
        <h3 className="text-[#FFFFFF] font-[700] text-[23px] text-center pt-[150px]">
          Menu that fits you palatte
        </h3>
        <h1 className="text-[#DCCA87] font-[600] text-[64px] text-center pt-[30px]">
          Today’s Special
        </h1>
        <div className="flex mt-[100px] justify-around">
          <div
            data-aos="fade-up"
            className="w-[412px] flex flex-col gap-[50px]"
          >
            <h1 className="text-[#FFFFFF] font-[600] text-[45px] text-center">
              Wine & Beer
            </h1>
            <div className="flex items-center justify-around">
              <h3 className="text-[#DCCA87] font-[700] text-[23px]">
                Chapel Hill Shiraz <br />
                <span className="text-[#AAAAAA] font-[400] text-[16px]">
                  AU | Bottle
                </span>
              </h3>
              <h1 className="border border-[#FAFAFA] w-[119px] h-[1px] mt-[-27px]"></h1>
              <h3 className="text-[#FFFFFF] font-[700] text-[23px] mt-[-30px]">
                $56
              </h3>
            </div>

            <div className="flex items-center justify-around">
              <h3 className="text-[#DCCA87] font-[700] text-[23px]">
                Catena Malbec <br />
                <span className="text-[#AAAAAA] font-[400] text-[16px]">
                  AR | Bottle
                </span>
              </h3>
              <h1 className="border border-[#FAFAFA] w-[119px] h-[1px] mt-[-27px]"></h1>
              <h3 className="text-[#FFFFFF] font-[700] text-[23px] mt-[-30px]">
                $59
              </h3>
            </div>

            <div className="flex items-center justify-around">
              <h3 className="text-[#DCCA87] font-[700] text-[23px]">
                La Vieille Rosé <br />
                <span className="text-[#AAAAAA] font-[400] text-[16px]">
                  FR | 750 ml
                </span>
              </h3>
              <h1 className="border border-[#FAFAFA] w-[119px] h-[1px] mt-[-27px]"></h1>
              <h3 className="text-[#FFFFFF] font-[700] text-[23px] mt-[-30px]">
                $44
              </h3>
            </div>

            <div className="flex items-center justify-around">
              <h3 className="text-[#DCCA87] font-[700] text-[23px]">
                Rhino Pale Ale <br />
                <span className="text-[#AAAAAA] font-[400] text-[16px]">
                  CA | 750 ml
                </span>
              </h3>
              <h1 className="border border-[#FAFAFA] w-[119px] h-[1px] mt-[-27px]"></h1>
              <h3 className="text-[#FFFFFF] font-[700] text-[23px] mt-[-30px]">
                $31
              </h3>
            </div>

            <div className="flex items-center justify-around">
              <h3 className="text-[#DCCA87] font-[700] text-[23px]">
                Irish Guinness
                <br />
                <span className="text-[#AAAAAA] font-[400] text-[16px]">
                  IE | 750 ml
                </span>
              </h3>
              <h1 className="border border-[#FAFAFA] w-[119px] h-[1px] mt-[-27px]"></h1>
              <h3 className="text-[#FFFFFF] font-[700] text-[23px] mt-[-30px]">
                $26
              </h3>
            </div>
          </div>
          <div data-aos="zoom-in">
            <img className="w-[412px] h-[660px]" src={lime} alt="" />
          </div>
          <div
            data-aos="fade-down"
            className="w-[412px] flex flex-col gap-[50px]"
          >
            <h1 className="text-[#FFFFFF] font-[600] text-[45px] text-center">
              Cocktails
            </h1>
            <div className="flex items-center justify-around">
              <h3 className="text-[#DCCA87] font-[700] text-[23px]">
                Aperol Spritz
                <br />
                <span className="text-[#AAAAAA] font-[400] text-[16px]">
                  Aperol | Villa Marchesi prosecco
                </span>
              </h3>
              <h1 className="border border-[#FAFAFA] w-[119px] h-[1px] mt-[-27px] ml-[-40px]"></h1>
              <h3 className="text-[#FFFFFF] font-[700] text-[23px] mt-[-30px]">
                $20
              </h3>
            </div>

            <div className="flex items-center justify-around">
              <h3 className="text-[#DCCA87] font-[700] text-[23px]">
                Dark 'N' Stormy
                <br />
                <span className="text-[#AAAAAA] font-[400] text-[16px]">
                  Dark rum | Ginger beer | Slice Lime
                </span>
              </h3>
              <h1 className="border border-[#FAFAFA] w-[119px] h-[1px] mt-[-27px] ml-[-55px]"></h1>
              <h3 className="text-[#FFFFFF] font-[700] text-[23px] mt-[-30px]">
                $16
              </h3>
            </div>

            <div className="flex items-center justify-around">
              <h3 className="text-[#DCCA87] font-[700] text-[23px]">
                Daiquiri
                <br />
                <span className="text-[#AAAAAA] font-[400] text-[16px]">
                  Rum | Citrus juice | Sugar
                </span>
              </h3>
              <h1 className="border border-[#FAFAFA] w-[119px] h-[1px] mt-[-27px] ml-[15px]"></h1>
              <h3 className="text-[#FFFFFF] font-[700] text-[23px] mt-[-30px]">
                $10
              </h3>
            </div>

            <div className="flex items-center justify-around">
              <h3 className="text-[#DCCA87] font-[700] text-[23px]">
                Old Fashioned
                <br />
                <span className="text-[#AAAAAA] font-[400] text-[16px]">
                  Bourbon | Brown sugar | Angostura
                </span>
              </h3>
              <h1 className="border border-[#FAFAFA] w-[119px] h-[1px] mt-[-27px] ml-[-60px]"></h1>
              <h3 className="text-[#FFFFFF] font-[700] text-[23px] mt-[-30px]">
                $31
              </h3>
            </div>

            <div className="flex items-center justify-around">
              <h3 className="text-[#DCCA87] font-[700] text-[23px]">
                Negroni
                <br />
                <span className="text-[#AAAAAA] font-[400] text-[16px]">
                  Gin | Sweet Vermouth | Campari
                </span>
              </h3>
              <h1 className="border border-[#FAFAFA] w-[119px] h-[1px] mt-[-27px] ml-[-30px]"></h1>
              <h3 className="text-[#FFFFFF] font-[700] text-[23px] mt-[-30px]">
                $26
              </h3>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center mt-[100px]">
          <button className="w-[136px] h-[44px] bg-[#DCCA87]">View More</button>
        </div>
      </div>
      <div className='bg-[url("./src/assets/BG.png")] w-full h-[1000px] bg-cover bg-no-repeat flex items-center justify-around'>
        <div className="flex flex-col gap-[50px]">
          <h3 className="text-[#FFFFFF] font-[700] text-[23px]">Contact</h3>
          <h1 className="text-[#DCCA87] font-[600] text-[64px]">Find Us</h1>
          <p className="text-[#AAAAAA] font-[400] text-[16px]">
            Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
          </p>
          <h3 className="text-[#DCCA87] font-[700] text-[23px]">
            Opening Hours
          </h3>
          <p className="text-[#FFFFFF] font-[400] text-[16px]">
            Mon - Fri: 10:00 am - 02:00 am
          </p>
          <p className="text-[#FFFFFF] font-[400] text-[16px]">
            Sat - Sun: 10:00 am - 03:00 am
          </p>
          <button className="w-[119px] h-[44px] bg-[#DCCA87]">Visit Us</button>
        </div>
        <img src={faht} alt="" />
      </div>
      <div className='bg-[url("./src/assets/BG.png")] w-full h-[1200px] bg-cover bg-no-repeat flex items-center justify-center'>
        <div className="main w-[1364px] h-[466px] bg-[#131313] flex flex-col gap-[35px] items-center justify-center">
          <h3 className="text-[#FFFFFF] font-[700] text-[23px]">Newsletter</h3>
          <h1 className="text-[#DCCA87] font-[600] text-[64px]">
            Subscribe to Our Newsletter
          </h1>
          <div className="flex gap-[30px]">
            <select className="select w-[412px] h-[60px] bg-[#0C0C0C]">
              <option value="">1 Preson</option>
              <option value="">2 Preson</option>
              <option value="">3 Preson</option>
            </select>
            <select className="select w-[412px] h-[60px] bg-[#0C0C0C]">
              <option value="">12/05/21</option>
              <option value="">05/10/06</option>
              <option value="">06/11/22</option>
            </select>
            <select className="select w-[412px] h-[60px] bg-[#0C0C0C]">
              <option value="">11:00 AM</option>
              <option value="">22:00 PM</option>
              <option value="">07:40 AM</option>
            </select>
          </div>
          <button className="w-[133px] h-[44px] bg-[#DCCA87]">Book Now</button>
        </div>
      </div>
      <div className="w-full h-[400px] bg-[#0C0C0C] flex items-center justify-around">
        <div className="flex flex-col gap-[20px] w-[305px]">
          <h3 className="text-[#F5EFDB] font-[400] text-[32px]">Contact Us</h3>
          <p className="text-[#AAAAAA] font-[400] text-[16px]">
            9 W 53rd St, New York, NY 10019, USA
          </p>
          <div className="flex flex-col gap-[15px]">
            <p className="text-[#AAAAAA] font-[400] text-[16px]">
              +1 212-344-1230
            </p>
            <p className="text-[#AAAAAA] font-[400] text-[16px]">
              +1 212-555-1230
            </p>
          </div>
        </div>
        <div className="w-[438px] flex flex-col gap-[15px]">
          <h1 className="text-[#DCCA87] font-[700] text-[64px] text-center">
            Gerícht
          </h1>
          <p className="text-[#FFFFFF] font-[400] text-[16px] text-center">
            "The best way to find yourself is to lose yourself in the service of
            others.”
          </p>
          <div className="flex gap-[30px] justify-center">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
          </div>
        </div>
        <div className="w-[203px] flex flex-col gap-[15px]">
          <h3 className="text-[#F5EFDB] font-[400] text-[32px]">
            Workin Hours
          </h3>
          <p className="text-[#AAAAAA] font-[400] text-[16px] text-center">
            Monday-Friday: 08:00 am -12:00 am
          </p>
          <p className="text-[#AAAAAA] font-[400] text-[16px] text-center">Saturday-Sunday: 07:00am -11:00 pm</p>
        </div>
      </div>
    </div>
  ); 
}

export default App