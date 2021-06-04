// import React, {useState,useEffect}from 'react'
// import axios from 'axios';


//       function Moviest() {
        
              
//             const [input1, setInput1]=useState(
//                {
//                          title:"",
//                          year:"",
//                          genre:""
//                      }
//                  );


//              const handleChange = e => { 
//              const {name, value}=e.target
//                   e.target.name=e.target.value 
//                  setInput1({
//                      ...input1,
//                      [name]:value
//                  });
//                  };

//              const handlesubmit=(e)=>{

//               e.preventDefault();
//               axios.post(`http://localhost:3000/posts/`, input1).then((res) => {
//               console.log(res)
//               }); 

//              const handleremove = (e) => {
//                   e.preventDefault();
//                   axios.delete(http://localhost:3004/posts/, input1).then((res) => {
//                     console.log(res)
//                   });
//              }
//             }


            

//     return 
//             //()
//             // <div>
//             //     <form onSubmit={handlesubmit} >
//             //     <input value={input1.title} onChange={handleChange} type='text' name='title' placeholder='enter movie name' /> <br/>
//             //     <input value={input1.year}  onChange={handleChange} type='text' name='year' placeholder='enter year release' /><br/>
//             //     <input value={input1.genre}  onChange={handleChange} type='text' name='genre' placeholder='enter genre movie' /><br/>

//             //     <button type="submit" >Submit</button>
//             //     {/* <button type="remove" form="form1" value="Remove" onClick={handleremove}>Delete</button> */}
//             //      </form>
//             //  </div>
//             //   )
//              }

// export default Moviest;
       
    