import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "react-bootstrap";

function Input(props: { placeholder: string, type: string, rows: number }) {
    return null;
}

const CreateFile = () => {

    return (
       <div>
           <Modal>
               <ModalHeader>Modal title</ModalHeader>
               <ModalBody>
                   <Input
                       type="textarea"
                       placeholder="Write something (data should remain in modal if unmountOnClose is set to false)"
                       rows={5}
                   />
               </ModalBody>
               <ModalFooter>
                   <Button color="primary">
                       Do Something
                   </Button>{' '}
                   <Button color="secondary">
                       Cancel
                   </Button>
               </ModalFooter>
           </Modal>
       </div>
    );

}
export default CreateFile;
