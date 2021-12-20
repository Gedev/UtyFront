import {Classroom} from "./classroom";

export interface RoomEquipment {

  id: number;
  name: String;
  surface: number;

 classrooms : Classroom[];
}
