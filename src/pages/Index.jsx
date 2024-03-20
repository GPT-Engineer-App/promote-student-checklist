import React, { useState } from "react";
import { Box, Heading, VStack, Checkbox, Button, useToast } from "@chakra-ui/react";

const Index = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", pass: true },
    { id: 2, name: "Jane Smith", pass: true },
    { id: 3, name: "Mike Johnson", pass: false },
    { id: 4, name: "Emily Brown", pass: true },
  ]);

  const toast = useToast();

  const handleCheckboxChange = (id) => {
    const updatedStudents = students.map((student) => {
      if (student.id === id) {
        return { ...student, pass: !student.pass };
      }
      return student;
    });
    setStudents(updatedStudents);
  };

  const handleSubmit = () => {
    // Perform submission logic here (e.g., send data to server)
    console.log("Submitted:", students);
    toast({
      title: "Promotion submitted",
      description: "Student promotion data has been submitted successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box maxWidth="400px" margin="auto" mt={8}>
      <Heading mb={4}>Student Promotion</Heading>
      <VStack align="stretch" spacing={4}>
        {students.map((student) => (
          <Checkbox key={student.id} isChecked={student.pass} onChange={() => handleCheckboxChange(student.id)}>
            {student.name}
          </Checkbox>
        ))}
        <Button colorScheme="blue" onClick={handleSubmit}>
          Submit
        </Button>
      </VStack>
    </Box>
  );
};

export default Index;
