import { Shell } from "lucide-react";

const Loading = () => {
  return (
    <div className="h-screen w-full grid place-content-center place-items-center">
      <Shell className="animate-spin" />
    </div>
  );
};

export default Loading;
