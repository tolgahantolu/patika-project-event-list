import { useQuery } from "@apollo/client";
import { GET_EVENT } from "./queries";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_EVENT, {
    variables: { id },
  });

  return (
    <div className="w-full h-full max-h-screen py-10 grid place-items-center">
      <div className="w-3/4 flex flex-col gap-5">
        {loading && <p>Loading...</p>}
        {error && <p>Something went wrong: {error.message}</p>}
        <p className="text-black/30 text-xl">{data?.getEvent.id}</p>
        <div>
          <p className="text-3xl font-bold uppercase mb-2">
            {data?.getEvent.title}
          </p>
          <p className="">{data?.getEvent.desc}</p>
        </div>
        <div className="flex justify-between items-center text-xs font-medium">
          <p className="">{data?.getEvent.location.name}</p>
          <p className="">{data?.getEvent.user.username}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
