// use local storage as  your db for now
const getDb = () => localStorage.getItem("cart");
const addDb = (id) => {
  // localStorage.setItem(id, 1); // এভাবে করলে সব সময় localstorage এর ভেলু ১ থাকবে ।

  /*
   const exists = localStorage.getItem(id);
  console.log(exists);
  if (exists === null) {
    localStorage.setItem(id, 1);
  } else {
    const newCount = parseInt(exists) + 1;
    localStorage.setItem(id, newCount);
  } 
  */ //আমরা যদি এই ভাবে করি তাহলে সেটা এক একটা id বসাবে জা পরে jandle করা অনেক diffecult . অনেক বড় প্রজেক্টের ক্ষেত্রে ।

  //যেহেতু এভাবে করলে অনেক সমস্যা হয় পরবর্তীতে error handle করতে তাই আমরা একটা cart নামে obejct এর এক ভেলু সেট করে দিব ।

  const exists = getDb();

  let shoppingCart = {};
  if (!exists) {
    shoppingCart[id] = 1;
  } else {
    shoppingCart = JSON.parse(exists);
    if (shoppingCart[id]) {
      const newCount = shoppingCart[id] + 1;
      shoppingCart[id] = newCount;
    } else {
      shoppingCart[id] = 1;
    }
  }
  localStorage.setItem("cart", JSON.stringify(shoppingCart));
};
const removeItem = (id) => {
  const exists = getDb();
  if (exists) {
  } else {
    const shoppingCart = JSON.parse(exists);
    delete shoppingCart[id];
    localStorage.setItem("cart", JSON.stringify(shoppingCart));
  }
};

export { addDb, removeItem };
