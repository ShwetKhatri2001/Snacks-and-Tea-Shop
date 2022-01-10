import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
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
import AdminNav from '../AdminNav/AdminNav';
import { AddItem, EditItem, RemoveItem, GetItems } from '../../axios/instance';
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

const ManageMenu = () => {

  const [editIdx, setEditIdx] = useState(-1);
  const [removeIdx, setRemoveIdx] = useState(-1);
  const [allrows, setAllRows] = useState([]);
  const classes = useRowStyles();
  const navigate = useNavigate();

  useEffect( async () => {
      
      const res = await GetItems(); 

      try{
          if (!res.data.error)
            {
              setAllRows(res.data);
            }
      } catch (err) {
          if (err.response)
          {
              toast.error(`${ err.response.data.error }`);
              if(err.response.data.error === 'Please login to view this page')
                navigate('/signin')
          }
      }
  },[])

  const handleAddItem = async () => {
    const newitem = { 
      name: 'New Item',
      price: 0,
      quantity: 1,
      todays_sp: "Yes",
      itemimg: `https://source.unsplash.com/250x250/?food`
    };

    const res = await AddItem(newitem); 

    try{
      if (!res.data.error)
      {
         toast.success('New Item added successfully');
         setAllRows([res.data, ...allrows]);
         setEditIdx(res.data._id); 
      }
   } catch (err) {
      if (err.response)
      {
        toast.error(`${ err.response.data.error }`);
        if(err.response.data.error === 'Please login to view this page')
          navigate('/signin')
      }
   }

  }

  const StartEditing = (editid) => {
    setEditIdx(editid);
  }

  const EndEditing = async (editid) => {

    let edititem = {}
    
    allrows.map((row) => {
      if(row._id == editid) 
         edititem = {...row, itemimg: `https://source.unsplash.com/250x250/?${row.name}`}
      }
    )

    const res = await EditItem(edititem); 

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
          if(err.response.data.error === 'Please login to view this page')
            navigate('/signin')
        }
    }
    setEditIdx(-1);
  }


  const StartRemoving = (removeid) => {
    setRemoveIdx(removeid);
  }

  const EndRemoving = async (removeid) => {

    const res = await RemoveItem({ _id : removeid }); 

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
        if(err.response.data.error === 'Please login to view this page')
          navigate('/signin')
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
              <h1>Manage Menu</h1>
          </div>
          <button className="viewall-btn" onClick={() => handleAddItem()}>
              Add Item
          </button>
      </div>
      <br />
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow className={classes.header}>
            <TableCell className={classes.historycell}/>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Quantity</TableCell>
            <TableCell align="left">Today's Special</TableCell>
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
            <Avatar alt={row.name} src={row.itemimg} className={classes.large}/>
           </TableCell>
           <TableCell align="left" colSpan={4}>
              <Typography variant="h6" className={classes.primary}>{`Are You sure You want to remove this item ( ${row.name} ) ? `}</Typography> 
           </TableCell>
           <TableCell align="left" >
             <IconButton onClick={() => EndRemoving(row._id)} className={classes.green}><DoneIcon /></IconButton>
             <IconButton onClick={() => CancelRemoving()} className={classes.primary}><CloseIcon /></IconButton>
           </TableCell>
           </>
           :
        <>
        <TableCell style={{width: '20px'}}>
            <Avatar alt={row.name} src={`https://source.unsplash.com/250x151/?${row.name}`} className={classes.large}/>
        </TableCell>
        <TableCell align="left" style={{width: '200px'}}>
          {
            editIdx === row._id 
            ? <TextField 
              name="name"
              type="string"
              value={row.name}
              onChange={e => handleChange(e, "name", row._id)}
              className={classes.name}
              InputProps={{ classes: {
                underline: classes.underline,
                input:classes.name
              } }} 
            />
            :  row.name
          }
        </TableCell>
        <TableCell align="left">
        {" "}
        {
          editIdx === row._id 
            ? <TextField 
              type="string"
              name="price"
              value={row.price}
              onChange={e => handleChange(e, "price", row._id)}
              className={classes.name}
              InputProps={{ classes: {
                underline: classes.underline,
                input:classes.name
              } }} 
            />
            : row.price
        }
        </TableCell>
        <TableCell align="left">
        {" "}
        {
          editIdx === row._id 
            ? <TextField 
              type="string"
              name="quantity"
              value={row.quantity}
              onChange={e => handleChange(e, "quantity", row._id)}
              className={classes.name}
              InputProps={{ classes: {
                underline: classes.underline,
                input:classes.name
              } }} 
            />
            : row.quantity
        }
        </TableCell>
        <TableCell align="left">
        {" "}
        {
          editIdx === row._id 
            ? <TextField 
              type="string"
              name="todays_sp"
              value={row.todays_sp}
              onChange={e => handleChange(e, "todays_sp", row._id)}
              className={classes.name}
              InputProps={{ classes: {
                underline: classes.underline,
                input: classes.name
              } }} 
            />
            : row.todays_sp 
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

export default ManageMenu;