// export interface FormValues {
//     id: number;
//     name?: string;
//     role?: string;
//     skills?: string[];
//     startDate?: string;
//     preference?: string;
//   }

const today = new Date();
export const contactData = [
  {
    id: 1,
    name: "Shawn Spencer",
    Location: "USA-A",
    Vechile: ["Toyota 0.1"],
    startDate: `${
      today.getMonth() + 1
    }/${today.getDate()}/${today.getFullYear()}`,
    preference: 2,
    formatedDateTime: ""
  },

  {
    id: 2,
    name: "Burton Guster",
    Location: "USA-A",
    Vechile: ["Toyota 0.1"],
    startDate: `${
      today.getMonth() + 1
    }/${today.getDate()}/${today.getFullYear()}`,
    preference: 1,
  },

  {
    id: 3,
    name: "Juliet O'Hara",
    Location: "USA-A",
    Vechile: ["Toyota 0.1"],
    startDate: `${
      today.getMonth() + 1
    }/${today.getDate()}/${today.getFullYear()}`,
    preference: 1,
  },

  {
    id: 4,
    name: "Lassy",
    Location: "USA-A",
    Vechile: ["Toyota 0.1"],
    startDate: `${
      today.getMonth() + 1
    }/${today.getDate()}/${today.getFullYear()}`,
    preference: 1,
  },
];
