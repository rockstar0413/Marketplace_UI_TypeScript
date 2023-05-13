export type DogType = {
    breederDOB: string,
    breederDesc:string,
    breederGender:string,
    breederName:string,
    breederPhoto:string,
    petTypeId:{
        petTypeId:string,
        petTypeDadCalled:string,
        petTypemomCalled:string,
        _id:string
    },
    _id:string
}

export type BreedInfoType = {
    image: string,
    title: string,
    description:string
}
