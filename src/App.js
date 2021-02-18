
import React ,{useState ,useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Users from './components/users/users';
import Backdrop from './components/backdrop/backdrop';
import Modal from './components/modal/modal';
import Spinner from './components/spinner/spinner';
import {Block,ModalDiv,CancelBtn,UserBlock} from './components/styledcomponents/styledcomponents';
const App = () => {
  const [backDrop,setBackDrop] = useState(false);
  const [modal,setModal] = useState(false);
  const [activePeriod,setActivePeriod] = useState(null);
  const [members, setMembers] = useState([]);


  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://useractiveperiod-default-rtdb.firebaseio.com/members.json'
    })
    .then((response)=>{
      // console.log(response)
      let members = Object.values(response.data)
      setTimeout(()=>{setMembers(members);},1000)
      // console.log(members);
    })
    .catch((error)=>{
      console.log(error)
    })    
  },[])
  const getUniqueId = () => Math.floor(Math.random()* 999999);
  
  const getUserData = (index) => {
     let newState = {...members};
     setActivePeriod(newState[index].activity_periods)
     setBackDrop(true)
     setModal(true)
  }
  const closePopUp = () =>{
    setBackDrop(false)
     setModal(false)
  }
  
  let users = members.map((usr, idx) => (
    <Users
      key={getUniqueId()}
      user={usr.real_name}
      clicked={() => getUserData(idx)}
    />
  ));
  if(members.length === 0){
    users = (<Spinner />);
  }
  let activityPeriods;
  if (activePeriod !== null) {
    activityPeriods = activePeriod.map((time,idx) => (
      <Modal
        key={getUniqueId()}
        indexVal={idx+1}
        startTime={time.start_time}
        endTime={time.end_time}
      />
    ));
  }
  return (
    <>
      <Backdrop show={backDrop} clicked={closePopUp} />
      <Block>
        <UserBlock>{users}</UserBlock>
        {modal ? (
          <ModalDiv>
            <CancelBtn onClick={closePopUp}>+</CancelBtn>
            {activityPeriods}
          </ModalDiv>
        ) : null}
      </Block>
    </>
  );
}

export default App;
