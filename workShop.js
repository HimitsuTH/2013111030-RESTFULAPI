//---------------------Workshop A--------------------

const user = {
  name: "Chinnawich",
  nickname: "Shin",
  hobby: "game",
  address: "TNI",
  provinces: {
    province: "Bangkok",
    postcode: "10250",
  },
};

console.log(
  `My nickname is ${user.nickname}, My hobby is ${user.hobby} 
  and my postcode is ${user["provinces"].postcode}`
);

//---------------------Workshop B--------------------

const users = [
    {
      name: "Chinnawich",
      nickname: "Shin",
      hobby: "game",
      address: "TNI",
      provinces: {
        province: "Bangkok",
        postcode: "10250",
      },
    },
    {
      name: "TestA",
      nickname: "A",
      hobby: "sleep",
      address: "TNI_1",
      provinces: {
        province: "Bangkok",
        postcode: "10230",
      },
    },
    {
      name: "Chinnawich",
      nickname: "Shin",
      hobby: "read a book",
      address: "TNI_2",
      provinces: {
        province: "Bangkok",
        postcode: "10240",
      },
    },
  ];
  
  users.forEach((user, index) => {
    console.log(
      `${index + 1}. My nickname is ${user.nickname}, My hobby is ${user.hobby} 
     and my postcode is ${user["provinces"].postcode}`
    );
  });

  console.log("-------------------------------------")

  for(const user of users) {
    console.log(`My nickname is ${user.nickname}, My hobby is ${user.hobby} 
    and my postcode is ${user["provinces"].postcode}`)
  }



  