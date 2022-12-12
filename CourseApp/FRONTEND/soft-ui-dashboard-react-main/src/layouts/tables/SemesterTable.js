import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";
import { useState, useEffect } from "react";
import axios from 'axios'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ViewListIcon from '@mui/icons-material/ViewList';
import AddCourses from "layouts/authentication/AddCourses";
import UpdateCourses from "layouts/authentication/UpdateCourses";

// const token = localStorage.getItem("token")
// console.log(token);

function SemesterTable() {
  const [rows, setRows] = useState([]);
  const [semesternumber, setSemesternumber] = useState("")
  const [students, setStudents] = useState("")
  const [totalcourses, setTotalcourses] = useState("")


  function deleteSemester(id){
const token = localStorage.getItem("token")
    axios.delete(`http://localhost:5000/deletesemester/${id}`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    .then(response =>{
      console.log(response.data)
    })    
    window.location.href = "/";

  }

  useEffect(() => {
const token = localStorage.getItem("token")
    axios.get('http://localhost:5000/semester', {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        console.log(response.data)
        let tempArray = [];
  
        for (let i = 0; i < response.data.semesterData.length; i++) {
          tempArray.push(
            {
                ViewDetails : <a href={`/semester/semesterdetails/${response.data.semesterData[i]._id}`} >
                <ViewListIcon></ViewListIcon>
              </a>,
                SemesterNumber:  response.data.semesterData[i].semesternumber, 
                Students: response.data.semesterData[i].students,
                TotalCourses:  response.data.semesterData[i].totalcourses,
              Edit : <a href={`/semester/edit/${response.data.semesterData[i]._id}`} >
                <EditIcon></EditIcon>
              </a>,
              Delete : <DeleteIcon onClick={() => deleteSemester(response.data.semesterData[i]._id) }></DeleteIcon>,
            })
            
            
        }
  
        setRows(tempArray)
        
      })
      .catch(err => {
        console.log(err);
      })
      
    
  }, [])

  useEffect(() =>{

  }, [rows])

  const columns = [
    { name: "ViewDetails", align: "center" },
    { name: "SemesterNumber", align: "center" },
    { name: "Students", align: "center" },
    { name: "TotalCourses", align: "center" },
    { name: "Edit", align: "center" },
    { name: "Delete", align: "center" },

  ]

  



  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            {console.log("===========================")}
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftTypography variant="h6">Semester table</SoftTypography>
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

export default SemesterTable;