interface Offer {
  id: string
  title: string
  city: string
  category: Category
  subCategory: Subcategory
  experienceMin: ExperienceMin
  teleworking: Teleworking
  author: Author
  contractType: ContractType
  study: Study
}

type Category = {
  id: string
  value: string
}

type Subcategory = {
  id: string
  value: string
}

type ExperienceMin = {
  id: string
  value: string
}

type Teleworking = {
  id: string
  value: string
}

type Author = {
  id: string
  name: string
  uri: string
  logoUrl: string
}

type ContractType = {
  id: string
  value: string
}

type Study = {
  id: string
  value: string

}
