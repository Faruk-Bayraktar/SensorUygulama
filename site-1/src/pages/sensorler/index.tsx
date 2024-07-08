import { Card, PanelContent } from "@/components";
import React from "react";
import BasicTableSensor from "@/components/themes/sensor";

const Sensorler = () => {
  return (
    <PanelContent title="Sensör Ekle/Sil">
      <Card title="Sensör Ekle Sil">
        <BasicTableSensor />
      </Card>
    </PanelContent>
  );
};

export default Sensorler;
