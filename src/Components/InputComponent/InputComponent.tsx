import React, {useEffect, useState} from 'react';
import classes from './InputComponent.module.css'

type PropsType = {
  userName: string
  setUserName: (userName: string) => void
}

const InputComponent:React.FC <PropsType> = ({
  userName,
  setUserName
}) => {

  const [inputValue, setInputValue]=useState<string>(userName)

  useEffect(()=>{
    setInputValue(userName)
  },[userName])

  const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const onClickButtonFind = () => {
    if (!!inputValue) {
      setUserName(inputValue)
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