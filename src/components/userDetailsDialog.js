import React, { useCallback, useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import { amber, red } from '@material-ui/core/colors';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../Store/actions';

function UserDetailsDialog(props) {
	const dispatch = useDispatch();
	
	const todoRequiredDialog = useSelector((state)=>state.protfolioReducer.todoRequiredDialog);

	function closeTodoRequiredDialog() {
		return dispatch(Actions.CloseDialog());
	}
    
	return (
		<Dialog {...todoRequiredDialog.props} onClose={closeTodoRequiredDialog} fullWidth maxWidth='sm'>
			<DialogContent style={{height:"50vh",width:"60vw"}}>
				<DialogContentText id="alert-dialog-description">
                 
				 {todoRequiredDialog.data && 
                    <p>{todoRequiredDialog.data.email}</p> 
                }
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={closeTodoRequiredDialog} color="primary">
                  Close
				</Button>
			</DialogActions>
     	</Dialog>
		
	);
}

export default UserDetailsDialog;
