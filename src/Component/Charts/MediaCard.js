import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
//import MaterialUIPickers from './Calendar';
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import BasicModal from "./POPUP";
import dayjs, { Dayjs } from "dayjs";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Menu from "@mui/material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { border, positions } from "@mui/system";
import { Delete } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import axios from "axios";

export default function MediaCard(props) {
  const options = ["Delete"];

  const [status, setStatus] = React.useState("");
  const [title, setTitle] = React.useState(false);
  const [title1, setTitle1] = React.useState("");
  const [id, setId] = React.useState("");
  const [submit, setSubmit] = React.useState(false);
  const [todo, setTodo] = React.useState(false);
  const [progress, setProgress] = React.useState(false);
  const [Done, setDone] = useState(false);
  const [description, setDescription] = React.useState("");
  const [todoSingle, setTodoSingle] = useState({});
  const [datess, handledatess] = useState();

  const [anchorEl, setAnchorEl] = useState(null);
  const ITEM_HEIGHT = 48;
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
  };
  const progressListData = (data) => {
    props.updateprogresslist(data);
  };
  const todoListData = (data) => {
    props.updatetodolist(data);
  };
  const doneListData = (data) => {
    props.updateDoneList(data);
  };
  const handleDelete = (id) => {
    if (props.Description === "Addtask") {
      axios
        .delete(
          `************************************************`,
          {
            headers: {
              "*********": "*****************",
            },
          }
        )
        .then((res1) => {
          setAnchorEl(true);
          if (res1.data) {
            axios
              .get(
                "*********************************",

                {
                  headers: {
                    "*********": "**************",
                  },
                }
              )
              .then((res) => {
                if (res.data) {
                  props.updatetodolist(res.data);
                }
              })
              .catch((error) => {
                console.log(error);
              });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (props.Description === "Progress") {
      axios
        .delete(
          "***************************" +
            id,
          {
            headers: {
              "***********": "**************",
            },
          }
        )
        .then((res) => {
          setAnchorEl(true);

          console.log(res);
          if (res.data) {
            axios
              .get(
                "*****************",

                {
                  headers: {
                    "**************": "********************",
                  },
                }
              )
              .then((res) => {
                if (res.data) {
                  props.updateprogresslist(res.data);
                }
              })
              .catch((error) => {
                console.log(error);
              });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (props.Description === "Done") {
      axios
        .delete(
          "*****************" +
            id,
          {
            headers: {
              "***************": "**********************",
            },
          }
        )
        .then((res) => {
          setAnchorEl(true);

          console.log(res);
          if (res.data) {
            axios
              .get(
                "************************",
                {
                  headers: {
                    "********": "**********",
                  },
                }
              )
              .then((res) => {
                if (res.data) {
                  props.updateDoneList(res.data);
                }
              })
              .catch((error) => {
                console.log(error);
              });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [value, setValue] = React.useState(dayjs(""));
  const [value1, setValue1] = React.useState(dayjs(""));

  const handleStartDate = (newValue) => {
    setValue(newValue);
  };
  const handleChangeEndDate = (newValue) => {
    setValue1(newValue);
  };
  const handleChange = (event) => {
    setStatus(event.target.value);
  };
  const handletitle = () => {
    props.handletitles(!title);
    setTitle(!title);
  };
  const handlesubmit = () => {
    if (title1.length > 0) {
      if (props.Description === "Addtask") {
        axios
          .post(
            "*******************",
            {
              task_title: title1,
              task_description: description,
              task_start_date: value.$d.toISOString().split("T")[0],
              task_estimated_date: value1.$d.toISOString().split("T")[0],
              task_status: "todo",
            },
            {
              headers: {
                "************": "*******************",
              },
            }
          )
          .then((res) => {
            console.log(res);
            if (res.data) {
              axios
                .get(
                  "*************************",
                 
                  {
                    headers: {
                      "******************": "********************",
                    },
                  }
                )
                .then((res) => {
                  if (res.data) {
                    props.updatetodolist(res.data);
                  }
                })
                .catch((error) => {
                  console.log(error);
                });
            }
          })
          .catch((error) => {
            console.log(error);
            // setInvalidDetails(error.response.data.message)
          });
      }
      if (props.Description === "Progress") {
        axios
          .post(
            "***********************",
            {
              title: title1,
              description: description,
              start_date: value.$d.toISOString().split("T")[0],
              est_end_date: value1.$d.toISOString().split("T")[0],
              task_status: "progress",
            },

            {
              headers: {
                "*************": "*************",
              },
            }
          )
          .then((res) => {
            console.log(res);
            if (res.data) {
              // setLoader(false)
              axios
                .get(
                  "*********************************",
                  {
                    headers: {
                      "*****************": "******************************",
                    },
                  }
                )
                .then((res) => {
                  if (res.data) {
                    props.updateprogresslist(res.data);
                  }
                })
                .catch((error) => {
                  console.log(error);
                });
            }
          })
          .catch((error) => {
            console.log(error);
            // setInvalidDetails(error.response.data.message)
          });
      }
      if (props.Description === "Done") {
        axios
          .post(
            "*************************",
            {
              task_title: title1,
              task_description: description,
              task_start_date: value.$d.toISOString().split("T")[0],
              task_estimated_date: value1.$d.toISOString().split("T")[0],
              task_status: "done",
            },
            {
              headers: {
                "**************": "**************",
              },
            }
          )
          .then((res) => {
            console.log(res);
            if (res.data) {
              // setLoader(false)
              axios
                .get(
                  "************************",
                 
                  {
                    headers: {
                      "*********": "**************",
                    },
                  }
                )
                .then((res) => {
                  if (res.data) {
                    props.updateDoneList(res.data);
                  }
                })
                .catch((error) => {
                  console.log(error);
                });
            }
          })
          .catch((error) => {
            console.log(error);
            // setInvalidDetails(error.response.data.message)
          });
      }

      // setSubmit(true)
      setTitle(false);
    }
  };
  const handleTodo = (taskid) => {
    axios
      .get(
        "*************************" +
          taskid,
        {
          headers: {
            "*****": "**********************",
          },
        }
      )
      .then((res) => {
        console.log(res);
        if (res.data) {
          setTodoSingle(res.data.resp);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    setId(taskid);
    setTodo(!todo);
    setProgress(false);
    setDone(false);
  };

  const handleProgress = (taskid) => {
    axios
      .get(
        "****************************" +
          taskid,
        {
          headers: {
            "***************": "**************************",
          },
        }
      )
      .then((res) => {
        console.log(res);
        if (res.data) {
          setTodoSingle(res.data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    setId(taskid);
    setTodo(false);
    setProgress(!progress);
    setDone(false);
  };
  const handleDone = (taskid) => {
    axios
      .get(
        "****************" +
          taskid,
        {
          headers: {
            "*********": "***************",
          },
        }
      )
      .then((res) => {
        console.log(res);
        if (res.data) {
          setTodoSingle(res.data.resp);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    setId(taskid);
    setTodo(false);
    setProgress(false);
    setDone(!Done);
  };

  const handletitle1 = (event) => {
    setTitle1(event.target.value);
    if (title1.length > 0) {
      setSubmit(false);
    }
  };
  const handledescription = (event) => {
    setDescription(event.target.value);
  };
  const handleCancel = (cancel) => {
    setTodo(cancel);
  };

  return (
    <div className="space">
      {props.Description === "Addtask" ? (
        <h3 className="p">Todo</h3>
      ) : props.Description === "Progress" ? (
        <h3 className="p1">Progress</h3>
      ) : (
        <h3 className="p2">Done</h3>
      )}
      <Card
        sx={{ maxWidth: 345 }}
        className="hover1 cardssss"
        onClick={() => handletitle()}
      >
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="card1"
          >
            {props.name}
          </Typography>
        </CardContent>
      </Card>
      {title ? (
        <Card sx={{ maxWidth: 345 }} className="cardssss">
          <CardContent>
            <TextField
              id="outlined-required"
              label="Title"
              className="status"
              onChange={(e) => handletitle1(e)}
            />
            <Typography variant="body2">
              <TextField
                id="outlined-required"
                label="Description"
                className="status"
                onChange={(e) => handledescription(e)}
              />
            </Typography>
            {/* <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                className="status"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={status}
                label="Status"
                onChange={handleChange}
              >
                 {props.Description === "Addtask" ? (
        <MenuItem value="Todo">Todo</MenuItem>
      ) : props.Description === "Progress" ? (
        <MenuItem value="Progress">Progress</MenuItem>
      ) : (
        <MenuItem value="Done">Done</MenuItem>
      )}
   </Select>
            </FormControl> */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={3}>
                <DesktopDatePicker
                  className="status"
                  label="Start Date"
                  inputFormat="YYYY/MM/DD"
                  value={value}
                  onChange={handleStartDate}
                  renderInput={(params) => <TextField {...params} />}
                />
                <DesktopDatePicker
                  className="status"
                  label="End Date"
                  inputFormat="YYYY/MM/DD"
                  value={value1}
                  onChange={handleChangeEndDate}
                  renderInput={(params) => <TextField {...params} />}
                  disablePast={true}
                  minDate={value}
                />
              </Stack>
            </LocalizationProvider>
            {/* <MaterialUIPickers /> */}
          </CardContent>
          <CardActions>
            <Button
              size="small"
              className="hover1"
              onClick={() => handlesubmit()}
            >
              {" "}
              + Addtask
            </Button>
          </CardActions>
        </Card>
      ) : null}
      {props.todoList?.resp?.length > 0 &&
        props.todoList.resp.map((retr, index) => (
          <Card sx={{ maxWidth: 345 }} className="cardssss"  onClick={() => handleTodo(retr.task_id)}>
            <CardContent>
              <div className="delete">
                <div>
                  <Typography
                    variant="h3"
                    color="text.secondary"
                   
                  >
                    {retr.title}
                  </Typography>

                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Stack spacing={3} className="statuscal">
                      <div
                        className="md-form md-outline input-with-post-icon datepicker"
                        style={{ display: "flex" }}
                      >
                        <input
                          placeholder="Select date"
                          type="date"
                          id="example"
                          className="form-control"
                          value={datess}
                          onChange={(e) => handledatess(e.target.value)}
                        />
                        <label for="example"></label>
                      </div>
                    </Stack>
                  </LocalizationProvider>
                </div>
                <div>
                  {/* <IconButton
                    aria-label="more"
                    id="long-button"
                    // aria-controls={open ? 'long-menu' : undefined}
                    // aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MoreVertIcon />
                  </IconButton> */}
                  
                  <Button onClick={() => handleDelete(retr.task_id)}>
                    Delete
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      {props.progresslist?.length > 0 &&
        props.progresslist.map((retr) => (
          <Card sx={{ maxWidth: 345 }} className="cardssss" onClick={() => handleProgress(retr.task_id)}>
            <CardContent>
              <div className="delete">
                <div>
                  <Typography
                    variant="h3"
                    color="text.secondary"
                    style={{cursor:"pointer"}}
                    
                  >
                    {retr.title}
                  </Typography>

                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Stack spacing={3} className="statuscal">
                      <div
                        className="md-form md-outline input-with-post-icon datepicker"
                        style={{ display: "flex" }}
                      >
                        <input
                          placeholder="Select date"
                          type="date"
                          id="example"
                          className="form-control"
                          value={datess}
                          onChange={(e) => handledatess(e.target.value)}
                        />
                        <label for="example"></label>
                      </div>
                    </Stack>
                  </LocalizationProvider>
                </div>

                <div>
                  {/* <IconButton
                    aria-label="more"
                    id="long-button"
                    // aria-controls={open ? 'long-menu' : undefined}
                    // aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MoreVertIcon />
                  </IconButton> */}
                  <Button onClick={() => handleDelete(retr.task_id)}>
                    Delete
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      {props.Donelist?.resp?.length > 0 &&
        props.Donelist.resp.map((retr) => (
          <Card sx={{ maxWidth: 345 }} className="cardssss" onClick={() => handleDone(retr.task_id)}>
            <CardContent>
              <div className="delete">
                <div>
                  <Typography
                    variant="h3"
                    color="text.secondary"
                    
                  >
                    {retr.title}
                  </Typography>

                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Stack spacing={3} className="statuscal">
                      {/* <DesktopDatePicker
                        inputFormat="YYYY/MM/DD"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                      /> */}
                      <div
                        className="md-form md-outline input-with-post-icon datepicker"
                        style={{ display: "flex" }}
                      >
                        <input
                          placeholder="Select date"
                          type="date"
                          id="example"
                          className="form-control"
                          value={datess}
                          onChange={(e) => handledatess(e.target.value)}
                        />
                        <input
                          placeholder="Select date"
                          type="month"
                          id="example"
                          className="form-control"
                          value={datess}
                          onChange={(e) => handledatess(e.target.value)}
                        />
                      </div>
                    </Stack>
                  </LocalizationProvider>
                </div>

                <div>
                  {/* <IconButton
                    aria-label="more"
                    id="long-button"
                    // aria-controls={open ? 'long-menu' : undefined}
                    // aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MoreVertIcon />
                  </IconButton> */}
                 
                  <Button onClick={() => handleDelete(retr.task_id)}>
                    Delete
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

      {todo && (
        <BasicModal
          taskid={id}
          todoList={todoSingle}
          todos={todo}
          todoListData={todoListData}
          progressListData={progressListData}
          doneListData={doneListData}
          name="Add task"
        ></BasicModal>
      )}
      {progress && (
        <BasicModal
          taskid={id}
          todoList={todoSingle}
          todoListData={todoListData}
          progressListData={progressListData}
          doneListData={doneListData}
          todos={progress}
          name="Progress"
        ></BasicModal>
      )}
      {Done && (
        <BasicModal
          taskid={id}
          todoList={todoSingle}
          todos={Done}
          todoListData={todoListData}
          progressListData={progressListData}
          doneListData={doneListData}
          name="Done"
        ></BasicModal>
      )}
    </div>
  );
}
