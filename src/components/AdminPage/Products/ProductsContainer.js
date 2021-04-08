import AdminMenu from "components/AdminPage/AdminMenu";
import ProductFeatureBar from "./ProductFeatureBar";
import {
  Grid,
  makeStyles,
  TableContainer,
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  tbody: {
    "& tr": {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  },
}));
const Header = () => {
  return (
    <Grid className="admin-header" container justify="space-between">
      <Grid className="admin-header-title" item>
        Products
      </Grid>
      <AdminMenu />
    </Grid>
  );
};
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, "Actions"),
  createData("Ice cream sandwich", 237, 9.0, 37, "Actions"),
  createData("Eclair", 262, 16.0, 24, "Actions"),
  createData("Cupcake", 305, 3.7, 67, "Actions"),
  createData("Gingerbread", 356, 16.0, 49, "Actions"),
  createData("Gingerbread", 356, 16.0, 49, "Actions"),
];

const ProductContentTable = () => {
  const classes = useStyles();
  return (
    <Grid className="admin-content-table">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>PRODUCTS</TableCell>
              <TableCell align="right">SOLD</TableCell>
              <TableCell align="right">DATE ADDED </TableCell>
              <TableCell align="right">PROFIT($)</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={classes.tbody}>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default function ProductsContainer() {
  return (
    <Grid item md>
      <Grid container className="admin-container">
        <Header />
        <ProductFeatureBar />
        <ProductContentTable />
      </Grid>
    </Grid>
  );
}
