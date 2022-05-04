import React from "react";

const Person = (props) => {
  // Methods - Returns Person Age based on DOB.
  const getAge = (dob) => {
    var today = new Date();
    var birthDate = new Date(dob);
    var age = today.getFullYear() - birthDate.getFullYear();
    return age; //Return age
  };

  // Methods -  Returns Person Category based on DOB.
  const getAgeCategory = (age) => {
    if (age >= 0 && age <= 12) {
      return "Young";
    } else if (age >= 13 && age <= 19) {
      return "Teen";
    } else if (age >= 20 && age <= 59) {
      return "Adult";
    } else if (age >= 60) {
      return "Senior"; // Return Age Category
    }
  };

  const initials = props?.firstName[0] + props?.lastName[0]; 
  const age = getAge(props.dob); 
  const ageCategory = getAgeCategory(age); 

  return (
    <div>
      <span>
        Initials: {initials}, Age: {age} {ageCategory}
      </span>
    </div>
  );
};

export default Person;
