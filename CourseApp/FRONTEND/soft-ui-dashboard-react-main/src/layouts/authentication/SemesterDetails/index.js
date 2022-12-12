// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import TableDetails from "./TableDetails";
import { Button } from "@mui/material";

const token = localStorage.getItem("token")
console.log(token);


function Dashboard() {
  const [item, setItem] = useState({})
  const [semesternumber, setSemesternumber] = useState("")
  const [students, setStudents] = useState("")
  const [totalcourses, setTotalcourses] = useState("")
  
const {id} = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/showsemester/${id}`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
        .then(response => {
          console.log(response.data)
          console.log("IDDDD =>",response.data.semesterdata._id);
          setItem(response.data.semesterdata)
        })
}, []) 
 

   

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
          <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Semester Number" }}
                count={item.semesternumber}
                icon={{
                  color: "info",
                  component: "shopping_cart",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Total Courses" }}
                count={item.totalcourses}
                icon={{
                  color: "info",
                  component: "shopping_cart",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Students" }}
                count={item.students}
                icon={{
                  color: "info",
                  component: "shopping_cart",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3} >
              <MiniStatisticsCard 
                title={{ text: <a href={`/semester/add-course/${item._id}`}><Button>Add Courses</Button></a> }}
                icon={{
                }}
              />
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>
    <TableDetails/>
    </DashboardLayout>
  );
}

export default Dashboard;
