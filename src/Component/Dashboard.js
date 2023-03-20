import React, { useState, useEffect } from "react";
import { useLocation, useNavigate} from "react-router-dom";
import MediaCard from "./Charts/MediaCard";
import ResponsiveAppBar from "./Charts/Header";
import dashboardbg from './Charts/Image/dashboardbg.png'


import axios from "axios";
function Dashboard() {
  const [title, setTitle] = useState(false);
  const [title1, setTitle1] = useState(false);
  const [title2, setTitle2] = useState(false);
  let Navigate = useNavigate()
  const { state } = useLocation();
  const [retrieve, setRetrieve] = React.useState([]);
  const [proRetrieve, setProRetrieve] = React.useState([]);
  const [doneRetrieve, setDoneRetrieve] = React.useState([]);

  const updatetodolist = (data) => {
    setRetrieve(data);
  };
  const updateprogresslist = (data) => {
    setProRetrieve(data);
  };
  const updateDoneList = (data) => {
    setDoneRetrieve(data);
  };

  useEffect(() => {
    axios
      .get(
        "********************",
      
        {
          headers: {
            "******": "*************",
          },
        }
      )
      .then((res) => {
        if (res.data) {
          setRetrieve(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(
        "***********************",
        
        {
          headers: {
            "**********": "****************",
          },
        }
      )
      .then((res) => {
        if (res.data) {
          setProRetrieve(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(
        "*********************",
        
        {
          headers: {
            "*********": "********",
          },
        }
      )
      .then((res) => {
        if (res.data) {
          setDoneRetrieve(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // console.log(state,"hi");
  const handletitle = (name) => {
    setTitle(name);
  };
  const handletitle1 = (name) => {
    setTitle(name);
  };
  const handletitle2 = (name) => {
    setTitle(name);
  };

  return (
    <>
         {
          localStorage.getItem("user").length>0 ? ( 
    <div
      className="p-5 text-center bg-image"
      style={{
        backgroundImage: `url(${dashboardbg})`,
        
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#ccb4c8",
      }}
    >
      <ResponsiveAppBar email={localStorage.getItem("email")} />

      <div className="d-flex1">
        <MediaCard
          name=" + Add task"
          className="addtask"
          Description="Addtask"
          todoList={retrieve}
          updatetodolist={updatetodolist}
          updateprogresslist={updateprogresslist}
          updateDoneList={updateDoneList}
          handletitles={() => handletitle()}
        />
        <MediaCard
          name=" + Add task"
          Description="Progress"
          progresslist={proRetrieve}
          updatetodolist={updatetodolist}
          updateprogresslist={updateprogresslist}
          updateDoneList={updateDoneList}
          handletitles={() => handletitle1()}
        />
        <MediaCard
          name=" + Add task"
          Description="Done"
          updatetodolist={updatetodolist}
          updateprogresslist={updateprogresslist}
          updateDoneList={updateDoneList}
          Donelist={doneRetrieve}
          handletitles={() => handletitle2()}
        />
      </div>
    </div>
     ):Navigate("/login")}
     </>
  );
}

export default Dashboard;
