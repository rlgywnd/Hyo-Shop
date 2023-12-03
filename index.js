// const a = (data) => {
//   return `
//     <div>
//       <img src=${data.photo} alt='img'/>
//     </div>

//   `;
// };

// $('.container').append(a(dummy.products[3]));
// $('.goods-img').attr('src', dummy.products[0].photo);
const goodsListFunc = (data) => {
  return `
    <div class="goods-list" key=${data.id}>
          <img class="goods-img" src='${data.photo}'/>
          <div class="goods-info">
            <div class="goods-name">${data.title}</div>
            <div class="goods-brand">${data.title}</div>
            <div class="goods-price">가격 : ${data.price}</div>
          </div>
          <button class="cart-btn">담기</button>
        </div>
  `;
};
dummy.products.forEach(function (el) {
  $('.goods-box').append(goodsListFunc(el));
});
