//* https://medium.com/how-to-react/how-to-use-jquery-in-your-react-app-b425727a32fd

import React from "react";
import $ from "jquery";

const AjaxComponent = (): JSX.Element => {
  return (
    <React.Fragment>
      <div />
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
        <button className="button-red">Click here for red color</button>
        <button className="button-black">Click here for black color</button>
      </React.Fragment>
    );
  }
}

export default ReactJQuery;
