function Header({ setPage }) {
  return (
    <header>
      <h2>My Website</h2>

      <button onClick={() => setPage("home")}>
        Home
      </button>

      <button onClick={() => setPage("contact")}>
        Contact
      </button>
    </header>
  );
}

export default Header;