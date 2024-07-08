import { Card, PanelContent } from "@/components";
import React from "react";
import BasicTableMotor from "@/components/themes/motor";

const Sensorler = () => {
  return (
    <PanelContent title="Sensör Ekle/Sil">
      <Card title="Motor Ekle Sil">
        <BasicTableMotor />
      </Card>
    </PanelContent>
  );
};

export default Sensorler;
