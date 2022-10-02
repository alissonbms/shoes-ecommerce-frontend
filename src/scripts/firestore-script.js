// import { initializeApp } from 'firebase/app'
// import { addDoc, collection, getFirestore } from 'firebase/firestore'

// const firebaseConfig = {
//   apiKey: 'AIzaSyAL5Wza4T5Szn2599aBLcrive0yXaT7NSc',
//   authDomain: 'shoes-ecommerce-9ae56.firebaseapp.com',
//   projectId: 'shoes-ecommerce-9ae56',
//   storageBucket: 'shoes-ecommerce-9ae56.appspot.com',
//   messagingSenderId: '687820245140',
//   appId: '1:687820245140:web:de195e8ce59dd04804cc81'
// }

// const app = initializeApp(firebaseConfig)
// export const db = getFirestore(app)

// const categories = [
//   {
//     id: '632c5abe6b054027ce9b429a',
//     name: 'Sneakers',
//     imageUrl:
//       'https://images.unsplash.com/photo-1586525198428-225f6f12cff5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
//     products: [
//       {
//         id: '178c5abe6b054027ce9b429a',
//         name: 'Air Jordan Red University',
//         price: 350,
//         imageUrl:
//           'https://images.unsplash.com/photo-1600181516264-3ea807ff44b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
//       },
//       {
//         id: '334c5abe6b054027ce9b429a',
//         name: 'Nike Air Max Yellow',
//         price: 250,
//         imageUrl:
//           'https://images.unsplash.com/photo-1620138546344-7b2c38516edf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
//       },
//       {
//         id: '913c5abe6b054027ce9b429a',
//         name: 'White And Blue Air Jordan 1s',
//         price: 350,
//         imageUrl:
//           'https://images.pexels.com/photos/1102777/pexels-photo-1102777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
//       }
//     ]
//   },
//   {
//     id: '632c5b0a6b054027ce9b42a5',
//     name: 'Athletic',
//     imageUrl:
//       'https://images.unsplash.com/photo-1610969770059-7084269fa3be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
//     products: [
//       {
//         id: '871c5b0a6b054027ce9b42a5',
//         name: 'Colorful fashioned Nike Zoom',
//         price: 200,
//         imageUrl:
//           'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
//       },
//       {
//         id: '119c5b0a6b054027ce9b42a5',
//         name: 'Black and White Nike Zoom',
//         price: 185,
//         imageUrl:
//           'https://images.pexels.com/photos/1456705/pexels-photo-1456705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
//       },
//       {
//         id: '913c5abe6b054027ce9b429a',
//         name: 'Women for training',
//         price: 235,
//         imageUrl:
//           'https://images.pexels.com/photos/1468412/pexels-photo-1468412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
//       }
//     ]
//   },
//   {
//     id: '6332b16162f48a39a8b854ee',
//     name: 'Vans',
//     imageUrl:
//       'https://images.unsplash.com/photo-1531185038189-41815d864f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80',
//     products: [
//       {
//         id: '5522b16162f48a39a8b854ee',
//         name: 'Yellow Vans',
//         price: 150,
//         imageUrl:
//           'https://images.pexels.com/photos/3596282/pexels-photo-3596282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
//       },
//       {
//         id: '2552b16162f48a39a8b854ee',
//         name: 'Black and White Vans',
//         price: 130,
//         imageUrl:
//           'https://images.pexels.com/photos/10411796/pexels-photo-10411796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
//       },
//       {
//         id: '4482b16162f48a39a8b854ee',
//         name: 'Red Low',
//         price: 170,
//         imageUrl:
//           'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
//       }
//     ]
//   }
// ]

// const main = async () => {
//   await Promise.all(
//     categories.map(async (category) => {
//       await addDoc(collection(db, 'categories'), category)
//     })
//   )
// }

// main().then(() => process.exit())
