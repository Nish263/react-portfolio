import "./App.css";
import { Skills } from "./components/skills/Skills";
import { DefaultLayout } from "./components/Layout/DefaultLayout";
import { Projects } from "./components/projects/Projects";
import { About } from "./components/about/About";
import { Contact } from "./components/contacts/Contact";

const App = () => {
  return (
    <div className="wrapper">
      <DefaultLayout>
        {/* skill section */}

        <Skills />

        {/* Project section */}
        <Projects />

        {/* about us */}
        <About />

        {/* contact */}
        <Contact />
      </DefaultLayout>
    </div>
  );
};

export default App;
