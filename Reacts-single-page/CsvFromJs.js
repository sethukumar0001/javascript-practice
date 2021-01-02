import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {deleteAction} from '../store/actions/index';
import Table from 'react-bootstrap/Table';
import styled from 'styled-components'
import './Home.css';
import DeleteOutline from '@material-ui/icons/DeleteOutline'
import EditIcon from '@material-ui/icons/Edit';

const ButtonStyle = styled.button`
border:none;
color:white;
background-color:blue;
float:right;
padding:10px;
border-radius:10px;
margin-bottom:10px;
margin-right:20px;
`;

const DeleteOutlineStyle = styled(DeleteOutline)`
color:red;
cursor:pointer;
margin-left:30px;
`;
const EditIconStyle = styled(EditIcon)`
color:blue;
cursor:pointer;
margin-left:30px;
`;

const TableStyle = styled(Table)`
background-color:#f9f6f7;
`;



const Home = props =>{

  
    const AddItemReducer = useSelector(state=>state.AddItemReducer)
    console.log(AddItemReducer)
    const AddItemReducerDisplay = AddItemReducer
    var dispatch = useDispatch();

    const onClickDeleteHire = (e,id) => 
    {
      dispatch(deleteAction({ id: id }))
    }

    const Upload = () =>{
        var data = AddItemReducer
          
          var csvContent = data.map(function(d){
            return JSON.stringify(Object.values(d));
        })
        .join('\n') 
        .replace(/(^\[)|(\]$)/mg, '');

          var download = function(content, fileName, mimeType) {
            var a = document.createElement('a');
            mimeType = mimeType || 'application/octet-stream';
          
            if (navigator.msSaveBlob) {
              navigator.msSaveBlob(new Blob([content], {
                type: mimeType
              }), fileName);
            } else if (URL && 'download' in a) {
              a.href = URL.createObjectURL(new Blob([content], {
                type: mimeType
              }));
              a.setAttribute('download', fileName);
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
            } else {
              window.location.href = 'data:application/octet-stream,' + encodeURIComponent(content); // only this mime type is supported
            }
          }
          
          download(csvContent, 'dowload.csv', 'text/csv;encoding:utf-8');
          
    }

  
        return(
            <div>
              
                <div><ButtonStyle onClick={Upload}>Upload To Google Spread Sheet</ButtonStyle></div>
                <TableStyle>
                    <tbody>
                       <tr><td>Id</td>
                        <td>WorkItem</td>
                        <td>Due Date</td>
                        <td>No. Resources Needed</td>
                        <td>Actions</td>
                        </tr>
                        {AddItemReducerDisplay.map(data => (
                        <tr key={data.id}>
                             <td>{data.id}</td>
                             <td>{data.item}</td>
                             <td>{data.date}</td>
                             <td>{data.resources}</td>
                             <td><DeleteOutlineStyle onClick={() => {
                             onClickDeleteHire(this,data.id)
                             }}>
                             </DeleteOutlineStyle>
                             {/* <EditIconStyle /> */}
                             </td>
                            </tr>
                    ))}
                    </tbody>
                </TableStyle>
            </div>
        )  
}
export default Home