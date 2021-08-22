import React, {useEffect, useState} from 'react';
import classes from './ListComponent.module.css'
import axios from "axios";

type ServerUserType = {
  id: number,
  login: string,
}

type ServerResponseType = {
  items: Array<ServerUserType>
}

type PropsType = {
  findUserName: string,
  selectedUser: string | null,
  onChangeUser: (userName: string | null)=>void,
}

const ListComponent: React.FC <PropsType> = ({
  findUserName,
  selectedUser,
  onChangeUser,
}) => {

  const [users, setUsers] = useState<Array<string>>([])

  useEffect(()=>{
    if (findUserName) {
      axios
        .get<ServerResponseType>(`https://api.github.com/search/users?q=${findUserName}`)
        .then(res=>{
          console.log(res.data.items)
          setUsers(res.data.items.map(curUser=>curUser.login))
        })
    }

  },[findUserName])

  const onClickSetSelectUser = (curUser: string) => {
    if (curUser === selectedUser) {
      onChangeUser(null)
    } else {
      onChangeUser(curUser)
    }
  }

  return (
    <ul className={classes.container}>
      {
        users.map((curUser, ind) => {
          return(
            <li
              key={ind}
              onClick={()=>{
                onClickSetSelectUser(curUser)
              }}
            >
              <div className={selectedUser === curUser? classes.selectedUser : classes.user}>
                {curUser}
              </div>
            </li>
          )
        })
      }

    </ul>
  );
};

export default ListComponent;