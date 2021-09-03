import React , {useEffect,useState,useMemo} from 'react';
import logo from './logo.svg';
import Apputils from './utils/apputil';
import axios from 'axios';
import List from './components/list';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import UserDetailsDialog from './components/userDetailsDialog';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';

const useStyles = makeStyles(theme => ({
  loader: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
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

function App() {
  
  const classes = useStyles();
  const [searchText, setsearchText] = useState(null);
  const [filteredData,setfilteredData] = useState(null);
  const [resultData,setresultData] = useState(null);

  function onsearch(e){
      console.log(e.target.value);
      setsearchText(e.target.value);
  }
   
  useEffect(()=>{
    axios.get(`https://randomuser.me/api/?results=20&seed=1`)
    .then((response)=>{
        console.log(response.data.results);
        setresultData(response.data.results);
        setfilteredData(response.data.results);
    })
    .catch((error)=>{
       console.log(error);
    })
  },[]);

  function searchResult(){
    console.log("************",searchText);
      if(searchText){
           let searchResults = getFilteredArray(resultData,searchText);
           console.log(searchResults);
           setfilteredData(searchResults);
      }
      
  }

  
		
	function getFilteredArray(resultData, _searchText) {
		const arr = Object.keys(resultData).map(id => resultData[id]);
		if (_searchText.length === 0) {
			return arr;
		}
		return Apputils.filterArrayByString(arr, _searchText);
	}



  return (
    <>
      {/* <div className={classes.searchbox}>
       <TextField id="outlined-basic" label="Search" variant="outlined" size="small" onChange={onsearch} />
       <Button variant="contained" color="secondary" className={classes.searchbutton} onCLick={searchResult}>
        <SearchIcon/> Search
      </Button>
      </div> */}
      <div>
      {
        resultData && 
        <List userdata = {resultData}/>
      }
      {
        !resultData && 
        <div className={classes.loader}>
          <CircularProgress color="secondary" size={100} />
        </div>
      }
        <UserDetailsDialog/>   
      </div>
    </>
  );
}

export default App;
