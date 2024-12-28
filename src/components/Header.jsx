
export const Header = () => {
  let customCSS = "code"
  const isloggedIn = false
  const greeting = isloggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>
  const items = ["Item1", "Item2", "Item3", "Item4"]
  return (
    <>
    <div>
      <h1 className="bannerText">React-app</h1>
      <p className="slogan">Test component - learn</p>

      {/* Javascript expression in jsx */}
      <p className={customCSS} style={{fontSize:"20px", fontStyle:"italic"}}>25 + 40 = {25 + 40}</p>

      {/* JSX with conditinal rendering*/}
      {greeting}
      
      {/* JSX withh lists */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

    </div>
    </>
  )
}
