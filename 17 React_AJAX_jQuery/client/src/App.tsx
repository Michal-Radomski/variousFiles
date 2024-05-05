import React from "react";
import $ from "jquery";

import "./App.scss";
import TableComponent from "./TableComponent";
import ReactJQuery from "./ReactJQuery";

const App = (): JSX.Element => {
  const URL: string = "https://jsonplaceholder.typicode.com/todos";

  const [tableData, setTableData] = React.useState<ToDo[] | null>(null);

  React.useEffect(() => {
    // Fetch data using jQuery AJAX when the component mounts
    $.ajax({
      url: URL,
      method: "GET",
      success: function (response) {
        // Update the state with the fetched data
        // console.log("response:", response);
        setTableData(response);
      },
      error: function (error) {
        console.error("Error fetching data:", error);
      },
    });
  }, []); // Empty dependency array to run effect only once

  return (
    <React.Fragment>
      <div className="container-fluid">
        <ReactJQuery />
        <br />
        <br />

        <div className="d-flex align-items-center justify-content-center">
          {tableData ? <TableComponent tableData={tableData} /> : null}
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
