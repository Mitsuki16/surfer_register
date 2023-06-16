import { create } from 'zustand'

let ADDON_LIST = [
    {
      id: "1",
      addon_title: "Food",
      addon_desc: "Get Restuaranct Food",
      addon_price: "+$120",
      addon_checked: false,
    },
    {
      id: "2",
      addon_title: "MoterBike Rent",
      addon_desc: "Rent a MotorBike",
      addon_price: "+30/hr",
      addon_checked: false,
    },
    {
      id: "3",
      addon_title: "Hotel Stay",
      addon_desc: "Get Luxurizios Hotel",
      addon_price: "+$300/day",
      addon_checked: false,
    },
  ];
export const useFormStore = create((set) => ({
  basicDetails: {},
  setBasicDetails: (data) => set((state) => ({ basicDetails: data })),
  surfBoardDetails: {
    surfboardType: 'Short',
    surfBoardAmt: '3',
    surfCatagory: false
  },
  setsurfBoardDetails: (data) => set((state) => ({ surfBoardDetails: data })),
  addOnDetails: ADDON_LIST,
  setaddOnDetails: (data) => set((state) => ({ addOnDetails: data })),
}))

