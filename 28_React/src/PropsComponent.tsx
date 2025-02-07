import React from "react";

export interface Person {
  name: string;
  age: number;
  city?: string; // Optional property
}

interface ParentComponentProps {
  person: Person;
}

const PropsComponent: React.FC<Person> = (props: Person): JSX.Element => {
  // console.log("props_1:", props);

  return (
    <React.Fragment>
      <div>
        <div>Name: {props.name}</div>
        <div>Age: {props.age}</div>
        {props.city && <div>City: {props.city}</div>}
      </div>
    </React.Fragment>
  );
};

const ParentComponent: React.FC<ParentComponentProps> = (props: ParentComponentProps): JSX.Element => {
  // console.log("props_2:", props);

  return <PropsComponent {...props.person} />;
};

export default ParentComponent;
