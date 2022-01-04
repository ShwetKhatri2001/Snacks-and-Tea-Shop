import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Icon } from '@iconify/react';
import IconButton from '@material-ui/core/IconButton';
import TextField from "@material-ui/core/TextField";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import Avatar from '@material-ui/core/Avatar';
import AllEmployees  from '../EmpDetails/AllEmp.list';
import AdminNav from '../AdminNav/AdminNav';
import addempimg from "../../assets/addemp.jpg";
import { AddEmployee, EditEmployee, RemoveEmployee, GetEmployees } from '../../axios/instance';
import { ToastContainer, toast } from 'react-toastify';

const useRowStyles = makeStyles((theme) => ({
  header: {
    margin: theme.spacing(3),
    '& > *': {
      borderBottom: 'set',
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#4a4a4a'
    },
  },
  root: {
    '& > *': {
      borderBottom: 'unset',
      fontSize: '16px',
      color: '#4a4a4a'
    },
    "& .MuiTableCell-root": {
      width: '140px'
    },
  },
  underline: {
    padding:0,
    "&&&:before": {
      borderBottom: "1px solid #aaa"
    },
    "&&:after": {
      borderBottom: "none"
    },
  },
  name: {
    color: '#4a4a4a',
    width:'80%',
    padding: 0
  },
  primary: {
    color: '#EEB365'
  },
  green:{
    color: '#EEB365'
  },
  secondary: {
    color: '#EEB365'
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  }
 
}));


const ManageEmp = () => {

  const [editIdx, setEditIdx] = useState(-1);
  const [removeIdx, setRemoveIdx] = useState(-1);
  const [allrows, setAllRows] = useState([]);
  const classes = useRowStyles();

  useEffect( async () => {
      
      const res = await GetEmployees(); 

      try{
          if (!res.data.error)
            {
              setAllRows(res.data);
            }
      } catch (err) {
          if (err.response)
          {
              toast.error(`${ err.response.data.error }`);
          }
      }

  },[])


  const handleAddEmp = async () => {
    const newemp = { 
      empname: 'New Member',
      emprole: 'Staff Member',
      emploc: 'Jaipur',
      empimg: addempimg,
      empdate: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`
    };

    const res = await AddEmployee(newemp); 

    try{
      if (!res.data.error)
      {
         toast.success('Employee added successfully');
         setAllRows([res.data, ...allrows]);
         setEditIdx(res.data._id); 
      }
   } catch (err) {
      if (err.response)
      {
      toast.error(`${ err.response.data.error }`);
      }
   }

  }

  const StartEditing = (editid) => {
    setEditIdx(editid);
  }

  const EndEditing = async (editid) => {

    let editemployee = {}
    
    allrows.map((row) => {
      if(row._id == editid) 
         editemployee = row
      }
    )

    const res = await EditEmployee(editemployee); 

    try{
        if (!res.data.error)
        {
          toast.success(res.data.data);
          setEditIdx(-1);
        }
    } catch (err) {
        if (err.response)
        {
          toast.error(`${ err.response.data.error }`);
        }
    }
    setEditIdx(-1);
  }

  const StartRemoving = (removeid) => {
    setRemoveIdx(removeid);
  }

  const EndRemoving = async (removeid) => {

    const res = await RemoveEmployee({ _id : removeid }); 

    try{
      if (!res.data.error)
      {
        toast.success(res.data.data);
        setAllRows( allrows.filter((row) => row._id !== removeid ));
        setRemoveIdx(-1);
      }
    } catch (err) {
      if (err.response)
      {
        toast.error(`${ err.response.data.error }`);
      }
    }
  }

  const CancelRemoving = () => {
    setRemoveIdx(-1);
  }

  const handleChange = (e, name, changeid) => {
    const { value } = e.target;
    setAllRows(
      allrows.map((row) => 
          row._id === changeid ? {...row, [name] : value} : row
      )
    )
  }

  return (
    <>
      <AdminNav />
      <ToastContainer position="bottom-left" bodyClassName="toastBody"/>
      <div className="admin_items">
      <div className="title-orders">
          <div className="title">
              <Icon icon="clarity:group-solid" className="title-icon"/>
              <h1>Manage Employees</h1>
          </div>
          <button className="viewall-btn" onClick={() => handleAddEmp()}>
              Add Employee
          </button>
      </div>
      <br />
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow className={classes.header}>
            <TableCell className={classes.historycell}/>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Position</TableCell>
            <TableCell align="left">Location</TableCell>
            <TableCell align="left">Joining Date</TableCell>
            <TableCell align="left">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allrows.map((row) => (
            <Row 
              key={row._id} 
              row={row} 
              editIdx={editIdx}
              removeIdx={removeIdx}
              handleChange={handleChange}
              StartEditing = {StartEditing}
              EndEditing = {EndEditing}
              StartRemoving = {StartRemoving}
              EndRemoving = {EndRemoving}
              CancelRemoving = {CancelRemoving}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </>
  );
}

const Row = (props) => {
  const { row, editIdx, removeIdx, handleChange, StartEditing, EndEditing, StartRemoving, EndRemoving, CancelRemoving } = props;
  const classes = useRowStyles();

  return (
    <>
      <TableRow className={classes.root}>
        {
           removeIdx === row._id
           ? 
           <>
           <TableCell style={{width: '20px'}}>
            <Avatar alt={row.empname} src={row.empimg} className={classes.large}/>
           </TableCell>
           <TableCell align="left" colSpan={4}>
              <Typography variant="h6" className={classes.primary}>{`Are You sure you want to remove this employee ( ${row.empname} ) ? `}</Typography> 
           </TableCell>
           <TableCell align="left" >
             <IconButton onClick={() => EndRemoving(row._id)} className={classes.green}><DoneIcon /></IconButton>
             <IconButton onClick={() => CancelRemoving()} className={classes.primary}><CloseIcon /></IconButton>
           </TableCell>
           </>
           :
        <>
        <TableCell style={{width: '20px'}}>
          <Avatar alt={row.empname} src={row.empimg} className={classes.large}/>
        </TableCell>
        <TableCell align="left" style={{width: '200px'}}>
          {
            editIdx === row._id 
            ? <TextField 
              name="empname"
              type="string"
              value={row.empname}
              onChange={e => handleChange(e, "empname", row._id)}
              className={classes.empname}
              InputProps={{ classes: {
                underline: classes.underline,
                input:classes.name
              } }} 
            />
            :  row.empname
          }
        </TableCell>
        <TableCell align="left">
        {" "}
        {
          editIdx === row._id 
            ? <TextField 
              type="string"
              name="emprole"
              value={row.emprole}
              onChange={e => handleChange(e, "emprole", row._id)}
              className={classes.name}
              InputProps={{ classes: {
                underline: classes.underline,
                input:classes.name
              } }} 
            />
            : row.emprole
        }
        </TableCell>
        <TableCell align="left">
        {" "}
        {
          editIdx === row._id 
            ? <TextField 
              type="string"
              name="emploc"
              value={row.emploc}
              onChange={e => handleChange(e, "emploc", row._id)}
              className={classes.name}
              InputProps={{ classes: {
                underline: classes.underline,
                input:classes.name
              } }} 
            />
            : row.emploc
        }
        </TableCell>
        <TableCell align="left">
        {" "}
        {
          editIdx === row._id 
            ? <TextField 
              type="string"
              name="empdate"
              value={row.empdate}
              onChange={e => handleChange(e, "empdate", row._id)}
              className={classes.name}
              InputProps={{ classes: {
                underline: classes.underline,
                input:classes.name
              } }} 
            />
            : row.empdate
        }
        </TableCell>
        <TableCell align="left">
          {
            editIdx === row._id 
            ? <IconButton onClick={() => EndEditing(row._id)} className={classes.green}><DoneIcon /></IconButton>
            : <IconButton onClick={() => StartEditing(row._id)} className={classes.secondary}><EditIcon /></IconButton>
          }
          <IconButton onClick={() => StartRemoving(row._id)} className={classes.primary}><DeleteIcon/></IconButton>
        </TableCell>
        </>
      }
      </TableRow>
    </>
  );
}

export default ManageEmp;