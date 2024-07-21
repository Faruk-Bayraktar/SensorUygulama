import mariadb from "mariadb";

const pool = mariadb.createPool({
  host: "civa.gen.tr",
  user: "sensor",
  password: "iCZV86UA!cmHKAiT",
  database: "sensor",
  connectionLimit: 5,
});

export async function main(querySql: any, values: any = []) {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query(querySql, values);
    return rows;
  } catch (err) {
    console.error("Database error:", err);
    throw err;
  } finally {
    if (conn) conn.end();
  }
}

export async function adam_var_mi(eposta: any, sifre: any) {
  const querySql = "SELECT * FROM giris WHERE email=? AND password=?";
  return main(querySql, [eposta, sifre]);
}

export async function get_motors() {
  const querySql = "SELECT * FROM motorlar";
  return main(querySql);
}

export async function get_sensors() {
  const querySql = "SELECT * FROM sensorler";
  return main(querySql);
}

export async function add_motor(data: any) {
  const querySql = `
    INSERT INTO motorlar (ad, tip, aciklama, acik_kapali, ayar_degeri, tarih)
    VALUES (?, ?, ?, ?, ?, ?)`;

  // Format date to 'YYYY-MM-DD HH:MM:SS'
  const formattedDate = new Date(data.tarih)
    .toISOString()
    .slice(0, 19)
    .replace("T", " ");

  const values = [
    data.ad,
    data.tip,
    data.aciklama,
    data.acik_kapali,
    data.ayar_degeri,
    formattedDate,
  ];
  return main(querySql, values);
}

export async function add_sensor(data: any) {
  const querySql = `
    INSERT INTO sensorler (ad, tip, aciklama, tarih)
    VALUES (?, ?, ?, ?)`;

  // Format date to 'YYYY-MM-DD HH:MM:SS'
  const formattedDate = new Date(data.tarih)
    .toISOString()
    .slice(0, 19)
    .replace("T", " ");

  const values = [data.ad, data.tip, data.aciklama, formattedDate];
  return main(querySql, values);
}

export async function delete_motors(id: any) {
  let conn;
  try {
    conn = await pool.getConnection();
    const querySql = "DELETE FROM motorlar WHERE id = ?";
    await conn.query(querySql, [id]);
  } catch (err) {
    console.error("Database error:", err);
    throw err;
  } finally {
    if (conn) conn.end();
  }
}
export async function delete_sensors(id: any) {
  let conn;
  try {
    conn = await pool.getConnection();
    const querySql = "DELETE FROM sensorler WHERE id = ?";
    await conn.query(querySql, [id]);
  } catch (err) {
    console.error("Database error:", err);
    throw err;
  } finally {
    if (conn) conn.end();
  }
}
export async function update_motor_ayar_degeri(ayar_degeri: any, id: any) {
  let conn;
  try {
    conn = await pool.getConnection();
    const querySql = "UPDATE motorlar SET ayar_degeri = ? WHERE id = ?";
    await conn.query(querySql, [ayar_degeri, id]);
  } catch (err) {
    console.error("Database error:", err);
    throw err;
  } finally {
    if (conn) conn.end();
  }
}
