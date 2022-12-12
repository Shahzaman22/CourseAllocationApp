import React, { useState, useEffect } from "react";
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


// Images
import curved6 from "assets/images/curved-images/curved14.jpg";



function FormDetails() {
  const [agreement, setAgremment] = useState(true);
  const [item, setItem] = useState([])
  const [selectedcourse, setSelectedcourse] = useState("")

  const [data, setData] = useState([])
  
  const {id} = useParams()

  function updateCourse(){
    axios.put(`http://localhost:5000/updatesemester/${id}`)
    .then(response => {
      console.log(response.data)
      setData(response.data)  
      const abc = (response.data.data.courses)
      abc.push(response.data.data._id)
      console.log(abc)
      
      })
  }

  const handleChange = (event) => {
    setSelectedcourse(event.target.value);
  }

  useEffect(() => {
    axios.get(`http://localhost:5000/showcourses`)
      .then(response => {
        console.log(response.data.courseData)
        setItem(response.data.courseData)
        setSelectedcourse(response.data.courseData)
      })

  }, [])

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
              <SoftInput placeholder="Course Name" name="coursename" />
             </SoftBox>
           <form action="">
            <label >Choose a Course:</label>
           <select>
              {
                item.map((elem,i) => {
                  return <option key={i} value={elem._id} onChange={handleChange}>{elem.coursename}</option>
                })
              }
            </select>
          </form>
            <SoftBox mt={4} mb={1}>
              <SoftButton variant="gradient" color="dark" fullWidth onClick={() => updateCourse()} >
                Add Course
              </SoftButton>
            </SoftBox>
          </SoftBox>
        </SoftBox>
      </Card>
    </BasicLayout>
  );
}

export default FormDetails;
