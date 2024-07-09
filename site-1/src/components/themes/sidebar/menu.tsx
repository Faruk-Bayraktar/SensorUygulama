interface Children {
  icon?: string;
  path?: string;
  title: string;
  type?: string;
  blank?: string;
  id?: any;
  children?: Array<Children>;
}
export interface Menu {
  path: string;
  icon: string;
  title: string;
  type?: string;
  exact?: any;
  navheader?: boolean;
  id?: any;
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
    icon: "nav-icon fa fa-cogs",
    title: "Motorlar",
    children: [
      {
        id: "sil",
        path: "/motorlar",
        title: "Motor Ekle/Sil",
      },
      {
        id: "durdur",
        path: "/motorlar",
        title: "Motor Durdur/Çalıştır",
      },
    ],
  },
  {
    icon: "nav-icon fa fa-bolt",
    path: "/sensorler",
    title: "Sensör Ekle/Sil",
  },
];

export default menu;
