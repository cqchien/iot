import React from "react";

import {
  CAvatar,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cibCcMastercard, cibCcStripe, cibCcVisa, cifBr, cifIn, cifUs, cilPeople } from "@coreui/icons";

import avatar1 from "../../assets/images/avatars/1.jpg";
import avatar2 from "../../assets/images/avatars/2.jpg";
import avatar3 from "../../assets/images/avatars/3.jpg";
import rasperripi from "../../assets/images/things/rasperripi.jpg";
import wemosd1 from "../../assets/images/things/wemosd1.jpg";

const Dashboard = () => {
  const tableExample = [
    {
      name: 'Cao Quyết Chiến',
      code: '18520526'
    },

    {
      name: 'Nguyễn Hữu Toàn',
      code: '18521507'
    },
  ];

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CRow>
              <div className="fw-bold m-2">Welcome to Group 5's practice lesson</div>
            </CRow>
            <CCardHeader> Team Members</CCardHeader>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">User</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Code</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <strong>{item.name}</strong>

                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <strong>{item.code}</strong>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
          {/* <CCard className="mb-4">
            <CRow>
              <div className="fw-bold text-center mb-5">Welcome to Group practice lesson</div>
            </CRow>
            <CCardBody>
              <div className="row">
                <div className=" col-6">
                  <div className="row">
                    <div className="col-6">
                      <div className="text-end">WEMOS D1</div>
                      <div className="text-end">30/04/2022</div>
                    </div>
                    <div className="col-6">
                      <img className="iot-thing" src={wemosd1}></img>
                    </div>
                  </div>
                </div>
                <div className=" col-6">
                  <div className="row">
                    <div className="col-6">
                      <div className="text-end">RASBERRY PI</div>
                      <div className="text-end">01/05/2022</div>
                    </div>
                    <div className="col-6">
                      <img className="iot-thing" src={rasperripi}></img>
                    </div>
                  </div>
                </div>
              </div>
            </CCardBody>
          </CCard> */}
        </CCol>
      </CRow>
    </>
  );
};

export default Dashboard;
