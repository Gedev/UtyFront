export interface ClassroomReservation {
  id: number,
  room_num: number,
  start_time: string,
  end_time: string,
  status: boolean,
  professor: {
    id: number
    username: string,
    lastname: string,
    firstname: string,
  },
  equipment: {
    projector: boolean,
    whiteboard : boolean,
  }
}
