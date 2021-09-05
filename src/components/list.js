import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserTable from './table';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Apputils from '../utils/apputil';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import * as Actions from '../Store/actions';

const useStyles = makeStyles(theme => ({
    margindiv: {
		marginLeft:"10%",
		marginRight:"10%",
        marginTop:"2%"
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
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      Checkbox: {
        marginTop:"1%",
        marginLeft:"1%",
      }

}));

function List(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [searchText, setsearchText] = useState(null);
    const [choosevaluetosort, setchoosevaluetosort] = useState(0);
    const [aschending, setaschending] = useState(false);
    const [filteredData,setfilteredData] = useState(props.userdata);
    const [semail,setsemail] = useState(false);
    const [sgender,setsgender] = useState(false);
    const [sage,setsage] = useState(false);
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
    const formdata = [
        {name:"Select One",value:0},     
        {name:"Email",value:20},
        {name:"Age",value:40},
    ]
    function onsearch(e){
        
        setsearchText(e.target.value);
    }
    function searchResult(){
        
        if(searchText){
            let searchResults = getFilteredArray(props.userdata,searchText);
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
    function handlesortChange(e){
        setchoosevaluetosort(e.target.value);
        let value = e.target.value;
        switch(value){
            case "20": 
                if(aschending){
                    setsage(false);
                    let result = props.userdata.sort(Apputils.asccompareemail);
                    setsemail(true);
                    setfilteredData(result); 
                }else{
                    setsage(false);
                    let result = props.userdata.sort(Apputils.descompareemail);
                    setsemail(true)
                    setfilteredData(result);
                }
                break;

            case "40": 
                if(aschending){
                    setsemail(false);
                    let result = props.userdata.sort(Apputils.asccompareage);
                    setsage(true);
                    setfilteredData(result); 
                }else{
                    setsemail(false);
                    let result = props.userdata.sort(Apputils.descompareage);
                    setsage(true);
                    setfilteredData(result);
                }
                break;
            default:
                setsemail(false);
                setsage(false);
                setfilteredData(props.userdata);

        }
    }

    return (
        <>
        <div className={classes.searchbox}>
        <TextField id="outlined-basic" label="Search" variant="outlined" size="small" onChange={onsearch} />
        <Button variant="contained" color="secondary" className={classes.searchbutton} onClick={searchResult}>
            <SearchIcon/> Search
        </Button>
       </div>
       <div style={{marginLeft:"10%",marginTop:"1%"}}>
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Sort</InputLabel>
        <Select
          native
          value={choosevaluetosort}
          onChange={handlesortChange}
          label="Choose"
          inputProps={{
            name: 'Choose',
            id: 'outlined-Choose-native-simple',
          }}
        >
         {formdata.map((item)=> 
            <option value={item.value}>{item.name}</option>
         )}

        </Select>
       </FormControl>
        <FormControlLabel 
            className={classes.Checkbox}
            control={
            <Checkbox
                checked={aschending} 
                onChange={(e)=>{
                    let checked = e.target.checked;
                    setaschending(checked);
                }} 
                name="Ascending"
            />}
            label="Ascending"
        /> 
        </div>
        
        {semail && 
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
        }
        {sage &&
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
        }
        { !semail && !sage &&
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
        }
        </>
    )
}

export default List
