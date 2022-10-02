import {
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions
} from 'firebase/firestore'
import Category from '../types/category.types'

export const categoryConverter = {
  toFirestore(category: Category): DocumentData {
    return { ...category }
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): Category {
    const data = snapshot.data(options)
    // data = doc.data()

    return {
      id: data.id,
      name: data.name,
      imageUrl: data.imageUrl,
      products: data.products
    }
  }
}
