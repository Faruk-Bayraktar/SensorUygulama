interface Children {
  icon?: string;
  path?: string;
  title: string;
  type?: string;
  blank?: string;
  children?: Array<Children>;
}
export interface Menu {
  path: string;
  icon: string;
  title: string;
  type?: string;
  exact?: any;
  navheader?: boolean;
  children?: Array<Children>;
}
const menu: Array<Menu> = [
  {
    path: "/dashboard",
    icon: "nav-icon fas fa-tachometer-alt",
    title: "Dashboard",
  },
  {
    path: "#",
    icon: "nav-icon fa fa-bolt",
    title: "Sensörler",
    children: [
      {
        path: "/sensorler",
        title: "Sensör Ekle/Sil",
        // onClick: () => {
        //   console.log("Sensör Ekle/Sil");
        // },
      },
      {
        path: "/sensorler",
        title: "Sensör Durdur/Çalıştır",
      },
    ],
  },
  {
    path: "#",
    icon: "nav-icon fa fa-cogs",
    title: "Motorlar",
    children: [
      {
        path: "/motorlar",
        title: "Motor Ekle/Sil",
      },
      {
        path: "/motorlar",
        title: "Motor Durdur/Çalıştır",
      },
    ],
  },
];

export default menu;
