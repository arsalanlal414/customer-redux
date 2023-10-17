import React, { useState ,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/actions/userActions';
import './customers.scss'
import { IoClose } from 'react-icons/io5'

function Customers() {

  const customers = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1)

  useEffect(() => {
    dispatch(fetchUsers(page));
  }, [dispatch]);


  console.log(customers);

  const initialCustomers = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      image: 'customer1.jpg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      image: 'customer2.jpg',
    },
    {
      id: 3,
      name: 'Jane Smith',
      email: 'jane@example.com',
      image: 'customer2.jpg',
    },
    {
      id: 4,
      name: 'Jane Smith',
      email: 'jane@example.com',
      image: 'customer2.jpg',
    },
    {
      id: 5,
      name: 'Jane Smith',
      email: 'jane@example.com',
      image: 'customer2.jpg',
    },
    {
      id: 6,
      name: 'Jane Smith',
      email: 'jane@example.com',
      image: 'customer2.jpg',
    },
  ];

  // const [customers, setCustomers] = useState(initialCustomers);
  const [addNew, setAddNew] = useState(false);
  const [deleteNow, setDeleteNow] = useState(false);

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  if(addNew == true){
    return(
      <div className="screen">
        <div className="addNew">
          <div className="cancel" onClick={()=> setAddNew(false)}>
            <IoClose style={{color:"white"}} />
          </div>
          <div className="head">
            <h2>Add New Customer</h2>
          </div>
          <div className="body">
            <form action="#">
              <input type="text"  placeholder='customer name'/>
              <input type="text" placeholder='Email'/>
              <input
                type="file"
                id="imageUpload"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
              <label htmlFor="imageUpload" style={{ cursor: 'pointer' }}>
                {selectedFile ? selectedFile.name : 'Upload Photo'}
              </label>

              <button>ADD CUSTOMER</button>
            </form>
          </div>
        </div>
      </div>
    )
  }

  if(deleteNow){
    return(
      <div className="screen">
        <div className="addNew screen-s">
          <div className="cancel" onClick={()=> setDeleteNow(false)}>
            <IoClose/>
          </div>
          <div className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="84.544" height="84.544" viewBox="0 0 84.544 84.544">
            <g id="e8dad4d260c33c98d5d7c49ac3cb712d" transform="translate(-2 -2)">
              <path id="Path_11" data-name="Path 11" d="M56.225,77.017H20.412A10.112,10.112,0,0,1,10.317,67.88L4.517,9.717A3.375,3.375,0,0,1,7.882,6H68.754a3.382,3.382,0,0,1,3.365,3.717l-5.8,58.16a10.115,10.115,0,0,1-10.095,9.141ZM11.616,12.764l5.431,54.443a3.375,3.375,0,0,0,3.365,3.047H56.225a3.375,3.375,0,0,0,3.365-3.047l5.431-54.443Z" transform="translate(5.954 9.527)" fill="#d80000"/>
              <path id="Path_12" data-name="Path 12" d="M83.163,12.764H5.382A3.382,3.382,0,0,1,5.382,6H83.163a3.382,3.382,0,0,1,0,6.764ZM44.272,63.49a3.382,3.382,0,0,1-3.382-3.382v-37.2a3.382,3.382,0,1,1,6.764,0v37.2A3.382,3.382,0,0,1,44.272,63.49Zm-11.84,0a3.382,3.382,0,0,1-3.365-3.077l-3.382-37.2a3.382,3.382,0,1,1,6.737-.609L35.8,59.8a3.382,3.382,0,0,1-3.372,3.686Zm23.679,0A3.382,3.382,0,0,1,52.74,59.8l3.382-37.2a3.382,3.382,0,1,1,6.736.609l-3.382,37.2A3.382,3.382,0,0,1,56.112,63.49Z" transform="translate(0 9.527)" fill="#d80000"/>
              <path id="Path_13" data-name="Path 13" d="M42.818,22.291H12.382A3.382,3.382,0,0,1,9,18.909V5.382A3.382,3.382,0,0,1,12.382,2H42.818A3.382,3.382,0,0,1,46.2,5.382V18.909A3.382,3.382,0,0,1,42.818,22.291ZM15.764,15.527H39.436V8.764H15.764Z" transform="translate(16.672 0)" fill="#d80000"/>
            </g>
          </svg>
          </div>
          <h3>Are YOu Sure</h3>
          <p>Do you really want to delete this customer? This process can not be undone.</p>

          <div className="action-btn">
            <button>Cancel</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    )
  }



  return (
    <div className='customers'>
      <div className="new-customers" onClick={()=>setAddNew(true)}>
        <span>+</span>
        <span>Add New Customers</span>
      </div>
      <div className='customers-list'>
        <table>
          <thead>
            <tr  className='table-row'>
              <th></th>
              <th>Customer ID</th>
              <th>Customer Name</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className='table-row'>
                <td>
                  <img src={customer.avatar} alt={`Profile of ${customer.name}`} width="100" height="100" />
                </td>
                <td>{customer.id}</td>
                <td  style={{color: '#57BC90', textDecoration:"underline"}}>{customer.first_name} {customer.last_name}</td>
                <td>{customer.email}</td>
                <td className='action-btn'>
                  <button onClick={() => handleEditCustomer(customer.id)}>Edit</button>
                  <button onClick={() =>{ setDeleteNow(true)}}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Customers