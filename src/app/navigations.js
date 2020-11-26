export const navigations = [
  {
    name: "HOME",
    icon: "home",
    path: "/home",
  },
  {
    name: "NASDOQ",
    icon: "dashboard",
    children: [
      {
        name: "Current Market",
        icon: "show_chart",
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
    }]
  },
  {
    name: "KOSPI",
    icon: "dashboard",
    children:[

      {name: "Current Marekt",
      icon: "multiline_chart",
      children:[
        {name: "LG Chem",
         path: "/kospi/lgchem",
         icon:"battery_charging_full"},
         
         {name: "LG Innotek",
          path: "/kospi/lginnotek",
          icon:"camera"}
    ]
  },
    
    {
      name: "Kospi Prediction",
      icon: "multiline_chart",
      children: [
        {
          name: "LG Chem",
          path: "/kospi_pred/lgchem_pred",
          icon:"battery_charging_full",
          iconText: "C"
        },
        {
          name: "LG Innotek",
          icon:"camera",
          path: "/kospi_pred/lginnotek_pred",
          iconText: "S"
        }

      ]
    }]
  },

  {
    name: "Notice",
    icon: "description",
    path: "/forms/basic"
  },]