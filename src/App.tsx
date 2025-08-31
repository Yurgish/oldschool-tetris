import { TetrisCanvas } from "./components/TetrisCanvas";

function App() {
  return (
    <div className="h-screen flex justify-center items-center flex-col gap-4 bg-gray-900 text-lime-400 ">
      <h1>Old School Tetris</h1>
      <TetrisCanvas />
    </div>
  );
}

export default App;
