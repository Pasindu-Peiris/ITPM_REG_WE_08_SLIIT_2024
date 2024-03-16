import React from "react";
import Nav from "./Nav";
import Img from "../../Images/page-title-bg.png";
import Hfotter from "./Hfotter";
import Img1 from "../../Images/phone.png";
import Img2 from "../../Images/mail.png";
import Img3 from "../../Images/location.png";

const ContactUs = () => {
  const addImg = {
    width: "100%",
    minHeight: "40vh",
    backgroundImage: `url(${Img})`,
    justifyContent: "center",
    allignItems: "center",
    backgroundSize: "auto",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const addImg2 = {
    width: "100%",
    height: "30vh",
    justifyContent: "center",
  };

  const table = {
    /*border: "1px solid black",*/
    width: "100%",
    justifyContent: "center",
  };

  const th = {
    /*border: "1px solid black",*/
    allignItems: "center",
    width: "50%",
  };

  return (
    <div style={{ position: "relative" }}>
      <Nav />

      <div className="flex items-center " style={addImg}>
        <h1 className=" text-center text-4xl font-semibold text-black ">
          Contact Us
        </h1>
      </div>
      <div>
        <table style={table}>
          <tr>
            <th style={th}>
              <p className=" text-xl text-black text-center mr-10">
                We're here to help!IF you have any questions or concerns, please
                don't hesitate to reach out to us.
              </p>
              <br />
              <p className="text-xs text-gray-500 text-center ">
                Our customer service hours are Monday-Friday,9:00 AM - 5:00 PM
                EST
              </p>
            </th>
            <th style={th}>
              <p className=" text-xl text-black text-center ">
                Or use the form below
              </p>
            </th>
          </tr>
          <tr>
            <td style={th}>
              <tr style={addImg2}>
                <td style={th}>
                  <img src={Img1} alt="" width={140} className="mx-24 " />
                </td>
                <td style={th}>
                  <h1 className="text-2xl font-semibold p-1">
                    Reach Us By Phone
                  </h1>
                  <p className="p-1 text-xl">+1-2345-2345</p>
                </td>
              </tr>

              <tr style={addImg2}>
                <td style={th}>
                  <img src={Img2} alt="" width={140} className="mx-24" />
                </td>
                <td style={th}>
                  <h1 className="text-2xl font-semibold p-2">Email</h1>
                  <p className="p-1 text-xl">contact@campertheme.com</p>
                </td>
              </tr>

              <tr style={addImg2}>
                <td style={th}>
                  <img src={Img3} alt="" width={140} className="mx-24" />
                </td>
                <td style={th}>
                  <h1 className="text-2xl font-semibold p-2">Address</h1>
                  <p className="p-1 text-xl">
                    11086 Auahi St 170, Honolulu, HI 96814, United States
                  </p>
                </td>
              </tr>
            </td>

            <td style={th}>
              <div className="w-[60%] mx-auto mt-4 border-b border-gray-400 pb-8">
                <form>
                  <label className="block text-md font-medium">Full Name</label>
                  <br />
                  <input type="text" className="mt-1 p-2 border w-full" />
                  <br />
                  <label className="block text-md font-medium">Email</label>
                  <br />
                  <input type="email" className="mt-1 p-2 border w-full" />
                  <br />
                  <label className="block text-md font-medium">
                    Phone Number
                  </label>
                  <br />
                  <input type="text" className="mt-1 p-2 border w-full" />
                  <br />
                  <label className="block text-md font-medium">Subject</label>
                  <br />
                  <input type="text" className="mt-1 p-2 border w-full" />
                  <br />
                  <label className="block text-md font-medium">Message</label>
                  <br />
                  <textarea type="text" className="mt-1 p-3 border w-full" />
                  <br />

                  <button className="mt-1 p-2 w-full border bg-amber-500 text-white  font-bold">
                    Submit Now
                  </button>
                </form>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div className="mt-10">
        <Hfotter />
      </div>
    </div>
  );
};
export default ContactUs;
