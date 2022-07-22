import React from "react";
import Todobox from './Todobox.css'
import { Button } from "react-bootstrap";

function Todo() {
  const [putData, getData] = React.useState("");
  const [items, getItems] = React.useState([]);
  const [toggle,setToggle]=React.useState(true);
  const[edit,setEdit]=React.useState("");

  // const dataInfo = (details) => {
  // return getData(details.target.value);
  // };
  const listData = () => {
    if (!putData) {

    }else if(putData && !toggle ){
      getItems(
        items.map((element)=>{
          if(element.id === edit){
            return {...element,name:putData}
          }
          return element;
        
        })
      )
      setToggle(true);
      getData("")
      setEdit(null)
    } else {
      const allData={id:new Date().getTime().toString(),name:putData}
      getItems([...items, allData]);
      };
      getData("");
  };


  const onRemove = (index) => {
      const prevData = items.filter((element) => {
        return index !== element.id;
      });
      getItems(prevData);
  };


  const removeAll=()=>{
    getItems([]);
    getData("");
  }



const editData=(id)=>{

  let editItem = items.find((element)=> {
    return element.id===id
  });
setToggle(false);
getData(editItem.name)
setEdit(id)
}

  return (
    
    <div className="main_div">
      <div className="main_box">
        <h1 id="heading">To-Do List</h1>
        <div className="inputBox">

          <div>
            <input
              className="data"
              type={"text"}
              value={putData}
              placeholder="Enter your plans here"
              onChange={(detail) => getData(detail.target.value)}
            ></input>
            
          </div>
          {
            toggle?<div className="button">
            <Button className="button" onClick={listData}>
              Add
            </Button>
          </div>:<Button id="edit" onClick={listData}>Edit</Button>

          }
          
          {/* <Button className="button" onClick={listData}>
              Add
            </Button> */}
        </div>
        
        <div>
          <ul className="alldata">
            {items.map((element) => {
              return (
                <div className="remove" key={element.id}>
                  
                 <li>{element.name}</li>
                 <div className="delete">
                    <Button id="edit" onClick={()=>editData(element.id)}>Edit</Button>
                  <button type="button" id="removebutton"  className="btn btn-danger" onClick={()=>{onRemove(element.id)}} > Remove </button> 
                  </div>
                 </div>
              );
            })}
          </ul>
          </div>
          {
        items==""?null:<Button id="allRemove" onClick={removeAll}>Remove All</Button>
        }

        </div>
    
      </div> 

       );
  }

export default Todo;

