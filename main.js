function slidingCategories() {
  //CSS For Category Slides

  var styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = `.section-slider {
        padding: 10px 0;
        background: #fff;
    }
    .slider {
        display: flex;
        overflow-x: auto;
        scroll-behavior: smooth;
        -webkit-overflow-scrolling: touch;
        scroll-snap-points-x: repeat(300px);
        scroll-snap-type: mandatory;
    }
    .slider .category-slider {
        flex-shrink: 0;
        margin-right: 5px;
        padding: 10px;
        display: block;
        background-color: rgb(101, 34, 109);
        text-decoration-color: white;
        text-decoration: none;
        border-radius: 25%;
    }
    .slider::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }
    .slider::-webkit-scrollbar-thumb {
        background: #808080;
        border-radius: 10px;
        visibility: hidden;
    }
    .slider::-webkit-scrollbar-track {
        background: transparent;
    }
    .section-slider:hover .slider::-webkit-scrollbar-thumb {
        visibility: visible;
    }
    .link{
        color: white;
    }
    `;

  //Adding Css

  document.head.appendChild(styleSheet);

  var categories = document.querySelector(".left-menu");
  categories.innerHTML = "";
  var node = document.createElement("DIV");

  //Category Links And Text Informations

  const categoryLinks = [
    {
      text: "Atlet",
      linkURL: "https://www.panco.com.tr/kiz-bebek-atlet/",
    },
    {
      text: "Astronot",
      linkURL: "https://www.panco.com.tr/kiz-bebek-astronot/",
    },
    {
      text: "Body",
      linkURL: "https://www.panco.com.tr/kiz-bebek-body/",
    },
    {
      text: "Elbise",
      linkURL: "https://www.panco.com.tr/kiz-bebek-elbise/",
    },
    {
      text: "Eşofman",
      linkURL: "https://www.panco.com.tr/kiz-bebek-esofman/",
    },
    {
      text: "Etek",
      linkURL: "https://www.panco.com.tr/kiz-bebek-etek/",
    },
    {
      text: "Gömlek",
      linkURL: "https://www.panco.com.tr/kiz-bebek-gomlek/",
    },
    {
      text: "Hırka",
      linkURL: "https://www.panco.com.tr/kiz-bebek-hirka/",
    },
    {
      text: "Kazak",
      linkURL: "https://www.panco.com.tr/kiz-bebek-kazak/",
    },
    {
      text: "Manto",
      linkURL: "https://www.panco.com.tr/kiz-bebek-manto/",
    },
    {
      text: "Mont",
      linkURL: "https://www.panco.com.tr/kiz-bebek-mont/",
    },
    {
      text: "Pantolon",
      linkURL: "https://www.panco.com.tr/kiz-bebek-pantolon/",
    },
    {
      text: "Salopet",
      linkURL: "https://www.panco.com.tr/kiz-bebek-salopet/",
    },
    {
      text: "Sweatshirt",
      linkURL: "https://www.panco.com.tr/kiz-bebek-sweatshirt/",
    },
    {
      text: "Şort",
      linkURL: "https://www.panco.com.tr/kiz-bebek-sort/",
    },
    {
      text: "Takımlar",
      linkURL: "https://www.panco.com.tr/kiz-bebek-takimlar/",
    },
    {
      text: "Tayt",
      linkURL: "https://www.panco.com.tr/kiz-bebek-tayt/",
    },
  ];

  //Adding Categories To Node

  let newChilds = `<section class="section-slider"><div class="slider">`;
  categoryLinks.forEach((categoryLink) => {
    const newChild = `<a class= "category-slider" href = "${categoryLink.linkURL}"> <span class = "link">${categoryLink.text}</span> </a>`;
    newChilds += newChild;
  });

  newChilds += `</div></section>`;
  node.innerHTML = newChilds;

  categories.appendChild(node);
}
