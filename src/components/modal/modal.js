import React from 'react';

const modal = (props) => {


    let getDate = (date)=>{
        //let date = "Feb 1 2020  1:33PM";
        let time = date.split(' ')[3]===""?date.split(' ')[4]:date.split(' ')[3];
        let month = new Date(`${date.split(" ")[0]}-${date.split(" ")[1]}-${date.split(" ")[2]}`).getMonth()+1;
        let mon = month.toString().length === 1?`0${month}`:month.toString();   
        let day = date.split(" ")[1].length === 1?`0${date.split(" ")[1]}`:date.split(" ")[1];       
        let hour = time.split(':')[0];
        let hr = hour.length === 1?`0${hour}`:hour;
        let minutes = time.split(':')[1]    
        let min = minutes.slice(0,2);
        let newDate = `${date.split(" ")[2]}-${mon}-${day}T${hr}:${min}`;
        return newDate;
    }    

  let startTime = getDate(props.startTime);
  let endTime = getDate(props.endTime);

    let changeDate = () => {
        //Date Can be change here since the requirement is only Read
    }

  let date = {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    marginBottom: ".5rem",
  };

  let title={
    textAlign: 'center',
    padding: '1rem 0',
    fontSize: '20px',
    fontWeight: 'bold',
  }

  return (
    <>
      <p style={title}>Log Timing {props.indexVal}</p>  
      <div style={date}>
        <label>Start Time</label>
        <input type="datetime-local" value={startTime} onChange={changeDate}/>
      </div>
      <div style={date}>
        <label>End Time</label>
        <input type="datetime-local" value={endTime} onChange={changeDate}/>
      </div>
    </>
  );
}

export default modal;