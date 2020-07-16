import Navigation from "./navigation";

const LayoutBlog = (props) => {
  return (
    <div>
      <Navigation />
      <div>{props.children}</div>
    </div>
  );
};

export default LayoutBlog;
