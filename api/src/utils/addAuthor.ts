import { Author } from '../types';

const addAuthor = <T>(data: T): T & { author: Author } => {
  return {
    ...data,
    author: {
      name: process.env.AUTHOR_NAME || 'Anonymous',
      lastname: process.env.AUTHOR_LASTNAME || 'Anonymous',
    },
  };
};

export default addAuthor;
