import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import dayjs, { Dayjs } from "dayjs";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import SubComponentsPickers from "./Calendar";
import Axios from "axios";

const style = {
  position: "relative",
  top: "45%",
  left: "15%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  let { todoList } = props;
  const [open, setOpen] = React.useState(props.todos);
  const [description, setDescription] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [update, setUpdate] = React.useState(false);
  const [title1, setTitle1] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [value, setValue] = React.useState(dayjs(""));
  const [value1, setValue1] = React.useState(dayjs(""));
  useEffect(() => {
    setTitle(todoList.title);
    setDescription(todoList.description);
    setStatus(todoList.status);
    setValue(todoList.start_date);
    setValue1(todoList.est_end_date);
  }, [
    todoList.title,
    todoList.description,
    todoList.status,
    todoList.est_end_date,
    todoList.start_date,
  ]);

  const handleStartDate = (newValue) => {
    setValue(newValue.$d.toISOString().split("T")[0]);
  };
  const handledescription = (event) => {
    setDescription(event.target.value);
  };
  const handleClose = () => {
    setOpen(false);
    props.handleCancel1(false);
  };
  const handleStatus = (event) => {
    setStatus(event.target.value);
  };
  const handleChangeEndDate = (newValue) => {
    setValue1(newValue.$d.toISOString().split("T")[0]);
  };

  const handletitle1 = (e) => {
    setTitle(e.target.value);
  };
 
  const handleUpdate = () => {
    if (props.name === "Add task") {
      Axios.put(
        "*************************************" +
          props.taskid,
        {
          task_title: title,
          task_description: description,
          task_start_date: value,
          task_estimated_date: value1,
          task_status: status.toString(),
        },
        {
          headers: {
            "*********": "**************************",
          },
        }
      )
        .then((res) => {
          console.log(res);
          if (res.data) {
            Axios
                .get(
                  "********************************",
                
                  {
                    headers: {
                      "*************": "**************************",
                    },
                  }
                )
                .then((res) => {
                  if (res.data) {
                    props.todoListData(res.data);
                  }
                })
                .catch((error) => {
                  console.log(error);
                });
                Axios
                .get(
                  "************************************",
                  {
                    headers: {
                      "***********": "****************",
                    },
                  }
                )
                .then((res) => {
                  if (res.data) {
                    props.progressListData(res.data);
                  }
                })
                Axios
                .get(
                  "********************************",
                 
                  {
                    headers: {
                      "***************": "*************************",
                    },
                  }
                )
                .then((res) => {
                  if (res.data) {
                    props.doneListData(res.data);
                  }
                })
                .catch((error) => {
                  console.log(error);
                });
            // setLoader(false)
          }
        })
        .catch((error) => {
          console.log(error);
          // setInvalidDetails(error.response.data.message)
        });
      setUpdate(true);
      setTitle(false);
    }
    if (props.name === "Progress") {
      Axios.put(
        "************************" +
          props.taskid,
        {
          title: title,
          description: description,
          start_date: value,
          est_end_date: value1,
          task_status: status.toString(),
        },
        {
          headers: {
            "**********": "***************",
          },
        }
      )
        .then((res) => {
          console.log(res);
          if (res.data) {
            Axios
            .get(
              "************************",
            
              {
                headers: {
                  "***********": "*****************",
                },
              }
            )
            .then((res) => {
              if (res.data) {
                props.todoListData(res.data);
              }
            })
            .catch((error) => {
              console.log(error);
            });
            Axios
            .get(
              "******************",
              {
                headers: {
                  "*************": "******************",
                },
              }
            )
            .then((res) => {
              if (res.data) {
                props.progressListData(res.data);
              }
            })
            Axios
            .get(
              "************************",
             
              {
                headers: {
                  "***********": "*****************",
                },
              }
            )
            .then((res) => {
              if (res.data) {
                props.doneListData(res.data);
              }
            })
            .catch((error) => {
              console.log(error);
            });
            // setLoader(false)
          }
        })
        .catch((error) => {
          console.log(error);
          // setInvalidDetails(error.response.data.message)
        });
      setUpdate(true);
      setTitle(false);
    }
    if (props.name === "Done") {
      Axios.put(
        "***********************" +
          props.taskid,
        {
          title: title,
          description: description,
          start_date: value,
          est_end_date: value1,
          task_status: status.toString(),
        },
        {
          headers: {
            "*******": "**************",
          },
        }
      )
        .then((res) => {
          console.log(res);
          if (res.data) {
            Axios
            .get(
              "*******************",
            
              {
                headers: {
                  "********": "********************",
                },
              }
            )
            .then((res) => {
              if (res.data) {
                props.todoListData(res.data);
              }
            })
            .catch((error) => {
              console.log(error);
            });
            Axios
            .get(
              "******************",
              {
                headers: {
                  "***************": "*****************",
                },
              }
            )
            .then((res) => {
              if (res.data) {
                props.progressListData(res.data);
              }
            })
            Axios
            .get(
              "**********************",
             
              {
                headers: {
                  "***********": "*************",
                },
              }
            )
            .then((res) => {
              if (res.data) {
                props.doneListData(res.data);
              }
            })
            .catch((error) => {
              console.log(error);
            });
            // setLoader(false)
          }
        })
        .catch((error) => {
          console.log(error);
          // setInvalidDetails(error.response.data.message)
        });
      setUpdate(true);
      setTitle(false);
    }
    setOpen(false)
  };
  return (
    <div>
    {
      props.name==="Add task" && (<Modal
        className="carddwn"
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card
          sx={{ maxWidth: 345 }}
          style={{ "overflow-y": "scroll", height: "300px", position:"relative", left:"70px"  }}
        >
          <h3 className="cancel" onClick={() => handleClose()}>
            X
          </h3>

          <CardContent>
            <TextField
              id="standard-basic"
              label="Title"
              className="status"
              onChange={(e) => handletitle1(e)}
              value={title}
              variant="standard"
            />
            {console.log(props)}
            <Typography variant="body2" color="text.secondary">
              <TextField
                id="standard-basic"
                label="Description"
                className="status"
                onChange={(e) => handledescription(e)}
                value={description}
                variant="standard"
              />
            </Typography>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                className="status"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={status}
                label="Status"
                onChange={handleStatus}
              >
                <MenuItem value="todo">Todo</MenuItem>
                <MenuItem value="progress">Progress</MenuItem>
                <MenuItem value="done">Done</MenuItem>
              </Select>
            </FormControl>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={3}>
                <DesktopDatePicker
                  className="status"
                  label="Start Date"
                  inputFormat="YYYY/MM/DD"
                  onChange={handleStartDate}
                  value={value}
                  renderInput={(params) => <TextField {...params} />}
                />
                <DesktopDatePicker
                  className="status"
                  label="End Date"
                  inputFormat="YYYY/MM/DD"
                  onChange={handleChangeEndDate}
                  value={value1}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>

            {/* <SubComponentsPickers/> */}
            {/* <MaterialUIPickers /> */}
          </CardContent>
          <CardActions>
            <Button
              size="small"
              className="hover1"
              onClick={() => handleUpdate()}
            >
              Update
            </Button>
          </CardActions>
        </Card>
      </Modal>
)
    }
    {
      props.name==="Progress" && (<Modal
        className="carddwn"
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card
          sx={{ maxWidth: 345 }}
          style={{ "overflow-y": "scroll", height: "300px",  position: "relative",
          left: "480px"  }}
        >
          <h3 className="cancel" onClick={() => handleClose()}>
            X
          </h3>

          <CardContent>
            <TextField
              id="standard-basic"
              label="Title"
              className="status"
              onChange={(e) => handletitle1(e)}
              value={title}
              variant="standard"
            />
            {console.log(props)}
            <Typography variant="body2" color="text.secondary">
              <TextField
                id="standard-basic"
                label="Description"
                className="status"
                onChange={(e) => handledescription(e)}
                value={description}
                variant="standard"
              />
            </Typography>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                className="status"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={status}
                label="Status"
                onChange={handleStatus}
              >
                <MenuItem value="todo">Todo</MenuItem>
                <MenuItem value="progress">Progress</MenuItem>
                <MenuItem value="done">Done</MenuItem>
              </Select>
            </FormControl>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={3}>
                <DesktopDatePicker
                  className="status"
                  label="Start Date"
                  inputFormat="YYYY/MM/DD"
                  onChange={handleStartDate}
                  value={value}
                  renderInput={(params) => <TextField {...params} />}
                />
                <DesktopDatePicker
                  className="status"
                  label="End Date"
                  inputFormat="YYYY/MM/DD"
                  onChange={handleChangeEndDate}
                  value={value1}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>

            {/* <SubComponentsPickers/> */}
            {/* <MaterialUIPickers /> */}
          </CardContent>
          <CardActions>
            <Button
              size="small"
              className="hover1"
              onClick={() => handleUpdate()}
            >
              Update
            </Button>
          </CardActions>
        </Card>
      </Modal>
)
    }
    {
      props.name==="Done" && (<Modal
        className="carddwn"
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card
          sx={{ maxWidth: 345 }}
          style={{ "overflow-y": "scroll", height: "300px",   position: "relative",
          left: "890px" }}
        >
          <h3 className="cancel" onClick={() => handleClose()}>
            X
          </h3>

          <CardContent>
            <TextField
              id="standard-basic"
              label="Title"
              className="status"
              onChange={(e) => handletitle1(e)}
              value={title}
              variant="standard"
            />
            {console.log(props)}
            <Typography variant="body2" color="text.secondary">
              <TextField
                id="standard-basic"
                label="Description"
                className="status"
                onChange={(e) => handledescription(e)}
                value={description}
                variant="standard"
              />
            </Typography>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                className="status"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={status}
                label="Status"
                onChange={handleStatus}
              >
                <MenuItem value="todo">Todo</MenuItem>
                <MenuItem value="progress">Progress</MenuItem>
                <MenuItem value="done">Done</MenuItem>
              </Select>
            </FormControl>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={3}>
                <DesktopDatePicker
                  className="status"
                  label="Start Date"
                  inputFormat="YYYY/MM/DD"
                  onChange={handleStartDate}
                  value={value}
                  renderInput={(params) => <TextField {...params} />}
                />
                <DesktopDatePicker
                  className="status"
                  label="End Date"
                  inputFormat="YYYY/MM/DD"
                  onChange={handleChangeEndDate}
                  value={value1}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>

            {/* <SubComponentsPickers/> */}
            {/* <MaterialUIPickers /> */}
          </CardContent>
          <CardActions>
            <Button
              size="small"
              className="hover1"
              onClick={() => handleUpdate()}
            >
              Update
            </Button>
          </CardActions>
        </Card>
      </Modal>
)
    }
      

      
      
    </div>
  );
}
