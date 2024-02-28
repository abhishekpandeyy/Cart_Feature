var products=[
    {
        name: `Tail Kurti`,
        price: `0000`,
        color: `white`,
        pair: `gens`,
        status: `trending`,
        description: `A classic tail kurti with intricate detailing.`,
        availability: `In stock`,
        code: `TK001`,
        image: `data:image/jpeg;base64,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`
    },
    {
        name: `Embroidered A-Line Kurti`,
        price: `0000`,
        color: `pastel pink`,
        pair: `leggings`,
        status: `trending`,
        description: `Beautifully embroidered A-line kurti for an elegant look.`,
        availability: `In stock`,
        code: `EAK002`,
        image: `https://yashgallery.com/cdn/shop/files/1441YKBLUE_3.jpg?v=1700742593&width=600`
    },
    {
        name: `Angrakha Style Kurti`,
        price: `0000`,
        color: `royal blue`,
        pair: `palazzos`,
        status: `trending`,
        description: `Traditional yet trendy Angrakha style kurti with rich colors.`,
        availability: `In stock`,
        code: `ASK003`,
        image: `https://monamaar.com/cdn/shop/files/0M1A9895_2.jpg?v=1695542674`
    },
    {
        name: `High-Low Hemline Kurti`,
        price: `0000`,
        color: `mustard yellow`,
        pair: `jeans`,
        status: `trending`,
        description: `Chic high-low hemline kurti perfect for casual outings.`,
        availability: `In stock`,
        code: `HLK004`,
        image: `https://i.pinimg.com/736x/a4/2b/0e/a42b0e71bf0259ecbd9428393b098fd2.jpg`
    },
    {
        name: `Floral Print Kurta`,
        price: `0000`,
        color: `sky blue`,
        pair: `cigarette pants`,
        status: `trending`,
        description: `Refreshingly elegant floral print kurta for a feminine touch.`,
        availability: `In stock`,
        code: `FPK005`,
        image: `https://phabrica.in/wp-content/uploads/2023/02/KIARA-1-2.jpg`
    },
    {
        name: `Cape Style Kurti`,
        price: `0000`,
        color: `peach`,
        pair: `skirt`,
        status: `trending`,
        description: `Graceful cape style kurti perfect for semi-formal occasions.`,
        availability: `In stock`,
        code: `CSK006`,
        image: `https://taruntahiliani.com/cdn/shop/products/TTDAY246405_800x.jpg?v=1677131968`
    },
    {
        name: `Layered Long Kurti`,
        price: `0000`,
        color: `maroon`,
        pair: `leggings`,
        status: `trending`,
        description: `Elegant layered long kurti to add depth to your wardrobe.`,
        availability: `In stock`,
        code: `LLK007`,
        image: `https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16505396/2021/12/13/af5784ee-05b4-4fa3-9a47-a7b34a7092541639404526847KALINIStraightKurtawithLongFlaredShrug5.jpg`
    },
    {
        name: `Denim Kurti`,
        price: `0000`,
        color: `denim blue`,
        pair: `jeggings`,
        status: `trending`,
        description: `Trendy denim kurti for a fashionable casual look.`,
        availability: `In stock`,
        code: `DK008`,
        image: `https://images.meesho.com/images/products/305425887/w0lxd_512.webp`
    },
    {
        name: `Shirt Style Kurti`,
        price: `0000`,
        color: `olive green`,
        pair: `pants`,
        status: `trending`,
        description: `Chic shirt style kurti perfect for office and casual wear.`,
        availability: `In stock`,
        code: `SSK009`,
        image: `https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/2/6/tr:w-270,/264f597P122_KORSTR_9.jpg?rnd=20200526195200`
    },
    {
        name: `Straight Cut Kurti`,
        price: `0000`,
        color: `black`,
        pair: `dhoti pants`,
        status: `trending`,
        description: `Classic straight cut kurti for a versatile wardrobe staple.`,
        availability: `In stock`,
        code: `SCK010`,
        image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh7cdrJeyUKewhv55ZbRXNx7IM07mkYZSkxYdvPTOw0w&s`
    },
    {
        name: `Asymmetric Hem Kurti`,
        price: `0000`,
        color: `wine red`,
        pair: `leggings`,
        status: `trending`,
        description: `Stylish asymmetric hem kurti for a modern look.`,
        availability: `In stock`,
        code: `AHK011`,
        image: `https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/27125418/2024/1/22/920d3fcc-289d-4ab4-884b-76d2106ef7091705920508687MelangebyLifestyleWomenGeometricPrintedThreadWorkKurta1.jpg`
    },
    {
        name: `Peplum Style Kurti`,
        price: `0000`,
        color: `navy blue`,
        pair: `trousers`,
        status: `trending`,
        description: `Trendy peplum style kurti to accentuate your curves.`,
        availability: `In stock`,
        code: `PSK012`,
        image: `https://medias.utsavfashion.com/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/h/a/hand-embroidered-chanderi-silk-peplum-style-kurti-in-orange-v1-tuc1684.jpg`
    },
    {
        name: `Printed Kurta with Palazzos`,
        price: `0000`,
        color: `purple`,
        pair: `palazzos`,
        status: `trending`,
        description: `Vibrantly printed kurta paired with stylish palazzos for a chic look.`,
        availability: `In stock`,
        code: `PKP013`,
        image: `https://www.libas.in/cdn/shop/files/blue-printed-cotton-straight-kurta-with-palazzos-and-dupatta-libas-1-27530217095318_540x.jpg?v=1693589006`
    },
    {
        name: `Front Slit Kurti`,
        price: `0000`,
        color: `teal`,
        pair: `leggings`,
        status: `trending`,
        description: `Trendy front slit kurti for a bold and stylish statement.`,
        availability: `In stock`,
        code: `FSK014`,
        image: `https://static.cilory.com/633908-thickbox_default/black-rayon-embroidered-front-slit-kurti.jpg`
    },
    
    {
        name: `Asymmetric Hem Kurti`,
        price: `0000`,
        color: `wine red`,
        pair: `leggings`,
        status: `trending`,
        description: `Stylish asymmetric hem kurti for a modern look.`,
        availability: `In stock`,
        code: `AHK011`,
        image: `https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/27125418/2024/1/22/920d3fcc-289d-4ab4-884b-76d2106ef7091705920508687MelangebyLifestyleWomenGeometricPrintedThreadWorkKurta1.jpg`
    },
]

var container = document.querySelector('.container');
products.forEach(function(data)
{
    container.innerHTML+=`
    <div class="products">
        <img src="${data.image}" alt="">
        <div class="proInfo">
            <h1>${data.name}</h1>
        </div>
</div>
    `
})