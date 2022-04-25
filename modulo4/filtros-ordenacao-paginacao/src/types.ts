
export type Address ={
  state:string,
  city:string,
  district:string,
  street:string

export type recipe = {
   id: string
   title: string
   description: string
   userId: string
   createdAt: number
}

export type user = {
   id: string
   name: string
   email: string
   password: string
   recipes?: recipe[]

}