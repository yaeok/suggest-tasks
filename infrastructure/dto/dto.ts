import { DocumentData } from '@firebase/firestore'

export interface DataTransferObject {
  toDocumentData(): DocumentData
}
