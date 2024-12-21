export interface Lead {
    id: number
    name: string
    topic: string
    status: string
    createdOn: string
  }
  
  export interface Activity {
    id: string
    title: string
    company: string
    amount: string
    daysToClose: number
  }
  
  export interface LeadCard {
    name: string
    role: string
    company: string
    description: string
    tags: string[]
  }
  
  