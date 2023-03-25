const PermisionMap =new Map();

PermisionMap.set('Admin',{read:true,write:true,del:true})
PermisionMap.set('Student',{read:true,write:false,del:false})
PermisionMap.set('facult',{read:true,write:true,del:false})
PermisionMap.set('staff',{read:true,write:false,del:true}
)

const permision = PermisionMap[Symbol.iterator]();

// console.log(permision.next())
// console.log(permision.next())
// console.log(permision.next())
// console.log(permision.next())
// console.log(permision.next())
/**
 * In the above example, we have created a map for the permissions for different 
user types as the key. We can simply create a new iterator by invoking the @@iterator
method and iterate over the values using next(). A good thing to note here is that these 
collections also provide API method(s) to generate an iterator, for example, you can get 
the iterator of a map using the entries() method:
 */

const PermisionEnteries = PermisionMap.entries();
console.log(PermisionEnteries.next())