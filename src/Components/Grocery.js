import './Grocery.css'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

function Grocery(props) {
    const handleComplete=(index)=>{
        const updatedList = props.groceryList.map((item,ind)=>
            ind === index ? {...item, completed: !item.completed} : item
        );
        props.setGroceryList(updatedList);
    };

    const deleteItem = (index) =>{
        const updatedList = props.groceryList.filter((item,ind)=> ind !== index)
        props.setGroceryList(updatedList);
    }

    const notify = (msg) => toast.success(msg, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce,
        });

  return (
    <div className='GroceryDiv'>
       <div className="grocery-container">
       <span style={{fontSize:"25px", fontWeight:"500"}}>Grocery Bud</span>
        <div className='input-div'>
            <input type="text" id='inputName'/>
            <button onClick={()=> {
                                        const inputName = document.querySelector('#inputName');
                                        if(inputName.value.trim() !== ""){
                                            props.setGroceryList([...props.groceryList, { name: inputName.value, completed: false }]);
                                            inputName.value = "";
                                            notify("Item Added To The List");
                                        }
                                    }}>Add Item</button>
        </div>
        <div className='grocery'>
            {props.groceryList.map((data,ind) => (
                <div className='mapDiv'>
                    <div className='checkDiv'>
                        <input type="checkbox" name="" id="checkCO" onChange={()=>{handleComplete(ind)}} />
                        <p>{data.completed ? <s>{data.name}</s> : data.name}</p>
                    </div>
                    <div>
                        <p style={{padding:"5px 10px", backgroundColor:"black", borderRadius:"5px", color:"white", cursor:"pointer"}} onClick={()=>{deleteItem(ind);
                            notify("Item Deleted");
                        }}>Delete</p>
                    </div>
                </div>
            ))}
        </div>
       </div>
       <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            // transition={Bounce}
/>
    </div>
  )
}

export default Grocery