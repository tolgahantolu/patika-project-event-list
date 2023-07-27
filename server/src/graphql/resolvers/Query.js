import { events, users, locations, participants } from "../../data";

export const Query = {
  // user
  getUsers: () => users,
  getUser: (_, { id }) => users.find((user) => user.id == id),

  //event
  getEvents: () => events,
  getEvent: (_, { id }) => events.find((event) => event.id == id),

  //locations
  getLocations: () => locations,
  getLocation: (_, { id }) => locations.find((location) => location.id == id),

  //participants
  getParticipants: () => participants,
  getParticipant: (_, { id }) =>
    participants.find((participant) => participant.id == id),
};
