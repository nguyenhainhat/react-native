
export type BasketState = {
  id: String;
  name: String | undefined;
  desc: String | undefined;
  price: Number | undefined;
  imgUrl: String | undefined;
};

export type Dishes = {
  _id: any | undefined;
  name: String | undefined;
  short_description: String | undefined;
  price: Number | undefined;
  image: any | undefined;
};

export interface RestaurantState {
  id: any | undefined;
  title: String | undefined;
  rating: any | undefined;
  imgUrl: String | undefined;
  genre: String | undefined;
  address: String | undefined;
  short_desc: String | undefined;
  dishes: Array<Dishes>;
  long: Number | undefined;
  lat: Number | undefined;
  result: Array<[]>
};

export interface RestaurantRows {
  image: any;
  name: String | undefined;
  rating: any | undefined;
  type: any | undefined;
  address: String | undefined;
  short_description: String | undefined;
  dishes: Array<Dishes>;
  long: Number | undefined;
  lat: Number | undefined;
  _id: any | undefined;
}

