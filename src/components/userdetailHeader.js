import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { makeStyles } from '@material-ui/core/styles';

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

function UserdetailHeader(props) {
    const classes = useStyles();
    return (
        <div>
            <>
				<div style={{textAlign: "center",width:"100%"}}>
				 	<img src={props.data.picture.large} alt="Avatar" style={{width:"200px",borderRadius:"50%"}}></img>
				</div>
					
				<div style={{textAlign: "center",width:"100%",fontWeight:"700",color:"#f50057"}}>
					{props.data.name.title +" "+ props.data.name.first +" "+ props.data.name.last}
				</div>

				<div style={{textAlign: "center",width:"100%",fontWeight:"700",color:"#66c2ff",marginTop:"1%"}}>
					{props.data.email}
				</div>

				<div className={classes.location}>
					<div><LocationOnIcon/></div> 
					<div> {props.data.location.city+", "+props.data.location.country} </div>
				</div>
							
			</>
        </div>
    )
}

export default UserdetailHeader
