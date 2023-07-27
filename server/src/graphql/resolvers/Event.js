import { users, locations, participants } from "../../data";

export const Event = {
  user: ({ user_id }) => users.find((user) => user.id == user_id),
  location: ({ location_id }) =>
    locations.find((location) => location.id == location_id),
  participants: ({ id }) =>
    participants.filter((participant) => participant.event_id == id),
};
