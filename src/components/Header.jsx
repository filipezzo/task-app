import Counter from "./Counter";
import Logo from "./Logo";

function Header({ items }) {
  return (
    <header>
      <Logo />
      <Counter items={items} />
    </header>
  );
}

export default Header;
