import Wrapper from "../hoc/Wrapper";

import Button from "@material-ui/core/Button";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <p className="text-fg-dark mb-3"> Welcome to the All-In-One Template!</p>
      <Button color="secondary" variant="contained">
        Works
      </Button>
    </div>
  );
}

export default Wrapper(Home);
