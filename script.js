const serviceData = {
  express: {
    title: "快递快运服务",
    description:
      "向企业及个人客户提供安全可靠、时效领先、专业贴心的快递及快运服务，以及在此基础上的多种增值服务。",
    image:
      "https://jdl-oss.s3-cache-accelerate.cn-north-1.jdcloud-oss.com/static/v4/home/service/express.png",
  },
  warehouse: {
    title: "仓配一体服务",
    description:
      "将仓储、库存管理、订单履约与配送能力一体化协同，帮助客户提升库存周转效率与全渠道履约体验。",
    image:
      "https://jdl-oss.s3-cache-accelerate.cn-north-1.jdcloud-oss.com/static/v4/home/service/express.png",
  },
  bulky: {
    title: "大件服务",
    description:
      "面向家电、家具等大件商品，提供仓储、干线运输、配送、安装及逆向物流的一体化服务。",
    image:
      "https://jdl-oss.s3-cache-accelerate.cn-north-1.jdcloud-oss.com/static/v3/home/solution/icon-homeAppliances.png",
  },
  cold: {
    title: "冷链服务",
    description:
      "依托覆盖全国的冷链仓配网络与智能温控能力，为生鲜、医药等场景提供全程可控的温控物流服务。",
    image:
      "https://jdl-oss.s3-cache-accelerate.cn-north-1.jdcloud-oss.com/static/v3/home/solution/icon-fresh.png",
  },
  global: {
    title: "国际物流",
    description:
      "连接海外仓、国际运输与本地配送网络，为企业提供跨境供应链和全球履约服务。",
    image:
      "https://jdl-oss.s3-cache-accelerate.cn-north-1.jdcloud-oss.com/static/v3/home/solution/icon-car.png",
  },
  tech: {
    title: "物流科技",
    description:
      "以大数据、人工智能、自动化设备和数字化系统为基础，推动供应链各环节的智能化升级。",
    image:
      "https://jdl-oss.s3-cache-accelerate.cn-north-1.jdcloud-oss.com/static/v3/home/solution/icon-digital.png",
  },
};

const solutionData = {
  retail: {
    tag: "快消行业",
    title: "全渠道高效履约",
    description:
      "为消费品行业客户提供数字化、可视化、智能化的一体解决方案，向客户提供全渠道端到端服务，实现供应链升级。",
    points: [
      "多渠道多场景的供应链服务能力",
      "广泛的物流网络覆盖能力",
      "柔性履约与智能库存协同",
    ],
    number: "01",
  },
  fashion: {
    tag: "服装行业",
    title: "智能库存协同",
    description:
      "围绕服装行业多 SKU、快周转、强波动的特点，建立从工厂、仓配到门店与消费者的柔性履约链路。",
    points: ["库存可视化与智能分仓", "线上线下一体化履约", "高效返单与逆向物流"],
    number: "02",
  },
  appliance: {
    tag: "家电行业",
    title: "大件仓配安装一体",
    description:
      "整合仓储、运输、末端配送、送装一体与售后网络，为大型家电和家居商品提供高品质履约服务。",
    points: ["大件仓储与干线网络", "预约配送与送装一体", "覆盖城乡的末端服务"],
    number: "03",
  },
  "3c": {
    tag: "3C 行业",
    title: "高值商品精细管理",
    description:
      "面向高价值、高时效的 3C 商品，通过精细化库存、序列号管理和高标履约保障交付质量。",
    points: ["高值库存精细管理", "时效与轨迹全程可视", "高标准的包装与配送"],
    number: "04",
  },
  auto: {
    tag: "汽车行业",
    title: "零部件供应链协同",
    description:
      "为汽车产业链提供零部件入厂、仓配、售后备件及循环包装等供应链服务，提升全链路协同效率。",
    points: ["零部件入厂物流", "售后备件仓配", "循环包装与绿色运输"],
    number: "05",
  },
  fresh: {
    tag: "生鲜行业",
    title: "全程温控保鲜",
    description:
      "围绕生鲜商品从产地到餐桌的全链路，结合冷链仓网与温控运输，降低损耗并保障新鲜送达。",
    points: ["产地预冷与冷链仓储", "全程温度可视可控", "仓配一体保鲜到家"],
    number: "06",
  },
};

const slides = [...document.querySelectorAll(".hero-slide")];
const dots = document.querySelector(".hero-dots");
let currentSlide = 0;
let autoplayTimer;

slides.forEach((_, index) => {
  const dot = document.createElement("button");
  dot.className = `hero-dot${index === 0 ? " active" : ""}`;
  dot.setAttribute("aria-label", `切换到第 ${index + 1} 张轮播图`);
  dot.addEventListener("click", () => setSlide(index, true));
  dots.appendChild(dot);
});

function setSlide(index, stopAutoplay = false) {
  currentSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("active", slideIndex === currentSlide);
  });
  document.querySelectorAll(".hero-dot").forEach((dot, dotIndex) => {
    dot.classList.toggle("active", dotIndex === currentSlide);
  });
  if (stopAutoplay) restartAutoplay();
}

function restartAutoplay() {
  clearInterval(autoplayTimer);
  autoplayTimer = setInterval(() => setSlide(currentSlide + 1), 6500);
}

document.querySelector(".carousel-arrow.prev").addEventListener("click", () => {
  setSlide(currentSlide - 1, true);
});
document.querySelector(".carousel-arrow.next").addEventListener("click", () => {
  setSlide(currentSlide + 1, true);
});
restartAutoplay();

document.querySelectorAll(".service-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".service-tab").forEach((item) => {
      item.classList.remove("active");
    });
    tab.classList.add("active");
    const data = serviceData[tab.dataset.service];
    const image = document.querySelector("#service-image");
    image.classList.add("switching");
    setTimeout(() => {
      image.src = data.image;
      image.alt = data.title;
      document.querySelector("#service-title").textContent = data.title;
      document.querySelector("#service-description").textContent = data.description;
      image.classList.remove("switching");
    }, 180);
  });
});

document.querySelectorAll(".solution-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".solution-tab").forEach((item) => {
      item.classList.remove("active");
    });
    tab.classList.add("active");
    const data = solutionData[tab.dataset.solution];
    document.querySelector("#solution-tag").textContent = data.tag;
    document.querySelector("#solution-title").textContent = data.title;
    document.querySelector("#solution-description").textContent = data.description;
    document.querySelector("#solution-points").innerHTML = data.points
      .map((point) => `<li>${point}</li>`)
      .join("");
    document.querySelector("#solution-number").textContent = data.number;
  });
});

document.querySelector("#tracking-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("#tracking-number");
  const message = document.querySelector("#tracking-message");
  if (!input.value.trim()) {
    message.textContent = "请输入运单号后再查询";
    input.focus();
    return;
  }
  if (!/^[A-Za-z0-9-]{6,30}$/.test(input.value.trim())) {
    message.textContent = "运单号格式不正确，请检查后重试";
    return;
  }
  message.textContent = "查询成功：模拟包裹正在运输中";
});

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const backTop = document.querySelector(".back-top");
window.addEventListener("scroll", () => {
  backTop.classList.toggle("visible", window.scrollY > 600);
  const offset = window.scrollY + 150;
  const sections = [...document.querySelectorAll("main section[id]")];
  const current = sections.filter((section) => section.offsetTop <= offset).at(-1);
  if (!current) return;
  document.querySelectorAll(".main-nav a").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current.id}`);
  });
});

backTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const counters = document.querySelectorAll(".counter");
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const element = entry.target;
      const target = Number(element.dataset.target);
      const duration = 1100;
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = Math.round(target * eased).toLocaleString("zh-CN");
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      counterObserver.unobserve(element);
    });
  },
  { threshold: 0.5 },
);

counters.forEach((counter) => counterObserver.observe(counter));

document.querySelector(".floating-service").addEventListener("click", () => {
  document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
});
