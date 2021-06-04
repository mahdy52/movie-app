import React from 'react';
import {Button,Modal,Form} from 'react-bootstrap';
import axios from 'axios';
import {useState,useEffect} from 'react';



const ModalEdit = ({el}) => {

  //   const [articleId, setArticleId] = useState(0);
  //   useEffect(() => {
   
  //    const article = {
  //      title:"",
  //      year:"",
  //      description:""
  //  }
       
  //    axios.post('http://localhost:3000/posts/', article)
  //        .then(response => setArticleId(response.data.id));
   
   
  //  }, []);            

  const[input2,setInput2]=useState(
    {title :el.title,
      year:el.year,
      description:el.description,
      imageUrl :el.imageUrl

   }
  )
 const handleChanget=(e)=>{
const {name,value}= e.target;
setInput2(
{  ...input2,
  [name]:value
});
console.log(input2 ,' input2eeeeeeeee');

 }



 const updatRow=(id)=> {

  axios.put(`http://localhost:3008/posts/${id}`,input2)
  .then(response => {
    setInput2( response.data);})
    .then(response=> window.location.reload())
}


console.log('updaaaaaate', input2)
/**************************function modal  */

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

  return(
    <div>
       

       <>
       <i onClick={handleShow} className="far fa-edit edit"></i>



<Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Vous pouvez éditer ce film</Modal.Title>
  </Modal.Header>
  <Modal.Body>
{/* */}
<div>

<Form   className="">

<Form.Group controlId="formGroupPassword">
{/* <Form.Label>Titre de votre film</Form.Label> */}
<Form.Control   onChange={handleChanget} defaultValue={el.title} name="title"  type="text" placeholder="Modifier le titre de votre film" />
</Form.Group>


<Form.Group controlId="formGroupEmail">
{/* <Form.Label>Langue de votre film</Form.Label> */}
<Form.Control   onChange={handleChanget} defaultValue={el.year} name="year" type="text" placeholder="Modifier la langue de votre film" />
</Form.Group>


<Form.Group controlId="formGroupPassword">
{/* <Form.Label>Acteur  de votre film</Form.Label> */}
<Form.Control    onChange={handleChanget}  name="description" defaultValue={el.description} type="text" placeholder="Modifier le nom de votre acteur de film" />
</Form.Group>

<Form.Group controlId="formGroupPassword">
{/* <Form.Label>Image</Form.Label> */}
<Form.Control   onChange={handleChanget}  name="imageUrl" defaultValue={el.imageUrl}  type="text" placeholder="Modifier l'URL de l'image" />
</Form.Group>
<Button   onClick={() =>{updatRow(el.id)}}  > Valider</Button>
</Form>


</div>
{/* * */}
  </Modal.Body>
  {/* <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>

Fermer
    </Button>
    <Button variant="primary"    onClick={ () =>{ updatRow(el.id);handleClose()}}>
    Modifier
    </Button>
  </Modal.Footer>*/}
</Modal> 
</>






    </div>
   )

 }

export default  ModalEdit;