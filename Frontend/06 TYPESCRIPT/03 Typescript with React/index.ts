// this is the annotation form of declearing type of object
type UserObj = {
  name: string;
  age: number;
  isVerified: boolean;
  address: {
    state: string;
    city: string;
  };
};

let userData : UserObj = {
  name: "kartik",
  age: 23,
  isVerified: true,
  address: {
    state: "uttar Pradesh",
    city: "meerut",
  },
};


userData.name = 'tejshwi';
console.log(userData);
