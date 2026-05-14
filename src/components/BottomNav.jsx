
export default function BottomNav({ onNavigate }) {
  return (
    <nav className="bottom-nav">
      <button onClick={() => onNavigate("home")}>Home</button>
      <button onClick={() => onNavigate("setup")}>Round</button>
      <button onClick={() => onNavigate("practice")}>Practice</button>
    </nav>
  );
}
