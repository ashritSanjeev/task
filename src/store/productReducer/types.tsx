export interface ProduceStateModel {
    categories: Array<string>,
    allProduct: any,
    masterList:any
};

export interface ProduceType {
    id: number,
    title: string,
    price: string,
    category: string;
    description: string,
    image: string,
    rating: ratingType
};

export interface ratingType {
    rate: number,
    count: number
}
