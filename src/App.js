import React, { useContext } from "react";
import "./styles.css";
import image from "./img/dp.JPG";

const DataContext = React.createContext();

const SideBar = () => {
  return (
    <>
      <List />
    </>
  );
};

const Content = () => {
  return (
    <>
      <Header />
      <Block />
    </>
  );
};

const List = () => {
  const {
    sidebar: { title, topics }
  } = useContext(DataContext);

  return (
    <>
      <h3>{title}</h3>
      {topics.map((item, index) => (
        <ListItem item={item} key={index} />
      ))}
    </>
  );
};

const ListItem = ({ item }) => {
  return (
    <div>
      Name: {item.name} <br /> Rate: {item.rating}
    </div>
  );
};

const Header = () => {
  const {
    content: { header }
  } = useContext(DataContext);
  return <h3>{header}</h3>;
};

const Block = () => {
  const {
    content: { block }
  } = useContext(DataContext);
  return (
    <>
      <Text text={block} />
    </>
  );
};

const Text = ({ text }) => {
  return <div>{text}</div>;
};

export default function App() {
  const data = {
    sidebar: {
      title: "I am a title",
      topics: [
        { name: "One", rating: 5 },
        { name: "Two", rating: 2 },
        { name: "Three", rating: 1 }
      ]
    },
    content: {
      header: "I am a header",
      block: "I am a Block Text"
    }
  };

  return (
    <div className="App">
      <h1>Provider Pattern - Demo</h1>
      <h2>
        Instead of prop drilling, Provider pattern helps us the create a
        application level global data state which can be easily manageable
      </h2>
      <img src={image} alt="application architecture" />

      <hr />

      <DataContext.Provider value={data}>
        <SideBar />
        <Content />
      </DataContext.Provider>
    </div>
  );
}
