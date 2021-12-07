export interface ClassroomReservation {
  id: number,
  professor_id: number,
  room_num: number,
  start_time: string,
  end_time: string,
  status: boolean,
  professor: {
    username: string,
    lastname: string,
    firstname: string,
  },
  equipment: {
    projector: boolean,
    whiteboard : boolean,
  }
}
