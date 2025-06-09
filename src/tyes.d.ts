export interface Root {
  message: string
  data: Post[]
}

export interface Post {
  idUser: number
  userName: string
  nickName: string
  email: string
  bio?: string
  profilePhotoURL: ProfilePhotoUrl
  coverPhotoURL: CoverPhotoUrl
  dateBirthday: string
  location: string
  PrivSettings?: number
  registerDate?: string
  lastLogin: any
  isActive?: number
  idPost: number
  contentTitle: string
  contentDesc?: string
  mediaURLVideo: any
  mediaURLPhoto: any
  mediaType: any
  createdAt: any
  privacy: string
}

export interface ProfilePhotoUrl {
  type: string
  data: number[]
}

export interface CoverPhotoUrl {
  type: string
  data: number[]
}
