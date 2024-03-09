Shery.textAnimate('.prods', {
    style: 1,
    delay: .2,

})
Shery.makeMagnet('.prods')

var products = [
    {
        name: `Tail Kurti`,
        price: `850`,
        color: `white`,
        pair: `gens`,
        status: `trending`,
        description: `A classic tail kurti with intricate detailing.`,
        availability: `In stock`,
        qty: `0`,
        id:0,
        image: `https://static.cilory.com/633908-thickbox_default/black-rayon-embroidered-front-slit-kurti.jpg`
    },
    {
        name: `Embroidered A-Line Kurti`,
        price: `5000`,
        color: `pastel pink`,
        pair: `leggings`,
        status: `trending`,
        description: `Beautifully embroidered A-line kurti for an elegant look.`,
        availability: `In stock`,
        qty: `0`,
        id:1,
        image: `https://yashgallery.com/cdn/shop/files/1441YKBLUE_3.jpg?v=1700742593&width=600`
    },
    {
        name: `Angrakha Style Kurti`,
        price: `690`,
        color: `royal blue`,
        pair: `palazzos`,
        status: `trending`,
        description: `Traditional yet trendy Angrakha style kurti with rich colors.`,
        availability: `In stock`,
        qty: `0`,
        id:2,
        image: `https://monamaar.com/cdn/shop/files/0M1A9895_2.jpg?v=1695542674`
    },
    {
        name: `High-Low Hemline Kurti`,
        price: `790`,
        color: `mustard yellow`,
        pair: `jeans`,
        status: `trending`,
        description: `Chic high-low hemline kurti perfect for casual outings.`,
        availability: `In stock`,
        qty: `0`,
        id:3,
        image: `https://i.pinimg.com/736x/a4/2b/0e/a42b0e71bf0259ecbd9428393b098fd2.jpg`
    },
    {
        name: `Floral Print Kurta`,
        price: `990`,
        color: `sky blue`,
        pair: `cigarette pants`,
        status: `trending`,
        description: `Refreshingly elegant floral print kurta for a feminine touch.`,
        availability: `In stock`,
        qty: `0`,
        id:4,
        image: `https://phabrica.in/wp-content/uploads/2023/02/KIARA-1-2.jpg`
    },
    {
        name: `Cape Style Kurti`,
        price: `780`,
        color: `peach`,
        pair: `skirt`,
        status: `trending`,
        description: `Graceful cape style kurti perfect for semi-formal occasions.`,
        availability: `In stock`,
        qty: `0`,
        id:5,
        image: `https://taruntahiliani.com/cdn/shop/products/TTDAY246405_800x.jpg?v=1677131968`
    },
    {
        name: `Layered Long Kurti`,
        price: `999`,
        color: `maroon`,
        pair: `leggings`,
        status: `trending`,
        description: `Elegant layered long kurti to add depth to your wardrobe.`,
        availability: `In stock`,
        qty: `0`,
        id:6,
        image: `https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16505396/2021/12/13/af5784ee-05b4-4fa3-9a47-a7b34a7092541639404526847KALINIStraightKurtawithLongFlaredShrug5.jpg`
    },
    {
        name: `High-Low Hemline Kurti`,
        price: `790`,
        color: `mustard yellow`,
        pair: `jeans`,
        status: `trending`,
        description: `Chic high-low hemline kurti perfect for casual outings.`,
        availability: `In stock`,
        qty: `0`,
        id:7,
        image: `https://i.pinimg.com/736x/a4/2b/0e/a42b0e71bf0259ecbd9428393b098fd2.jpg`
    },
    {
        name: `Denim Kurti`,
        price: `350`,
        color: `denim blue`,
        pair: `jeggings`,
        status: `trending`,
        description: `Trendy denim kurti for a fashionable casual look.`,
        availability: `In stock`,
        qty: `0`,
        id:8,
        image: `https://images.meesho.com/images/products/305425887/w0lxd_512.webp`
    },
    {
        name: `Shirt Style Kurti`,
        price: `500`,
        color: `olive green`,
        pair: `pants`,
        status: `trending`,
        description: `Chic shirt style kurti perfect for office and casual wear.`,
        availability: `In stock`,
        qty: `0`,
        id:9,
        image: `https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/2/6/tr:w-270,/264f597P122_KORSTR_9.jpg?rnd=20200526195200`
    },

    {
        name: `Straight Cut Kurti`,
        price: `400`,
        color: `black`,
        pair: `dhoti pants`,
        status: `trending`,
        description: `Classic straight cut kurti for a versatile wardrobe staple.`,
        availability: `In stock`,
        qty: `0`,
        id:10,
        image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh7cdrJeyUKewhv55ZbRXNx7IM07mkYZSkxYdvPTOw0w&s`
    },
    {
        name: `Asymmetric Hem Kurti`,
        price: `600`,
        color: `wine red`,
        pair: `leggings`,
        status: `trending`,
        description: `Stylish asymmetric hem kurti for a modern look.`,
        availability: `In stock`,
        qty: `0`,
        id:11,
        image: `https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/27125418/2024/1/22/920d3fcc-289d-4ab4-884b-76d2106ef7091705920508687MelangebyLifestyleWomenGeometricPrintedThreadWorkKurta1.jpg`
    },
    {
        name: `Peplum Style Kurti`,
        price: `899`,
        color: `navy blue`,
        pair: `trousers`,
        status: `trending`,
        description: `Trendy peplum style kurti to accentuate your curves.`,
        availability: `In stock`,
        qty: `0`,
        id:12,
        image: `https://medias.utsavfashion.com/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/h/a/hand-embroidered-chanderi-silk-peplum-style-kurti-in-orange-v1-tuc1684.jpg`
    },
    {
        name: `Printed Kurta with Palazzos`,
        price: `150`,
        color: `purple`,
        pair: `palazzos`,
        status: `trending`,
        description: `Vibrantly printed kurta paired with stylish palazzos for a chic look.`,
        availability: `In stock`,
        qty: `0`,
        id:13,
        image: `https://www.libas.in/cdn/shop/files/blue-printed-cotton-straight-kurta-with-palazzos-and-dupatta-libas-1-27530217095318_540x.jpg?v=1693589006`
    },
    {
        name: `Front Slit Kurti`,
        price: `99`,
        color: `teal`,
        pair: `leggings`,
        status: `trending`,
        description: `Trendy front slit kurti for a bold and stylish statement.`,
        availability: `In stock`,
        qty: `0`,
        id:14,
        image: `https://static.cilory.com/633908-thickbox_default/black-rayon-embroidered-front-slit-kurti.jpg`
    },

    {
        name: `Asymmetric Hem Kurti`,
        price: `499`,
        color: `wine red`,
        pair: `leggings`,
        status: `trending`,
        description: `Stylish asymmetric hem kurti for a modern look.`,
        availability: `In stock`,
        qty: `0`,
        id:15,
        image: `https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/27125418/2024/1/22/920d3fcc-289d-4ab4-884b-76d2106ef7091705920508687MelangebyLifestyleWomenGeometricPrintedThreadWorkKurta1.jpg`
    },
]

console.log(products.length);
for(let b=0;b<2;b++)
{
    let n=products.length;
    for(let a=0;a<n;a++)
        {
            products.push(products[a]);
        }
}
console.log(products.length);

var items = [];
// items.push(products[0])
// console.log(items);
var listProds = document.querySelector('.container');
var main = document.querySelector('#main');

// var clutter=''
// products.forEach(function(data,index)
// {
//     clutter+=`
//     <div class="products divs">
//         <img src="${data.image}" alt="">
//         <div class="proInfo">
//             <h1>${data.name}</h1>
//             <button id="${index}" onclick="getId(this)" class="addToCart">Add to Cart</button>
//             <h4>${data.price}</h4>
//         </div>
// </div>
//     `
// })
// container.innerHTML=clutter;

products.forEach((elem, index) => {
    // console.log(elem);
    let newProd = document.createElement('div');
    newProd.dataset.id = index;
    newProd.dataset.qty = 0;
    newProd.classList.add('products', 'divs')
    newProd.innerHTML = `
    <img src="${elem.image}" alt="">
    <div class="proInfo">
        <h1>${elem.name}</h1>
        <button  class="addToCart">Add to Cart</button>
        <h4>Price: <span>${elem.price}</span></h4>
    </div>
    `
    listProds.appendChild(newProd);
})

listProds.addEventListener('click', (event) => {
    let positionClicked=event.target;
    // console.log(positionClicked);
    if (positionClicked.classList.contains('addToCart')) {      
        let product_id=positionClicked.parentElement.parentElement.dataset.id
        // console.log(product_id)
        addToCart(product_id);
    }
})

var cursor = document.querySelector('.followerOfImg');
var imgg = document.querySelectorAll('.divs');
document.addEventListener('mousemove', function (details) {
    // console.log(details.target.classList.contains('divs'));
    gsap.to('#followerOfImg', {
        top: details.y,
        left: details.x,
        duration: .2,
    })
})
imgg.forEach(function (elem) {
    elem.addEventListener('mouseenter', function () {
        // console.log("enter");
        gsap.to('#followerOfImg', {
            transform: 'translate(-50%,-50%) scale(1)',
        })
    })
    elem.addEventListener('mouseleave', function () {
        // console.log("leave");
        gsap.to('#followerOfImg', {
            transform: 'translate(-50%,-50%) scale(0)',
        })

    })
})

let navOfProdList = document.querySelector('.nav');

// let openProds = document.querySelector('.openProds') 
let flag=false;
let openCart = document.querySelector('.openCart')
let cartWindow = document.querySelector('.prodsInCart');
let openCloseBtn = document.querySelector('.openCloseBtn');
openCart.addEventListener('click', function () {
    console.log(openCloseBtn);
    if(flag){
        cartWindow.style.transform = `translateX(330%)`
        main.style.width="100%";
        navOfProdList.style.width="100%";
        flag=false;
        openCloseBtn.innerHTML=`Open`
    }
    else{
        cartWindow.style.transform = `translateX(228%)`
        //reduce width of left pannel
        main.style.width="70%";
        navOfProdList.style.width="65%";
        updateCartHtml()
        flag=true
        openCloseBtn.innerHTML=`Close`
    }
})


var itemsInCart = document.querySelector('.itemsInCart')
function addToCart(prod_id) {
        let positionThisProdInCart=items.findIndex((val)=>val.prdId==prod_id);
        if(items.length==0)
        {
            items=[{
                prdId:prod_id,
                quantity:1,
            }]
        }
        else if(positionThisProdInCart<0)
        {
            items.push({
            prdId:prod_id,
            quantity:1,
        })
        }
        else{
            items[positionThisProdInCart].quantity++;  
        }
        updateCartHtml();
}

// addToCart()
// function getId(bt)
// {
//     items.push(products[bt.id]);
// }

// var addedProds=document.querySelector('.addedProds');

itemsInCart.addEventListener('click',(event)=>{
    let clickedPos=event.target;
    console.log(("cart"));
    if(clickedPos.classList.contains('del'))
    {
        let parentIndexInCart=parseInt(clickedPos.parentElement.parentElement.dataset.getparentposincart);
        // console.log(typeof(parentIndexInCart));
        if(items[parentIndexInCart].quantity==1)
        {
            items.splice(parentIndexInCart,1);
        }
        else{
            items[parentIndexInCart].quantity--;
        }
        updateCartHtml();
    }
})
let cnt=document.querySelector('.count');
let totalPrice=document.querySelector('.totalPrice');
function updateCartHtml(){
    // var clutter2='';
        let totalItems=items.length;
        cnt.innerHTML=totalItems;
        let totalPriceOfProds=0;
        itemsInCart.innerHTML='';
        items.forEach((elemIncart,idx)=>{
            let index=elemIncart.prdId;
           totalPriceOfProds+=(products[index].price*elemIncart.quantity);
            // let itemPrice=parseInt(products[index].price);
            // console.log((itemPrice))
            let newChildInCart=document.createElement('div');
            newChildInCart.dataset.getparentposincart=idx;
            newChildInCart.classList.add('addedProds')
          newChildInCart.innerHTML=`
            <div class="imgInCart">
                <img src="${products[index].image}" alt=""></div>
                <h2>Name:${products[index].name}</h2>
                <h5>Price:${(products[index].price*elemIncart.quantity)}</h5>
                <p>Qty.${elemIncart.quantity}</p>
                <span><i class="ri-delete-bin-5-line del "></i></span>
           `
           itemsInCart.appendChild(newChildInCart);
           totalPrice.textContent=totalPriceOfProds;
        })
        if(totalItems==0)
        {
            totalPrice.textContent=0;
            console.log("empty cart");
            itemsInCart.innerHTML=`<h1 class="emptyAlert">Cart is Empty </h1>`;
            setTimeout(function()
            {
                cartWindow.style.transform = `translateX(330%)`
                main.style.width="100%";
                navOfProdList.style.width="100%";
                flag=false;
                openCloseBtn.innerHTML=`Open`
            },1900)
        }
        // itemsInCart.innerHTML=clutter2;
};

// function getParenPos(icon){
//     parentPosInCart
//     console.log(icon.ww);
// }
