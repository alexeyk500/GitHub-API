import React, {useEffect, useState} from 'react';
import classes from './App.module.css'
import InputComponent from "./InputComponent/InputComponent";
import ListComponent from "./ListComponent/ListComponent";
import UserDetailComponent from "./UserDetailComponent/UserDetailComponent";

const DEFAULT_USER_NAME = 'alexeyk500'

function App() {

  const [findUserName, setFindUserName] = useState<string>(DEFAULT_USER_NAME)
  const [userNameForDetail, setUserNameForDetail] = useState<string | null>(null)

  useEffect(()=>{
    document.title = findUserName
  }, [findUserName])

  useEffect(()=>{
    if (userNameForDetail) {
      document.title = userNameForDetail
    }
  }, [userNameForDetail])

  return (
    <div className={classes.container}>
      <div className={classes.rightPart}>
        <InputComponent
          findUserName={findUserName}
          setFindUserName={setFindUserName}
        />
        <ListComponent
          findUserName= {findUserName}
          selectedUser = {userNameForDetail}
          onChangeUser={setUserNameForDetail}
        />
      </div>
      <div className={classes.leftPart}>
        <UserDetailComponent
          selectedUser = {userNameForDetail}
        />
      </div>
    </div>
  );
}

export default App;
