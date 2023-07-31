import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { GET_ALL_EVENTS } from "./queries";
import AddEventForm from "./AddEventForm";

const Home = () => {
  const { loading, error, data } = useQuery(GET_ALL_EVENTS);
  return (
    <>
      <div className="w-full pt-3 mb-10">
        <h2 className="text-4xl font-bold text-center pb-5 border-b-2 border-gray-200">
          Event Sync
        </h2>
        <div className="w-full grid place-items-center pt-5">
          <AddEventForm />
        </div>
      </div>
      <div className="w-1/2 mx-auto h-60 overflow-auto">
        {loading && <p>Loading...</p>}
        {error && <p>Something went wrong: {error.message}</p>}
        {data?.getEvents.map(({ id, title, desc, date }) => (
          <Link
            to={`/post/${id}`}
            key={id}
            className="px-3 py-2 mb-2 border border-gray-400 rounded-md flex justify-between"
          >
            <div className="w-3/4">
              <div className="text-xl font-semibold mb-1">{title}</div>
              <div className="text-sm">{desc.slice(0, 75).concat("...")}</div>
            </div>
            <div className="text-xs">{date}</div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
