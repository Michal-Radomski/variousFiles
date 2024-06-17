// Render Props Example
import React from "react";

class DataProvider extends React.Component<{ render: Function }> {
  state = { data: [] as User[] };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }

  render() {
    return this.props.render(this.state.data);
  }
}

const RenderProps = (): JSX.Element => (
  <DataProvider
    render={(data: User[]) => (
      <div>
        {
          <ul>
            {data.map((item: User) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        }
      </div>
    )}
  />
);

export default RenderProps;
