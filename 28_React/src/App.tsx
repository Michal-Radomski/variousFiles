import React from "react";

import "./App.scss";
import CounterRedux from "./CounterRedux";
import CounterReactHooks from "./CounterReactHooks";
import CombineStyles from "./CombineStyles";
import WindowDimensions from "./dimensions/WindowDimensions";
import MeasureComponent from "./MeasureComponent";
import ParentPropsComponent from "./props/ParentPropsComponent";
import { DefaultProps2 } from "./props/DefaultProps";
import ForwardRef from "./ForwardRef";
import LoginForm from "./customHook/LoginForm";
import CreateElement from "./CreateElement";
import PrevState from "./PrevState";
import Form from "./Form";
import Decorator from "./Decorator";
import { decryptData, encryptData, generateKey } from "./utils/helpers";
import MemoHOC from "./MemoHOC";
import ComponentsWrapper from "./class_func_comp/ComponentsWrapper";
import DataFetcherClassComponent from "./DataFetchedClassComponent";
import MyForm from "./MyForm";
import CodeBlock from "./CodeBlock";

const ReactNodeComponent = (): React.ReactNode => {
  return <div>React Node Component</div>;
};

const App = (): JSX.Element => {
  (async () => {
    //* Web Crypto API with: Encrypting and Decrypting with AES-GCM
    const message: string = "Hello, World!"; // Message to encrypt

    const key: CryptoKey = await generateKey(); // Generate a key
    console.log({ key });

    const { ciphertext, iv } = await encryptData(key, message); // Encrypt the message
    console.log({ ciphertext, iv });

    const encrypted: Uint8Array = new Uint8Array(ciphertext);
    console.log("Encrypted:", encrypted); // Log the encrypted data

    const decryptedMessage: string = await decryptData(key, ciphertext, iv); // Decrypt the message
    console.log("Decrypted:", decryptedMessage); // Log the original message
  })();

  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center" }}>React App: useReducer/useContext vs Redux + other exercises</h1>
      <br />
      <hr />

      <CounterRedux />
      <br />
      <hr />

      <CounterReactHooks />
      <br />
      <hr />

      <CombineStyles />
      <br />
      <hr />

      <WindowDimensions />
      <br />
      <hr />

      <MeasureComponent />
      <br />
      <hr />

      <ParentPropsComponent />
      <br />
      <hr />

      <DefaultProps2 />
      {/* <DefaultProps /> */}
      <br />
      <hr />

      <ForwardRef />
      <br />
      <hr />

      <LoginForm />
      <br />
      <hr />

      <CreateElement />
      <br />
      <hr />

      <PrevState />
      <br />
      <hr />

      {ReactNodeComponent()}
      <br />
      <hr />

      <Form />
      <br />
      <hr />

      <Decorator />
      <br />
      <hr />

      <MemoHOC />
      <br />
      <hr />

      <ComponentsWrapper />
      <br />
      <hr />

      <DataFetcherClassComponent url={"https://jsonplaceholder.typicode.com/users"} />
      <br />
      <hr />

      <MyForm />
      <br />
      <hr />

      <CodeBlock />
      <br />
      <hr />
    </React.Fragment>
  );
};

export default App;
