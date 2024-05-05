//* https://medium.com/how-to-react/how-to-use-jquery-in-your-react-app-b425727a32fd
//* https://www.freecodecamp.org/news/ajax-tutorial

import React from "react";
import $ from "jquery";

const AjaxComponent = (): JSX.Element => {
  const [myIP, setMyIP] = React.useState<string>("");

  React.useEffect(() => {
    (async function getMyIP() {
      const xhr = new XMLHttpRequest();

      xhr.open("GET", "https://api.ipify.org/?format=json", true);
      // console.log("xhr:", xhr);

      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.readyState === 4) {
          // console.log("xhr.responseText:", xhr.responseText);
          // console.log("xhr:", xhr);
          const myIp = JSON.parse(xhr.responseText)?.ip;
          // console.log({ myIp });
          setMyIP(myIp);
        } else {
          console.error("Request failed with status:", xhr.status);
        }
      };

      xhr.onerror = function () {
        console.error("Request failed");
      };
      xhr.send();
    })();
  }, []);

  return (
    <React.Fragment>
      <div>{myIP ? `My IP is: ${myIP}` : null}</div>
    </React.Fragment>
  );
};

class ReactJQuery extends React.Component {
  jQueryCode = (): void => {
    $(".button-red").click(function () {
      $("p").css("color", "red");
    });
    $(".button-black").click(function () {
      $("p").css("color", "black");
    });
  };

  componentDidMount() {
    this.jQueryCode();
  }

  render() {
    return (
      <React.Fragment>
        <br />
        <AjaxComponent />
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsa maxime fuga consequuntur distinctio
          temporibus!
        </p>
        <button className="button-red ui-button ui-widget ui-corner-all">Click here for red color</button>
        <button className="button-black ui-button ui-widget ui-corner-all">Click here for black color</button>
      </React.Fragment>
    );
  }
}

export default ReactJQuery;
