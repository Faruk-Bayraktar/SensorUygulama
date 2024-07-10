import { Card, PanelContent } from "@/components";
import React from "react";
import MotorCard from "@/components/themes/motor-card";
import { motor_veri } from "@/components/themes/motor-veri";
//BURASI DA KARTLARI GOSTERECEGIMIZ YER
const Motorlar = () => {
  return (
    <PanelContent title="Motor">
      <Card title="Motorlar">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="card-title">Motor Ekle/Sil</h5>
          <button className="btn btn-success">Motor Ekle</button>
        </div>
        <div className="row">
          <MotorCard items={motor_veri} />
        </div>
      </Card>
    </PanelContent>
  );
};

export default Motorlar;
