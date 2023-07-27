import { nanoid } from "nanoid";
import { events, users } from "../../data";

export const Mutation = {
  // user
  addUser: (_, { data }) => {
    const newUser = { id: nanoid(), ...data };
    users.push(newUser);
    return newUser;
  },
  updateUser: (_, { id, data }) => {
    const userIndex = users.findIndex((user) => user.id == id);
    if (userIndex === -1) throw new Error("User not found!");
    const updatedUser = (users[userIndex] = {
      ...users[userIndex],
      ...data,
    });
    return updatedUser;
  },
  deleteUser: (_, { id }) => {
    const userIndex = users.findIndex((user) => user.id == id);
    if (userIndex === -1) throw new Error("User not found!");
    const deletedUser = users[userIndex];
    users.splice(userIndex, 1);
    return deletedUser;
  },
  deleteAllUser: () => {
    const length = users.length;
    users.splice(0, length);
    return {
      count: length,
    };
  },

  // event
  addEvent: (_, { data }) => {
    const newEvent = { id: nanoid(), ...data };
    events.push(newEvent);
    return newEvent;
  },
  updateEvent: (_, { id, data }) => {
    const eventIndex = events.findIndex((event) => event.id == id);
    if (eventIndex === -1) throw new Error("Event not found!");
    const updatedEvent = (events[eventIndex] = {
      ...events[eventIndex],
      ...data,
    });
    return updatedEvent;
  },
  deleteEvent: (_, { id }) => {
    const eventIndex = events.findIndex((event) => event.id == id);
    if (eventIndex === -1) throw new Error("Event not found!");
    const deletedEvent = events[eventIndex];
    events.splice(eventIndex, 1);
    return deletedEvent;
  },
  deleteAllEvent: () => {
    const length = events.length;
    events.splice(0, length);
    return {
      count: length,
    };
  },
};
