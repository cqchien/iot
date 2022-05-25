import React, { useState, useEffect } from "react";
import {
  CAvatar,
  CProgress,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import axios from "axios";
import moment from "moment";

export default function Logs() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    // const getData = async () => {
    //   const apiResponse = await axios.get("https://yomusic-api.herokuapp.com/iot/sensors");
    //   if (apiResponse.status === 200) {
    //     setData(apiResponse.data);  
    //   }
    //   setLoading(false);
  // }
    // getData()
    setLoading(true);

    const interval = setInterval(async () => {

      const apiResponse = await axios.get("https://yomusic-api.herokuapp.com/iot/sensors");
      if (apiResponse.status === 200) {
        setData(apiResponse.data);
      }
      setLoading(false);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [])

  return (
    <>
      {
        loading ? <p>Loading</p> :
          (
            <>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">ID thiết bị</CTableHeaderCell>
                    <CTableHeaderCell>Địa chỉ IP</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Tên thiết bị</CTableHeaderCell>
                    <CTableHeaderCell>Cảm biến</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Giá trị</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Thời gian</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {data.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">{item._id}</CTableDataCell>
                      <CTableDataCell>{item.ip}</CTableDataCell>
                      <CTableDataCell className="text-center">{item.sensorName}</CTableDataCell>
                      <CTableDataCell>{item.sensorType}</CTableDataCell>
                      <CTableDataCell className="text-center">{item.value}</CTableDataCell>
                      <CTableDataCell className="text-center">{item.updatedAt ? moment(item.updatedAt).format('DD/MM/YYYY HH:mm') : "---"}</CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </>
          )
      }
    </>
  );
}
