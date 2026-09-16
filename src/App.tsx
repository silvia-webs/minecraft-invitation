import { useCallback, useState } from "react";
import { Main } from "@/views/Main";
import { Portrait } from "@/views/Portrait";

type AppPhase = "portrait" | "main";

function App() {
  const [phase, setPhase] = useState<AppPhase>("portrait");

  const handlePortraitComplete = useCallback(() => {
    setPhase("main");
  }, []);

  return phase === "portrait" ? (
    <Portrait onComplete={handlePortraitComplete} />
  ) : (
    <Main />
  );
}

export default App;
