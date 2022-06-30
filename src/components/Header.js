export const Header = (props) => {
  const switchTheme = props.switchTheme
  return (
    <header>
      <span>My website</span>
      <button>Add product</button>
      <button>Login</button>
      <button onClick={() => switchTheme()}>dark</button>
      {/* <span>{isDark ? 'dark' : "light"}</span> */}
    </header>
  )
}