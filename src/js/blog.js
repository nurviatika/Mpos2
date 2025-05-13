const blogs = [
  {
    id: 1,
    title:
      "Effective Strategies for Streamlining Inventory Management in Small Restaurants",
    img: "/blog-frame1.png",
    author: "Damar Buana",
    category: "Business Insights",
    created_at: "8 min read",
  },
  {
    id: 2,
    title:
      "Effective Strategies for Streamlining Inventory Management in Small Restaurants",
    img: "/blog-frame2.png",
    author: "Damar Buana",
    category: "Business Insights",
    created_at: "8 min read",
  },
  {
    id: 3,
    title:
      "Effective Strategies for Streamlining Inventory Management in Small Restaurants",
    img: "/blog-frame3.png",
    author: "Damar Buana",
    category: "Business Insights",
    created_at: "8 min read",
  },
  {
    id: 4,
    title:
      "Effective Strategies for Streamlining Inventory Management in Small Restaurants",
    img: "/blog-frame4.png",
    author: "Damar Buana",
    category: "Business Insights",
    created_at: "8 min read",
  },
  {
    id: 5,
    title:
      "Effective Strategies for Streamlining Inventory Management in Small Restaurants",
    img: "/blog-frame1.png",
    author: "Damar Buana",
    category: "Business Insights",
    created_at: "8 min read",
  },
  {
    id: 6,
    title:
      "Effective Strategies for Streamlining Inventory Management in Small Restaurants",
    img: "/blog-frame5.png",
    author: "Damar Buana",
    category: "Business Insights",
    created_at: "8 min read",
  },
  {
    id: 7,
    title:
      "Effective Strategies for Streamlining Inventory Management in Small Restaurants",
    img: "/blog-frame1.png",
    author: "Damar Buana",
    category: "Business Insights",
    created_at: "8 min read",
  },
  {
    id: 8,
    title:
      "Effective Strategies for Streamlining Inventory Management in Small Restaurants",
    img: "/blog-frame2.png",
    author: "Damar Buana",
    category: "Business Insights",
    created_at: "8 min read",
  },
  {
    id: 9,
    title:
      "Effective Strategies for Streamlining Inventory Management in Small Restaurants",
    img: "/blog-frame3.png",
    author: "Damar Buana",
    category: "Business Insights",
    created_at: "8 min read",
  },
  {
    id: 10,
    title:
      "Effective Strategies for Streamlining Inventory Management in Small Restaurants",
    img: "/blog-frame4.png",
    author: "Damar Buana",
    category: "Business Insights",
    created_at: "8 min read",
  },
  {
    id: 11,
    title:
      "Effective Strategies for Streamlining Inventory Management in Small Restaurants",
    img: "/blog-frame1.png",
    author: "Damar Buana",
    category: "Business Insights",
    created_at: "8 min read",
  },
  {
    id: 12,
    title:
      "Effective Strategies for Streamlining Inventory Management in Small Restaurants",
    img: "/blog-frame5.png",
    author: "Damar Buana",
    category: "Business Insights",
    created_at: "8 min read",
  },
];

const blogContainer = document.getElementById("bloglist");
const paginationContainer = document.getElementById("pagination");

const itemsPerPage = 6;
let currentPage = 1;

function displayBlogs(page) {
  blogContainer.innerHTML = "";
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedBlogs = blogs.slice(start, end);

  paginatedBlogs.forEach((blog) => {
    blogContainer.innerHTML += `
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay="0"
        data-aos-mirror="true"
        data-aos-once="true"
        class="flex-col gap-5 flex mb-10"
      >
        <img src="${blog.img}" alt="blog image ${blog.id}" class="rounded-lg" />
        <div class="md:max-w-[368px] lg:max-w-[380px] max-w-[368px] w-full font-jakarta">
          <h3 class="text-base font-medium font-satoshi leading-5 pt-[15px] pb-[8px]">
            ${blog.title}
          </h3>
          <p class="text-darkGray md:text-sm text-xs">
            By ${blog.author} | ${blog.category} | ${blog.created_at}
          </p>
        </div>
      </div>`;
  });
}

function setupPagination() {
  paginationContainer.innerHTML = "";
  const pageCount = Math.ceil(blogs.length / itemsPerPage);

  const prevBtn = document.createElement("button");
  prevBtn.innerHTML = "←";
  prevBtn.className =
    "w-7 h-7 border-none hover:border rounded-full text-sm hover:bg-blue hover:text-white";
  prevBtn.disabled = currentPage === 1;
  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      displayBlogs(currentPage);
      setupPagination();
    }
  });
  paginationContainer.appendChild(prevBtn);

  for (let i = 1; i <= pageCount; i++) {
    const pageButton = document.createElement("button");
    pageButton.innerText = i;
    pageButton.className = `w-7 h-7 flex items-center justify-center rounded-full border-none hover:border text-sm ${
      i === currentPage
        ? "bg-blue text-white"
        : "bg-whiteBg text-black hover:bg-blue hover:text-white"
    }`;
    pageButton.addEventListener("click", () => {
      currentPage = i;
      displayBlogs(currentPage);
      setupPagination();
    });
    paginationContainer.appendChild(pageButton);
  }

  const nextBtn = document.createElement("button");
  nextBtn.innerHTML = "→";
  nextBtn.className =
    "w-7 h-7 border-none hover:border rounded-full text-sm hover:bg-blue hover:text-white";
  nextBtn.disabled = currentPage === pageCount;
  nextBtn.addEventListener("click", () => {
    if (currentPage < pageCount) {
      currentPage++;
      displayBlogs(currentPage);
      setupPagination();
    }
  });
  paginationContainer.appendChild(nextBtn);
}

displayBlogs(currentPage);
setupPagination();
