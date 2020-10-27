// import AppleIcon from '@material-ui/icons/Apple';
export const navigations = [
  {
    name: "HOME",
    icon: "home",
    path: "/home"
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
      }
    ]
  },
  {
    name: "NASDOQ",
    icon: "dashboard",
    children: [
      {
        name: "Current Market",
        path: "/nasdaq/analytics",
      },
      {
      name: "Stock Prediction",
      icon: "show_chart",
      children: [
      {
        name: "Apple",
        // icon: ()=> <AppleIcon/>,
        icon: "phone_iphone",
        path: "/prediction/apple",
        iconText: "C"
      },
      {
        name: "Tesla",
        icon: "battery_charging_full",
        path: "/prediction/tesla",
        iconText: "D"
      }
    ]
    }]
  },
 
  
];

