export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-100 fixed-bottom text-center">
      <p>Copyright ⓒ {year} Note Bee, Inc.</p>
    </footer>
  );
};
