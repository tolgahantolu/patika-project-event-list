import { useMutation, useQuery } from "@apollo/client";
import { Formik, Field, Form } from "formik";
import { ADD_NEW_EVENT, GET_ALL_LOCATIONS, GET_ALL_USERS } from "./queries";

const AddEventForm = () => {
  const { data: users } = useQuery(GET_ALL_USERS);
  const { data: locations } = useQuery(GET_ALL_LOCATIONS);
  const [createEvent, { loading }] = useMutation(ADD_NEW_EVENT);

  const handleSubmit = async (values) => {
    try {
      await createEvent({
        variables: {
          data: values,
        },
      });
    } catch (error) {
      alert(error.message);
      throw new Error(error.message);
    }
  };

  return (
    <Formik
      initialValues={{
        title: "",
        desc: "",
        date: "",
        location_id: "",
        user_id: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className="w-1/2 bg-slate-300 rounded-md py-14 px-7">
        <div className="flex flex-col gap-1 mb-3">
          <label htmlFor="user_id">User:</label>
          <Field
            as="select"
            name="user_id"
            required
            placeholder="Seleact a user"
            className="placeholder:text-sm focus:outline-none px-2 py-2 rounded-md"
            disabled={loading}
          >
            {users?.getUsers.map(({ id, username }) => (
              <option key={id} value={id}>
                {username}
              </option>
            ))}
          </Field>
        </div>
        <div className="flex flex-col gap-1 mb-3">
          <label htmlFor="title">Title:</label>
          <Field
            type="text"
            name="title"
            required
            placeholder="Enter event title"
            className="placeholder:text-sm focus:outline-none px-2 py-2 rounded-md"
            disabled={loading}
          />
        </div>
        <div className="flex flex-col gap-1 mb-3">
          <label htmlFor="desc">Description:</label>
          <Field
            type="text"
            name="desc"
            required
            placeholder="Enter event description"
            className="placeholder:text-sm focus:outline-none px-2 py-2 rounded-md"
            disabled={loading}
          />
        </div>
        <div className="flex flex-col gap-1 mb-3">
          <label htmlFor="date">Date:</label>
          <Field
            type="text"
            name="date"
            placeholder="Enter event date"
            className="placeholder:text-sm focus:outline-none px-2 py-2 rounded-md"
            disabled={loading}
          />
        </div>
        <div className="flex flex-col gap-1 mb-3">
          <label htmlFor="location_id">Location:</label>
          <Field
            as="select"
            name="location_id"
            required
            placeholder="Seleact a user"
            className="placeholder:text-sm focus:outline-none px-2 py-2 rounded-md"
            disabled={loading}
          >
            {locations?.getLocations.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </Field>
        </div>
        <button
          type="submit"
          className="rounded-md bg-blue-600 text-white px-3 py-2"
          disabled={loading}
        >
          Add New Event
        </button>
      </Form>
    </Formik>
  );
};

export default AddEventForm;
