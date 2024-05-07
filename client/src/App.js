import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import WeatherDisplay from "./WCSupervisor/viewWeather";
import TaskDataViewer from "./WCSupervisor/viewtasks";
import Employee from "./WCSupervisor/LayoutWithHaderEmployee";
import ScheduleDataViewer from  "./WCSupervisor/viewshedule";
import EmployeeCountTable from "./WCSupervisor/dashboard";


import AddCultivationForm from "./CultivationManager/addPlantData";
import AddSchedule from "./CultivationManager/addSheduleData";
import NICList from "./CultivationManager/viewEmployee";
import EditModal from "./CultivationManager/EditModal"
import AddEmployeeModal from "./CultivationManager/addEmployee";
import AddTaskForm from "./CultivationManager/addtask";
import TaskList from "./CultivationManager/viewtaskdata";
import EditTask from "./CultivationManager/edittask";
import Weather from "./CultivationManager/viewWeatherforcast";
import LayoutWithHeader from "./CultivationManager/LayoutWithHader";
import ScheduleTable from "./CultivationManager/viewSheduleData";
import EditCultivation from "./CultivationManager/editPlantData";
import CultivationData from "./CultivationManager/viewPlantDetails";
import EditSchedule from "./CultivationManager/EditSchedule";
import Dashboard from "./CultivationManager/dashboardManager";
import Calendar from "./CultivationManager/calander";
import ChartComponent from "./CultivationManager/chart";
import ReportGenerator from "./CultivationManager/ReportGenerate";

import 'react-big-calendar/lib/css/react-big-calendar.css';

import WelcomePage from "./WCWelcomPage/welcomepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/WeatherDisplay" element={<Employee><WeatherDisplay /></Employee>} />  
        <Route path="/TaskDataViewer" element={<Employee><TaskDataViewer /></Employee>} />  
        <Route path="/ScheduleDataViewer" element={<Employee><ScheduleDataViewer /></Employee>} />  
        <Route path="/EmployeeCountTable" element={<Employee><EmployeeCountTable /></Employee>} />
        <Route path="/WelcomePage" element={<WelcomePage />} />  

        <Route path="/AddCultivationForm" element={<LayoutWithHeader><AddCultivationForm /></LayoutWithHeader>} />
        <Route path="/AddSchedule" element={<LayoutWithHeader><AddSchedule /></LayoutWithHeader>} />
        <Route path="/ScheduleTable" element={<LayoutWithHeader><ScheduleTable /></LayoutWithHeader>} />
        <Route path="/CultivationData" element={<LayoutWithHeader><CultivationData /></LayoutWithHeader>} />
        <Route path="/EditCultivation/:id" element={<LayoutWithHeader><EditCultivation /></LayoutWithHeader>} />
        <Route path="/edit-schedule/:id" element={<LayoutWithHeader><EditSchedule /></LayoutWithHeader>} />
        <Route path="/NICList" element={<LayoutWithHeader><NICList /></LayoutWithHeader>} />
        <Route path="/EditModal/:id" element={<LayoutWithHeader><EditModal /></LayoutWithHeader>} />
        <Route path="/AddEmployeeModal" element={<LayoutWithHeader><AddEmployeeModal /></LayoutWithHeader>} />
        <Route path="/AddTaskForm" element={<LayoutWithHeader><AddTaskForm /></LayoutWithHeader>} />
        <Route path="/TaskList" element={<LayoutWithHeader><TaskList /></LayoutWithHeader>} />
        <Route path="/EditTask/:id" element={<LayoutWithHeader><EditTask /></LayoutWithHeader>} />
        <Route path="/Weather" element={<LayoutWithHeader><Weather /></LayoutWithHeader>} />
        <Route path="/dasboard" element={<LayoutWithHeader><Dashboard /></LayoutWithHeader>} />
        <Route path="/Calendar" element={<LayoutWithHeader><Calendar /></LayoutWithHeader>} />
        <Route path="/ChartComponent" element={<LayoutWithHeader><ChartComponent /></LayoutWithHeader>} />
        <Route path="/ReportGenerator" element={<LayoutWithHeader><ReportGenerator /></LayoutWithHeader>} />
      </Routes>
    </Router>
  );
}

export default App;
