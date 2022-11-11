import { useSearchParams } from "react-router-dom";

const Create = () => {
  const [searchParams] = useSearchParams();
  const theme = searchParams.get("theme");
  const color = searchParams.get("color");
  return (
    <div>
      Create {theme} {color}
    </div>
  );
};

export default Create;
