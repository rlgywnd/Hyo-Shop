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
    <div class="goods-list" key=${data.id} draggable='true'>
          <img class="goods-img" src='${data.photo}' draggable='false'/>
          <div class="goods-info">
            <div class="goods-name">${data.title}</div>
            <div class="goods-brand">${data.brand}</div>
            <div class="goods-price">가격 : ${data.price}</div>
          </div>
          <button class="cart-btn">담기</button>
        </div>
  `;
};
dummy.products.forEach(function (el) {
  $('.goods-box').append(goodsListFunc(el));
});
//
let dragListFunc = (data) => {
  return `
  <div class="drag-list" key=${data.id}>
  <img class="drag-img" src=${data.photo} draggable="false" />
  <div class="drag-info">
    <div class="drag-name">${data.title}</div>
    <div class="drag-brand">${data.brand}</div>
    <div class="drag-price">가격 : ${data.price}</div>
  </div>
  <input class="quantity" type="text" value="1" />
</div>
  `;
};

let dragstartTitle = { title: '', quantity: 1 };
let cartList = [];
$('.goods-list').on('dragstart', function (e) {
  // e.preventDefault();
  console.log('드래그 시작 타겟 :', $(e.target).find('.goods-name').html());
  dragstartTitle.title = $(e.target).find('.goods-name').html();
  console.log('확인 :', $('.drag-name').html());
  let same = false;
  for (let i = 0; i < cartList.length; i++) {
    if (cartList[i].title === dragstartTitle.title) {
      cartList[i].quantity++;
      dragstartTitle.quantity = cartList[i].quantity;
      same = true;
      break;
    } else {
      continue;
    }
  }
  if (!same) {
    cartList.push(dragstartTitle);
  }
  // cartList.push(dragstartTitle);
});
$('.goods-list').on('dragend', function (e) {
  // e.preventDefault();
  console.log('드래그 끝냄');
  dragstartTitle = {};
});
// dragover도 써줘야 drop이벤트가 됨.
$('.drag-area').on('dragover', function (e) {
  e.preventDefault();
});
$('.drag-area').on('drop', function (e) {
  e.preventDefault();
  console.log('drop됨!');
  console.log(e.target); // drag-area 위치
  const dragData = dummy.products.filter((el) => {
    return el.title === dragstartTitle.title;
  });
  console.log('요소확인 :', dragData);
  $('.drag-list-area').append(dragListFunc(dragData[0]));
  $('.drag-list-area').find('.quantity').val(dragstartTitle.quantity);
  console.log('cartList :', cartList);
});
// 모달
$('.modal-close-btn').on('click', function (e) {
  $('.modal-container').css('visibility', 'hidden');
});
$('.buy-btn').on('click', function (e) {
  $('.modal-container').css('visibility', 'visible');
});
