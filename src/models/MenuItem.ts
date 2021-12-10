export interface IMenuItem {
    id: number;
    // slug: string;
    title: string;
    photo: string;
    sizes: IMenuItemSize[];
    description?: string;
    timeToCook?: string;
}

export interface IMenuItemSize {
    id: number;
    size: string;
    price: number;
    additions?: IMenuItemAddition[];
}

export interface IMenuItemAddition {
    title: string,
    description: string,
    priceChanger: number,
    // photo: string,
    // priceChanger: ((original: number) => number) = (o => o),
}
