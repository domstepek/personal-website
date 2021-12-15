import { FunctionComponent } from "react";

const Timeline: FunctionComponent<{}> = () => {
  const handleScroll: any = (e: Event) => {

  };

  return (
    <div className='h-full w-full p-10' onScroll={handleScroll}>
      <h1 className='text-5xl font-bold text-zinc-700 text-center'>My Timeline</h1>
    </div>
  );
};

export default Timeline;