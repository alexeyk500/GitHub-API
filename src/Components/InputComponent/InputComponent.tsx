import React, {useEffect, useState} from 'react';
import classes from './InputComponent.module.css'

type PropsType = {
  findUserName: string
  setFindUserName: (userName: string) => void
}

const InputComponent:React.FC <PropsType> = ({
  findUserName,
  setFindUserName
}) => {

  const [inputValue, setInputValue]=useState<string>(findUserName)

  useEffect(()=>{
    setInputValue(findUserName)
  },[findUserName])

  const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (inputValue && e.key === 'Enter') {
      setFindUserName(inputValue)
    }
  }

  const onClickButtonFind = () => {
    if (inputValue) {
      setFindUserName(inputValue)
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        GitHub User
      </div>

      <div className={classes.findAndButton}>
        <input
          type="text"
          className={classes.inputFind}
          value={inputValue}
          onChange={onChangeInputValue}
          onKeyDown={onKeyPress}
        />
        <button
          className={classes.buttonFind}
          onClick={onClickButtonFind}
        >
          Find
        </button>
      </div>
    </div>
  );
};

export default InputComponent;