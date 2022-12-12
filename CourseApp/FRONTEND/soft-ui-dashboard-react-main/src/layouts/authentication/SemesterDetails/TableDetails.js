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


function TableDetails() {
  const [rows, setRows] = useState([]);
  const [coursename, setCoursename] = useState("")
  const [coursenumber, setCoursenumber] = useState("")
  const [semester, setSemester] = useState("")

//   function deleteCourse(id){
//     axios.delete(`http://localhost:5000/deletecourse/${id}`)
//     .then(response =>{
//       console.log(response.data)
//     })    
//   }

//   useEffect(() => {
//     axios.get('http://localhost:5000/showcourses')
//       .then(response => {
//         console.log(response.data)
//         let tempArray = [];
  
//         for (let i = 0; i < response.data.courseData.length; i++) {
//           tempArray.push(
//             {
//               CourseName:  response.data.courseData[i].coursename,  
//                CourseNumber: response.data.courseData[i].coursenumber,
//               Semester:  response.data.courseData[i].semester,
//               Edit : <a href={`/course/edit/${response.data.courseData[i]._id}`} >
//                 <EditIcon></EditIcon>
//               </a>,
//               Delete : <DeleteIcon onClick={() => deleteCourse(response.data.courseData[i]._id) }></DeleteIcon>,
//             })
            
            
//         }
  
//         setRows(tempArray)
        
//       })
//       .catch(err => {
//         console.log(err);
//       })
      
    
//   }, [])

//   useEffect(() =>{

//   }, [rows])

  const columns = [
    { name: "CourseName", align: "left" },
    { name: "CourseNumber", align: "left" },
    { name: "Semester", align: "center" },
    { name: "Edit", align: "center" },
    { name: "Delete", align: "center" },

  ]

  



  return (
    <DashboardLayout>
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            {console.log("===========================")}
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3} >
              <SoftTypography variant="h6">Courses table</SoftTypography>
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
    </DashboardLayout>
  );
}

export default TableDetails;