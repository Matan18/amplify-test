export default function Test() {
  const onClick = () => {
    window.open("/api/redirect", "_self");
  };
  return <button onClick={onClick}>Navigate</button>;
}
