import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function LeftCard() {
	return (
        <div className="table-responsive">
            <TableContainer component={Paper}>
                <Table id="mainTable">
                    <TableHead>
                        <TableRow>
                            <TableCell>課程名稱</TableCell>
                            <TableCell>價格</TableCell>
                            <TableCell>狀態</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Design</TableCell>
                            <TableCell>Tom</TableCell>
                            <TableCell><span className="status red"/></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>					
        </div>
	);
}

function RightCard() {
	return (
		<div className="newCustomer">
            {/* fetch data */}
            <div className="info">
                <span className="las la-user-plus" style={{"fontSize": "2.5rem"}}/>
                <div>
                    <h4>Ge Ku~~~~ </h4>
                    <small>How dare you come Ice Bird</small>
                </div>
                <div className="contact">
                    <span className="las la-user-circle" />
                    <span className="las la-comment" />
                    <span className="las la-phone" />
                </div>
            </div>
        </div>	
	);
}

export { LeftCard, RightCard };
