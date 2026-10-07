export type Category = 'Coffee & Tableware' | 'Home Fragrance' | 'Decor' | 'Lighting' | 'Storage';
export type Product = { id:string; name:string; category:Category; price:number; stock:number; image:string; tag:string; description:string };
export type OrderStatus = 'Processing' | 'Shipped' | 'Delivered';
export type Order = { id:string; customer:string; email:string; date:string; items:number; total:number; status:OrderStatus };
export type Customer = { name:string; email:string; orders:number; spent:number; city:string };
export const products: Product[] = [
 {id:'jebena-coffee-set',name:'Jebena Coffee Set',category:'Coffee & Tableware',price:2450,stock:8,image:'☕',tag:'Bestseller',description:'Hand-finished stoneware for a warm Ethiopian coffee ritual.'},
 {id:'meskel-candle',name:'Meskel Scented Candle',category:'Home Fragrance',price:680,stock:4,image:'🕯️',tag:'New arrival',description:'A clean, comforting botanical blend inspired by Addis evenings.'},
 {id:'tibeb-basket',name:'Tibeb Woven Basket',category:'Decor',price:1350,stock:13,image:'🧺',tag:'Handmade',description:'Textured storage with a modern traditional pattern.'},
 {id:'abeba-lamp',name:'Abeba Table Lamp',category:'Lighting',price:3200,stock:3,image:'💡',tag:'Limited',description:'Soft ambient lighting with an understated brass finish.'},
 {id:'saba-mug',name:'Saba Stoneware Mug',category:'Coffee & Tableware',price:520,stock:21,image:'🍵',tag:'Popular',description:'A generous everyday mug, made for slow mornings.'},
 {id:'nile-organizer',name:'Nile Home Organizer',category:'Storage',price:890,stock:6,image:'🗃️',tag:'Practical',description:'A tidy, flexible home essential for your desk or shelf.'}
];
export const orders: Order[] = [
 {id:'AN-1048',customer:'Mekdes T.',email:'mekdes@example.com',date:'Oct 6, 2026',items:2,total:3130,status:'Processing'},
 {id:'AN-1047',customer:'Hana G.',email:'hana@example.com',date:'Oct 5, 2026',items:1,total:1350,status:'Shipped'},
 {id:'AN-1046',customer:'Yared A.',email:'yared@example.com',date:'Oct 4, 2026',items:3,total:4760,status:'Delivered'},
 {id:'AN-1045',customer:'Samuel K.',email:'samuel@example.com',date:'Oct 3, 2026',items:1,total:2450,status:'Delivered'}
];
export const customers: Customer[] = [
 {name:'Mekdes T.',email:'mekdes@example.com',orders:4,spent:5840,city:'Addis Ababa'}, {name:'Yared A.',email:'yared@example.com',orders:2,spent:3770,city:'Bahir Dar'}, {name:'Hana G.',email:'hana@example.com',orders:3,spent:4510,city:'Addis Ababa'}, {name:'Samuel K.',email:'samuel@example.com',orders:1,spent:2450,city:'Hawassa'}
];
export const etb=(amount:number)=>new Intl.NumberFormat('en-US',{style:'currency',currency:'ETB',maximumFractionDigits:0}).format(amount).replace('ETB','ETB ');
