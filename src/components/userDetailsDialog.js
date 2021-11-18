import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import { useDispatch, useSelector } from 'react-redux';
import UserDetail from './userDetail';
import UserdetailHeader from './userdetailHeader';
import * as Actions from '../Store/actions';


const useStyles = makeStyles(theme => ({
    location:{
		textAlign: "center",
		justifyContent:"center",
		width:"100%",
		ontWeight:"400",
		marginTop:"1%",
		display:"flex"
	}
}));


function UserDetailsDialog(props) {
	const dispatch = useDispatch();
	const classes = useStyles();
	const todoRequiredDialog = useSelector((state)=>state.protfolioReducer.todoRequiredDialog);
	const [details , setdetails] = useState(null);

	function closeTodoRequiredDialog() {
		return dispatch(Actions.CloseDialog());
	}

	useEffect(()=>{
        
		if(todoRequiredDialog.data){
            let details = [];
			let data = todoRequiredDialog.data;
            let dob = new Date(data.dob.date);
			let regdate = new Date(data.registered.date);
			details.push({attribute:"User Name" , value : data.login.username });
			details.push({attribute:"Date of birth" , value : dob.toLocaleDateString('en-IN') });
			details.push({attribute:"Age" , value : data.dob.age });
			details.push({attribute:"Phone No" , value : data.phone });
			details.push({attribute:"Cell Phone" , value : data.cell });
			details.push({attribute:"Registered" , value : regdate.toLocaleDateString('en-IN') });
			
			console.log("Details",details);
			setdetails(details);
		}

	},[todoRequiredDialog.data])

    
	return (
		<Dialog {...todoRequiredDialog.props} onClose={closeTodoRequiredDialog} fullWidth maxWidth='md'>
			<DialogContent style={{height:"50vh"}}>
				<DialogContentText id="alert-dialog-description">
                  {
					todoRequiredDialog.data && 
					<>
					<UserdetailHeader data={todoRequiredDialog.data}/>
					<Divider variant="inset"  />
					<br></br>
					{
						details && 
                        <UserDetail data={details}/>
					}			
					</>
				  }

				</DialogContentText>
			</DialogContent>
			<DialogActions>
			   <Button variant="contained" color="secondary"  onClick={closeTodoRequiredDialog}>
                  Close
				</Button>
			</DialogActions>
     	</Dialog>
		
	);
}

export default UserDetailsDialog;
