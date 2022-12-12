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

function AddSemester() {
  const [agreement, setAgremment] = useState(true);
  const [semesternumber, setSemesternumber] = useState("")
  const [students, setStudents] = useState("")
  const [totalcourses, setTotalcourses] = useState("")


  const handleSetAgremment = () => setAgremment(!agreement);


  function myFunc() {
    axios.post('http://localhost:5000/registersemester', {
      "semesternumber": semesternumber,
      "students": students,
      "totalcourses": totalcourses,
    })
      .then(response => {
        console.log(response.data)
      })
      window.location.href = "/";

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
              <SoftInput placeholder="Semester Number" onChange={(e) => setSemesternumber(e.target.value)} />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput type="number" placeholder="Total Students" onChange={(e) => setStudents(e.target.value)} />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput type="text" placeholder="Total Courses" onChange={(e) => setTotalcourses(e.target.value)} />
            </SoftBox>
            
            <SoftBox mt={4} mb={1}>
              <SoftButton variant="gradient" color="dark" fullWidth onClick={() => myFunc()}>
                Add Semester
              </SoftButton>
            </SoftBox>
           
          </SoftBox>
        </SoftBox>
      </Card>
    </BasicLayout>
  );
}

export default AddSemester;
