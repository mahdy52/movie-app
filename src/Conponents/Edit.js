import React from 'react'
import {Card,Button} from 'react-bootstrap';



const Modal = () => {

    const [articleId, setArticleId] = useState(0);
    useEffect(() => {
   
     const article = {
       title:"",
       year:"",
       description:""
   }
       
     axios.post('http://localhost:3000/posts/', article)
         .then(response => setArticleId(response.data.id));
   
   
   }, []);            




    <div>
        <Modal.Dialog>
        <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>


        <Modal.Body>
        <p>Modal body text goes here.</p>
        
        </Modal.Body>

        <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save changes</Button>
        </Modal.Footer>
        </Modal.Dialog>
</div>




  return(
    <div>
        <Button className="button"   onClick={() =>  (el.id)} value="Remove" >Edite</Button>








    </div>
   )

 }

export default Modal;