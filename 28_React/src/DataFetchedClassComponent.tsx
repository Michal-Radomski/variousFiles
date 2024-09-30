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

class DataFetcherClassComponent extends React.Component<Props, State> {
  private intervalId: NodeJS.Timeout | null = null;

  constructor(props: Props) {
    super(props);
    this.state = {
      data: null,
      loading: true,
      error: null,
    };
  }

  componentDidMount(): void {
    console.log("Component mounted");
    this.fetchData();

    // Set up an interval to fetch data every 5 seconds
    this.intervalId = setInterval(this.fetchData, 5000);
  }

  componentDidUpdate(_prevProps: Props, prevState: State): void {
    // Example condition to check if loading state has changed
    if (this.state.loading !== prevState.loading) {
      console.log("Loading state changed:", this.state.loading);
    }
  }

  componentWillUnmount(): void {
    console.log("Component will unmount");
    // Clean up the interval
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  fetchData = async (): Promise<void> => {
    this.setState({ loading: true, error: null });

    try {
      const response = await fetch(this.props.url);
      if (!response.ok) throw new Error("Network response was not ok");
      const result: Item[] = await response.json();
      this.setState({ data: result });
    } catch (error) {
      this.setState({ error: error instanceof Error ? error.message : "An error occurred" });
    } finally {
      this.setState({ loading: false });
    }
  };

  render(): JSX.Element {
    const { data, loading, error } = this.state;

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
      <React.Fragment>
        <div>
          <h3 style={{ fontWeight: "bold", textDecoration: "underline" }}>Class Component - Lifecycle</h3>
          {data && data.map((item: Item) => <div key={item.id}>{item.name}</div>)}
        </div>
      </React.Fragment>
    );
  }
}

export default DataFetcherClassComponent;
