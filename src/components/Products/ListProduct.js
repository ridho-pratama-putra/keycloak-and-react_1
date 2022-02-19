import React from 'react';
import Box from "@mui/material/Box";
import NumberFormat from 'react-number-format';
import Card from "@mui/material/Card";
import MUIDataTable from 'mui-datatables';
// import { ThemeProvider} from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const ListProduct = (props) => {

    const columns = [
        {
            name: 'name',
            label: 'Name',
            options: {
                filter: true,
                sort: true
            }
        },
        {
            name: 'buyPrice',
            label: 'Buy Price',
            options: {
                sort: true,
                customBodyRender: (value, tableMeta, updateValue) => (
                    <NumberFormat
                        displayType={'text'}
                        value={value}
                        thousandSeparator={true}
                        isNumericString={true}
                        prefix={'Rp. '}
                    />
                )
            }
        },
        {
            name: 'offlineSellPrice',
            label: 'Offline Price',
            options: {
                sort: true,
                customBodyRender: (value, tableMeta, updateValue) => (
                    <NumberFormat
                        displayType={'text'}
                        value={value}
                        thousandSeparator={true}
                        isNumericString={true}
                        prefix={'Rp. '}
                    />
                )
            }
        },
        {
            name: 'onlineSellPrice',
            label: 'Online Price',
            options: {
                sort: true,
                customBodyRender: (value, tableMeta, updateValue) => (
                    <NumberFormat
                        displayType={'text'}
                        value={value}
                        thousandSeparator={true}
                        isNumericString={true}
                        prefix={'Rp. '}
                    />
                )
            }
        },
        {
            name: 'productQuantity',
            label: 'Quantity',
            options: {
                sort: true
            }
        }
    ];

    const getMuiTheme = () =>
        createTheme({
            overrides: {
                MUIDataTable: {
                    paper: {
                        boxShadow: 'none'
                    }
                }
            }
        });

    const dataForTable = [{
        productQuantity: 4,
        name: 'stock',
        buyPrice: '50000',
        offlineSellPrice: '400000',
        onlineSellPrice: '3000'
    }];


    return (
        <div>
            <Box sx={{
                marginTop: '15px'
            }}>
                <Card variant='outlined'>
                    <ThemeProvider theme={getMuiTheme()}>
                        <MUIDataTable
                            title={'Product List'}
                            data={dataForTable}
                            columns={columns}
                            options={{
                                selectableRows: 'none' // <===== will turn off checkboxes in rows
                            }}
                        />
                    </ThemeProvider>
                </Card>

            </Box>
        </div>
    );
};

ListProduct.propTypes = {};

ListProduct.defaultProps = {};

export default ListProduct;
