export interface Iprod{
    pname:string,
    pdetails:string,
    pid:string,
    pstatus:string
}

export enum ProductsStatus{
    Inprogress="Inprogress",
    Dispatched="Dispatched",
    Delivered="Delivered"
}