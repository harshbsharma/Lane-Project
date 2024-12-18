import './App.css'
import { useEffect, useState } from 'react'
import { getUsersApi } from './api/user';
import { TableComponent } from './components/Table/TableComponent';
import { userColumns } from './lib/columns/userColumn';
import { User } from './lib/models';

function App() {

  const [loading, setLoading] = useState(true);
  const [userData,setUserData]  = useState<User[]>([]);

  const loadData = async()=> {
    try{
      const data = await getUsersApi();
      console.log("getting data");
      setUserData(data);
      setLoading(false);
    }
    catch(err)
    {
      console.log(err)
    }
  }

  useEffect(()=>{
    loadData();
  },[])

  return (
    <>
     {!loading &&
      <div>
       <TableComponent columns={userColumns} data={userData} />
      </div>
     }
    </>
  )
}

export default App
