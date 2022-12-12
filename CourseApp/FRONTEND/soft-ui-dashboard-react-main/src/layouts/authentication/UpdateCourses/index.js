import { useState, useEffect } from "react";
import axios from 'axios'
import { useParams } from "react-router-dom";

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

function EditCourses() {
  const [agreement, setAgremment] = useState(true);
  const [item, setItem] = useState({})
  const [coursename, setCoursename] = useState("")
  const [coursenumber, setCoursenumber] = useState("")
  const [semester, setSemester] = useState("")

  const handleSetAgremment = () => setAgremment(!agreement);
  const { id } = useParams()

  useEffect(() => {
  const token = localStorage.getItem("token")
  axios.get(`http://localhost:5000/showcourses/${id}`,{
    headers: {
      authorization: `Bearer ${token}`
    }
  })
      .then(response => {
        console.log(response.data)
        setItem(response.data.coursedata)
      })
  }, [])


  // ---------------------------------------------------

  function updateCourse() {
  const token = localStorage.getItem("token")
    axios.put(`http://localhost:5000/updatecourse/${id}`,{
      "coursename": item.coursename,
        "coursenumber": item.coursenumber,
        "semester": item.semester,
    },{
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      console.log(response.data)
      })
      window.location.href = "/";

  }


  function handel(e) {
    setItem({ ...item, [e.target.name]: e.target.value })
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
              <SoftInput placeholder="Course Name" value={item.coursename} name="coursename" onChange={(e) => handel(e)} />

            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput type="number" placeholder="Course Number" value={item.coursenumber} name="coursenumber" onChange={(e) => handel(e)} />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput type="text" placeholder="Semester" value={item.semester} name="semester" onChange={(e) => handel(e)} />
            </SoftBox>

            <SoftBox mt={4} mb={1}>
              <SoftButton variant="gradient" color="dark" fullWidth onClick={() => updateCourse()} >
                Update Course
              </SoftButton>
            </SoftBox>
          </SoftBox>
        </SoftBox>
      </Card>
    </BasicLayout>
  );
}

export default EditCourses;
