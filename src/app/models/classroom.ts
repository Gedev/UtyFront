import {RoomEquipment} from "./room-equipment";

export interface Classroom {
  id: number,
  room_num: number,
  surface: number,
  roomEquipmentList: RoomEquipment[]
}
