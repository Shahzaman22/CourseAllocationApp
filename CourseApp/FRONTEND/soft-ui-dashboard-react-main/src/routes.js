

// Soft UI Dashboard React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables/CourseTable";
import Table from "layouts/tables/StudentTable";
import Billing from "layouts/billing";
import VirtualReality from "layouts/virtual-reality";
import RTL from "layouts/rtl";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import AddCourses from "layouts/authentication/AddCourses";
import AddSemester from "layouts/authentication/AddSemester";
import EditCourses from "layouts/authentication/UpdateCourses";
import EditSemester from "layouts/authentication/UpdateSemester";
import SemesterTable from "layouts/tables/SemesterTable";
import SemesterDetails from "layouts/authentication/SemesterDetails/index";
import FormDetails from "layouts/authentication/SemesterDetails/FormDetails";

// Soft UI Dashboard React icons
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import Settings from "examples/Icons/Settings";
import Document from "examples/Icons/Document";
import SpaceShip from "examples/Icons/SpaceShip";
import CustomerSupport from "examples/Icons/CustomerSupport";
import CreditCard from "examples/Icons/CreditCard";
import Cube from "examples/Icons/Cube";

const routes = [
  // {
  //   type: "collapse",
  //   name: "Dashboard",
  //   key: "dashboard",
  //   route: "/dashboard",
  //   icon: <Shop size="12px" />,
  //   component: <Dashboard />,
  //   noCollapse: true,
  // },
  {
    type: "collapse",
    name: "Course Table",
    key: "tables",
    route: "/tables",
    icon: <Office size="12px" />,
    component: <Tables />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Student Table",
    key: "StudentTables",
    route: "/tables/data/StudentTable",
    icon: <Office size="12px" />,
    component: <Table/>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Semester Table",
    key: "SemesterTables",
    route: "/tables/data/SemesterTable",
    icon: <Office size="12px" />,
    component: <SemesterTable/>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    route: "/authentication/sign-in",
    icon: <Document size="12px" />,
    component: <SignIn />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    route: "/authentication/sign-up",
    icon: <SpaceShip size="12px" />,
    component: <SignUp />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Add Courses",
    key: "AddCourses",
    route: "/authentication/AddCourses",
    icon: <SpaceShip size="12px" />,
    component: <AddCourses />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Add Semester",
    key: "AddSemester",
    route: "/authentication/AddSemester",
    icon: <SpaceShip size="12px" />,
    component: <AddSemester />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Edit Courses",
    key: "EditCourses",
    route: "/course/edit/:id",
    icon: <SpaceShip size="12px" />,
    component: <EditCourses />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Edit Semester",
    key: "EditSemester",
    route: "/semester/edit/:id",
    icon: <SpaceShip size="12px" />,
    component: <EditSemester />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Semester Details",
    key: "SemesterDetails",
    route: "/semester/semesterdetails/:id",
    icon: <SpaceShip size="12px" />,
    component: <SemesterDetails />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Form Details",
    key: "FormDetails",
    route: "/semester/add-course/:id",
    icon: <SpaceShip size="12px" />,
    component: <FormDetails />,
    noCollapse: true,
  },
];

export default routes;
