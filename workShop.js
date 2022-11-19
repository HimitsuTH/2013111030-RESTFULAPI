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

