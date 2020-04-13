export interface IDeveloper {
   id_dev ?: number,
   name_dev : string,
   born_in : string,
   picture ?: string,
   position : string,
   skill : string
}

export interface IHiring {
   id ?: number,
   id_agency : number,
   id_dev : number,
   date_hiring : string,
   date_resignation ?: string
}

export interface IAgency {
   id_agency ?: number,
   name_agency : string,
}

export interface IProject {
   id_project ?: number,
   name_project: string,
   description : string,
   id_agency : number
}

