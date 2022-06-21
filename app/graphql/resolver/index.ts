import { IResolvers } from "@graphql-tools/utils";
import people from "../../dataset";

const Resolvers: IResolvers = {
  Query: {
    getAllPeople: () => people,
    getPerson: (_: void, args: any) => {
      console.log(args);
      return people.find((person) => person.id === args.id);
    },
  },
  Mutation: {
    addPerson: (_: void, args: { name: string }) => {
      const newPerson = {
        id: people.length + 1,
        name: args.name,
      };
      people.push(newPerson);
      return newPerson;
    },
  },
};
export default Resolvers;
