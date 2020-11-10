import AppleIcon from '@material-ui/icons/Apple';
import Apple from './views/dashboard/Apple';
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
            icon: 'phone_iphone',
            path: "/nasdaq/apple"
          },
          {
            name: "Tesla",
            icon : 'drive_eta',
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
        icon: "phone_iphone",
        path: "/nasdaq/apple_pred"
      },
      {
        name: "Tesla",
        icon: "battery_charging_full",
        path: "/nasdaq/tesla_news"
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

