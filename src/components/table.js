import React,{useEffect} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import MaUTable from '@material-ui/core/Table';
import PropTypes from 'prop-types';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Link from '@material-ui/core/Link';
import clsx from 'clsx';
import { useGlobalFilter, usePagination, useRowSelect, useSortBy, useTable } from 'react-table';
import Avatar from '@material-ui/core/Avatar';
// import { useDispatch, useSelector } from 'react-redux';
import PaginationActions from './paginationActions';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    text: {
		color: 'black !important',
		fontWeight: 'normal',
		fontSize: '1.2rem'
	},
	header: {
		fontWeight: 'bold'
	},
	marginL:{
		marginLeft: -70,
        marginRight: 10,
	}
}));


const EnhancedTable = ({ columns, data, onRowClick }) => {
	const classes = useStyles();
	//const dispatch = useDispatch();
	const {
		getTableProps,
		headerGroups,
		prepareRow,
		page,
		gotoPage,
		setPageSize,
		state: { pageIndex, pageSize }
	} = useTable(
		{
			columns,
			data,
			autoResetPage: true
		},
		useGlobalFilter,
		useSortBy,
		usePagination,
		useRowSelect,
		hooks => {
			hooks.allColumns.push(_columns => [
				..._columns
			]);
		}
	);

	const handleChangePage = (event, newPage) => {
		gotoPage(newPage);
	};
    useEffect(()=>{setPageSize(5)},[]);

	const handleChangeRowsPerPage = event => {
		setPageSize(Number(event.target.value));
	};

	const handleUTCtoLocal = utcDate => {
		var date = new Date(utcDate).toLocaleString();//.split(' ');

       return date;
	};

	// Render the UI for your table
	return (
		<TableContainer className="min-h-full sm:border-1">
			<MaUTable {...getTableProps()}>
				<TableHead>
					{headerGroups.map(headerGroup => (
						<TableRow {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map(column => (
								<TableCell
								className={clsx("whitespace-no-wrap p-12", classes.header)}
									{...(!column.sortable
										? column.getHeaderProps()
										: column.getHeaderProps(column.getSortByToggleProps()))}
								>
									{column.render('Header')}
									{column.sortable ? (
										<TableSortLabel
											active={column.isSorted}
											// react-table has a unsorted state which is not treated here
											direction={column.isSortedDesc ? 'desc' : 'asc'}
										/>
									) : null}
								</TableCell>
							))}
						</TableRow>
					))}
				</TableHead>
				<TableBody>
					{page.map((row, i) => {
						prepareRow(row);
						return (
							<TableRow
								{...row.getRowProps()}
								onClick={ev => onRowClick(ev, row)}
								// className="truncate cursor-pointer"
								className="truncate"
							>
								{row.cells.map(cell => {
									console.log('row===========');
									console.log(row);
									return (
										<TableCell
											{...cell.getCellProps()}
											//className={clsx('p-12', classes.text)}
										>
											{
											 cell.column.Header === 'Profile Picture'?
                                             <Avatar alt="Remy Sharp" src={row.original.picture.thumbnail} /> 
                                             :
											 cell.column.Header === 'Name'?
                                             <p>{row.original.name.title +" "+ row.original.name.first +" "+ row.original.name.last}</p> 
											  
											 :cell.render('Cell')}
											
										</TableCell>
									);
								})}
							</TableRow>
						);
					})}
				</TableBody>

				<TableFooter>
					<TableRow>
						<TablePagination
							classes={{
								root: 'overflow-hidden',
								spacer: 'w-0 max-w-0',
                                float :'left'
							}}
							rowsPerPageOptions={[5, 10, 25]}
							colSpan={7}
							count={data.length}
							rowsPerPage={pageSize}
							page={pageIndex}
							SelectProps={{
								inputProps: { 'aria-label': 'rows per page' },
								native: false,
								classes: classes.marginL
							}}
							onChangePage={handleChangePage}
							onChangeRowsPerPage={handleChangeRowsPerPage}
							//ActionsComponent={PaginationActions}
						/>
					</TableRow>
				</TableFooter> 
			</MaUTable>
		</TableContainer>
	);
};


export default EnhancedTable;
