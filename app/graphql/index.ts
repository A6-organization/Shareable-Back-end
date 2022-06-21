import { GraphQLError, GraphQLFormattedError } from "graphql";
import message from "../common/constant/message";
import UserDefinition from "./schema/UserSchema";

export const ResponseErrorFormat = (
  error: GraphQLError
): GraphQLFormattedError | any => {
  return error
    ? {
        message: message.ServerError,
        extensions: {
          success: false,
          detail: error,
        },
      }
    : undefined;
};

export default [UserDefinition];
