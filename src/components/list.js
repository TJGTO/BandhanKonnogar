import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserTable from './table';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Apputils from '../utils/apputil';
import { makeStyles } from '@material-ui/core/styles';
import * as Actions from '../Store/actions';

const useStyles = makeStyles(theme => ({
    margindiv: {
		marginLeft:"10%",
		marginRight:"10%",
        marginTop:"5%"
	},
	searchbox : {
        width: "100%",
        textAlign: "center",
        marginTop : "5%",
        marginBottom : "-5%",
      },
      searchbutton : {
        marginLeft:"5px",
        marginTop:"1px"
      }
}));

function List(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [searchText, setsearchText] = useState(null);
    const [filteredData,setfilteredData] = useState(props.userdata);
    const columns = React.useMemo(
		() => [
            {
				Header: 'Profile Picture',	
			},
            {
				Header: 'Name',	
				className: 'font-bold',
				sortable: true
			},
			{
				Header: 'Email',	
				accessor: 'email',
				className: 'font-bold',
				sortable: true
			},           
			{
				Header: 'Gender',
				accessor : 'gender',
				className: 'font-bold',
				sortable: true
			},

			{
				Header: 'Age',
				accessor: 'dob.age',
				className: 'font-bold',
				sortable: true
			},
		
		],
		
		[dispatch]
	);
    function onsearch(e){
        console.log(e.target.value);
        setsearchText(e.target.value);
    }
    function searchResult(){
        
        if(searchText){
            let searchResults = getFilteredArray(props.userdata,searchText);
            console.log(searchResults);
            setfilteredData(searchResults);
       }
    }

    useEffect(()=>{
        if(!searchText || searchText==""){
            setfilteredData(props.userdata);
        }
    },[searchText]);

    function getFilteredArray(resultData, _searchText) {
		const arr = Object.keys(resultData).map(id => resultData[id]);
		if (_searchText.length === 0) {
			return arr;
		}
		return Apputils.filterArrayByString(arr, _searchText);
	}
    return (
        <>
        <div className={classes.searchbox}>
        <TextField id="outlined-basic" label="Search" variant="outlined" size="small" onChange={onsearch} />
        <Button variant="contained" color="secondary" className={classes.searchbutton} onClick={searchResult}>
            <SearchIcon/> Search
        </Button>
       </div>
        <div className={classes.margindiv}>
            <UserTable
                columns={columns}
                data={filteredData}
                onRowClick={(ev, row) => {
                    if (row) {
                        dispatch(Actions.OpenDialog(row.original));
                    }
                }}
            />
        </div>
        </>
    )
}

export default List
