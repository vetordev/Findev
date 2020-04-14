export interface IDeveloper {
   id_dev ?: number,
   name_dev : string,
   born_in : string,
   avatar_uri ?: string,
   skill : string,
   github : string
}

export interface IHiring {
   id ?: number,
   id_agency : number,
   id_dev : number,
   position : string,
   date_hiring : string,
   date_resignation ?: string
}

export interface IAgency {
   id_agency ?: number,
   name_agency : string,
   email : string
}

export interface IProject {
   id_project ?: number,
   name_project: string,
   description : string,
   id_agency : number,
   github : string
}

