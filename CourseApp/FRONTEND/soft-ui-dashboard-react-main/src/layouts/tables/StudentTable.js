
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";
import { useState, useEffect } from "react";
import axios from 'axios'


const token = localStorage.getItem("token")
console.log(token);


function Tables() {
  const [rows, setRows] = useState([]);

  function get() {
    console.log("token", token);
    axios.get('http://localhost:5000/showstudents', {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        console.log(response.data)
        let tempArray = [];

        for (let i = 0; i < response.data.courseData.length; i++) {
          tempArray.push({
              Name: response.data.courseData[i].name,
              Email: response.data.courseData[i].email,
              // Password: response.data.courseData[i].password,
              Role: response.data.courseData[i].role,
            })

        }

        setRows(tempArray)
      })
      .catch(err => {
        console.log(err);
      })

  }

useEffect(() =>{
  get()
}, [])

useEffect(() => {

}, [rows])

const columns = [
  { name: "Name", align: "left" },
  { name: "Email", align: "left" },
  // { name: "Password", align: "center" },
  { name: "Role", align: "left" },
]




return (
  <DashboardLayout>
    <DashboardNavbar />
    <SoftBox py={3}>
      <SoftBox mb={3}>
        <Card>
          {console.log("===========================")}
          <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <SoftTypography variant="h6">Student table</SoftTypography>
          </SoftBox>
          <SoftBox
            sx={{
              "& .MuiTableRow-root:not(:last-child)": {
                "& td": {
                  borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                    `${borderWidth[1]} solid ${borderColor}`,
                },
              },
            }}
          >
            <Table columns={columns} rows={rows} />
          </SoftBox>
        </Card>
      </SoftBox>
    </SoftBox>
    <Footer />
  </DashboardLayout>
);
}

export default Tables;