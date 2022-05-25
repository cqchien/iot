import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import Switch from "@mui/material/Switch";

export default function Main() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);

    const getData = async () => {
      const apiResponse = await axios.get("https://yomusic-api.herokuapp.com/sensor/values");
      if (apiResponse.status === 200) {
        setData(apiResponse.data);
      }
      setLoading(false);

    }

    getData();
  }, [])

console.log(data);
  
  return (
    <>
      {loading ? (<p>Loading</p>) : (
        <>
          {
            data.map((item) => (
              <div className="border border-info w-50" style={{marginBottom: "100px"}}>
                <div className="bg-white fw-bold text-center"> Điều khiển thiết bị: {item.sensorName}</div>
                <div className="row m-3 border border-info">
                  <div className="col-4">
                    <div>Nhiệt độ</div>
                    <div>{item.temperature}&deg;C</div>
                  </div>
                  <div className="col-4">
                    <div>Độ ẩm</div>
                    <div>{item.humidity}%</div>
                  </div>
                  <div className="col-4">
                    <div>Ánh sáng</div>
                    <div>{item.light} lux</div>
                  </div>
                </div>
                {/* <div className="row m-3 border border-info">
            <div className="row">
              <div>Các thiết bị</div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="row">
                  <div className="col-6">
                    Đèn 1
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="mr-2">
                  Đèn 2 <Switch defaultChecked />
                </div>
              </div>
            </div>
          </div> */}
              </div>
            ))
          }
        </>
      )}
    </>

  );
}
