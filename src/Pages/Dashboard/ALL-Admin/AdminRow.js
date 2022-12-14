import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axiosPrivate from '../../Api/axiosPrivate';

const AdminRow = ({admin,index,refetch}) => {
    const {role,email,_id} = admin
    const removeAdmin = () => {
        axiosPrivate.patch(`/remove-admin/${email}`)
        .then(response => {
            if (response.data.modifiedCount > 0) {
                Swal.fire({
                  icon: "success",
                  title: "remove admin success",
                  showConfirmButton: false,
                  timer: 1500,
                });
                refetch();
              }
        }).catch( err => {
            if (err.response.status === 403) {
              Swal.fire({
                icon: "error",
                title: "failed to remove admin",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
    }

    const navigate = useNavigate()
   
    return (
        <tr>
        <th>{index +1}</th>
        <td>{email}</td>
        <td className='uppercase font-bold text-primary'>{role}</td>
        <td>
            <button onClick={removeAdmin} className='btn btn-xs bg-white text-gray-600 hover:bg-white'>remove admin</button>
        </td>
       </tr>
    );
};

export default AdminRow;