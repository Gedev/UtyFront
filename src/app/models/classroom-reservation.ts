import {Professor} from "./professor";
import {RoomEquipment} from "./room-equipment";

export interface ClassroomReservation {
  id: number,
  room_num: number,
  start_time: string,
  end_time: string,
  date: Date,
  size: number,
  status: boolean,
  professor: Professor,
  equipments: RoomEquipment[]
}
