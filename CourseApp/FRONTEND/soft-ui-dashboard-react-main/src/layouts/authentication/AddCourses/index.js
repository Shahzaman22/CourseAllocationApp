import { useState } from "react";
import axios from 'axios'

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";

// Images
import curved6 from "assets/images/curved-images/curved14.jpg";
import { SettingsSystemDaydreamRounded } from "@mui/icons-material";
import button from "assets/theme/components/button";

function AddCourses() {
  const [agreement, setAgremment] = useState(true);
  const [coursename, setCoursename] = useState("")
  const [coursenumber, setCoursenumber] = useState("")
  const [semester, setSemester] = useState("")
  // const token = "eyJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2MzgzOTBkNDQzNzlhNzQxZjVjMjRjNmUiLCJuYW1lIjoiU2hhaHphbWFuIEFmdGFiIiwiZW1haWwiOiIxMjNAZ21haWwuY29tIiwicm9sZSI6IkFkbWluIiwiX192IjowfQ.bFRHVbMfXt5I12weJGPKP-9QSMBMbvIm5eL6g7-mzeE"
  

  const handleSetAgremment = () => setAgremment(!agreement);


  function myFunc() {    
  const token = localStorage.getItem("token")
    axios.post('http://localhost:5000/registercourses',{
      "coursename": coursename,
        "coursenumber": coursenumber,
        "semester": semester
      }, {
        headers: {
          authorization: `Bearer ${token}`
        }
      }
    ).then(response => {
        console.log(response.data)
      })
    console.log(coursename, coursenumber, semester);
  }


  return (
    <BasicLayout
      title="Welcome ADMIN!"
      description="Use these awesome forms to add courses."
      image={curved6}
    >
      <Card>
        
        <SoftBox pt={2} pb={3} px={3} mu={5}>
          <SoftBox component="form" role="form">
            <SoftBox mb={2}>
              <SoftInput placeholder="Course Name" onChange={(e) => setCoursename(e.target.value)} />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput type="number" placeholder="Course Number" onChange={(e) => setCoursenumber(e.target.value)} />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput type="text" placeholder="Semester" onChange={(e) => setSemester(e.target.value)} />
            </SoftBox>
            
            <SoftBox mt={4} mb={1}>
              <SoftButton variant="gradient" color="dark" fullWidth onClick={() => myFunc()}>
                Add Courses
              </SoftButton>
            </SoftBox>
           
          </SoftBox>
        </SoftBox>
      </Card>
    </BasicLayout>
  );
}

export default AddCourses;
