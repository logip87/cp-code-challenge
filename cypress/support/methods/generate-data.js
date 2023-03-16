import { faker } from "@faker-js/faker";

export const generateFakeUserData = {
  firstName: {
    correct: faker.name.firstName(),
  },
  lastName: {
    correct: faker.name.lastName(),
  },
  zipCode: {
    correct: faker.address.zipCode(),
  },
};
