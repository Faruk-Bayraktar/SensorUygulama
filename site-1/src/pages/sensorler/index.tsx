import { Card, PanelContent } from "@/components";
import BasicTableSensor from "@/components/themes/sensor";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
const rows = [
  {
    id: 1,
    name: "Sensor 1",
    email: "jane.cooper@example.com",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    status: "Active",
    role: "Admin",
    imgUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    id: 2,
    name: "Cody Fishr",
    email: "cody.fisher@example.com",
    title: "Product Directives Officer",
    department: "Intranet",
    status: "Active",
    role: "Owner",
    imgUrl:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    id: 3,
    name: "Esther Howard",
    email: "esther.howard@example.com",
    title: "Forward Response Developer",
    department: "Directives",
    status: "Active",
    role: "Member",
    imgUrl:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    id: 4,
    name: "Jenny Wilson",
    email: "jenny.wilson@example.com",
    title: "Central Security Manager",
    department: "Program",
    status: "Active",
    role: "Member",
    imgUrl:
      "https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    id: 5,
    name: "Kristin Watson",
    email: "kristin.watson@example.com",
    title: "Lean Implementation Liaison",
    department: "Mobility",
    status: "Active",
    role: "Admin",
    imgUrl:
      "https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    id: 6,
    name: "Cameron Williamson",
    email: "cameron.williamson@example.com",
    title: "Internal Applications Engineer",
    department: "Security",
    status: "Active",
    role: "Member",
    imgUrl:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  // Add more rows as needed
];

const Sensorler = () => {
  // const [menu, setMenu] = useState({});
  const [menus, setMenus] = useState<{ [key: number]: boolean }>({});

  const toggleMenu = (id: number) => {
    // setMenu(!menu);
    setMenus((prevMenus) => ({
      ...prevMenus,
      [id]: !prevMenus[id],
    }));
  };
  //---------------------------------------------------------

  // const Sensorler: React.FC<{ rows: row[] }> = ({ rows }) => {
  //   const [menus, setMenus] = useState<{ [key: number]: boolean }>({});
  //   const menuRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  //   const toggleMenu = (id: number) => {
  //     setMenus((prevMenus) => ({
  //       ...prevMenus,
  //       [id]: !prevMenus[id],
  //     }));
  //   };
  //   const handleClickOutside = (event: MouseEvent) => {
  //     const target = event.target as Node;
  //     const menuKeys = Object.keys(menuRefs.current);

  //     for (const key of menuKeys) {
  //       if (menuRefs.current[key] && !menuRefs.current[key]?.contains(target)) {
  //         setMenus((prevMenus) => ({
  //           ...prevMenus,
  //           [Number(key)]: false,
  //         }));
  //       }
  //     }
  //   };

  //   useEffect(() => {
  //     document.addEventListener("mousedown", handleClickOutside);
  //     return () => {
  //       document.removeEventListener("mousedown", handleClickOutside);
  //     };
  //   }, []);
  // ---------------------------------------------------------
  return (
    <PanelContent title="Sensör Ekle/Sil">
      <Card title="Sensör Ekle Sil">
        <div className="row">
          {rows.map((row) => (
            <>
              <div className="col-lg-3 col-6">
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>150</h3>
                    <p>{row.name}</p>
                    <p>{row.status}</p>
                  </div>
                  <div
                    key={row.id}
                    className="
                    text-center nav-item dropdown"
                    onClick={() => toggleMenu(row.id)}
                  >
                    <div className="pe-auto nav-link dropdown-toggle user-action text-center">
                      Düzenle
                      <div
                        className={`text-center dropdown-menu ${
                          menus[row.id] ? "show" : ""
                        }`}
                        // onMouseLeave={() => setMenus(false)}
                        // onMouseLeave={() =>
                        //   setMenus((prevMenus) => ({
                        //     ...prevMenus,
                        //     [row.id]: false,
                        //   }))
                        // }
                      >
                        <button type="button" className="dropdown-item">
                          Sil
                        </button>
                        <button type="button" className="dropdown-item">
                          Düzenle
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </Card>
    </PanelContent>
  );
};

export default Sensorler;

//   return (
//     <PanelContent title="Sensör Ekle/Sil">
//       <Card title="Sensör Ekle Sil">
//         <div className="row">
//           {rows.map((row) => (
//             <div className="col-lg-3 col-6" key={row.id}>
//               <div className="small-box bg-info">
//                 <div className="inner">
//                   <h3>150</h3>
//                   <p>{row.name}</p>
//                   <p>{row.status}</p>
//                 </div>
//                 <div
//                   className="text-center nav-item dropdown"
//                   onClick={() => toggleMenu(row.id)}
//                   ref={(el) => (menuRefs.current[row.id] = el)}
//                 >
//                   <div className="pe-auto nav-link dropdown-toggle user-action text-center">
//                     Düzenle
//                     <div
//                       className={`text-center dropdown-menu ${
//                         menus[row.id] ? "show" : ""
//                       }`}
//                     >
//                       <button type="button" className="dropdown-item">
//                         Sil
//                       </button>
//                       <button type="button" className="dropdown-item">
//                         Düzenle
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </Card>
//     </PanelContent>
//   );
// };

// export default Sensorler;
