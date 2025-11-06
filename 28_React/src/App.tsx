import React from "react";
import {
  ReactDOMServerReadableStream,
  renderToReadableStream,
  renderToStaticMarkup,
  renderToString,
} from "react-dom/server";

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
import SearchComponent from "./SearchComponent";
import RefsForm from "./RefsForm";
import SignalCounterWrapper from "./SignalCounter";
import UserContextProfile from "./context/UserContextProfile";
import CanvasSvgWrapper from "./canvas_svg/CanvasSvgWrapper";
import RefsWrapper from "./refs/RefsWrapper";
import StylesWrapper from "./styles/StylesWrapper";
import ParallelRouting from "./ParallelRouting";
import FormDataComponent from "./FormDataComponent";
import WithComponent from "./WithComponent";
import RevalidateIndex from "./revalidate/RevalidateIndex";
import TableWrapper from "./table/TableWrapper";
import WrapperComponent from "./toolkitQuery/WrapperComponent";
import ReduxToolkitWrapper from "./reduxToolkit/ReduxToolkitWrapper";
import PortalModalWrapper from "./portal/PortalModalWrapper";
import HooksWrapper from "./hooks/HooksWrapper";
import ReactHookForm from "./ReactHookForm";
import PaginationWrapper from "./pagination/PaginationWrapper";
import ClipPathCard from "./ClipPathCard";
import MapOlComponent from "./MapOlComponent";
import CustomIntrinsicProp from "./CustomIntrinsicProp";
import ParentComponent, { Person } from "./PropsComponent";
import AddEventListener from "./AddEventListener";
import PolymorphicComponent from "./PolymorphicComponent";
import EventMethods from "./EventMethods";
import ApisWrapper from "./apis/ApisWrapper";
import PatternsWrapper from "./patterns/PatternsWrapper";
import ForwardRef2 from "./ForwardRef2";
import ObserverRxJs from "./observable/ObserverRxJs";
import D3Three from "./charts/D3_Three";
// import D3Three2 from "./charts/D3_Three2";
import Syncfusion3D from "./charts/Syncfusion3D";
import Plotly3D from "./charts/Plotly3D";

const Test1 = (): JSX.Element => <div>Hello, this is an interactive React component!</div>;
const html1: string = renderToString(<Test1 />);
console.log("html1:", html1);

const Test2 = (): JSX.Element => <div>Hello, this is a static React component!</div>;
const html2: string = renderToStaticMarkup(<Test2 />);
console.log("html2:", html2);

(async function handleRequest2(): Promise<Response> {
  const stream: ReactDOMServerReadableStream = await renderToReadableStream(<div>Hello, Web Streams!</div>);
  console.log("stream:", stream);
  return new Response(stream, { headers: { "Content-Type": "text/html" } });
})();

const MemoizedComponent: React.MemoExoticComponent<() => React.JSX.Element> = React.memo((): JSX.Element => {
  return <div>Hello, MemoizedComponent!</div>;
});

const ReactNodeComponent = (): React.ReactNode => {
  return <div>React Node Component</div>;
};

const cssProperties: React.CSSProperties = {
  fontSize: "16px",
  fontWeight: "bold",
  backgroundColor: "lightblue",
  padding: "10px",
};

const CSSPropertiesComponent: React.FC = (): JSX.Element => {
  return <div style={cssProperties}>Hello, TypeScript! - React.CSSProperties</div>;
};

const App = (): JSX.Element => {
  const params: URLSearchParams = new URL("https://example.com/?name=Jonathan%20Smith&age=18").searchParams;
  const name = params.get("name") as string;
  const age = parseInt(params.get("age") as string) as number;

  console.log(`name: ${name}`); // name: Jonathan Smith
  console.log(`age: ${age}`); // age: 18

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

  //*This version runs the effect after every render of the component.
  // React.useEffect(() => {});
  //* Here, the empty array [] signifies that the effect should only run once—when the component mounts.
  // React.useEffect(() => {},[]);

  const ParagraphComponent: JSX.Element = <p>Paragraph Component</p>;

  const person: Person = {
    name: "MR",
    age: 100,
    city: "Gdańsk",
  };

  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center" }}>New Exercises</h1>

      <Plotly3D />
      <Syncfusion3D />
      <D3Three />
      {/* <D3Three2 /> */}
      <br />
      <hr />

      <ObserverRxJs />
      <br />
      <hr />

      <MemoizedComponent />
      <CSSPropertiesComponent />
      <br />
      <hr />

      <ForwardRef2 />
      <br />
      <hr />

      <PatternsWrapper />
      <br />
      <hr />

      <ApisWrapper />
      <br />
      <hr />

      <EventMethods />
      <br />
      <hr />

      <PolymorphicComponent />
      <br />
      <hr />

      <AddEventListener />
      <br />
      <hr />

      <ParentComponent person={person} />
      <br />
      <hr />

      <CustomIntrinsicProp />
      <br />
      <hr />

      <MapOlComponent />
      <br />
      <hr />

      <ClipPathCard />
      <br />
      <hr />

      <PaginationWrapper />
      <br />
      <hr />

      <ReactHookForm />
      <br />
      <hr />

      <HooksWrapper />
      <br />
      <hr />

      <PortalModalWrapper />
      <br />
      <hr />

      <ReduxToolkitWrapper />
      <br />
      <hr />

      <WrapperComponent />
      <br />
      <hr />

      <TableWrapper />
      <br />
      <hr />

      <RevalidateIndex />
      <br />
      <hr />

      <WithComponent />
      <br />
      <hr />

      <FormDataComponent />
      <br />
      <hr />

      <ParallelRouting />
      <br />
      <hr />

      <StylesWrapper />
      <br />
      <hr />

      <RefsWrapper />
      <br />
      <hr />

      <CanvasSvgWrapper />
      <br />
      <hr />

      <SearchComponent />
      <br />
      <hr />

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

      <RefsForm />
      <br />
      <hr />

      <SignalCounterWrapper />
      <br />
      <hr />

      <UserContextProfile />
      <br />
      <hr />

      {ParagraphComponent}
    </React.Fragment>
  );
};

export default App;

// Get a random number between 0 and 10 (exclusive), then floor it to get an integer
const randomNum: number = Math.floor(Math.random() * 10);
console.log({ randomNum }); //* Insecure!

// Create typed array with one 32-bit unsigned integer
const array = new Uint32Array(1);
// Fill the array with secure random values
window.crypto.getRandomValues(array);
// Secure random integer
const secureRandomInt: number = array[0];
console.log({ secureRandomInt }); //* Secure

function secureRandom(): number {
  const array = new Uint32Array(1);
  window.crypto.getRandomValues(array);
  return array[0] / (0xffffffff + 1);
}
console.log("secureRandom():", secureRandom());
