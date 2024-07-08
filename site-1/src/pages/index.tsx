import { Card, PanelContent } from "@/components";
import Link from "next/link";
import { useTable } from "react-table";
import React from "react";
import { Table } from "@mui/material";
import BasicTableMotor from "../components/themes/motor";
import BasicTableSensor from "../components/themes/sensor";

export default function Dashboard() {
  return (
    <PanelContent headerContent title="Dashboard">
      <div className="row">
        <div className="col-lg-3 col-6">
          <div className="small-box bg-info">
            <div className="inner">
              <h3>150</h3>
              <p>Çalışan Motorlar</p>
            </div>
            <div className="icon">
              <i className="ion ion-bag" />
            </div>
            <Link href="/" className="small-box-footer">
              More info <i className="fas fa-arrow-circle-right" />
            </Link>
          </div>
        </div>
        <div className="col-lg-3 col-6">
          <div className="small-box bg-success">
            <div className="inner">
              <h3>
                53<sup style={{ fontSize: "20px" }}>%</sup>
              </h3>
              <p>Çalışan Sensörler</p>
            </div>
            <div className="icon">
              <i className="ion ion-stats-bars" />
            </div>
            <Link href="/" className="small-box-footer">
              More info <i className="fas fa-arrow-circle-right" />
            </Link>
          </div>
        </div>

        <div className="col-lg-3 col-6">
          <div className="small-box bg-warning">
            <div className="inner">
              <h3>44</h3>
              <p>Kullanıcı Sayısı</p>
            </div>
            <div className="icon">
              <i className="ion ion-person-add" />
            </div>
            <Link href="/" className="small-box-footer">
              More info <i className="fas fa-arrow-circle-right" />
            </Link>
          </div>
        </div>

        <div className="col-lg-3 col-6">
          <div className="small-box bg-danger">
            <div className="inner">
              <h3>65</h3>
              <p>Çalışan Fan sayısı</p>
            </div>
            <div className="icon">
              <i className="ion ion-pie-graph" />
            </div>
            <Link href="/" className="small-box-footer">
              More info <i className="fas fa-arrow-circle-right" />
            </Link>
          </div>
        </div>
        <div className="col-12">
          <Card title="Motorlar">
            <div>
              <BasicTableMotor />
            </div>
          </Card>
        </div>
        <div className="col-12">
          <Card title="Sensörler">
            <div>
              <BasicTableSensor />
            </div>
          </Card>
        </div>
        <div className="col-12">
          <Card title="Users">Buraya En son kimin girip çıktığı yazılır</Card>
        </div>
      </div>
    </PanelContent>
  );
}
