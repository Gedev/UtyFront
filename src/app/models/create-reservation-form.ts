export class CreateReservationForm {
  roomTypeId: number | undefined;
  date: Date | undefined;
  startTime: string | undefined;
  endTime: string | undefined;
  size: number | undefined;
  reservedByProfessorId: number | undefined;
  roomEquipment: number[] | undefined;
}
