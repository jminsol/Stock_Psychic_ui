// import AppleIcon from '@material-ui/icons/Apple';
export const navigations = [
  {
    name: "HOME",
    icon: "home",
    path: "/session/signin"
  },

  {
    name: "NASDOQ",
    icon: "dashboard",
    children: [
      {
        name: "Current Market",
        children:[
          {
            name: "Apple",
            path: "/nasdaq/apple"
          },
          {
            name: "Tesla",
            path: "/nasdaq/tesla"
          }
        ]
      },
      {
      name: "Stock Prediction",
      icon: "show_chart",
      children: [
      {
        name: "Apple",
        // icon: ()=> <AppleIcon/>,
        icon: "phone_iphone",
        path: "/nasdaq/pred_apple",
        iconText: "C"
      },
      {
        name: "Tesla",
        icon: "battery_charging_full",
        path: "/nasdaq/pred_tesla",
        iconText: "D"
      }
    ]
    }]
  },
  {
    name: "게시판",
    icon: "description",
    children: [
      {
        name: "글 목록",
        path: "/forms/basic",
        iconText: "B"
      },
      {
        name: "글쓰기",
        path: "/forms/editor",
        iconText: "W"
      }]
  },
  
];

