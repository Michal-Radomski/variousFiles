import React from "react";

interface Item {
  id: number;
  name: string;
}

interface Props {
  url: string;
}

interface State {
  data: Item[] | null;
  loading: boolean;
  error: string | null;
}

class DataDisplayClass extends React.Component<Props, State> {
  constructor(props: { url: string }) {
    super(props);
    this.state = {
      data: null,
      loading: true,
      error: null,
    };
  }

  componentDidMount(): void {
    this.fetchData();
  }

  fetchData = async (): Promise<void> => {
    this.setState({ loading: true, error: null });
    try {
      const response = await fetch(this.props.url);
      if (!response.ok) throw new Error("Network response was not ok");
      const result = await response.json();
      this.setState({ data: result });
    } catch (err) {
      this.setState({ error: err instanceof Error ? err.message : "An error occurred" });
    } finally {
      this.setState({ loading: false });
    }
  };

  render(): JSX.Element {
    const { data, loading, error } = this.state;

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
      <div>
        <h3 style={{ fontWeight: "bold", textDecoration: "underline" }}>Class Component</h3>
        {data && data.map((item: Item) => <div key={item.id}>{item.name}</div>)}
      </div>
    );
  }
}

export default DataDisplayClass;
