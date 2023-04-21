import type { NextApiRequest, NextApiResponse } from "next"
import { Types } from "mongoose"

export interface ItemDataType {
    title: string,
    image: string,
    price: string,
    description: string,
    email: string
}

export interface UserDataType {
    name: string,
    email: string,
    password: string
}


export interface DecodeType {
  email: string
}


export interface ExtendedNextApiRequestAuth extends NextApiRequest {
  headers: {
    authorization: string
  }
  body: {
    email: string
  }
}

export interface ResMessageType {
  message: string
  token?: string
}

export interface ExtendedNextApiRequestUser extends NextApiRequest {
  body: UserDataType
}

export interface SavedUserDataType extends UserDataType {
  _id: Types.ObjectId
}

export interface SavedItemDataType extends ItemDataType {
  _id: Types.ObjectId
}

export interface ResReadAllType {
  message: string
  allItems?: SavedItemDataType[]
}

export interface ExtendedNextApiRequestItem extends NextApiRequest{
  body: ItemDataType
}

export interface ResReadSingleType {
  message: string
  singleItem?: SavedItemDataType
}

export interface ReadSingleDataType {
  singleItem: {
    _id: string
    title: string
    image: string
    price: string
    description: string
    email: string
  }
}

export interface ReadAllDataType {
  allItems: {
    _id: string
    title: string
    image: string
    price: string
    description: string
    email: string
  }[]
}