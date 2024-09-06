import axios from "axios";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${url}/VRThemePark/user/getSection1?id=1`
        );
        setData([response.data.data]);
      } catch (err) {
        console.error(
          "Error fetching data:",
          err.response ? err.response.data : err.message
        );
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div className=" text-white">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center mx-4 pt-2"
        >
          <div className="flex justify-center items-center   gap-2">
            <img
              src={item.logoImage1}
              alt=""
              className="md:w-[290px] w-[160px] h-full object-cover"
            />
          </div>
          <div className="flex  justify-center items-center gap-7">
            <ul className=" hidden lg:flex  justify-center items-center gap-4">
              <li className="font-Poppins font-bold text-[13px] tracking-widest uppercase cursor-pointer">
                {item.navlink1}
              </li>
              <li className="font-Poppins font-bold text-[13px] uppercase">
                |
              </li>
              <li className="font-Poppins font-bold text-[13px] tracking-widest uppercase cursor-pointer">
                {item.navlink2}
              </li>
              <li className="font-Poppins font-bold text-[13px] uppercase">
                |
              </li>
              <li className="font-Poppins font-bold text-[13px] tracking-widest uppercase cursor-pointer">
                {item.navlink3}
              </li>
              <li className="font-Poppins font-bold text-[13px] uppercase">
                |
              </li>
              <li className="font-Poppins font-bold text-[13px] tracking-widest uppercase cursor-pointer">
                {item.navlink4}
              </li>
            </ul>
            <div className="flex justify-center items-center gap-3">
              <div className="nav_btn   md:py-[8px] md:px-[20px] py-[5px] px-[12px]">
                <span className="uppercase font-Poppins md:tracking-wider cursor-pointer font-bold md:text-[16px] text-[12px]">
                  {item.buttonText1}
                </span>
              </div>
              <div className="nav_btn md:py-[8px] md:px-[20px] py-[5px] px-[12px] ">
                <span className="uppercase font-Poppins md:tracking-wider cursor-pointer font-bold md:text-[16px] text-[12px]">
                  {item.buttonText2}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Header;
