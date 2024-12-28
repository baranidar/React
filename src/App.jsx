import { LearnComponent } from "./components/LearnComponent"
import { ChildComponent } from "./components/ChildComponent"
import { Student } from "./components/Student"
import "./css/App.css"
import { Header } from "./components/header"


function App() {

  return (
    <>
      <div>React-app</div>
        <LearnComponent /> 
        <Header />
        <Student name="Student1" age = {35} isMarried={true} />
        <Student name="Student2" age = {40} isMarried={false} />
        <Student name="Student3" age = {42} isMarried={true} />
        <Student />
        <ChildComponent>
          <p>Test paragraph1</p>
          <p>Test paragraph2</p>
          <p>Testt paragraph3</p>
        </ChildComponent>

    </>
  )
}

export default App
