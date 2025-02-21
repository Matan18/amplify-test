export default function Test() {
  const onClickOwn = () => {
    window.open("/api/redirect", "_self");
  };
  const onClickDev = () => {
    window.open(
      "https://develop.d1ve6l3zrsm3pf.amplifyapp.com/api/teste",
      "_self"
    );
  };
  return (
    <main>
      <button onClick={onClickOwn}>Navigate Own</button>
      <button onClick={onClickDev}>Navigate Dev</button>
    </main>
  );
}
