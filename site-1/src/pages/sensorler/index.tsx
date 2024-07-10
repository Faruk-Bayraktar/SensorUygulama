import { Card, PanelContent } from "@/components";
import SensorCard from "@/components/themes/sensor-card";
import React, { useState, useEffect, useRef } from "react";
import { sensor_veri } from "@/components/themes/sensor-veri";

const Sensorler = () => {
  return (
    <PanelContent title="Sensör">
      <Card title="Sensörler">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="card-title">Sensör Ekle/Sil</h5>
          <button className="btn btn-success">Sensör Ekle</button>
        </div>
        <div className="row">
          <SensorCard items={sensor_veri} />
        </div>
      </Card>
    </PanelContent>
  );
};

export default Sensorler;
