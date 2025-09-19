// function sum(a,b){
//     return(a+b)
// }
// let first = sum(3,5);
// console.log(first)
// function canvote ( a){
//     if( a>=18)
//         {return(true);
// }

// else
// {return(false)}
// }
// let vote = canvote(8)
// console.log(vote)
// let users =["ansh","tripathi ","harkirat","singh"]
// for(let i=0;i<10;i++){
//     console.log("anshul");
    

// 
// function out(arr){
//    let arr2 =[];
//    for(let i=0;i < arr.length ; i++){
//       if(arr[i].gender == "male" && arr[i].age>=18 )
//          {
//          console.log(arr2.push(arr[i]))
//    }
//  return arr2;
// }
//  }

// const user =[{
//    firstname:"anshul",
//    age:19,
//    gender:"male"
// },{
//    firstname:"disha",
//    age:18,
//    gender:"Female",
//    },{
//       firstname:"raj",
//       gender:"male",
//       age:15
//    }]
//    const ans = out(user);
//    console.log(ans)
function out(arr){
   return arr.filter( user=>user.gender == "male" && user.age >18);

}
const user =[{
      firstname:"anshul",
      age:19,
      gender:"male"
   },{
      firstname:"disha",
      age:18,
      gender:"Female",
      },{
         firstname:"raj",
         gender:"male",
         age:15
      }]
      const ans = (out(user));
      console.log(
    ans
      )