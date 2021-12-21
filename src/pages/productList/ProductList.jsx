import "./productList.css"
import { DataGrid } from "@material-ui/data-grid"
import { DeleteOutline } from "@material-ui/icons";
import { productListDataRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductList() {
    const [data, setData] = useState(productListDataRows)
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const productListDataColumns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'product', headerName: 'Product', width: 200, renderCell: (params) => {
            return (
                <div className="productListItemProduc">
                    <img src={params.row.image} alt="" className="productListImage" />
                    {params.row.name}
                </div>
            )
        } },
        { field: 'stock', headerName: 'Stock', width: 120 },
        { field: 'status', headerName: 'Status', width: 150 },
        { field: 'price', headerName: 'Price', width: 150 },
        { field: 'action', headerName: 'Action', width: 150, renderCell: (params) => {
            return(
                <>
                    <Link to={ "/product/" + params.row.id } >
                        <button className="productListEdit">Edit</button>
                    </Link>
                    <DeleteOutline className="productListDelete" onClick={()=>handleDelete(params.row.id)} />
                </>    
            )
        } },
    ];

    return (
        <div className='productList'>
            <DataGrid
                rows={data}
                columns={productListDataColumns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}
