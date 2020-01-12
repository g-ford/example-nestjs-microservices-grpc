export interface Micr1ById {
  id: number;
}

export interface Micr1 {
  id: number;
  name: string;
}

export interface Micr1Service {

  findOne(request: Micr1ById): Promise<Micr1>;

}
