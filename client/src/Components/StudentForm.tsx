import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, VStack, Input, Textarea, Switch, ModalFooter, Button, Text, useToast } from '@chakra-ui/react'
import { Student } from './DirectoryTable';
import { useState } from 'react';
import { BASE_URL } from '../constant';
import axios from 'axios';

interface StudentFormProps {
  isOpen: boolean;
  onClose: () => void;
  fetchStudent: () => void;
  currentData?: Student;
}

// 
const StudentForm = ({
  isOpen,
  onClose,
  fetchStudent,
  currentData,
}: StudentFormProps) => {
  const toast = useToast();
  const [student, setStudent] = useState({
    id: currentData?.id || 0,
    name: currentData?.name || "",
    address: currentData?.address || "",
    phoneNumber: currentData?.phoneNumber || "",
    email: currentData?.email || "",
  });
  const onSave = () => {
    if (currentData?.id) {
      editStudent()
    } else {
      addStudent()
    }

  };

  const editStudent = () => {
    axios
      .put(BASE_URL + "Students/" + currentData?.id, student)
      .then(() => {
        onClose();
        fetchStudent();
        toast({
          title: "Product Updated.",
          description: "Student Updated Successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addStudent = () => {
    axios
      .post(BASE_URL + "Students", student)
      .then((response) => {
        onClose();
        fetchStudent();
        toast({
          title: "Student Added.",
          description: "Student Added Successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(student);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack gap={3} alignItems={"self-start"}>
              <Input
                type="text"
                placeholder="Name"
                value={student.name}
                onChange={(e) =>
                  setStudent({ ...student, name: e.target.value })
                }
              />
              <Textarea
                placeholder="Address"
                value={student.address}
                onChange={(e) =>
                  setStudent({ ...student, address: e.target.value })
                }
              />
              <Textarea
                placeholder="Phone Number"
                value={student.phoneNumber}
                onChange={(e) =>
                  setStudent({ ...student, phoneNumber: e.target.value })
                }
              />
              <Textarea
                placeholder="Email"
                value={student.email}
                onChange={(e) =>
                  setStudent({ ...student, email: e.target.value })
                }
              />


            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={onSave} colorScheme="teal">
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default StudentForm